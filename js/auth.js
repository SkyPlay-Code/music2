document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================================
    // 1. CONFIGURATION
    // Map your Secret Passwords to Playlist Keys (from songs.js)
    // =========================================================
    const accessCodes = {
        // "Password" : "Playlist Key"
        'skymusic#25': 'skymusic', 
        'galaxy*7':    'lemon',     
        'foryou0':     'forher',     
        'sabyboss':    'valiant'     
    };

    // =========================================================
    // 2. ELEMENT REFERENCES
    // =========================================================
    const loginScreen = document.getElementById('login-screen');
    const appContainer = document.getElementById('app-container');
    const passwordInput = document.getElementById('password-input');
    const submitButton = document.getElementById('submit-password');
    const errorMessage = document.getElementById('error-message');


    // =========================================================
    // 3. LOGIC FUNCTIONS
    // =========================================================

    /**
     * Transitions from Login Screen to Main App
     * @param {string} playlistKey - The key corresponding to the dataset in songs.js
     */
    function unlockVault(playlistKey) {
        // 1. Secure state
        // We use sessionStorage so the login persists only while the tab is open
        try {
            sessionStorage.setItem('sanctuary_unlocked_playlist', playlistKey);
        } catch (e) {
            console.warn("Session Storage failed. Reloading will require login.");
        }

        // 2. Visual Transition
        // Hide the Login Screen (triggers CSS opacity transition)
        loginScreen.classList.add('hidden');
        errorMessage.textContent = ''; // clear text

        // Wait for the login screen to fade out partially before showing the app
        // This creates a smoother cinematic effect
        setTimeout(() => {
            appContainer.classList.add('visible');
            
            // 3. Trigger the Player Initialization
            // (Function defined in player.js)
            if (window.initializePlayer) {
                window.initializePlayer();
            } else {
                console.error("Player module not loaded yet.");
            }

            // Remove login from DOM entirely after animation for performance
            // (Optional, but good for keeping DOM clean)
            setTimeout(() => {
                loginScreen.style.display = 'none';
            }, 1000);

        }, 500); // 0.5s delay
    }

    /**
     * Validates the input against the accessCodes map
     */
    function attemptLogin() {
        const inputCode = passwordInput.value.trim(); // remove extra spaces
        const playlistKey = accessCodes[inputCode];

        if (playlistKey) {
            // SUCCESS
            unlockVault(playlistKey);
        } else {
            // FAILURE
            triggerErrorAnim();
        }
    }

    /**
     * Handles visual feedback for incorrect passwords
     */
    function triggerErrorAnim() {
        // Reset input
        passwordInput.value = '';
        errorMessage.textContent = "ACCESS DENIED";
        
        // Add CSS Shake Animation
        loginScreen.classList.add('shake');
        passwordInput.focus();

        // Remove class after animation finishes (0.5s) so it can trigger again
        setTimeout(() => {
            loginScreen.classList.remove('shake');
        }, 500);
    }


    // =========================================================
    // 4. EVENT LISTENERS
    // =========================================================

    // Submit Button Click
    submitButton.addEventListener('click', attemptLogin);

    // Enter Key in Input Field
    passwordInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevents page reload
            attemptLogin();
        }
    });

    // =========================================================
    // 5. SESSION CHECK (Auto-Login)
    // =========================================================
    // If user refreshes the page, we check if they were already logged in
    
    try {
        const savedSession = sessionStorage.getItem('sanctuary_unlocked_playlist');
        
        if (savedSession && accessCodes.hasOwnProperty(Object.keys(accessCodes).find(key => accessCodes[key] === savedSession))) {
            // Use a faster transition if restoring session
            loginScreen.style.transitionDuration = "0.2s"; 
            unlockVault(savedSession);
        } else {
            // Focus input if not logged in
            setTimeout(() => passwordInput.focus(), 500);
        }
    } catch (e) {
        // Session storage might be blocked by browser settings
        console.log("New session started.");
    }
});