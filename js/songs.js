// --- js/songs.js ---
// Define your playlists here.
// Each key in the 'playlists' object is a unique identifier for a song list.
// The value is an array of song objects, just like before.

const playlists = {

    // Playlist for the original password
    skymusic: [
        {
            title: "Echoes in the Quiet",
            artist: "SkyMusic",
            file: "audio/Echoes in the Quiet (Remastered).mp3",
            cover: "images/Echoes in the Quiet.png",
            lyrics: "lyrics/Echoes in the Quiet.txt"
        },
        {
            title: "Under the Night Sky",
            artist: "SkyMusic",
            file: "audio/Under the Night Sky (Remastered).mp3",
            cover: "images/Under the Night Sky.png",
            // lyrics: "lyrics/Under the Night Sky.txt"
        },
        {
            title: "My Forever Glow",
            artist: "SkyMusic",
            file: "audio/My Forever Glow (Remastered).mp3",
            cover: "images/My Forever Glow.png",
            // lyrics: "lyrics/My Forever Glow.txt"
        },
        {
            title: "Under the Night Sky (Reprise)",
            artist: "SkyMusic",
            file: "audio/Under the Night Sky (Remastered-2).mp3",
            cover: "images/Under the Night Sky (Reprise).png",
            // lyrics: "lyrics/Under the Night Sky (Reprise).txt"
        },
        {
            title: "Forever Glow - Short",
            artist: "SkyMusic",
            file: "audio/Forever Glow-Short.mp3",
            cover: "images/Forever Glow-Short.png",
            // lyrics: "lyrics/Forever Glow - Short.txt"
        }
    ],

    // A NEW, second playlist for a different password
    lemon: [
        {
            title: "Lemon (Hindi Version)",
            artist: "SkyMusic",
            file: "audio/Lemon (Hindi Version).mp3", // <-- MAKE SURE YOU HAVE THIS FILE
            cover: "images/Lemon (Hindi Version).png",  // <-- AND THIS COVER
            lyrics: `
(Verse 1)
Kaash ye sab ek sapna hota, toh kitna achha hota
Aaj bhi tum mere khwaabon mein chale aate ho
Jaise bhooli hui koi cheez lene, laut aate ho
Aur purani yaadon se dhool hataate ho
                
(Pre-Chorus)
Uss din ka woh gham bhi, uss din ki woh takleef bhi
Teri har ek cheez se ishq tha, jab tum saath the
Dil mein aaj bhi thehri hai, ek neembu ki kadvi si khushboo
Jab tak ye dard ki baarish thamm na jaaye, main ghar laut nahi sakta
Aaj bhi tum hi meri roshni ho
                
(Chorus)
Andheron mein, maine tumhari parchhaai ko mehsoos kiya hai
Har lakeer, har nishaan, mujhe saaf saaf yaad hai
Jab bhi koi naya gham milta hai, jise seh nahi paata
Toh bas ye aansu hain, jo behte rehte hain
Kya kar raha tha main? Kya soch raha tha main?
Sab kuch tere jaane se dhundhla sa gaya hai
                
(Verse 2)
Kahin aisa toh nahi, ki tum bhi meri tarah
Akelepan mein doobe, aansu baha rahe ho?
Agar aisa hai, toh bhool jaana mujhe… meri iltijaa hai
Main bas yahi dua karta hoon, dil se tumhare liye
Ki tum hamesha khush raho
                
(Bridge)
Maine tumse dil se mohabbat ki thi
Yeh ehsaas aaj bhi utna hi gehra hai
Jaise kate hue phal ka, main ek adhoora hissa hoon
Aaj bhi, tum hi meri roshni ho
                
(Chorus)
Andheron mein, maine tumhari parchhaai ko mehsoos kiya hai
Har lakeer, har nishaan, mujhe saaf saaf yaad hai
Jab bhi koi naya gham milta hai, jise seh nahi paata
Toh bas ye aansu hain, jo behte rehte hain
Kya kar raha tha main? Kya soch raha tha main?
Sab kuch tere jaane se dhundhla sa gaya hai
                
(Outro)
Jaise kate hue phal ka, main ek adhoora hissa hoon…
Aaj bhi… tum hi meri roshni ho.
`
        },
        {
            title: "Lemon (Hindi Version) -2",
            artist: "SkyMusic",
            file: "audio/Lemon (Hindi Version)2.mp3",  // <-- MAKE SURE YOU HAVE THIS FILE
            cover: "images/Lemon (Hindi Version) -2.png",   // <-- AND THIS COVER
            lyrics: 
            `
(Verse 1)
Kaash ye sab ek sapna hota, toh kitna achha hota
Aaj bhi tum mere khwaabon mein chale aate ho
Jaise bhooli hui koi cheez lene, laut aate ho
Aur purani yaadon se dhool hataate ho
                
(Pre-Chorus)
Uss din ka woh gham bhi, uss din ki woh takleef bhi
Teri har ek cheez se ishq tha, jab tum saath the
Dil mein aaj bhi thehri hai, ek neembu ki kadvi si khushboo
Jab tak ye dard ki baarish thamm na jaaye, main ghar laut nahi sakta
Aaj bhi tum hi meri roshni ho
                
(Chorus)
Andheron mein, maine tumhari parchhaai ko mehsoos kiya hai
Har lakeer, har nishaan, mujhe saaf saaf yaad hai
Jab bhi koi naya gham milta hai, jise seh nahi paata
Toh bas ye aansu hain, jo behte rehte hain
Kya kar raha tha main? Kya soch raha tha main?
Sab kuch tere jaane se dhundhla sa gaya hai
                
(Verse 2)
Kahin aisa toh nahi, ki tum bhi meri tarah
Akelepan mein doobe, aansu baha rahe ho?
Agar aisa hai, toh bhool jaana mujhe… meri iltijaa hai
Main bas yahi dua karta hoon, dil se tumhare liye
Ki tum hamesha khush raho
                
(Bridge)
Maine tumse dil se mohabbat ki thi
Yeh ehsaas aaj bhi utna hi gehra hai
Jaise kate hue phal ka, main ek adhoora hissa hoon
Aaj bhi, tum hi meri roshni ho
                
(Chorus)
Andheron mein, maine tumhari parchhaai ko mehsoos kiya hai
Har lakeer, har nishaan, mujhe saaf saaf yaad hai
Jab bhi koi naya gham milta hai, jise seh nahi paata
Toh bas ye aansu hain, jo behte rehte hain
Kya kar raha tha main? Kya soch raha tha main?
Sab kuch tere jaane se dhundhla sa gaya hai
                
(Outro)
Jaise kate hue phal ka, main ek adhoora hissa hoon…
Aaj bhi… tum hi meri roshni ho.
`
        
        },
        {
            title: "Yari Zindabad (V1)",
            artist: "SkyMusic",
            file: "audio/Yari Zindabad(V1).mp3",
            cover: "images/Yari Zindabad(V1).png",
            lyrics:
            `
(Verse 1)
शाम का वक़्त, शहर की सड़कें
दौड़ती बस, और अपनी धड़कनें
रोज़ का है ये मंज़र पुराना
वक़्त से लड़ते, हमको है जाना
कभी वॉलेट तेरा खाली, तो बिल मेरा हो जाता
कभी प्लेट से तेरी, मेरे मुँह में निवाला आ जाता
हैं थोड़े पागल, थोड़े आवारे
पर एक दूजे के, हम ही सहारे

(Chorus)
ये यारी अपनी है सबसे अनोखी, सुन लो कहानी
एक मैं, एक निहार रंजन, और प्रियांशु महाराणा
किस्से हैं नए, पर दोस्ती है वही पुरानी
इन्हीं पलों से तो बनती ज़िंदगानी!
हो... इन्हीं पलों से तो बनती ज़िंदगानी!

(Verse 2)
याद है वो दिन, बाइक वाला शैतान
छींटे उड़ाके, हुआ था अनजान
प्रियांशु के मुँह पे "गंगा-पानी" छिड़क गया
उसकी शकल देख के, अपना तो दिन ही बन गया
और भूलूँ कैसे मैं वो बारिश की रात
हीरो बनके उछला, पर बिगड़ गयी बात
रास्ते के पानी में पूरा ही डूब गया
और तुम दोनों का हँस-हँस के पेट ही दुख गया

(Chorus)
ये यारी अपनी है सबसे अनोखी, सुन लो कहानी
एक मैं, एक निहार रंजन, और प्रियांशु महाराणा
किस्से हैं नए, पर दोस्ती है वही पुरानी
इन्हीं पलों से तो बनती ज़िंदगानी!
हो... इन्हीं पलों से तो बनती ज़िंदगानी!

(Bridge)
हाँ, बस में सबसे आखिर में, उतरता हूँ मैं
थोड़ा पीछे रहने का ग़म भी करता हूँ मैं
पर सच कहूँ...
वो सफर तब तक ही सुहाना है, जब तक तुम्हारा साथ हो
मंज़िल से बेहतर ये रास्ते हैं, क्यूंकि इन रास्तों पे मेरे वास्ते तुम हो!
मेरे वास्ते तुम हो!

(गिटार सोलो - हल्का सा, मधुर)

(Chorus - थोड़ा और जोश और ऊर्जा के साथ)
ये यारी अपनी है सबसे अनोखी, सुन लो कहानी!
एक मैं, एक निहार रंजन, और प्रियांशु महाराणा!
किस्से हैं नए, पर दोस्ती है वही पुरानी
इन्हीं पलों से तो बनती ज़िंदगानी!
हो... इन्हीं पलों से तो बनती ज़िंदगानी!

(Outro)
हम ३ इडियट्स... हमेशा साथ...
अपनी यारी... ज़िंदाबाद!
(म्यूज़िक धीरे-धीरे खत्म होता है)
`
        },
        {
            title: "Yari Zindabad (V2)",
            artist: "SkyMusic",
            file: "audio/Yari Zindabad(V2).mp3",
            cover: "images/Yari Zindabad(V2).png",
            lyrics:
            `
(Verse 1)
शाम का वक़्त, शहर की सड़कें
दौड़ती बस, और अपनी धड़कनें
रोज़ का है ये मंज़र पुराना
वक़्त से लड़ते, हमको है जाना
कभी वॉलेट तेरा खाली, तो बिल मेरा हो जाता
कभी प्लेट से तेरी, मेरे मुँह में निवाला आ जाता
हैं थोड़े पागल, थोड़े आवारे
पर एक दूजे के, हम ही सहारे

(Chorus)
ये यारी अपनी है सबसे अनोखी, सुन लो कहानी
एक मैं, एक निहार रंजन, और प्रियांशु महाराणा
किस्से हैं नए, पर दोस्ती है वही पुरानी
इन्हीं पलों से तो बनती ज़िंदगानी!
हो... इन्हीं पलों से तो बनती ज़िंदगानी!

(Verse 2)
याद है वो दिन, बाइक वाला शैतान
छींटे उड़ाके, हुआ था अनजान
प्रियांशु के मुँह पे "गंगा-पानी" छिड़क गया
उसकी शकल देख के, अपना तो दिन ही बन गया
और भूलूँ कैसे मैं वो बारिश की रात
हीरो बनके उछला, पर बिगड़ गयी बात
रास्ते के पानी में पूरा ही डूब गया
और तुम दोनों का हँस-हँस के पेट ही दुख गया

(Chorus)
ये यारी अपनी है सबसे अनोखी, सुन लो कहानी
एक मैं, एक निहार रंजन, और प्रियांशु महाराणा
किस्से हैं नए, पर दोस्ती है वही पुरानी
इन्हीं पलों से तो बनती ज़िंदगानी!
हो... इन्हीं पलों से तो बनती ज़िंदगानी!

(Bridge)
हाँ, बस में सबसे आखिर में, उतरता हूँ मैं
थोड़ा पीछे रहने का ग़म भी करता हूँ मैं
पर सच कहूँ...
वो सफर तब तक ही सुहाना है, जब तक तुम्हारा साथ हो
मंज़िल से बेहतर ये रास्ते हैं, क्यूंकि इन रास्तों पे मेरे वास्ते तुम हो!
मेरे वास्ते तुम हो!

(गिटार सोलो - हल्का सा, मधुर)

(Chorus - थोड़ा और जोश और ऊर्जा के साथ)
ये यारी अपनी है सबसे अनोखी, सुन लो कहानी!
एक मैं, एक निहार रंजन, और प्रियांशु महाराणा!
किस्से हैं नए, पर दोस्ती है वही पुरानी
इन्हीं पलों से तो बनती ज़िंदगानी!
हो... इन्हीं पलों से तो बनती ज़िंदगानी!

(Outro)
हम ३ इडियट्स... हमेशा साथ...
अपनी यारी... ज़िंदाबाद!
(म्यूज़िक धीरे-धीरे खत्म होता है)
`
        }
    ],
    
    forher: [
        {
            title: "Pehli Baarish",
            artist: "SkyMusic",
            file: "audio/Pehli Baarish.mp3",
            cover: "images/Pehli Baarish.png",
            lyrics: `
एक प्रोजेक्ट था, एक कहानी बनी,  
दोस्ती के बहाने लिखी तक़दीर कहीं।  
मैं चुप रहा, तू दूर गई,  
पर दिल में तेरी आवाज़ थी वही।  

[Verse 1]  
साल बदला, पर दिल वही,  
तेरे बिना ज़िंदगी अधूरी सी लगी।  
बर्थडे की रात, तू कह रही थी,  
“मैं तो इंतज़ार कर रही थी।”  
उस पल लगा, सब कुछ सच था,  
जो दर्द था, वो भी प्यार था।  

[Pre-Chorus]  
फिर हाथ थामा तूने, हल्की सी बारिश में,  
क़िस्मत लिख गई हम दोनों के नाम एक रेन में।  

[Chorus]  
और हुई वो पहली बारिश,  
एक छाता, एक ख़्वाहिश।  
तू भागी भीगी सी, मैं भागा पीछे,  
उस पल में सब कुछ था नीचे।  
होठों पे था पहला एहसास,  
सपने हुए ज़िंदा, दिल हुआ ख़ास।  
हमारी पहली बारिश… हमारी कहानी।  

[Verse 2]  
“पत्तागोभी” से “स्वीटहार्ट” तक का सफ़र,  
हँसी के बीच मिला दिल का असर।  
बंक की राइड्स, गार्डन के दिन,  
हर छोटी बात थी दुनिया से बड़ी।  
हर मुश्किल में, तू थी साथ,  
हर ख़ुशी तेरी मुस्कान के साथ।  

[Chorus]  
और हुई वो पहली बारिश,  
एक छाता, एक ख़्वाहिश।  
तू भागी भीगी सी, मैं भागा पीछे,  
उस पल में सब कुछ था नीचे।  
होठों पे था पहला एहसास,  
सपने हुए ज़िंदा, दिल हुआ ख़ास।  
हमारी पहली बारिश… हमारी कहानी।  

[Bridge – emotional build, violin + soft drums]  
अब क्लास अलग है, पर दिल साथ है,  
रातों को याद तेरी बात-बात है।  
तू लड़ रही है, मैं दुआ में हूँ,  
हर आँसू तेरा, मेरी दुआ में हूँ।  

[Final Chorus – cinematic crescendo]  
फिर होगी वो बारिश एक दिन,  
फिर भीगेंगे हम दोनों फिर से।  
मैं रखूँगा हाथ तेरा सालों तक,  
चाहे हो धूप या अँधेरा जिसे।  
तू मेरी दुनिया, तू मेरी कहानी,  
पहली बारिश… और ज़िंदगी सारी।  

[Outro – whisper with rain fade]  
एक साल, एक महीना…  
और अब बस सदियाँ जोड़ूँगा…  
मेरी स्वीटहार्ट… सदियाँ जोड़ूँगा। 
`
        },
        {
            title: "Pehli Baarish - V2",
            artist: "SkyMusic",
            file: "audio/Pehli Baarish V2.mp3",
            cover: "images/Pehli Baarish V2.png",
            lyrics: `
एक प्रोजेक्ट था, एक कहानी बनी,  
दोस्ती के बहाने लिखी तक़दीर कहीं।  
मैं चुप रहा, तू दूर गई,  
पर दिल में तेरी आवाज़ थी वही।  

[Verse 1]  
साल बदला, पर दिल वही,  
तेरे बिना ज़िंदगी अधूरी सी लगी।  
बर्थडे की रात, तू कह रही थी,  
“मैं तो इंतज़ार कर रही थी।”  
उस पल लगा, सब कुछ सच था,  
जो दर्द था, वो भी प्यार था।  

[Pre-Chorus]  
फिर हाथ थामा तूने, हल्की सी बारिश में,  
क़िस्मत लिख गई हम दोनों के नाम एक रेन में।  

[Chorus]  
और हुई वो पहली बारिश,  
एक छाता, एक ख़्वाहिश।  
तू भागी भीगी सी, मैं भागा पीछे,  
उस पल में सब कुछ था नीचे।  
होठों पे था पहला एहसास,  
सपने हुए ज़िंदा, दिल हुआ ख़ास।  
हमारी पहली बारिश… हमारी कहानी।  

[Verse 2]  
“पत्तागोभी” से “स्वीटहार्ट” तक का सफ़र,  
हँसी के बीच मिला दिल का असर।  
बंक की राइड्स, गार्डन के दिन,  
हर छोटी बात थी दुनिया से बड़ी।  
हर मुश्किल में, तू थी साथ,  
हर ख़ुशी तेरी मुस्कान के साथ।  

[Chorus]  
और हुई वो पहली बारिश,  
एक छाता, एक ख़्वाहिश।  
तू भागी भीगी सी, मैं भागा पीछे,  
उस पल में सब कुछ था नीचे।  
होठों पे था पहला एहसास,  
सपने हुए ज़िंदा, दिल हुआ ख़ास।  
हमारी पहली बारिश… हमारी कहानी।  

[Bridge – emotional build, violin + soft drums]  
अब क्लास अलग है, पर दिल साथ है,  
रातों को याद तेरी बात-बात है।  
तू लड़ रही है, मैं दुआ में हूँ,  
हर आँसू तेरा, मेरी दुआ में हूँ।  

[Final Chorus – cinematic crescendo]  
फिर होगी वो बारिश एक दिन,  
फिर भीगेंगे हम दोनों फिर से।  
मैं रखूँगा हाथ तेरा सालों तक,  
चाहे हो धूप या अँधेरा जिसे।  
तू मेरी दुनिया, तू मेरी कहानी,  
पहली बारिश… और ज़िंदगी सारी।  

[Outro – whisper with rain fade]  
एक साल, एक महीना…  
और अब बस सदियाँ जोड़ूँगा…  
मेरी स्वीटहार्ट… सदियाँ जोड़ूँगा। 💞
`
        },
        {
            title: "Hamari Baarish",
            artist: "SkyMusic",
            file: "audio/Hamari Baarish.mp3",
            cover: "images/Hamari Baarish.png",
            lyrics: `
(Verse 1)
एक प्रोजेक्ट की थी शाम,
फिर खामोशी का आया पैगाम।
मैं डर रहा था, तुझे खोने से,
और तू दूर से, बस देख रही थी।
साल बदला, पर दिल ना बदले थे,
खामोशी में भी, एक आग सी थी।

(Pre-Chorus)
फिर आई वो तेरे जन्मदिन की रात,
तूने थामा हाथ, और बदली मेरी बात।
कहा, "मैं यहीं थी... तेरा इंतज़ार था।"
और टूटा मेरा हर भरम, मिल गया प्यार था।

(Chorus)
पर आई थी बनके हमारी बारिश,
एक छाता, और सारी ख्वाहिश।
तू भागी भीगी सी, मैं भागा पीछे,
उस एक पल में, सब कुछ था नीचे।
होंठों पे जो था, वो सपना था तेरा,
मैं बन गया तेरा, और तू बन गयी मेरी…
वो पहली बारिश… अपनी कहानी।

(Verse 2)
"पत्तागोभी" वाला मेम, वो बाइक की राइड,
गार्डन की शामें, हम दुनिया से साइड।
कब साल हुआ, पता ही ना चला,
बस तेरी साँसों से, दिन मेरा ढला।
हर मुश्किल में, ढाल बन गए,
हम एक दूजे की, मिसाल बन गए।

(Chorus)
और याद है वो हमारी बारिश?
एक छाता, और सारी ख्वाहिश।
तू भागी भीगी सी, मैं भागा पीछे,
उस एक पल में, सब कुछ था नीचे।
होंठों पे जो था, वो सपना था तेरा,
मैं बन गया तेरा, और तू बन गयी मेरी…
वो पहली बारिश… अपनी कहानी।

(Bridge)
आज क्लास अलग है, थोड़े फासले हैं,
पर दिल में वही तेरे वास्ते हैं।
जानता हूँ तू लड़ रही है, अकेले रातों में,
काश ले पाता दर्द तेरा, अपने हाथों में।

(Outro)
पर सुन...
ये दूरियाँ भी मिट जाएँगी,
बारिश फिर होगी, हम भीग जायेंगे।
ये हाथ मैं तेरा, कभी ना छोडूंगा,
एक साल हुआ है, मैं सदियाँ जोड़ूँगा...
मेरी स्वीटहार्ट... सदियाँ जोड़ूँगा।
`
        },
        {
            title: "Hamari Baarish - V2",
            artist: "SkyMusic",
            file: "audio/Hamari Baarish V2.mp3",
            cover: "images/Hamari Baarish V2.png",
            lyrics: `
(Verse 1)
एक प्रोजेक्ट की थी शाम,
फिर खामोशी का आया पैगाम।
मैं डर रहा था, तुझे खोने से,
और तू दूर से, बस देख रही थी।
साल बदला, पर दिल ना बदले थे,
खामोशी में भी, एक आग सी थी।

(Pre-Chorus)
फिर आई वो तेरे जन्मदिन की रात,
तूने थामा हाथ, और बदली मेरी बात।
कहा, "मैं यहीं थी... तेरा इंतज़ार था।"
और टूटा मेरा हर भरम, मिल गया प्यार था।

(Chorus)
पर आई थी बनके हमारी बारिश,
एक छाता, और सारी ख्वाहिश।
तू भागी भीगी सी, मैं भागा पीछे,
उस एक पल में, सब कुछ था नीचे।
होंठों पे जो था, वो सपना था तेरा,
मैं बन गया तेरा, और तू बन गयी मेरी…
वो पहली बारिश… अपनी कहानी।

(Verse 2)
"पत्तागोभी" वाला मेम, वो बाइक की राइड,
गार्डन की शामें, हम दुनिया से साइड।
कब साल हुआ, पता ही ना चला,
बस तेरी साँसों से, दिन मेरा ढला।
हर मुश्किल में, ढाल बन गए,
हम एक दूजे की, मिसाल बन गए।

(Chorus)
और याद है वो हमारी बारिश?
एक छाता, और सारी ख्वाहिश।
तू भागी भीगी सी, मैं भागा पीछे,
उस एक पल में, सब कुछ था नीचे।
होंठों पे जो था, वो सपना था तेरा,
मैं बन गया तेरा, और तू बन गयी मेरी…
वो पहली बारिश… अपनी कहानी।

(Bridge)
आज क्लास अलग है, थोड़े फासले हैं,
पर दिल में वही तेरे वास्ते हैं।
जानता हूँ तू लड़ रही है, अकेले रातों में,
काश ले पाता दर्द तेरा, अपने हाथों में।

(Outro)
पर सुन...
ये दूरियाँ भी मिट जाएँगी,
बारिश फिर होगी, हम भीग जायेंगे।
ये हाथ मैं तेरा, कभी ना छोडूंगा,
एक साल हुआ है, मैं सदियाँ जोड़ूँगा...
मेरी स्वीटहार्ट... सदियाँ जोड़ूँगा।
`
        },
        {
            title: "Hum Taare (V1)",
            artist: "SkyMusic",
            file: "audio/Hum Taare (V1).mp3",
            cover: "images/Hum Taare (V1).png",
            lyrics: `
(Verse 1 / Pehla Antara)

Tanha se thhe raaste, gumsum si thi har disha...
Jab tak na thi mili, tere ishq ki panah.
Bikhra sa ek khwaab tha, iss toote dil ke andar...
Tune nazron se chhua, aur bhar diya samandar.

(Pre-Chorus / Chorus Se Pehle)

Yeh ittefaq nahi, hai naseebon ka ishaara...
Likha tha sang chalna, aasmaan pe naam humara.

(Chorus / Mukhda)

Hum taare hain uss falak ke, jo tootenge na kabhi...
Chahe ho ghane andhere, denge roshni yahin...
Yeh vaada hai, banke Humsafar, chamkenge sadiyon talak...
Banaayenge apna aasmaan, zameen se falak talak!

(Verse 2 / Doosra Antara)

Mausam badalte rahenge, aur saal bhi dhal jaayenge...
Par apne is pyaar ke rang, feeke na pad paayenge.
Jo aansu teri aankh se chalke, palkon pe rok loonga...
Har dard tera leke main, khud mein sanjo loonga.

(Pre-Chorus / Chorus Se Pehle)

Duniya ki iss bheed mein, tu hi mera sahara...
Likha tha sang chalna, aasmaan pe naam humara.

(Chorus / Mukhda)

Hum taare hain uss falak ke, jo tootenge na kabhi...
Chahe ho ghane andhere, denge roshni yahin...
Yeh vaada hai, banke Humsafar, chamkenge sadiyon talak...
Banaayenge apna aasmaan, zameen se falak talak!

(Bridge / Pul)

Jab dar lage raahon mein, bas thaam lena haath mera...
Tere saaye mein hi toh hai, mera har savera...
Tujhse hi main poora hoon... bas itna hai kehna...

(Chorus)

Hum taare hain uss falak ke, jo tootenge na kabhi!
Chahe ho ghane andhere, denge roshni yahin!
Yeh vaada hai, banke Humsafar, chamkenge sadiyon talak!
Banaayenge apna aasmaan, zameen se falak talak!

(Outro / Antim Hissa)

Hum taare...
Uss falak ke...
Apna aasmaan...`
        },
        {
            title: "Hum Taare (V2)",
            artist: "SkyMusic",
            file: "audio/Hum Taare (V2).mp3",
            cover: "images/Hum Taare (V2).png",
            lyrics: `
(Verse 1 / Pehla Antara)

Tanha se thhe raaste, gumsum si thi har disha...
Jab tak na thi mili, tere ishq ki panah.
Bikhra sa ek khwaab tha, iss toote dil ke andar...
Tune nazron se chhua, aur bhar diya samandar.

(Pre-Chorus / Chorus Se Pehle)

Yeh ittefaq nahi, hai naseebon ka ishaara...
Likha tha sang chalna, aasmaan pe naam humara.

(Chorus / Mukhda)

Hum taare hain uss falak ke, jo tootenge na kabhi...
Chahe ho ghane andhere, denge roshni yahin...
Yeh vaada hai, banke Humsafar, chamkenge sadiyon talak...
Banaayenge apna aasmaan, zameen se falak talak!

(Verse 2 / Doosra Antara)

Mausam badalte rahenge, aur saal bhi dhal jaayenge...
Par apne is pyaar ke rang, feeke na pad paayenge.
Jo aansu teri aankh se chalke, palkon pe rok loonga...
Har dard tera leke main, khud mein sanjo loonga.

(Pre-Chorus / Chorus Se Pehle)

Duniya ki iss bheed mein, tu hi mera sahara...
Likha tha sang chalna, aasmaan pe naam humara.

(Chorus / Mukhda)

Hum taare hain uss falak ke, jo tootenge na kabhi...
Chahe ho ghane andhere, denge roshni yahin...
Yeh vaada hai, banke Humsafar, chamkenge sadiyon talak...
Banaayenge apna aasmaan, zameen se falak talak!

(Bridge / Pul)

Jab dar lage raahon mein, bas thaam lena haath mera...
Tere saaye mein hi toh hai, mera har savera...
Tujhse hi main poora hoon... bas itna hai kehna...

(Chorus)

Hum taare hain uss falak ke, jo tootenge na kabhi!
Chahe ho ghane andhere, denge roshni yahin!
Yeh vaada hai, banke Humsafar, chamkenge sadiyon talak!
Banaayenge apna aasmaan, zameen se falak talak!

(Outro / Antim Hissa)

Hum taare...
Uss falak ke...
Apna aasmaan...`
        },
        {
            title: "Taare Sath Mein (V1)",
            artist: "SkyMusic",
            file: "audio/Taare Sath Mein (V1).mp3",
            cover: "images/Taare Sath Mein (V1).png",
            lyrics: `
(Inspired by "Betelgeuse" by Yuuri)

(Verse 1)
Suni si raahon pe, main chalta hi raha
Ek roshni ki aas mein, bas badhta hi raha
Bheed mein bhi tha akela, har pal tha bezubaan
Jaise toota hua taara, jise na mila aasmaan

(Pre-Chorus)
Phir ek din tum jo miley, waise hi achanak
Andheron ko mila, ek noor ka falak
Dhadkane aawaz bani, saanson ko mila sabab…

(Chorus)
Hum falak ke jaise taare, jo kabhi na honge judaa
Ek dooje ke liye hi chamkein, yeh hai rab se dua
Chahe kitni bhi ho raatein gham ki, na chhodenge yeh haath
Wada hai, sadiyon tak hum-tum… chamkenge saath saath

(Verse 2)
Jab bhi darr lage safar mein, ya raasta kho jaaye
Bas dekh lena tum mujhko, main tujhmein mil jaun
Har zakhm tera, har aansu, main khud pe le lunga
Apni saari khushiyan tere, naam main kar dunga

(Pre-Chorus)
Kismat ne humko milaya, yeh koi ittifaaq nahi
Yeh rishta hai rooh ka, lafzon ka mohtaaj nahi
Dil se judi hai yeh dori, saanson se hai yeh lagan…

(Chorus)
Hum falak ke jaise taare, jo kabhi na honge judaa
Ek dooje ke liye hi chamkein, yeh hai rab se dua
Chahe kitni bhi ho raatein gham ki, na chhodenge yeh haath
Wada hai, sadiyon tak hum-tum… chamkenge saath saath

(Bridge)
Jaise koi musafir thaka hua
Manzil paake thehar jaaye
Tumse milke is dil ko
Waisa hi sukoon aaye…
Hum ek hi kahani hain

(Guitar/Flute Solo)

(Chorus)
Hum falak ke jaise taare, jo kabhi na honge judaa
Ek dooje ke liye hi chamkein, yeh hai rab se dua
Chahe kitni bhi ho raatein gham ki, na chhodenge yeh haath
Wada hai, sadiyon tak hum-tum… chamkenge saath saath`
        },
        {
            title: "Taare Sath Mein (V2)",
            artist: "SkyMusic",
            file: "audio/Taare Sath Mein (V2).mp3",
            cover: "images/Taare Sath Mein (V2).png",
            lyrics: `
(Inspired by "Betelgeuse" by Yuuri)

(Verse 1)
Suni si raahon pe, main chalta hi raha
Ek roshni ki aas mein, bas badhta hi raha
Bheed mein bhi tha akela, har pal tha bezubaan
Jaise toota hua taara, jise na mila aasmaan

(Pre-Chorus)
Phir ek din tum jo miley, waise hi achanak
Andheron ko mila, ek noor ka falak
Dhadkane aawaz bani, saanson ko mila sabab…

(Chorus)
Hum falak ke jaise taare, jo kabhi na honge judaa
Ek dooje ke liye hi chamkein, yeh hai rab se dua
Chahe kitni bhi ho raatein gham ki, na chhodenge yeh haath
Wada hai, sadiyon tak hum-tum… chamkenge saath saath

(Verse 2)
Jab bhi darr lage safar mein, ya raasta kho jaaye
Bas dekh lena tum mujhko, main tujhmein mil jaun
Har zakhm tera, har aansu, main khud pe le lunga
Apni saari khushiyan tere, naam main kar dunga

(Pre-Chorus)
Kismat ne humko milaya, yeh koi ittifaaq nahi
Yeh rishta hai rooh ka, lafzon ka mohtaaj nahi
Dil se judi hai yeh dori, saanson se hai yeh lagan…

(Chorus)
Hum falak ke jaise taare, jo kabhi na honge judaa
Ek dooje ke liye hi chamkein, yeh hai rab se dua
Chahe kitni bhi ho raatein gham ki, na chhodenge yeh haath
Wada hai, sadiyon tak hum-tum… chamkenge saath saath

(Bridge)
Jaise koi musafir thaka hua
Manzil paake thehar jaaye
Tumse milke is dil ko
Waisa hi sukoon aaye…
Hum ek hi kahani hain

(Guitar/Flute Solo)

(Chorus)
Hum falak ke jaise taare, jo kabhi na honge judaa
Ek dooje ke liye hi chamkein, yeh hai rab se dua
Chahe kitni bhi ho raatein gham ki, na chhodenge yeh haath
Wada hai, sadiyon tak hum-tum… chamkenge saath saath`
        },
        {
            title: "Khaali Jagah",
            artist: "SkyMusic",
            file: "audio/Khaali Jagah.mp3",
            cover: "images/Khaali Jagah.png",
            lyrics: `
(Verse 1)
Shor hai kaafi wahan, mujhe pata hai
Bheed mein gumsum ho, mujhe pata hai.
Chehre hazaron hain, par koi dikhta nahi
Dil bohot bhari hai, par koi sunta nahi.
Agar wahan saans lene mein takleef ho…
Toh suno…

(Chorus)
Toot jaane do khud ko aaj, koi dar nahi
Main samet loonga tumhe, main hoon yahin.
Zaroori nahi hai har pal strong rehna
Agar girna chaho, toh gir jao…
Main zameen ban jaunga.

(Verse 2)
Kuch mat kaho, shabd rehne do
Bas aankhein band kar lo, aur behne do.
Ye jo dard hai, ise behne do.
Main tumhare andhere mein baitha rahunga
Jab tak subah nahi aati, jagta rahunga.

(Bridge)
Tumhe kuch bolne ki jarurat nahi,
Tumhe kuch samjhane ki jarurat nahi.
Iss andhere mein hun tumhare sath,
hamesha pakde rahunga tumhara hath.
Bahar ki duniya ko wahi rook do…
Bas mere paas aake… khud ko rook do.

(Outro)
Bas saans lo…
Bas saans lo…
Main yahin hoon.
Main kahin nahi ja raha.
Main yahin hoon.`
        }
    ],

    valiant: [
        {
            title: "Hush Rush",
            artist: "SkyMusic",
            file: "audio/Hush Rush.mp3",
            cover: "images/Hush Rush.png",
            lyrics: `(Intro)
Yeah, yeah...
Just between us, right?

(Verse 1)
Creeping in the window, shoes are off the floor
I know he thinks you're sleeping, snoring with the door
Locked tight, but you got the spare key under the mat
I told you, "Don't be loud," can you handle that?
You taste like gin and bad decisions, looking stubborn too
You said "One more," I said "Enough," but I can't leave you
Phone is buzzing on the table, face it down
I don't care about him, I’m the king of this town
When the lights are dim.

(Pre-Chorus)
Damp your lips, come close to me
But keep it down, keep it low key
Dirty little secrets we don’t allow to be known
But tell me what you want when we’re alone...

(Chorus)
ZIP IT UP, throw away the key
We having a silent riot, you and me!
It’s a hush rush, sugar crush, quiet on the bed
Screaming inside, but not a word is said!
Dress up, mess up, tear it apart
I play with your body, you play with my heart
Don't tell nobody, don't tweet, don't post
We’re just two ghosts, doing the most!

(Post-Chorus)
(Shh!) Don't be stubborn
(Shh!) Let's get governed
(Shh!) Undercover
Best friend? No, secret lover.

(Verse 2)
Back to the rhythm, back and forth is the theme
My hands are on your waist, but it feels like a dream
Or a glitch in the system.
You got those anime eyes, looking innocent
But the things you doing now? No equivalent.
Sorry, I don't give easily, I make you work
Sneaking round the city just to see you twerk
On a Tuesday night.
He thinks you're watching movies, yeah, that’s alright
You’re the director, I’m the scene you wanna shoot tonight.

(Bridge)
I already told you (told you)
Don't be loud (don't be loud)
Whatever happens here... stays inside the cloud.
But the friction is rising, temperature spiking...
(Fast drum roll buildup)
Are you ready to break the silence?

(Chorus)
ZIP IT UP, throw away the key
We having a silent riot, you and me!
It’s a hush rush, sugar crush, quiet on the bed
Screaming inside, but not a word is said!
Dress up, mess up, tear it apart
I play with your body, you play with my heart
Don't tell nobody, don't tweet, don't post
We’re just two ghosts, doing the most!

(Outro)
Yeah-yeah, yeah-yeah.
Just us two.
Don't tell it.
(Whisper)
Slumber party's over.`
        }
//         {
//             title: "A Different Face",
//             artist: "SkyMusic",
//             file: "audio/Prince Valiant & The Boss.mp3",
//             cover: "images/A Different Face.png",
//             lyrics: `(Verse 1)
// Black shirt, piercing, a desi mafia style
// They all see the confidence, the power in your smile
// Dreaming of the paddock, a Rolex marking time
// A future full of farmhouse wins, a mountain you can climb
// They see the queen who's ready to take on any race
// But they don't see the flicker of doubt upon your face.

// (Pre-Chorus)
// But I see something different, past the perfect scene
// I read the lines of poetry you hide in between
// The ones that talk of loneliness, the feeling out of place
// It’s like I'm looking at myself, with a different face.

// (Chorus)
// 'Cause I see both the fighters, and the hearts that feel alone
// The Boss who built a kingdom, the Poet on her throne
// And they can call it friendship, but I know it's something true
// Like you're the other half of me, and I'm the other half of you.

// (Verse 2)
// Raat ke dedh baje, humari ajeeb si kahani
// Kaun sardi mein nahaye, yeh teri-meri pareshani
// You hold a tangled serpent, and you see the beauty there
// A misunderstood magic, a love beyond compare
// And when you say "Jo mila sahi hai", like you don't have a choice
// I just want to be the one to amplify your voice.

// (Pre-Chorus)
// 'Cause you see something different, you see me standing there
// The only one you talk to, the only one who'd dare
// To call you Prince Valiant and mean it every time
// A friendship this pure should be a perfect crime.

// (Chorus)
// 'Cause I see both the fighters, and the hearts that feel alone
// The Boss who built a kingdom, the Poet on her throne
// And they can call it friendship, but I know it's something true
// Like you're the other half of me, and I'm the other half of you.

// (Bridge)
// So let the world just wonder, let them try to see
// The crazy kind of energy between you and me
// They can call me Siddhi, it feels a little strange
// But with you, my Prince Valiant, nothing has to change
// Aur suno, Chhote Boss, you're the most handsome that I've met
// I promise you’re not lonely... that's a promise you can get.
// My promise to you, Saby.

// (Chorus)
// 'Cause I see both the fighters, and the hearts that feel alone
// The Boss who built a kingdom, the Poet on her throne
// And they can call it friendship, but I know it's something true
// Like you're the other half of me, and I'm the other half of you.

// (Outro)
// Yeah, just me and you...
// You have me and I have you.
// Sleep well, my favorite person...
// My mighty boss.
// `
//         },

//         {
//             title: "A Different Face V2",
//             artist: "SkyMusic",
//             file: "audio/Prince Valiant & The Boss V2.mp3",
//             cover: "images/A Different Face V2.png",
//             lyrics: `(Verse 1)
// Black shirt, piercing, a desi mafia style
// They all see the confidence, the power in your smile
// Dreaming of the paddock, a Rolex marking time
// A future full of farmhouse wins, a mountain you can climb
// They see the queen who's ready to take on any race
// But they don't see the flicker of doubt upon your face.

// (Pre-Chorus)
// But I see something different, past the perfect scene
// I read the lines of poetry you hide in between
// The ones that talk of loneliness, the feeling out of place
// It’s like I'm looking at myself, with a different face.

// (Chorus)
// 'Cause I see both the fighters, and the hearts that feel alone
// The Boss who built a kingdom, the Poet on her throne
// And they can call it friendship, but I know it's something true
// Like you're the other half of me, and I'm the other half of you.

// (Verse 2)
// Raat ke dedh baje, humari ajeeb si kahani
// Kaun sardi mein nahaye, yeh teri-meri pareshani
// You hold a tangled serpent, and you see the beauty there
// A misunderstood magic, a love beyond compare
// And when you say "Jo mila sahi hai", like you don't have a choice
// I just want to be the one to amplify your voice.

// (Pre-Chorus)
// 'Cause you see something different, you see me standing there
// The only one you talk to, the only one who'd dare
// To call you Prince Valiant and mean it every time
// A friendship this pure should be a perfect crime.

// (Chorus)
// 'Cause I see both the fighters, and the hearts that feel alone
// The Boss who built a kingdom, the Poet on her throne
// And they can call it friendship, but I know it's something true
// Like you're the other half of me, and I'm the other half of you.

// (Bridge)
// So let the world just wonder, let them try to see
// The crazy kind of energy between you and me
// They can call me Siddhi, it feels a little strange
// But with you, my Prince Valiant, nothing has to change
// Aur suno, Chhote Boss, you're the most handsome that I've met
// I promise you’re not lonely... that's a promise you can get.
// My promise to you, Saby.

// (Chorus)
// 'Cause I see both the fighters, and the hearts that feel alone
// The Boss who built a kingdom, the Poet on her throne
// And they can call it friendship, but I know it's something true
// Like you're the other half of me, and I'm the other half of you.

// (Outro)
// Yeah, just me and you...
// You have me and I have you.
// Sleep well, my favorite person...
// My mighty boss.
// `
//         },

//         {
//             title: "A Different Face V3(Eng))",
//             artist: "SkyMusic",
//             file: "audio/Prince Valiant & The Boss V3.mp3",
//             cover: "images/A Different Face V3.png",
//             lyrics: `
// (Verse 1)
// Black shirt, piercing, a desi mafia style
// They all see the confidence, the power in your smile
// Dreaming of the paddock, a Rolex marking time
// A future full of farmhouse wins, a mountain you can climb
// They see the queen who's ready to take on any race
// But they don't see the flicker of doubt upon your face.

// (Pre-Chorus)
// But I see something different, past the perfect scene
// I read the lines of poetry you hide in between
// The ones that talk of loneliness, the feeling out of place
// It’s like I'm looking at myself, with a different face.

// (Chorus)
// 'Cause I see both the fighters, and the hearts that feel alone
// The Boss who built a kingdom, the Poet on her throne
// And they can call it friendship, but I know it's something true
// Like you're the other half of me, and I'm the other half of you.

// (Verse 2)
// Raat ke dedh baje, humari ajeeb si kahani
// Kaun sardi mein nahaye, yeh teri-meri pareshani
// You hold a tangled serpent, and you see the beauty there
// A misunderstood magic, a love beyond compare
// And when you say "Jo mila sahi hai", like you don't have a choice
// I just want to be the one to amplify your voice.

// (Pre-Chorus)
// 'Cause you see something different, you see me standing there
// The only one you talk to, the only one who'd dare
// To call you Prince Valiant and mean it every time
// A friendship this pure should be a perfect crime.

// (Chorus)
// 'Cause I see both the fighters, and the hearts that feel alone
// The Boss who built a kingdom, the Poet on her throne
// And they can call it friendship, but I know it's something true
// Like you're the other half of me, and I'm the other half of you.

// (Bridge)
// So let the world just wonder, let them try to see
// The crazy kind of energy between you and me
// They can call me Siddhi, it feels a little strange
// But with you, my Prince Valiant, nothing has to change
// Aur suno, Chhote Boss, you're the most handsome that I've met
// I promise you’re not lonely... that's a promise you can get.
// My promise to you, Saby.

// (Chorus)
// 'Cause I see both the fighters, and the hearts that feel alone
// The Boss who built a kingdom, the Poet on her throne
// And they can call it friendship, but I know it's something true
// Like you're the other half of me, and I'm the other half of you.

// (Outro)
// Yeah, just me and you...
// You have me and I have you.
// Sleep well, my favorite person...
// My mighty boss.
// `
//         },

//         {
//             title: "A Different Face V4(Eng)",
//             artist: "SkyMusic",
//             file: "audio/Prince Valiant & The Boss V4.mp3",
//             cover: "images/A Different Face V4.png",
//             lyrics: `
// (Verse 1)
// Black shirt, piercing, a desi mafia style
// They all see the confidence, the power in your smile
// Dreaming of the paddock, a Rolex marking time
// A future full of farmhouse wins, a mountain you can climb
// They see the queen who's ready to take on any race
// But they don't see the flicker of doubt upon your face.

// (Pre-Chorus)
// But I see something different, past the perfect scene
// I read the lines of poetry you hide in between
// The ones that talk of loneliness, the feeling out of place
// It’s like I'm looking at myself, with a different face.

// (Chorus)
// 'Cause I see both the fighters, and the hearts that feel alone
// The Boss who built a kingdom, the Poet on her throne
// And they can call it friendship, but I know it's something true
// Like you're the other half of me, and I'm the other half of you.

// (Verse 2)
// Raat ke dedh baje, humari ajeeb si kahani
// Kaun sardi mein nahaye, yeh teri-meri pareshani
// You hold a tangled serpent, and you see the beauty there
// A misunderstood magic, a love beyond compare
// And when you say "Jo mila sahi hai", like you don't have a choice
// I just want to be the one to amplify your voice.

// (Pre-Chorus)
// 'Cause you see something different, you see me standing there
// The only one you talk to, the only one who'd dare
// To call you Prince Valiant and mean it every time
// A friendship this pure should be a perfect crime.

// (Chorus)
// 'Cause I see both the fighters, and the hearts that feel alone
// The Boss who built a kingdom, the Poet on her throne
// And they can call it friendship, but I know it's something true
// Like you're the other half of me, and I'm the other half of you.

// (Bridge)
// So let the world just wonder, let them try to see
// The crazy kind of energy between you and me
// They can call me Siddhi, it feels a little strange
// But with you, my Prince Valiant, nothing has to change
// Aur suno, Chhote Boss, you're the most handsome that I've met
// I promise you’re not lonely... that's a promise you can get.
// My promise to you, Saby.

// (Chorus)
// 'Cause I see both the fighters, and the hearts that feel alone
// The Boss who built a kingdom, the Poet on her throne
// And they can call it friendship, but I know it's something true
// Like you're the other half of me, and I'm the other half of you.

// (Outro)
// Yeah, just me and you...
// You have me and I have you.
// Sleep well, my favorite person...
// My mighty boss.
// `
//         }
    ]
};