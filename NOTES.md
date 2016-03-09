# Interface

## ClientControlledInterface
- `gatherInput() : InputState`
 - Gathers current input state (could subclass input states?)
- `applyInput(input:InputState)`
 - Add code here to apply an inputState in whatever way that needs doing - applying forces to a physics model probably
- `reconcileTowards(serverStateInHistory, clientStateInHistory, currentState) : reconciledCurrentState`
 - Given a historical server state and client state, calculate any required updates to the current state. This can be done by re-running the simulation (maybe) or adjusting the current state towards the expected values... If we are re-running the simulation we'll need a record of all past input states for objects and make those available here.
 - Only called on client


## SimulatedObjectInterface
- `updateFromState(state:ObjectState)`
 - Provides a state for this object. Should use this to update any associated physics objects.
 - Only called using reconciliation states for client simulated objects
 - Never called on server - everything is simulated
- `interpolateStates(state1, state2, delta) : interpolatedState`
 - delta can be 0 <> 1 for interpolation, >1 for extrapolation
- `getCurrentState() : currentState`
 - Returns the current state of this object ready to be sent out to clients
 - Only called on server
- `applyLoopLogic()`
 - Applies any logic that needs to be applied on every physics loop. This will be the majority of the object specific implementation. Should do anything that isn't directly controlled by input states (friction, thrust for projectiles, health monitoring, turret rotation and firing etc)
 - Called for everything on server. Only called for client controlled objects on client

## Engine
- `registerObject(object:SimulatedObjectInterface)`
 - Allows an object to be added to the simulation
 - Behind the scenes - sends the object off to the server where it is checked and has an ID assigned. The object would then be included in future world state updates.
 - Can also be called server side to add random objects to the simulation without the push to itself.
- `registerAsClientControlled(object:ClientControlledInterface)`
 - Called on the client to flag an object as client controlled.
 - Can only be called on an object that has previously been registered with the server. Need to tell the server that the object has become client controlled.


 Need a main loop somewhere to force tick the physics engine. Perhaps allow registration of multiple clocks which pass in a worldstate object which can be queried for values in the current tick. Lazy calculated values pulled from the worldstate would be cool.


 On the client we need to be able to render at any given time. So we need a getWorldState function or a clock that passes it in. This can be used for rendering. Previously I had sprites being updated at the same rate and directly after the physics objects. We only really need to update the sprites directly before a render so we could do it at the beginning of each render tick.

*Only send input events when the input state changes. On the server assume that the input state is the same as previous if none has been received for current tick*
