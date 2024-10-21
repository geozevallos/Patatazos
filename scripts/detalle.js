const video = document.querySelector(".film-banner video");
const popup = document.getElementsByClassName("popup")[0];
const btnPlay = document.getElementById("play-trailer");
const iframeVideo = document.getElementById("video-trailer");
const btnCerrar = document.getElementsByClassName("cerrar")[0];

video.addEventListener("mouseenter", () => {
  video.play();
});

video.addEventListener("mouseleave", () => {
  video.pause();
});

btnPlay.addEventListener("click", () => {
    popup.style.display = "flex";
});

btnCerrar.addEventListener("click", () => {
    popup.style.display = "none";
    iframeVideo.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
});
