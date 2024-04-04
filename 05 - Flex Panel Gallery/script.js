const panels = document.querySelectorAll(".panel");

const panelSwitch = (event) => {
    panels.forEach((panel) => {
        if (panel.contains(event.target)) {
            panel.classList.toggle("panel--hovered");
            panel.querySelector(".p__one").classList.toggle("p__one--closed")
            panel.querySelector(".p__third").classList.toggle("p__third--closed")
        } else {
            panel.classList.remove("panel--hovered");
            panel.querySelector(".p__one").classList.add("p__one--closed")
            panel.querySelector(".p__third").classList.add("p__third--closed")
        }
    })
}

panels.forEach((panel) => {
    panel.addEventListener("click", panelSwitch);
});


