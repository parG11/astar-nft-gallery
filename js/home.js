const collectionImage = document.getElementById("collections-demo");

const imageExt = ["webp", "webp", "svg", "webp", "webp", "webp", "webp"];
let imageId = 1;

setInterval(() => {
  collectionImage.setAttribute(
    "src",
    `./images/collectionRotation/${(imageId % 7) + 1}.${imageExt[imageId % 7]}`
  );
  imageId++;
}, 1000);
