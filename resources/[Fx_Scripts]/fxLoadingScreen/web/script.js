var audio = document.getElementById("music");
var instagramButton = document.getElementById("instagram");
var discordButton = document.getElementById("discord");
var range = document.getElementById("music_range");
var playButton = document.getElementById('play');
var pauseButton = document.getElementById('pause');
var stopButton = document.getElementById('stop');
var tag = document.createElement('script');
var song;

song = new Audio('audio.mp3');
song.volume = 0.25;
song.play()

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var muted = false;

function onYouTubeIframeAPIReady() {
    player = new YT.Player("youtube-player", {
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    player.setVolume(0);
  }


  discordButton.addEventListener("click", function() {
    copyToClipboard(Config.DiscordLink);
    showPopup();
  });


instagramButton.addEventListener("click", function() {
    copyToClipboard(Config.InstagramLink);
    showPopup();
});

range.addEventListener("input", function() {
    song.volume = this.value / 100;
  });

// Adiciona o evento de clique a cada botão
playButton.addEventListener("click", () => {
    song.play();
});
  
  pauseButton.addEventListener("click", () => {
    song.pause();
});
  
  stopButton.addEventListener("click", () => {
    song.pause();
    song.currentTime = 0;
});


function copyToClipboard(text) {
    const body = document.querySelector('body');
    const area = document.createElement('textarea');
    body.appendChild(area);
  
    area.value = text;
    area.select();
    document.execCommand('copy');
  
    body.removeChild(area);
}

function showPopup() {
    var popup = document.getElementById("myPopup");
    popup.classList.add("show");
    setTimeout(function(){
      popup.classList.remove("show");
    }, 3700);
}