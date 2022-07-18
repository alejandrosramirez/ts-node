export const printObject = (arg: any) => {
	console.log(arg);
};
export function genericFunc<T>(arg: T): T {
	return arg;
}
export const genericFuncArrow = <T>(arg: T) => arg;
