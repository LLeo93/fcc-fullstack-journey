const citySelect = document.getElementById('city-select');
const weatherBtn = document.getElementById('get-weather-btn');
const weatherDisplay = document.getElementById('weather-display');

const getWeather = async (city) => {
  try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`,
    );
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
const showWeather = async (city) => {
  const data = await getWeather(city);

  if (!data) {
    alert('Something went wrong, please try again later.');
    return;
  }
  const { name, main, weather, wind } = data;
  document.getElementById('location').textContent = name || 'N/A';
  document.getElementById('weather-main').textContent =
    weather[0]?.main || 'N/A';
  document.getElementById('weather-icon').src = weather[0]?.icon || '';
  document.getElementById('weather-icon').alt =
    weather[0]?.description || 'meteo';

  document.getElementById('main-temperature').textContent = main?.temp ?? 'N/A';
  document.getElementById('feels-like').textContent = main?.feels_like ?? 'N/A';
  document.getElementById('humidity').textContent = main?.humidity ?? 'N/A';

  document.getElementById('wind').textContent = wind?.speed ?? 'N/A';
  document.getElementById('wind-gust').textContent = wind?.gust ?? 'N/A';
  weatherDisplay.classList.remove('hidden');
};
weatherBtn.addEventListener('click', () => {
  const selectedCity = citySelect.value;
  if (selectedCity) {
    showWeather(selectedCity);
  }
});
