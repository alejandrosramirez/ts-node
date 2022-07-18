import {
	printObject,
	genericFunc,
	genericFuncArrow,
} from "../generics/generics";
import { Hero, Villian } from "../interfaces";

// import { Hero } from './interfaces/hero';
// import { Villian } from './interfaces/villian';

// printObject(1234);
// printObject(new Date());
// printObject({ a: 1, b: 2, c: 3 });
// printObject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// printObject("Hola mundo");

// console.log(genericFuncArrow(3.141618).toFixed(2));
// console.log(genericFuncArrow(new Date()).getDate());
// console.log(genericFuncArrow("Hola mundo").toUpperCase());

const deadpool = {
	name: "Deadpool",
	realName: "Wade Winston Wilson",
	dangerLevel: 130,
};

console.log(genericFuncArrow<Villian>(deadpool));
