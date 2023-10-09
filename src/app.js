const imageInputForm = document.querySelector("#image-form");
const imageTag = document.querySelector("#image");
const ratioColorWrapper = document.querySelector("#ratio-color-wrapper");
const widthInput = ratioColorWrapper.querySelector("#ratio-width");
const heightInput = ratioColorWrapper.querySelector("#ratio-height");
const colorInput = ratioColorWrapper.querySelector("#color");
const wallpaperGenerateButton = document.querySelector("#wallpaper-generate");

function handleImageSubmit(event) {
  event.preventDefault();
  const imageFile = event.target[0].files[0];
  imageTag.src = URL.createObjectURL(imageFile);
}

function handleGenerateWallpaper() {
  console.log(widthInput, heightInput, colorInput);
}

imageInputForm.addEventListener("submit", handleImageSubmit);
wallpaperGenerateButton.addEventListener("click", handleGenerateWallpaper);
