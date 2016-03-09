
import { IBinding, Kernel } from "inversify";
import { ClientConfig } from "./Config/ClientConfig";

var kernel = new Kernel();

// bindings
kernel.bind<ClientConfig>("ClientConfig").to(ClientConfig).inSingletonScope();

export = kernel;
