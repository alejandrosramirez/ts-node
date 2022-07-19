function printToConsole(constructor: Function) {
	console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
	if (print) {
		return printToConsole;
	} else {
		return () => {};
	}
};

const blockPrototype = function (constructor: Function) {
	Object.seal(constructor);
	Object.seal(constructor.prototype);
};

function CheckValidPokemonId() {
	return function (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		const originalMethod = descriptor.value;

		descriptor.value = (id: number) => {
			if (id < 1 || id > 800) {
				return console.error(
					"El ID del pokémon debe estar entre 1 y 800"
				);
			} else {
				return originalMethod(id);
			}
		};
	};
}

function readonly(isWritable: boolean = true): Function {
	return function (
		target: any,
		propertyKey: string,
	) {
		const descriptor: PropertyDescriptor = {
			get() {
				// console.log(this);
				return "Alex";
			},
			set(this, value) {
				// console.log(this, value);
				Object.defineProperty(this, propertyKey, {
					value,
					writable: !isWritable,
					enumerable: false,
				});
			}
		};

		return descriptor;
	};
}

@blockPrototype
@printToConsoleConditional(false)
export class Pokemon {
	@readonly()
	public publicApi: string = "https://pokeapi.co";

	constructor(public name: string) {}

	@CheckValidPokemonId()
	savePokemonToDb(id: number) {
		console.log(`Pokemon guardado en DB ${id}`);
	}
}
