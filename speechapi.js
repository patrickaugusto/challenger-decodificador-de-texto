document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('btn_gravar_audio');
  const textarea = document.getElementById('inserir_texto');
  const microphoneIcon = 'assets/Microphone.png';
  const stopIcon = 'assets/MicrophoneSlash.png';

  let recognition;
  let isRecording = false;

  if (!('webkitSpeechRecognition' in window)) {
      alert('Reconhecimento de voz não é suportado neste navegador.');
      return;
  }

  recognition = new webkitSpeechRecognition();
  recognition.lang = 'pt-BR'; 
  recognition.interimResults = false;
  recognition.continuous = false; 

  function toggleRecording() {
      if (isRecording) {
          recognition.stop();
          startButton.querySelector('img').src = microphoneIcon;
      } else {
          recognition.start();
          startButton.querySelector('img').src = stopIcon;
      }
      isRecording = !isRecording;
  }

  recognition.onresult = function(event) {
      const transcript = event.results[0][0].transcript;
      textarea.value = transcript;
  };

  recognition.onerror = function(event) {
      textarea.value = 'Ocorreu um erro durante o reconhecimento de voz: ' + event.error;
  };

  recognition.onend = function() {
      if (isRecording) {
          recognition.start();
      }
      startButton.querySelector('img').src = microphoneIcon;
      isRecording = false;
  };

  startButton.addEventListener('click', toggleRecording);
});
