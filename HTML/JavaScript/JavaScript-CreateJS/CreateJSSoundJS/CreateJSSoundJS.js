var displayStatus;
displayStatus = document.getElementById('status');

src = '../../../Resource/梁静茹-给未来的自己.mp3';

createjs.Sound.alternateExtensions = ['mp3'];

createjs.Sound.addEventListener('fileload', playSound);

createjs.Sound.registerSound(src);

displayStatus.innerHTML = 'Waiting for load'

function playSound(evnet) {
    soundIntance = createjs.Sound.play(evnet.src);
    displayStatus.innerHTML = 'Playing source:' + evnet.src;
}