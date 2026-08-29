function showSurprise() {
    const surprise = document.getElementById("surprise");

    surprise.scrollIntoView({
        behavior: "smooth"
    });
}

function openLetter() {
    const letter = document.getElementById("letter");

    letter.classList.toggle("show");

    if (letter.classList.contains("show")) {
        setTimeout(() => {
            letter.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 100);
    }
}