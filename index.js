let weather={
  "apikey": "76f40ec4e78e77b03171743c0aace80e",
  //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  
  fetchWeather(city){
     fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+this.apikey)
     .then((response)=>response.json())
     .then((data)=>this.display(data));
  },
  display:function(data){ //rhs is what classes we have specified in html document and lhs are those given by api key in json file.
    const{name}=data;
    const{icon,description}=data.weather[0];
    const{temp,humidity}=data.main;
    const{speed}=data.wind;
    document.querySelector(".city").innerText=name;
    document.querySelector(".icon").src="http://openweathermap.org/img/wn/"+icon+".png";
    document.querySelector(".description").innerText=description;
    document.querySelector(".temp").innerText=temp+"°C";
    document.querySelector(".humidity").innerText="Humidity:"+humidity+"%";
    document.querySelector(".wind").innerText="Wind speed:"+speed+"km/h";
  },
  search:function(){
this.fetchWeather(document.querySelector(".search-bar").value);
  }
};
document.querySelector(".search button").addEventListener("click",function()
{
   weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup",function(e){
  if(e.key=="Enter"){
    weather.search();
  }
});
weather.fetchWeather("Denver");