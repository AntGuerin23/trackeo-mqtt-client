module.exports.waitForPositions = waitForPositions;

function waitForPositions(callback) {
    const client = setupClient();
    sub(client, "tracker");
    listenForMessages(client, callback);
}

function sub(client, topic) {
	client.subscribe([topic], () => {
		console.log(`Subscribed to /${topic}`);
	})
}

function listenForMessages(client, callback) {
	client.on('message', (topic, payload) => callback(topic, payload));
}

function setupClient() {
    const mqttLibrary = require("mqtt");
	const connectionUrl = `mqtt://localhost:1883`
	const client = mqttLibrary.connect(connectionUrl,{
		clean: true,
		connectTimeout: 4000,
		reconnectPeriod: 100
	});
    return client
}
