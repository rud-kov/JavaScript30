const panels = document.querySelectorAll(".panel");

const panelSwitch = (event) => {
    panels.forEach((panel) => {
        if (panel.contains(event.target)) {
            panel.classList.toggle("panel--hovered");
        } else {
            panel.classList.remove("panel--hovered");
        }
    })
};

panels.forEach((panel) => {
    panel.addEventListener("click", panelSwitch);
    panel.addEventListener("transitionend", toggleActive = (e) => {
        if (e.propertyName.includes("flex")) {
            panel.querySelector(".p__one").classList.toggle("p__one--closed");
            panel.querySelector(".p__third").classList.toggle("p__third--closed");
        }
    })
});