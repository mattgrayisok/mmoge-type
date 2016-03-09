/// <reference path="../node_modules/inversify/type_definitions/inversify-global.d.ts" />
'use strict';

import WebSocket = require('ws');
import models = require('./models');
import { Kernel } from "inversify";

var kernel = new Kernel();
//kernel.bind<INinja>("INinja").to(Ninja);
//kernel.bind<IKatana>("IKatana").to(Katana);
//kernel.bind<IShuriken>("IShuriken").to(Shuriken).inSingletonScope();

var testObj = new models.TestObject();

var engine = new models.MMOGEngine();
engine.registerObject(testObj);

/*var port: number = process.env.PORT || 3000;
var WebSocketServer = WebSocket.Server;
var server = new WebSocketServer({ port: port });

server.on('connection', ws => {
	ws.on('message', message => {
		try {
			var userMessage: models.UserMessage = new models.UserMessage(message);
			broadcast(JSON.stringify(userMessage));
		} catch (e) {
			console.error(e.message);
		}
	});
});

function broadcast(data: string): void {
	server.clients.forEach(client => {
		client.send(data);
	});
};

console.log('Server is running on port', port);*/
