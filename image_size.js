let warningMessageElement = document.getElementById("warningMessage");
let imageWidthElement = document.getElementById("imageWidth");
let imageElement = document.getElementById("image");


let originalImageWidth = 200;
let minImageWidth = 100;
let maxImageWidth = 300;


imageElement.style.width = originalImageWidth + "px";
imageWidthElement.textContent = originalImageWidth + "px";



function onIncrement() {
    if (originalImageWidth >= maxImageWidth) {
        warningMessageElement.textContent = "Too Big, Please Decrease the size";
    } else {
        originalImageWidth = originalImageWidth + 10;
        let updatedImageWidth = originalImageWidth + "px";

        imageElement.style.width = updatedImageWidth;
        imageWidthElement.textContent = updatedImageWidth;

    }
}

function onDecrement() {
    if (originalImageWidth <= minImageWidth) {
        warningMessageElement.textContent = "Too loo, Please Increase the size";
    } else {
        originalImageWidth = originalImageWidth - 5;
        let updatedImageWidth = originalImageWidth + "px";

        imageElement.style.width = updatedImageWidth;
        imageWidthElement.textContent = updatedImageWidth;
        warningMessageElement.textContent = "";
    }
}