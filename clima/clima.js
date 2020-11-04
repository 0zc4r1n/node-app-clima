const axios = require('axios');
const apikey = process.env['OPENWEATHER_APIKEY'];

const getClima = async(lat, lng) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apikey}&units=metric`;

    const respuesta = await axios.get(url);

    return respuesta.data.main.temp;
}

module.exports = {
    getClima
}