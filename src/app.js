const imageInputForm = document.querySelector("#image-form");
const imageTag = document.querySelector("#image");

function handleImageSubmit(event) {
  event.preventDefault();
  const imageFile = event.target[0].files[0];
  imageTag.src = URL.createObjectURL(imageFile);
}

imageInputForm.addEventListener("submit", handleImageSubmit);
