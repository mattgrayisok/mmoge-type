/// <reference path="../node_modules/inversify/type_definitions/inversify-global.d.ts" />

'use strict'

import { Kernel } from "inversify";
import { ServerEngine } from "./Engines/ServerEngine";
import { ClientEngine } from "./Engines/ClientEngine";

export class MMOGClient{

  public engine : ClientEngine;

  constructor(){
    let kernel = new Kernel();
    this.engine = kernel.get<ClientEngine>("ClientEngine");
  }

}

export class MMOGServer{

  public engine : ServerEngine;

  constructor(){
    var kernel = new Kernel();
    this.engine = kernel.get<ClientEngine>("ServerEngine");
  }

}
