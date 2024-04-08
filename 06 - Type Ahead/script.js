

const input = document.getElementById("input");

const city = document.querySelector(".city");

async function fillInput() {
    const endpoint = await fetch("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json");

    const response = await endpoint.json();

    const inputValue = input.value.toLowerCase();

    const filtered = response.filter((city) => city.city.toLowerCase().includes(inputValue));

    city.innerHTML = JSON.stringify(filtered)
}   


input.addEventListener("change", fillInput);

