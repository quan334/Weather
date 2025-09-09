document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('cityInput');
    const searchBtn = document.getElementById('searchBtn');
    const weatherInfo = document.getElementById('weatherInfo');
    const errorMessage = document.getElementById('errorMessage');

    async function getWeatherData(city) {
        try {
            // Get current weather
            const currentResponse = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );
            
            if (!currentResponse.ok) {
                throw new Error('City not found');
            }

            const currentData = await currentResponse.json();

            // Get forecast data for min/max temps
            const forecastResponse = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
            );
            
            const forecastData = await forecastResponse.json();

            // Get min and max temps for today from forecast
            const today = new Date().setHours(0, 0, 0, 0);
            const todayForecasts = forecastData.list.filter(item => {
                const itemDate = new Date(item.dt * 1000).setHours(0, 0, 0, 0);
                return itemDate === today;
            });

            const minTemp = Math.min(...todayForecasts.map(item => item.main.temp));
            const maxTemp = Math.max(...todayForecasts.map(item => item.main.temp));

            // Update the current data with forecast min/max
            currentData.main.temp_min = minTemp;
            currentData.main.temp_max = maxTemp;

            displayWeatherData(currentData);
            weatherInfo.classList.remove('hidden');
            errorMessage.classList.add('hidden');
        } catch (error) {
            weatherInfo.classList.add('hidden');
            errorMessage.classList.remove('hidden');
            errorMessage.textContent = error.message;
            errorMessage.classList.add('error-shake');
            setTimeout(() => {
                errorMessage.classList.remove('error-shake');
            }, 500);
        }
    }

    function displayWeatherData(data) {
        // Basic info
        document.getElementById('cityName').textContent = `${data.name}, ${data.sys.country}`;
        document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
        document.getElementById('weatherDescription').textContent = data.weather[0].description;
        
        // Additional temperature info
        document.getElementById('feelsLike').textContent = `Feels like: ${Math.round(data.main.feels_like)}°C`;
        document.getElementById('tempMinMax').textContent = 
            `Min: ${Math.round(data.main.temp_min)}°C | Max: ${Math.round(data.main.temp_max)}°C`;
        
        // Weather conditions
        document.getElementById('humidity').textContent = `${data.main.humidity}%`;
        document.getElementById('windSpeed').textContent = `${(data.wind.speed * 3.6).toFixed(1)} km/h`;
        document.getElementById('pressure').textContent = `${data.main.pressure} hPa`;
        document.getElementById('clouds').textContent = `${data.clouds.all}%`;
        
        // Sunrise/Sunset times
        const sunriseTime = new Date(data.sys.sunrise * 1000);
        const sunsetTime = new Date(data.sys.sunset * 1000);
        document.getElementById('sunrise').textContent = sunriseTime.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
        document.getElementById('sunset').textContent = sunsetTime.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
    }

    searchBtn.addEventListener('click', () => {
        const city = cityInput.value.trim();
        if (city) {
            getWeatherData(city);
        }
    });

    cityInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const city = cityInput.value.trim();
            if (city) {
                getWeatherData(city);
            }
        }
    });
});