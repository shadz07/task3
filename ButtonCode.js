document.querySelector("button").addEventListener("click", async () => {
    // Prompt user to select any serial port. 
    const port = await navigator.serial.requestPort();
    await  port. open({baudiRate: 9600});
    });
    click_to_convert.addEventListener('click',function(){ 
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition(); 
    recognition.interimResults = true;
    recognition.lang = 'ar';
    recognition.addEventListener('result', e=>{
     const transcript = Array.from(e.results)
     .map(result =>result[0])
     .map(result => result.transcript)
     convert_text.innerHTML=transcript;
     })
     if(speech == true){ 
     recognition.start();
     }
     })