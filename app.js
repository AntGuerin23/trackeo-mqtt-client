#!/usr/bin/env node

const mqtt = require("./mqtt")
mqtt.waitForPositions(function (client, payload) {
    console.log(payload.toString());
    //Write payload in database
});
