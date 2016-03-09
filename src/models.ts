'use strict';
import WebSocket = require('ws');

interface IClientControlled{
    gatherInput() : InputState;
    applyInput(state : InputState) : void;
    reconcileTowards(serverState:ObjectState, clientState:ObjectState, currentState:ObjectState) : ObjectState;

}

interface ISimulatedObject{
    updateFromState(state : ObjectState) : void;
    interpolateStates(state1 : ObjectState, state2 : ObjectState, delta : number) : ObjectState;
    getCurrentState() : ObjectState;
    applyLoopLogic() : void;
}

export class InputState{
  private state: {};
}

export class ObjectState{
  private state: {};
}

export class MMOGEngine{

  constructor(){

  }

  startServerListener(){

  }

  registerObject(object:ISimulatedObject) : void{

  }

  registerAsClientControlled(object:IClientControlled) : void{

  }

}

export class MMOGServerListener{

  constructor(port: number = 3000){
    var WebSocketServer = WebSocket.Server;
    var server = new WebSocketServer({ port: port });

    server.on('connection', ws => {

      this.registerListenersOnNewSocket(ws);

    });

  }

  registerListenersOnNewSocket(ws: WebSocket){

    ws.on('message', message => {

    });

  }

}

export class TestObject implements ISimulatedObject{

  updateFromState(state : ObjectState) : void {

  }

  interpolateStates(state1 : ObjectState, state2 : ObjectState, delta : number) : ObjectState {
    var obj = new ObjectState;
    return obj;
  }

  getCurrentState() : ObjectState {
    var obj = new ObjectState;
    return obj;
  }

  applyLoopLogic() : void{

  }

}
