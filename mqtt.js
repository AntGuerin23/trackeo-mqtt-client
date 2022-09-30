const mqttLibrary = require("mqtt");

const host = "localhost"
const port = "1883"

const connectionUrl = `mqtt://${host}:${port}:`

const client = mqttLibrary.connect(connectionUrl,{
	clean: true,
	connectTimeout: 4000,
	reconnectPeriod: 100
});

const topic = "tracker";

sub(client, topic)

client.on('message', (topic, payload) => {
  console.log('Received Message:', topic, payload.toString())
})

function sub(client, topic) {
	client.subscribe([topic], () => {
		console.log(`Subscribed to ${topic}`);
	})
}
