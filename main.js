var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start() {
   document.getElementById("textbox").innerHTML = '';
   recognition.start();
}
recognition.onresult = function (event) {
   var content = event.results[0][0].transcript;
   document.getElementById("textbox").innerHTML = content;
   if (content == "tire minha selfie") {
      speak();
      setTimeout(function () {
         takeselfie();
         save();
      }, 3000);
   }
}
function speak() {
   var synth = window.speechSynthesis;
   Textf = "tirando sua selfie em 3 segundos 3 2 1";
   var falar = new SpeechSynthesisUtterance(Textf);
   synth.speak(falar);
   Webcam.attach(camera);
}
camera = document.getElementById('camera');
Webcam.set({
   width: 360,
   height: 250,
   image_format: 'jpeg',
   jpeg_quality: 90
});

function takeselfie() {
   Webcam.snap(function (data_uri) {
      document.getElementById('result').innerHTML = '<img id="selfie"src="' + data_uri + '"/> '
   })
}

function save() {
      img = document.getElementById("selfie").src;
      document.getElementById("link").href=img;
      document.getElementById('link').click();
}