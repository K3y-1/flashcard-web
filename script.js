function main() {
    let flashcards = document.getElementsByClassName('flashcard');
    for (let element of flashcards) {
        element.onclick = (e) => {
            element.style = "animation: flashcard-click-anim 0.3s;"
            setTimeout(() => {
                element.style = "animation: none;"
            }, 300);
        }
    }
}

window.onload = (e) => {
    main();
}