/* **Consegna:**
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato. */

/* **MILESTONE 2**
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
 */

// array
const images = [
  '01.jpg',
  '02.jpg',
  '03.jpg',
  '04.jpg',
  '05.jpg'];
  // dati
  let imagesTags = '';
  const slider = document.querySelector('.c-container');
  // ciclo for + template literal
for(let i = 0; i < images.length; i++){
  imagesTags += `
    <img src="img/${images[i]}" alt="${images[i]}">
  `
}

document.querySelector('imagesTags').classList.add('hide');

document.querySelector('img:nth-child(' + i + ')').classList.add('hide')

slider.innerHTML = imagesTags;