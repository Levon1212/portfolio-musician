const images = [
    "assets/images/about/image3.jpeg",
    "assets/images/about/image4.jpeg",
    "assets/images/about/image5.jpeg",
    "assets/images/about/image1.jpeg",
    "assets/images/about/image2.jpeg",
];

let currentImageIndex = 0;
const imageElement = document.getElementById("about-image");

setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const newImageUrl = images[currentImageIndex];
    imageElement.src = newImageUrl;
}, 700);