/// CORRECT SOLUTION JEN INPUT TARGETUJE VARIABLES.. 

const input = document.querySelectorAll(".input");

input.forEach(input => {
    input.addEventListener("change", () => {
        const dataSizing = input.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${input.name}`, `${input.value}` + `${dataSizing}`);
    })
});


/// JEDNODUŠŠÍ SOLUTION S TARGETOVÁNÍM VARIABLES (ALE POŘÁD PRACUJU S KONKRÉTNÍMA ELEMENTAMA)

// 
// document.getElementById("blur").addEventListener("change", () => {
//     document.documentElement.style.setProperty("--blur", `${document.getElementById("blur").value}px`);
// });
// 
// document.getElementById("spacing").addEventListener("change", () => {
//     document.documentElement.style.setProperty('--range', `${document.getElementById("spacing").value}px`);
// });
// 
// 
// document.getElementById("base").addEventListener("change", () => {
//     document.documentElement.style.setProperty('--color', `${document.getElementById("base").value}`);
// });



/// SLOŽITÝ SOLUTION S TARGETOVÁNÍM KONRÉTNÍCH ELEMENTŮ

//const image = document.querySelector(".image");
//
//const colorSpan = document.querySelector(".hl");
//
//document.getElementById("base").addEventListener("change", () => {
//    colorSpan.style.color = document.getElementById("base").value;
//    image.style.borderColor = document.getElementById("base").value;
//});
//
//
//document.getElementById("spacing").addEventListener("change", () => {
//    image.style.marginLeft = `${document.getElementById("spacing").value}px`;
//});
//
//
//document.getElementById("blur").addEventListener("change", () => {
//    image.style.filter = `blur(${document.getElementById("blur").value}px)`
//});
