let noClickCount = 0;
const noPhrases = [
    "No",
    "Are you sure?",
    "Pleassseeeeeeee",
    "I'm gonna cry",
    "Why are you still saying no",
    "Gay",
    "Ghey",
    "gHeY",
    "gaaaaayyyyy",
    "geeeey"
];

function changeMedia() {
    const videoElement = document.getElementById("invite");
    const imageElement = document.getElementById("rej");
    videoElement.style.display = "none";
    imageElement.style.display = "inline";
}

let imageIndex = 0;
const images = ["images/angy1.jfif", "images/angy2.jfif", "images/angy3.jfif", "images/angy4.jfif", "images/angy5.jfif", "images/angy6.jfif"];

function loopAngy() {
    document.getElementById("rej").src = images[imageIndex];
    imageIndex = (imageIndex + 1) % images.length;
}

function handleNo() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const question = document.getElementById('question');

    noClickCount++;
    let currentSize = 1 - (noClickCount * 0.05); // Shrink factor
    if (currentSize < 0.5) currentSize = 0.5; // Limit minimum size

    noBtn.style.transform = `scale(${currentSize})`;
    yesBtn.style.transform = `scale(${1 + (noClickCount * 0.3)})`;

    // Change No button text
    if (noClickCount < noPhrases.length) {
        noBtn.innerText = noPhrases[noClickCount];
    } else {
        noBtn.innerText = "GHEY"; // Stay at last phrase
    }

    changeMedia();
    loopAngy();

}

function handleYes() {
    document.body.innerHTML = `
        <div class="container">
            <video autoplay loop muted src="videos/Muah.mp4"></video>
            <h1>Love you Baebae! &#129293</h1>
        </div>
    `;
}
