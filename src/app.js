const imageInputForm = document.querySelector("#image-form");
const imageTag = document.querySelector("#image");
const wallpaperGenerateButton = document.querySelector("#wallpaper-generate");
const downloadButton = document.querySelector("#download");

function handleImageSubmit(event) {
  event.preventDefault();
  
  const imageFile = event.target[0].files[0];
  imageTag.src = URL.createObjectURL(imageFile);
}

function handleGenerateWallpaper() {
  const widthInput = document.querySelector("#ratio-width");
  const heightInput = document.querySelector("#ratio-height");
  const colorInput = document.querySelector("#color");
  const newResolution = calcalateNewRatio(Number(widthInput.value), Number(heightInput.value), imageTag.width, imageTag.height);
  drawCanvas(newResolution, colorInput);
}

function drawCanvas(newResolution, colorInput) {
  const canvas = document.querySelector("canvas");
  canvas.width = newResolution[0];
  canvas.height = newResolution[1];
  const ctx = canvas.getContext("2d");
  ctx.drawImage(imageTag, 0, 0);
  imageTag.classList.add("hidden");
  downloadButton.classList.remove("hidden");
  if (newResolution[0] !== imageTag.width) {
    const diff = newResolution[0] - imageTag.width;
    ctx.fillStyle = colorInput.value;
    ctx.fillRect(0, 0, Math.floor(diff/2), imageTag.height);
    ctx.drawImage(imageTag, Math.floor(diff/2), 0); 
    ctx.fillRect(Math.floor(diff/2)+imageTag.width, 0, Math.ceil(diff/2), imageTag.height);
  } else {
    const diff = newResolution[1] - imageTag.height;
    ctx.fillStyle = colorInput.value;
    ctx.fillRect(0, 0, imageTag.width, Math.floor(diff/2));
    ctx.drawImage(imageTag, 0, Math.floor(diff/2));
    ctx.fillRect(0, Math.floor(diff/2)+imageTag.height, imageTag.width, Math.ceil(diff/2));
  }
}

function handleImageDownload() {
  const canvasURL = document.querySelector("canvas").toDataURL();
  const downloadATag = document.createElement('a');
  downloadATag.href = canvasURL;

  downloadATag.download = "mfw";

  downloadATag.click();
  downloadATag.remove();
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
downloadButton.addEventListener("click", handleImageDownload);