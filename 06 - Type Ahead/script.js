const input = document.getElementById("input");

const city = document.querySelector(".city");

const state = document.querySelector(".state");

const suggestions = document.querySelector(".suggestions");

async function fillInput() {
   
    const response = await fetch("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json")
    .then(response => response.json())
    .catch(error => console.log(error));
    
    const inputValue = input.value.toLowerCase();

    const filtered = response.filter((city) => city.city.toLowerCase().includes(inputValue));

    const cityData = filtered.map((filtered) => {

        const regex = new RegExp(inputValue, 'gi')

        const cityName = filtered.city.replace(regex,`<span class="hl">${inputValue}</span>`)

        const popFormate = filtered.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

        return  `<li class="city__item"><p class="citystate">${cityName}, ${filtered.state}</p><p>${popFormate}</p></li>`;
    });

    suggestions.innerHTML = cityData.join("");
    
    if (inputValue === "") {
        document.querySelectorAll(".city__item").forEach((item) => {
            suggestions.removeChild(item);
        });
        suggestions.append(city, state);
    }
}   

input.addEventListener("input", fillInput);

