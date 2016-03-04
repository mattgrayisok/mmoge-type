'use strict';

interface Message{
    name: string,
    message: string
}

export class UserMessage implements Message{
    private data: {name:string; message: string};
    
    constructor (payload:string){
        
        var data = JSON.parse(payload);
        
        if(!data.name || !data.message){
            throw new Error('Missing datums in payload: '+payload);
        }
        
        this.data = data;
    }
    
    get name(): string{
        return this.data.name;
    }
    
    get message(): string{
        return this.data.message;
    }
}