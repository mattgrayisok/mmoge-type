'use strict'

export class ClientConfig{

  public _host:string;
  public _port:number;

  constructor(host:string = 'testserver.com', port:number = 3000){
    this._host = host;
    this._port = port;
  }

  get host(): string {
    return this._host;
  }

  set host(val:string) {
    this._host = val;
  }

  get port(): number {
    return this._port;
  }

  set port(val:number) {
    this._port = val;
  }

}
