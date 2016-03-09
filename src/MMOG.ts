'use strict'

import iocKernel = require("./inversify.config");
import { ServerEngine } from "./Engines/ServerEngine";
import { ClientEngine } from "./Engines/ClientEngine";
import { ClientConfig } from "./Config/ClientConfig";

export class MMOGClient{

  public engine : ClientEngine;

  constructor(host:string, port:number){

    //Setup config object
    let config = iocKernel.get<ClientConfig>("ClientConfig");
    config.host = host;
    config.port = port;

    this.engine = iocKernel.get<ClientEngine>("ClientEngine");
  }

}

export class MMOGServer{

  public engine : ServerEngine;

  constructor(){

    this.engine = iocKernel.get<ClientEngine>("ServerEngine");
  }

}
