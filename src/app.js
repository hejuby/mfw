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
  const newResolution = calcalateNewRatio(Number(widthInput.value), Number(heightInput.value), imageTag.width, imageTag.height);
  const canvas = document.querySelector("canvas");
  canvas.width = newResolution[0];
  canvas.height = newResolution[1];
  const ctx = canvas.getContext("2d");
  ctx.drawImage(imageTag, 0, 0);
  imageTag.classList.add("hidden");
  
}

function calcalateNewRatio(ratioWidth, ratioHeight, imageWidth, imageHeight) {
  const ay = ratioWidth * imageHeight;
  const bx = ratioHeight * imageWidth;
  if (ay < bx) {
    return [imageWidth, Math.round(bx/ratioWidth)];
  } else if (ay > bx) {
    return [Math.round(ay/ratioHeight), imageHeight];
  } else {
    return [imageWidth, imageHeight];
  }
}

imageInputForm.addEventListener("submit", handleImageSubmit);
wallpaperGenerateButton.addEventListener("click", handleGenerateWallpaper);
