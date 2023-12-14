var audio = new Audio('./audio/b-audio-2.mp3')

var button = document.getElementById('btn');
button.innerHTML = 'Listen';

button.addEventListener('click', function() {
if(audio.paused) {
  audio.play();
  button.innerHTML = 'Pause';
}
else{
  audio.pause();
  button.innerHTML = 'Play'
}
});

let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove('open-popup');
}
// document.getElementById('msgs').addEventListener('click', function(){
//   window.alert('Happy Birthday!');
// })

var audio = new Audio('./audio/Taylor Swift - 22.mp3')

var button = document.getElementById('audiobtn');
button.innerHTML = 'Play';

button.addEventListener('click', function() {
  if(audio.paused) {
    audio.play();
    button.innerHTML = 'Pause';
  }
  else {
    audio.pause();
    button.innerHTML = 'Play'
  }
});