const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

console.log(argv.direccion);

const getInfo = async(direccion) => {
    try {
        const coordenadas = await lugar.getLugarLatiLng(argv.direccion);
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng);

        return `El clima de ${coordenadas.direccion} es de ${temperatura} grados Celsius`;
    } catch (e) {
        throw new Error(e);
    }
};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);