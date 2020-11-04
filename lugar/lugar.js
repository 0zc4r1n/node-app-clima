const axios = require('axios');
const apikey = process.env['GOOGLE_APIKEY'];

const getLugarLatiLng = async(_direccion) => {
    const encodedURL = encodeURI(_direccion);

    const instance = axios.create({
        baseURL: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=${apikey}`,
        timeout: 1000
    });

    const respuesta = await instance.get();

    if (respuesta.data.results.length === 0)
        throw new Error(`No hay resultados para ${encodedURL}`);

    const data = respuesta.data.results[0];
    const direccion = data.formatted_address;
    const lat = data.geometry.location.lat;
    const lng = data.geometry.location.lng;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatiLng
}