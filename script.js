/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

// Pasirenkame elementus
const form = document.querySelector("form");
const input = document.querySelector("#search");
const output = document.querySelector("#output");

// Priskiriame funkciją formos pateikimui
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Sustabdome formos numatytąjį elgesį

  // Konvertuojame svorį ir priskiriame reikšmes kintamiesiems
  const kg = parseFloat(input.value);
  const lb = kg * 2.2046;
  const g = kg / 0.001;
  const oz = kg * 35.274;

  // Atvaizduojame rezultatus html dokumente
  output.innerHTML = `
    <p>${kg} kg = ${lb.toFixed(2)} lb</p>
    <p>${kg} kg = ${g.toFixed(2)} g</p>
    <p>${kg} kg = ${oz.toFixed(2)} oz</p>
  `;
});
