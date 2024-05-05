x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
draw_apple = "";
to_number = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "El sistema está escuchando, por favor habla";  
  recognition.start();
} 
 
recognition.onresult = function(event)
{
 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "El comando ha sido reconocido: " + content;
    
    function preload()
    {
      function loadImage()
      {
        size(400,400);
        img = loadImage("apple.png");
        image(img, 0, 0);
      }
    }

    to_number = Number(content)
    if(Number.isIntegrar(to_number))
      {
      }
      else
}

function setup() 
{
  screen_width = window.innerWidth;

  screen_height = window.innerHeight;
  
  function createCanvas()
  {
    canvas(screen_height, screen_height, 150, 150)
  }

  function canvas.position()
  {
    
  }
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " manzanas dibujadas";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
