const btn = document.querySelector('.btn');
btn.addEventListener('click', search);

function search() {
	let city = document.getElementById('search-box').value;
	let key = '9cd87d5e9797d00ff537d04ec092b12a';
	const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}`;
	checkweather(key, url);
}

async function checkweather(key, url) {
	try {
		const imgdiv = document.querySelector('.image');
		const tempDiv = document.querySelector('#temp');
		const condDiv = document.querySelector('.condition');
		const cityDiv = document.querySelector('.city');
		const humidDiv = document.querySelector('.humid-val');
		const windDiv = document.querySelector('.wind-val');

		const response = await fetch(url + `&appid=${key}`);
		const res = await response.json();

		const name = res.name;
		const condition = res.weather[0].main.toLowerCase();
		const temp = res.main.temp;
		const humid = res.main.humidity;
		const wind = res.wind.speed;
		const imgurl = `url(images/${condition}.png)`;

		// console.log(condition);

		imgdiv.style.backgroundImage = imgurl;
		tempDiv.innerHTML = `${temp}<sup>0</sup>C`;
		condDiv.innerHTML = condition;
		cityDiv.innerHTML = name;
		humidDiv.innerHTML = `${humid} %`;
		windDiv.innerHTML = `${wind} km/h`;
	}
	catch (err) {
		alert(err);
	}
}


// fetch(url + `&appid=${key}`)
// .then((data)=>{
//     return data.json();
// })
// .then((res)=>{
//     console.log(res.main.temp);
// })
// .catch((e)=>{
//     console.log(e);
// })