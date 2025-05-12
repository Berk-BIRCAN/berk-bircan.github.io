const bootText = document.getElementById("boot-text");
const enterButton = document.getElementById("enter-button");
const messages = [
    "BIOS v1.04 Loading...",
    "Checking memory...",
    "Memory OK",
    "Initializing visual interface...",
    "Loading Berk Bircan Personal Site...",
    "Engineering // Music // Cats ready.",
    "System Online."
];

let index = 0;

function typeLine() {
    if (index < messages.length) {
        bootText.innerText += messages[index] + "\n";
        index++;
        setTimeout(typeLine, 1000);
    } else {
        enterButton.style.display = "inline-block";
    }
}

enterButton.addEventListener("click", function() {
    window.location.href = "main.html";  // Bir sonraki sayfaya yönlendirme (main.html henüz yok)
});

typeLine();
