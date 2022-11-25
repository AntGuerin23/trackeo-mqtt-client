const database = require('./database');

exports.writeLocation = async function(location) {
    try {
        const [latitude, longitude] = location.toString().split(',');
        const validation = '^-*[1-9]+[.]*[1-9]*$';

        if (!checkIfFloat(latitude) || !checkIfFloat(longitude)) {
           return; 
        }
        await database.insertOne('locations', {
            latitude: parseFloat(latitude), 
            longitude: parseFloat(longitude)
        }); 
    } catch (error) {
        console.log(error);
    }
}

function checkIfFloat(value) {
    return !isNaN(parseFloat(value));
}
