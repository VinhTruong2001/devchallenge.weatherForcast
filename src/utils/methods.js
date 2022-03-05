export const getWeatherIcon = (weather_state_name) => {
    if (weather_state_name === undefined || !weather_state_name) return;
    return weather_state_name.toLowerCase().replace(' ', '');
}

export const getTemperature = (temperature = 0, degreeUnit = 0) => {
    if (degreeUnit === 0)
        return Math.round(temperature);
    return Math.round(temperature*1.8 + 32)
}

export const getDateFormat = (time, index = 0) => {
    let today = time ? new Date(time) : new Date();
    if (index != 0) {
        today.setDate(today.getDate() + index);
    }
    const dateFormated = today.toString().split(' ');
    return `${dateFormated[0]}, ${dateFormated[2]} ${dateFormated[1]}`;
}