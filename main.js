(()=>{"use strict";const e=new class{constructor(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.isCelcius=e}toggleTemp(){this.isCelcius=!this.isCelcius}getTempStatus(){return this.isCelcius}};let t="";async function n(n){n=n||t;try{const c=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=db7ac4296d854558ab2174921240503&q=${n}`,{mode:"cors"});if(400===c.status)return void alert("This city does not exist!");const o=await c.json();console.log(o);const r=o.location.name;!function(t){const n=e.getTempStatus(),c=t.current.condition.icon,o=t.location.name,r=n?`${Math.round(t.current.temp_c)}℃`:`${Math.round(t.current.temp_f)}℉`,a=n?`${Math.round(t.forecast.forecastday[0].day.maxtemp_c)}℃`:`${Math.round(t.forecast.forecastday[0].day.maxtemp_f)}℉`,i=n?`${t.forecast.forecastday[0].day.mintemp_c}℃`:`${t.forecast.forecastday[0].day.mintemp_f}℉`,d=t.current.condition.text,s=n?`${t.current.feelslike_c}℃`:`${t.current.feelslike_f}℉`;document.querySelector(".currentWeatherIcon").src=c,document.querySelector(".city").textContent=o,document.querySelector(".currentTemp").textContent=r,document.querySelector(".currentMaxTemp").textContent=`High: ${a}`,document.querySelector(".currentMinTemp").textContent=`Low: ${i}`,document.querySelector(".currentCondition").textContent=d,document.querySelector(".feelsLike").textContent=s}(o),t=r}catch(e){console.log("An error occurred while fetching weather data:",e)}}function c(e){e.preventDefault();const t=document.querySelector("#searchInput").value.trim();if(""===t)return alert("Enter something!🙄"),!1;n(t)}async function o(){const{lat:e,lon:t}=await async function(){const e=await new Promise(((e,t)=>{navigator.geolocation.getCurrentPosition(e,t)}));return{lat:e.coords.latitude,lon:e.coords.longitude}}();n(`${e}, ${t}`)}function r(e,t){const n=document.createElement("div");return n.classList.add(e),t.appendChild(n),n}function a(e,t){const n=document.createElement("div");return n.classList.add(e),t.appendChild(n),n}!function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("searchBarContainer"),e.appendChild(t);const n=document.createElement("form");n.id="searchBar",t.appendChild(n);const o=document.createElement("input");o.placeholder="Enter your city!",o.type="text",o.autocomplete="off",o.id="searchInput",n.appendChild(o);const r=document.createElement("input");r.type="submit",r.value="Search!",n.appendChild(r),n.addEventListener("submit",c)}(),function(){const e=document.querySelector(".searchBarContainer"),t=document.createElement("div");e.appendChild(t);const n=document.createElement("button");n.id="localWeatherBtn",n.textContent="Local Weather",t.appendChild(n),t.addEventListener("click",o)}(),function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("weatherCardContainer"),e.appendChild(t);const n=r("weatherIconContainer",t),c=document.createElement("img");c.classList.add("currentWeatherIcon"),c.alt="weather icon",n.appendChild(c);const o=r("weatherDescriptionContainer",t);a("city",o),a("currentTemp",o),a("currentMaxTemp",o).textContent="High:",a("currentMinTemp",o).textContent="Low:",a("currentCondition",o),a("feelsLike",o).textContent="Feels like:"}(),function(){const t=document.querySelector("#content"),c=document.createElement("div");c.classList.add("toggleTempContainer"),t.appendChild(c);const o=document.createElement("button");o.textContent="Toggle ℃/℉",o.addEventListener("click",(()=>{e.toggleTemp(),n()})),c.appendChild(o)}(),n("Vienna")})();