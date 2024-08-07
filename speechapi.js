// script.js

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('btn_gravar_audio');
    const textarea = document.getElementById('inserir_texto');
    
    let recognition;
    let isRecording = false;
  
    // Verifica se o navegador suporta o reconhecimento de voz
    if (!('webkitSpeechRecognition' in window)) {
      alert('Reconhecimento de voz não é suportado neste navegador.');
      return;
    }
  
    // Configuração do reconhecimento de voz
    recognition = new webkitSpeechRecognition();
    recognition.lang = 'pt-BR'; // Define o idioma para português
    recognition.interimResults = false; // Não exibe resultados intermediários
    recognition.continuous = false; // Não continua após o início
  
    // Função para iniciar ou parar a gravação
    function toggleRecording() {
      if (isRecording) {
        recognition.stop();
        startButton.textContent = 'Gravar Áudio';
      } else {
        recognition.start();
        startButton.textContent = 'Parar Gravação';
      }
      isRecording = !isRecording;
    }
  
    // Evento de reconhecimento bem-sucedido
    recognition.onresult = function(event) {
      const transcript = event.results[0][0].transcript;
      textarea.value = transcript;
    };
  
    // Evento de erro
    recognition.onerror = function(event) {
      textarea.value = 'Ocorreu um erro durante o reconhecimento de voz: ' + event.error;
    };
  
    // Evento quando o reconhecimento de voz é finalizado
    recognition.onend = function() {
      if (isRecording) {
        recognition.start(); // Reinicia o reconhecimento se ainda estiver gravando
      }
      startButton.textContent = 'Gravar Áudio';
      isRecording = false;
    };
  
    // Adiciona um ouvinte de evento para o botão
    startButton.addEventListener('click', toggleRecording);
  });
  