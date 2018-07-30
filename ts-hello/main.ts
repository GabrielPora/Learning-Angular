function log(message){
	console.log(message);
}

var message = 'Hello World'

log(message);


function doSomething(){
	for (var i=0; i < 5; i++){
		console.log(i);
	}
	console.log('Finally: ' + i);
}

doSomething();

let a: number;
let b: boolean;
let c: string;
let d:any;
let e: number[] = [1,2,3];
let f:any[] = [1, true, 'a', false];

const ColourRed = 0;
const ColourGreen = 1;
const ColourBlue = 2;

enum Colour {Red=0, Green =1, Blue =2, Purple = 3}
let backgroundColor = Colour.Red;

let example = 'abc';
let endsWithC = example.endsWith('c');

// Note if you only inialise the variable afterwards 
// it will think it is of type any ans you will have to type cast it.
let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');