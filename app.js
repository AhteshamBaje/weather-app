let key = "dcb74be869d74497915112401241710" ; 

const BASE_URL = "http://api.weatherapi.com/v1/current.json?";



const getWeather = document.getElementById('getWeather').addEventListener("click", async () => {
    const city = document.getElementById("city").value;
    const result = document.getElementById("weatherResult");
    console.log(city);
    
    // const weatherResult = document.getElementById("weatherResult");

    let ress =  await fetch(`http://api.weatherapi.com/v1/current.json?key=dcb74be869d74497915112401241710&q=${city}&aqi=no`)
    // let res = await fetch(`${BASE_URL}key=${key}&q=${city}&aqi=no`);
    let data = await ress.json();
    result.innerText = data.current.temp_c;
    // console.log(res);
    // console.log();


});

    
