function listen_element(sequence) {
  return new Promise((resolve, reject) => {
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
      let recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();

      recognition.lang = "es-ES";
      recognition.interimResults = false;

      recognition.onstart = function () {};

      recognition.onend = function () {};

      recognition.onresult = function (event) {
        let transcript = event.results[0][0].transcript;
        resolve(transcript);
      };

      recognition.onerror = function (event) {
        reject("<br>Error durante el reconocimiento: " + event.error);
      };

      recognition.start();
    } else {
      reject("El navegador no soporta la API de reconocimiento de voz.");
    }
  });
}

export { listen_element };

