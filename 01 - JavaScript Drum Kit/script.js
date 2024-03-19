
const buttons = document.querySelectorAll(".key");

buttons.forEach((button) => {

    const dataKey = button.dataset.key;
    let audio = document.querySelector(`.audio[data-key="${dataKey}"]`);

    button.addEventListener("click", (event) => {
        play(button, audio);
    })
})

document.addEventListener("keydown", function(event) {

    const pressedKey = event.key.toUpperCase();

    buttons.forEach((button) => {
        const kbd = button.querySelector("kbd");
        const buttonData = button.dataset.key; 
        let audio = document.querySelector(`.audio[data-key="${buttonData}"]`)

        if (pressedKey === kbd.innerHTML) {
            play(button,audio);
        }
    })
})

function play(button, audio) {
    button.classList.toggle("playing");
    setTimeout(() => {
        button.classList.toggle("playing");
    }, 500)
    audio.play();
}

