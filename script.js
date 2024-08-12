const countryName= document.querySelector(".countryName");
const temp= document.querySelector(".tempC");
const img=document.querySelector(".imgS");
const apiKey=
// "0af3be3f82a847cf9f9101259241208"
"c1bf9907f38fd1fe72bc7458d1e4e838";
const type=document.querySelector(".typeW")
const typeER=document.querySelector(".er")
document.querySelector(".clic").addEventListener('click',()=>{
    weather();
});
window.addEventListener("keydown",(x)=>{
    if(x.key=="Enter"){
        weather();
    }
})


function weather(){

    const valu=document.querySelector(".search").value;
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${valu}&appid=${apiKey}`)
    // fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${valu}`)
    .then((res)=>{
        if(!res.ok){
            typeER.style.display="flex";
        }else{
            typeER.style.display="none";
            return res.json();
        }
    }).then((data)=>{
        console.log(data);
        var cr=","+data.sys.country;
        countryName.textContent=data.name +cr;
        var typeW=data.weather[0].main.slice(0,3).toUpperCase();
        // console.log("typeW")
        type.innerHTML= data.weather[0].main.toUpperCase()
        var tem= Math.round(data.main.temp-273.15);
        temp.innerHTML=`${tem} ℃`
        if(typeW=="MIS"){
            img.setAttribute("src","mist.png")
        }
        else if(typeW=="RAI"){
            img.setAttribute("src","rain.png")
        }
        else if(typeW=="CLO"){
            img.setAttribute("src","clouds.png")
        }
        else if(typeW=="WIN"){
            img.setAttribute("src","wind.png")
        }
        else if(typeW="STR"){
            img.setAttribute("src","strom.png");
        }
    })
    
}
    
    
    