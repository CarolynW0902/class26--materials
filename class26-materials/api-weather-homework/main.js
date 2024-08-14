/*click the weather button and have an image, the name of the city that was inputed and the weather condition for that city to show */

document.querySelector('button').addEventListener('click',getTheWeather)

function getTheWeather(){
  let city = document.querySelector('input').value;

  fetch("https://api.weatherstack.com/current?access_key=af6f4cc3c592f821c9806aa0ee7ecc9e&query=" + encodeURI(city))
  .then(res => res.json()) //parse response as JSON
  .then(data => {
    console.log(data);
    document.querySelector('h2').innerText = data.request.query;
    document.querySelector('img').src = data.current.weather_icons
    document.querySelector('p').innerText = data.current.weather_descriptions
   })
   .catch(err => {
    console.log(`error ${err}`)
   })
}

