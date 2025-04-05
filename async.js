
let promise = new Promise((resolve, reject) => {
    return resolve("this promise is resolved");
});

const flipkart = async () => {
    let city = document.getElementById("data").value;
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fcdbf33a031880a53f16cf345b7c760`);
    
    const jsonData = await res.json(); 
    let name = jsonData.name;
    let temp = jsonData.main.temp;
    let weather = jsonData.weather[0].main;

    document.getElementById("name").innerHTML = `${name}`;
    document.getElementById("temperature").innerHTML = `${temp}°F`;
    document.getElementById("weath").innerHTML = `${weather}`;

    const image = document.querySelector('.weather-box img');
    switch (weather){
    
        case 'Rain':
            image.src = '';
            break;        
        case 'Clear':
            image.src = './weatherImage/sunny.svg';
            break; 
        case 'Clouds':
            image.src = './weatherImage/cloudy.svg';
            break; 
        case 'Haze':
            image.src = './weatherImage/Haze.svg';
            break; 
        case 'Snow':
            image.src = './weatherImage/LightSnowV2.svg';
            break; 
    }
// }
// let key='bf7c504dbe03f3a33931bbbdc10161b0ecfd43ae4b37d8829dbfe63f37e71912';

// const flipkart=async()=>{
// let res = await fetch(`https://apiv2.api-cricket.com/?method=get_livescore&APIkey=${key}`);

// console.log(res);

// const jsonData=await res.json();
// console.log(jsonData.result[0]);

// }