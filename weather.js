
const API_KEY = `3265874a2c77ae4a04bb96236a642d2f` 
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

let search=document.getElementById("search")
let form=document.querySelector("form")
let weather=document.querySelector("#weather")


form.addEventListener("submit",function(event){
    let city=search.value
    event.preventDefault();
    async function getweather(){
       await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then((res)=>{
            return res.json()
        }).then((result)=>{
            console.log(result)
            document.getElementById("weather").innerHTML=`
            <div id="nm">${result.name}</div>
            <div id="details">
<div>
            <img src="https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png" alt="" />
          </div>
          <div id=""><h2>${Math.round(result.main.temp)}°C</h2></div>
          <div id=""><h4>${result.weather[0].main}</h4></div>
          </div>
          `
        
        }).catch((error)=>{
            console.log(error)
        })   
    }
    getweather()
    
})


