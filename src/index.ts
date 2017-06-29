// Define and expose the constructor interface.
export interface IConstructor {
	new(...args:any[]): object,
}

// Expose the mixin function.
export default (baseConstructors: IConstructor[]) => {
	// Return a handler for the result constructor.
	return (derivedConstructor: IConstructor) => {
		// Iterate through each of the supplied base constructors.
		baseConstructors.forEach((baseConstructor) => {
			// Copy all own properties from the base constructor's prototype to the derived constructor's prototype.
			Object.getOwnPropertyNames(baseConstructor.prototype).forEach((name) => {
				derivedConstructor.prototype[name] = baseConstructor.prototype[name]
			})
		})
	}
}
