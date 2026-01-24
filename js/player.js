document.addEventListener('DOMContentLoaded', () => {

    // === 1. ELEMENT SELECTION ===
    const appContainer = document.getElementById('app-container');
    const audio = document.getElementById('audio-element');
    const songListElement = document.getElementById('song-list');
    
    // Playback Controls
    const playPauseBtn = document.getElementById('play-pause-button');
    const prevBtn = document.getElementById('prev-button');
    const nextBtn = document.getElementById('next-button');
    const progressBar = document.getElementById('progress-bar');
    const volControl = document.getElementById('volume-control');
    const currTimeDisp = document.getElementById('current-time');
    const durDisp = document.getElementById('duration');
    
    // Display Info
    const artImage = document.getElementById('album-art');
    const artGlow = document.getElementById('art-glow'); // The ambient blur behind art
    const titleDisp = document.getElementById('current-track-title');
    const artistDisp = document.getElementById('current-track-artist');

    // Lyrics Modal
    const lyricsBtn = document.getElementById('toggle-lyrics');
    const lyricsOverlay = document.getElementById('lyrics-overlay');
    const lyricsText = document.getElementById('lyrics-text');
    const closeLyrics = document.getElementById('close-lyrics');

    // Mobile Navigation
    const menuToggle = document.getElementById('menu-toggle');
    const libraryPanel = document.getElementById('library-panel');
    const mobileOverlay = document.getElementById('mobile-overlay');

    // === 2. STATE VARIABLES ===
    let songDatabase = [];
    let currentTrackIndex = 0;
    let isPlaying = false;

    // Audio Visualizer Context
    let audioContext;
    let analyser;
    let source;
    let canvas, ctx;
    let isVisualizerInit = false;


    // === 3. HELPER FUNCTIONS ===
    
    // Convert seconds to MM:SS
    function formatTime(seconds) {
        if(isNaN(seconds)) return "0:00";
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }


    // === 4. VISUALIZER LOGIC ===
    // Note: Web Audio API requires user interaction to start.
    // We call this function when the user clicks "Play" or interacts with the timeline.
    function initVisualizer() {
        if (isVisualizerInit) return;
        
        try {
            // standard syntax || webkit syntax
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            audioContext = new AudioContext();
            
            // Connect HTML Audio Element to Web Audio API
            analyser = audioContext.createAnalyser();
            source = audioContext.createMediaElementSource(audio);
            
            source.connect(analyser);
            analyser.connect(audioContext.destination); // Connect back to speakers
            
            // Configure Analyzer
            analyser.fftSize = 256; // 64, 128, 256, 512... (Controls resolution)
            
            // Canvas Setup
            canvas = document.getElementById('visualizer');
            ctx = canvas.getContext('2d');
            
            // Handle resizing of window
            const resizeCanvas = () => {
                canvas.width = canvas.parentElement.clientWidth;
                canvas.height = canvas.parentElement.clientHeight;
            };
            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();

            isVisualizerInit = true;
            animateVisualizer();
            console.log("Audio Visualizer Initialized");

        } catch(e) {
            console.warn("Visualizer failed to initialize (Browser policy or Error):", e);
        }
    }

    function animateVisualizer() {
        if(!isVisualizerInit) return;
        requestAnimationFrame(animateVisualizer);

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyser.getByteFrequencyData(dataArray);

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Bar Settings
        const barWidth = (canvas.width / bufferLength) * 2.5;
        let barHeight;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i]; // Value between 0 and 255
            
            // Scale height for the canvas container (max height 45% via CSS)
            // But canvas height itself is full container, so we math it out.
            const scaledHeight = (barHeight / 255) * canvas.height;

            // Dynamic Gradient Color based on frequency
            // Low Freq (Bass) = Purple, Mid = Blue, High = Cyan/White
            const r = 80 + (i * 2); 
            const g = 100 + (barHeight / 2); 
            const b = 250; 

            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.6)`;
            
            // Draw round-capped bars
            ctx.fillRect(x, canvas.height - scaledHeight, barWidth, scaledHeight);

            x += barWidth + 1; // spacing
        }
    }


    // === 5. CORE PLAYER FUNCTIONS ===

    function loadPlaylist() {
        songListElement.innerHTML = '';
        
        if (songDatabase.length === 0) return;

        songDatabase.forEach((song, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="song-title">${song.title}</div>
                <div class="song-artist">${song.artist}</div>
            `;
            
            li.addEventListener('click', () => {
                loadTrack(index);
                playTrack();
                closeMobileMenu(); // Good UX for mobile
            });
            
            // Accessibility
            li.setAttribute('tabindex', '0');
            li.addEventListener('keydown', (e) => {
                if(e.key === 'Enter') {
                    loadTrack(index);
                    playTrack();
                }
            });

            songListElement.appendChild(li);
        });
    }

    function highlightTrack(index) {
        // Remove active class from all
        const items = songListElement.querySelectorAll('li');
        items.forEach(item => item.classList.remove('active-song'));
        
        // Add to current
        if (items[index]) {
            items[index].classList.add('active-song');
            // Auto-scroll list to show current song
            items[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    function loadTrack(index) {
        if (index < 0 || index >= songDatabase.length) return;

        currentTrackIndex = index;
        const song = songDatabase[index];

        // 1. Audio Source
        audio.src = song.file;
        
        // 2. Metadata Updates
        titleDisp.textContent = song.title;
        artistDisp.textContent = song.artist;
        
        // 3. Album Art Animation (Pop Effect)
        artImage.style.transform = "scale(0.9)";
        artGlow.style.opacity = "0"; // fade out glow temporarily
        
        setTimeout(() => {
            artImage.src = song.cover;
            
            // Set glowing background
            // We use the image URL to create a blurred colored backdrop
            artGlow.style.backgroundImage = `url('${song.cover}')`;
            
            artImage.style.transform = "scale(1)";
            artGlow.style.opacity = "0.5";
        }, 300);

        // 4. Lyrics
        if (song.lyrics) {
            lyricsText.textContent = song.lyrics;
            lyricsBtn.style.opacity = "1";
        } else {
            lyricsText.textContent = "Lyrics not available for this track.";
            lyricsBtn.style.opacity = "0.5"; // Dim the button
        }

        // 5. Reset Controls
        progressBar.value = 0;
        currTimeDisp.textContent = "0:00";
        
        highlightTrack(index);
    }

    function playTrack() {
        // Ensure Visualizer Context is Active
        if (!isVisualizerInit) {
            initVisualizer();
        } else if (audioContext.state === 'suspended') {
            audioContext.resume();
        }

        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    isPlaying = true;
                    updatePlayButton();
                })
                .catch(error => {
                    console.error("Playback failed (likely autoplay policy):", error);
                    isPlaying = false;
                    updatePlayButton();
                });
        }
    }

    function pauseTrack() {
        audio.pause();
        isPlaying = false;
        updatePlayButton();
    }

    function togglePlayPause() {
        if (audio.paused) {
            playTrack();
        } else {
            pauseTrack();
        }
    }

    function nextTrack() {
        let nextIndex = (currentTrackIndex + 1) % songDatabase.length;
        loadTrack(nextIndex);
        playTrack();
    }

    function prevTrack() {
        // If current song is playing for more than 3 seconds, just restart it
        if (audio.currentTime > 3) {
            audio.currentTime = 0;
            return;
        }
        
        let prevIndex = (currentTrackIndex - 1 + songDatabase.length) % songDatabase.length;
        loadTrack(prevIndex);
        playTrack();
    }

    function updatePlayButton() {
        const icon = playPauseBtn.querySelector('i');
        if (isPlaying) {
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
        } else {
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
        }
    }

    // Mobile UI Functions
    function closeMobileMenu() {
        libraryPanel.classList.remove('active');
        mobileOverlay.classList.remove('active');
    }


    // === 6. EVENT LISTENERS ===

    // -- Playback Events --
    playPauseBtn.addEventListener('click', togglePlayPause);
    prevBtn.addEventListener('click', prevTrack);
    nextBtn.addEventListener('click', nextTrack);

    // -- Audio Events --
    audio.addEventListener('timeupdate', () => {
        // Update Time Text
        currTimeDisp.textContent = formatTime(audio.currentTime);
        
        // Update Progress Bar
        const percent = (audio.currentTime / audio.duration) * 100;
        if (!isNaN(percent)) {
            progressBar.value = percent;
            
            // Dynamic "filled" part of the slider CSS
            // This creates the white trail before the thumb
            const val = percent; 
            progressBar.style.background = `linear-gradient(to right, #b0fbff 0%, #fff ${val}%, rgba(255,255,255,0.15) ${val}%, rgba(255,255,255,0.15) 100%)`;
        }
    });

    audio.addEventListener('loadedmetadata', () => {
        durDisp.textContent = formatTime(audio.duration);
    });

    audio.addEventListener('ended', nextTrack);

    // -- Scrubber Input --
    progressBar.addEventListener('input', (e) => {
        const percent = e.target.value;
        const time = (percent / 100) * audio.duration;
        audio.currentTime = time;
    });

    // -- Volume Input --
    volControl.addEventListener('input', (e) => {
        audio.volume = e.target.value;
        
        // Visual indicator logic for volume icon could be added here
        const icon = document.querySelector('.volume-area i');
        if(audio.volume === 0) icon.className = "fas fa-volume-mute";
        else if(audio.volume < 0.5) icon.className = "fas fa-volume-low";
        else icon.className = "fas fa-volume-high";
    });

    // -- Lyrics Modal --
    lyricsBtn.addEventListener('click', () => {
        lyricsOverlay.classList.add('show');
    });
    closeLyrics.addEventListener('click', () => {
        lyricsOverlay.classList.remove('show');
    });
    // Close on click outside box
    lyricsOverlay.addEventListener('click', (e) => {
        if(e.target === lyricsOverlay) lyricsOverlay.classList.remove('show');
    });

    // -- Mobile Library Toggle --
    menuToggle.addEventListener('click', () => {
        libraryPanel.classList.add('active');
        mobileOverlay.classList.add('active');
    });
    mobileOverlay.addEventListener('click', closeMobileMenu);


    // === 7. INITIALIZATION (Entry Point) ===
    
    // This function checks Session Storage to see which playlist we should load.
    // It is called immediately on page load, and also can be re-triggered by auth.js
    window.initializePlayer = function() {
        
        const unlockedPlaylistId = sessionStorage.getItem('sanctuary_unlocked_playlist');

        if (!unlockedPlaylistId) {
            console.log("No authenticated playlist. Waiting for login.");
            return; 
        }

        console.log(`Authenticated. Loading playlist: ${unlockedPlaylistId}`);

        // Access the global 'playlists' object from songs.js
        if (typeof playlists === 'undefined') {
            console.error("songs.js is not loaded or variable is missing!");
            titleDisp.textContent = "Error: Database Missing";
            return;
        }

        const validData = playlists[unlockedPlaylistId];

        if (validData && validData.length > 0) {
            songDatabase = validData;
            loadPlaylist();
            // Load the first track but DO NOT auto-play (bad browser etiquette on reload)
            loadTrack(0); 
            // Set Volume default
            audio.volume = volControl.value;
        } else {
            console.error("Invalid playlist key.");
            titleDisp.textContent = "Library Empty";
        }
    };

    // Trigger on load in case we refreshed inside the app
    // Check if the login screen is already hidden (user previously logged in in this tab)
    // if(appContainer.classList.contains('visible') || sessionStorage.getItem('sanctuary_unlocked_playlist')) {
    //     window.initializePlayer();
    // }
    
    // Make sure we have a reference to the observer for dynamic visibility changes from auth.js
    const observer = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            if (mutation.attributeName === 'class') {
                if (appContainer.classList.contains('visible')) {
                    // Logic when login fades away
                    window.initializePlayer();
                }
            }
        });
    });
    
    observer.observe(appContainer, { attributes: true });

});