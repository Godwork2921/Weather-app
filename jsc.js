        async function getWeather() {
            const city = document.getElementById('city').value;
            const apiKey = 'df603513049d4fb8c8b0d83ec65f6741';
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                
                if (data.cod === '404') {
                    document.getElementById('weather-info').innerText = 'City not found!';
                } else {
                    const weatherDescription = data.weather[0].description;
                    const temperature = data.main.temp;
                    const humidity = data.main.humidity;
                    document.getElementById('weather-info').innerHTML = `
                        <h2>${data.name}</h2>
                        <p>Temperature: ${temperature} °C</p>
                        <p>Humidity: ${humidity}%</p>
                        <p>Condition: ${weatherDescription}</p>
                    `;
                }
            } catch (error) {
                console.error('Error fetching weather data:', error);
                document.getElementById('weather-info').innerText = 'Error fetching data!';
            }
        }