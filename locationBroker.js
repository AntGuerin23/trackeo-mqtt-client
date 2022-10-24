const database = require('./database');

exports.writeLocation = async function(location) {
    try {
        const [latitude, longitude] = location.toString().split(',');
        const validation = '^[1-9]+[.]*[1-9]*$';
        if (!latitude.match(validation) || !longitude.match(validation)) {
            console.log('Error : Data is not formatted correctly, returning...');
            return;
        }
        await database.insertOne('locations', {
            latitude: latitude, 
            longitude: longitude
        }); 
    } catch (error) {
        console.log(error);
    }
}
