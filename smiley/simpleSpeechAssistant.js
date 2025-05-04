function startSpeech(){
   
    const recognition = new webkitSpeechRecognition();

    recognition.continuos = false;
    recognition.interimResults = false;
    recognition.lang = 'en-GB';
    recognition.start();
    text = '';
    recognition.onresult = function (event) {
        for (const result of event.results) {
            // Print the transcription to the console
            text = result[0].transcript;
            console.log(text);
            
        }
        fetchData(text);
        recognition.stop();
    };

}

function getVoices() {
    let voices = speechSynthesis.getVoices();
    if(!voices.length){
        // some time the voice will not be initialized so we can call speak with empty string
        // this will initialize the voices 
        let utterance = new SpeechSynthesisUtterance("");
        speechSynthesis.speak(utterance);
        voices = speechSynthesis.getVoices();
    }
    return voices;
    }

async function tts(text){

   

    let speakData = new SpeechSynthesisUtterance();
    speakData.volume = 1; // From 0 to 1
    speakData.rate = 2; // From 0.1 to 10
    speakData.pitch = 2; // From 0 to 2
    speakData.text = text;
    speakData.lang = 'en';
    speakData.voice = getVoices()[0];

    speechSynthesis.speak(speakData);
}

async function fetchData(text){
    const apiUrl = 'http://127.0.0.1:8000/result?prompt=' + text;

    const response = await fetch(apiUrl);
    const res = await response.text();
    console.log(res);
    tts(res);
    let result = {responseToQuery: res};
    return result;
}