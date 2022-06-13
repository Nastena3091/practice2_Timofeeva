const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');
const capital_btn = document.getElementById('cpt_btn');

const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');
const cpt_result = document.getElementById('cpt_result');
const rancap = document.getElementById('rancap');

cat_btn.addEventListener('click', getRandomCat);
dog_btn.addEventListener('click', getRandomDog);
cpt_btn.addEventListener('click', getRandomCapitals);

function getRandomCat() {
  fetch('https://aws.random.cat/meow')
    .then(res => res.json())
    .then(data => {
      cat_result.innerHTML = `<img src=${data.file} alt="cat" />`
    });
}

function getRandomDog() {
  fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(data => {
      if(data.url.includes('.mp4')) {
        getRandomDog();
      }
      else {
        dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
      }
    });
}

function getRandomCapitals(){
  fetch("https://restcountries.com/v3.1/region/europe")
        .then(res => res.json())
                .then(data => {
                    let list = '';
                    data.forEach(country => {
            list += `<li>${ country.capital[0] }</li>`;  
            const long = Math.ceil(list.length/1.97);
            const firstColumn = list.slice(0,long)
            const secondColumn = list.slice(-long)

            cpt_result1.innerHTML = firstColumn;
            cpt_result2.innerHTML = secondColumn;
                    });
                });
}