function weatherApp(inputCity) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputCity +
      "&appid=0e96e4fea06dc64a6aa7bd348a63a25c"
  )
    .then((res) => res.json())
    .then((data) => {
      const city = data.name;
      const temperature = data.main.temp;
      const temp = toDegree(temperature);
      const description = data.weather[0].description;
      const code = data.weather[0].icon;
      document.getElementById("city").innerHTML = city;
      document.getElementById("temp").innerHTML = temp;
      document.getElementById("descp").innerHTML = description;
      document
        .getElementById("icon")
        .setAttribute(
          "src",
          `https://openweathermap.org/img/wn/${code}@2x.png`
        );
    });
}
document.getElementById("button").addEventListener("click", function () {
  const inputCity = document.getElementById("city-name").value;
  weatherApp(inputCity);
});
const toDegree = (temp) => (Number(temp) - 273).toFixed(2);
weatherApp("Dhaka");
