#!/usr/bin/env node
const locationsBroker = require('./locationBroker');
const mqtt = require("./mqtt")

mqtt.waitForPositions(async function (client, payload) {
    console.log(payload.toString());
    await locationsBroker.writeLocation(payload);
});
