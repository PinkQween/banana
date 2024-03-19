// const readline = require('node:readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// // // This is an extremely complex algorithm to generate the letters of the word "banana" dynamically
// // function generateLettersDynamicallyWithComplexAlgorithm() {
// //     let bananasArray = [];
// //     // Loop to generate letters
// //     for (let bananaIndex = 0; bananaIndex < 1000; bananaIndex++) {
// //         // Generate a random number between 0 and 1 to determine the letter
// //         const randomNumber = Math.random();

// //         // Based on the random number, decide which letter to add
// //         if (randomNumber < 0.25) {
// //             // Push 'b' into the array
// //             bananasArray.push('b');
// //         } else if (randomNumber < 0.5) {
// //             // Push 'a' into the array
// //             bananasArray.push('a');
// //         } else if (randomNumber < 0.75) {
// //             // Push 'n' into the array
// //             bananasArray.push('n');
// //         } else {
// //             // Push '!' into the array
// //             bananasArray.push('!');
// //         }
// //     }
// //     // Return the array of letters
// //     return bananasArray;
// // }

// // // This function spells out the word "banana" in a very verbose and inefficient manner
// // function spellOutTheWordBananaWithExtremeVerbosity() {
// //     // Call the overly complex letter generation function
// //     const arrayOfLettersGeneratedByComplexAlgorithm = generateLettersDynamicallyWithComplexAlgorithm();

// //     // Initialize an empty string to hold the spelled-out word
// //     let theWordBanana = '';

// //     // Loop through each letter in the array
// //     for (let bananaIndex = 0; bananaIndex < arrayOfLettersGeneratedByComplexAlgorithm.length; bananaIndex++) {
// //         // Append each letter to the word "banana" with an overly verbose comment
// //         theWordBanana += arrayOfLettersGeneratedByComplexAlgorithm[bananaIndex]; // Concatenate the current letter to the word "banana"
// //     }
// //     // Return the excessively spelled-out word "banana"
// //     return theWordBanana;
// // }

// // // Call the function to spell out the word "banana" with extreme verbosity and log the result to the console
// // // console.log(spellOutTheWordBananaWithExtremeVerbosity());

// // const banana = {
// //     "NaN": () => {
// //         let banana = "b";
// //         banana = banana + "a";
// //         banana = banana + + "a";
// //         banana = banana + "a";

// //         banana = banana.toLowerCase();

// //         banana = banana.toUpperCase();

// //         banana = banana.toLowerCase();

// //         const b = banana.charAt(0);

// //         const B = b.toUpperCase();

// //         const anana = banana.slice(1);

// //         banana = B + anana;

// //         return banana;
// //     },
// // }

// // // console.log(banana.NaN());


// const zero = '+[]'
// const one = '+!![]'

// const number = n => {
//     if (n === 0) return zero;
//     return Array.from({length: n}, () => one).join(' + ');
// }

// // const seven = number(5647)

// // console.log(seven);

// const map = {};

// const fromString = s => s.split('').map(x => {
//     return map[x];
// }).join('+');

// map.a = `(+{}+[])[${number(1)}]`;
// map.b = `({}+[])[${number(2)}]`;
// map.o = `({}+[])[${number(1)}]`;
// map.e = `({}+[])[${number(4)}]`;
// map.c = `({}+[])[${number(5)}]`;
// map.t = `({}+[])[${number(6)}]`;
// map[' '] = `({}+[])[${number(7)}]`;
// map.f = `(![]+[])[${number(0)}]`;
// map.s = `(![]+[])[${number(3)}]`;
// map.r = `(!![]+[])[${number(1)}]`;
// map.u = `(!![]+[])[${number(2)}]`;
// map.i = `((+!![]/+[])+[])[${number(3)}]`;
// map.n = `((+!![]/+[])+[])[${number(4)}]`;
// map.S = `([]+([]+[])[${fromString('constructor')}])[${number(9)}]`;
// map.g = `([]+([]+[])[${fromString('constructor')}])[${number(14)}]`;
// map.p = `([]+(/-/)[${fromString('constructor')}])[${number(14)}]`;
// map['\\'] = `(/\\\\/+[])[${number(1)}]`;
// map.d = `(${number(13)})[${fromString('toString')}](${number(14)})`;
// map.h = `(${number(17)})[${fromString('toString')}](${number(18)})`;
// map.m = `(${number(22)})[${fromString('toString')}](${number(23)})`;
// map.C = `((()=>{})[${fromString('constructor')}](${fromString('return escape')})()(${map['\\']}))[${number(2)}]`;

// const compile = code => `(()=>{})[${fromString('constructor')}](${fromString(code)})()`;

// // Bun.write('./index.js', compile('const readline=require("node:readline").createInterface({input:process.stdin,output:process.stdout}),zero="+[]",one="+!![]",number=r=>0===r?"+[]":Array.from({length:r},()=>"+!![]").join(" + "),map={},fromString=r=>r.split("").map(r=>map[r]).join("+");map.a=`(+{}+[])[${number(1)}]`,map.b=`({}+[])[${number(2)}]`,map.o=`({}+[])[${number(1)}]`,map.e=`({}+[])[${number(4)}]`,map.c=`({}+[])[${number(5)}]`,map.t=`({}+[])[${number(6)}]`,map[" "]=`({}+[])[${number(7)}]`,map.f=`(![]+[])[${number(0)}]`,map.s=`(![]+[])[${number(3)}]`,map.r=`(!![]+[])[${number(1)}]`,map.u=`(!![]+[])[${number(2)}]`,map.i=`((+!![]/+[])+[])[${number(3)}]`,map.n=`((+!![]/+[])+[])[${number(4)}]`,map.S=`([]+([]+[])[${fromString("constructor")}])[${number(9)}]`,map.g=`([]+([]+[])[${fromString("constructor")}])[${number(14)}]`,map.p=`([]+(/-/)[${fromString("constructor")}])[${number(14)}]`,map["\\"]=`(/\\\\/+[])[${number(1)}]`,map.d=`(${number(13)})[${fromString("toString")}](${number(14)})`,map.h=`(${number(17)})[${fromString("toString")}](${number(18)})`,map.m=`(${number(22)})[${fromString("toString")}](${number(23)})`,map.C=`((()=>{})[${fromString("constructor")}](${fromString("return escape")})()(${map["\\"]}))[${number(2)}]`;const compile=r=>`(()=>{})[${fromString("constructor")}](${fromString(r)})()`;readline.question("Code: ",r=>{console.log(compile(r)),readline.close()});'))
// console.log(compile('console.log(\'Banana\')'))


const zero = '+[]';
const one = '+!![]';

const number = n => {
    if (n === 0) return zero;
    return Array.from({ length: n }, () => one).join(' + ');
}

// C

const map = {};

const fromString = s => s.split('').map(x => {
    if (!(x in map)) {
        const charCode = x.charCodeAt(0);
        return `([]+[])[${fromString('constructor')}][${fromString('fromCharCode')}](${number(charCode)})`;
    }
    return map[x];
}).join('+');

map.a = `(+{}+[])[${number(1)}]`;
map.b = `({}+[])[${number(2)}]`;
map.o = `({}+[])[${number(1)}]`;
map.e = `({}+[])[${number(4)}]`;
map.c = `({}+[])[${number(5)}]`;
map.t = `({}+[])[${number(6)}]`;
map[' '] = `({}+[])[${number(7)}]`;
map.f = `(![]+[])[${number(0)}]`;
map.s = `(![]+[])[${number(3)}]`;
map.r = `(!![]+[])[${number(1)}]`;
map.u = `(!![]+[])[${number(2)}]`;
map.i = `((+!![]/+[])+[])[${number(3)}]`;
map.n = `((+!![]/+[])+[])[${number(4)}]`;
map.S = `([]+([]+[])[${fromString('constructor')}])[${number(9)}]`;
map.g = `([]+([]+[])[${fromString('constructor')}])[${number(14)}]`;
map.p = `([]+(/-/)[${fromString('constructor')}])[${number(14)}]`;
map['\\'] = `(/\\\\/+[])[${number(1)}]`;
map.d = `(${number(13)})[${fromString('toString')}](${number(14)})`;
map.h = `(${number(17)})[${fromString('toString')}](${number(18)})`;
map.m = `(${number(22)})[${fromString('toString')}](${number(23)})`;
map.C = `((()=>{})[${fromString('constructor')}](${fromString('return escape')})()(${map['\\']}))[${number(2)}]`;

const compile = code => `(()=>{})[${fromString('constructor')}](${fromString(code)})()`;

// Bun.write('./index.js', compile('const zero = `+[]`, one = `+!![]`, number = n => n === 0? zero : Array.from({length: n}, () => one).join(\' + \'); const map = {}, fromString = s => s.split(\'\').map(x => map[x]).join(\' + \'); map.a = `(+{}+[])[${number(1)}]`, map.b = `({}+[])[${number(2)}]`, map.o = `({}+[])[${number(1)}]`, map.e = `({}+[])[${number(4)}]`, map.c = `({}+[])[${number(5)}]`, map.t = `({}+[])[${number(6)}]`, map[\' \'] = `({}+[])[${number(7)}]`, map.f = `(![]+[])[${number(0)}]`, map.s = `(![]+[])[${number(3)}]`, map.r = `(!![]+[])[${number(1)}]`, map.u = `(!![]+[])[${number(2)}]`, map.i = `((+!![]/+[])+[])[${number(3)}]`, map.n = `((+!![]/+[])+[])[${number(4)}]`, map.S = `([]+([]+[])[${fromString(\'constructor\')}])[${number(9)}]`, map.g = `([]+([]+[])[${fromString(\'constructor\')}])[${number(14)}]`, map.p = `([]+(/-/)[${fromString(\'constructor\')}])[${number(14)}]`, map[\'\\\\\'] = `(/\\\\\\\\/+[])[${number(1)}]`, map.d = `(${number(13)})[${fromString(\'toString\')}](${number(14)})`, map.h = `(${number(17)})[${fromString(\'toString\')}](${number(18)})`, map.m = `(${number(22)})[${fromString(\'toString\')}](${number(23)})`, map.C = `((()=>{})[${fromString(\'constructor\')}](${fromString(\'return escape\')})()(${map[\'\\\\\']}))[${number(2)}]`, compile = code => `(()=>{})[${fromString(\'constructor\')}](${fromString(code)})()`; (async () => { process.stdout.write(`Code: `); for await (const code of console) await Bun.write(\'./output/banana.js\', compile(code)); process.exit(); } )();'));
Bun.write('./index.js', compile("const zero=+[],one=+!![],number=n=>0===n?zero:Array.from({length:n},()=>one).join(' + '),map={},fromString=s=>s.split('').map(x=>map[x]).join(' + ');map.a=(+{}+[])[number(1)],map.b=({}+[])[number(2)],map.o=({}+[])[number(1)],map.e=({}+[])[number(4)],map.c=({}+[])[number(5)],map.t=({}+[])[number(6)],map[' ']=({}+[])[number(7)],map.f=![]+[][number(0)],map.s=![]+[][number(3)],map.r=!![]+[][number(1)],map.u=!![]+[][number(2)],map.i=((+!![]/+[])+[])[number(3)],map.n=((+!![]/+[])+[])[number(4)],map.S=([]+([]+[])[fromString('constructor')])[number(9)],map.g=([]+([]+[])[fromString('constructor')])[number(14)],map.p=([]+(/-/)[fromString('constructor')])[number(14)],map['\\\\']=(/\\\\\\\\/+[])[number(1)],map.d=(number(13))[fromString`toString`](number(14)),map.h=(number(17))[fromString`toString`](number(18)),map.m=(number(22))[fromString`toString`](number(23)),map.C=((()=>{})[fromString`constructor`](fromString`return escape`)()(map['\\\\']))[number(2)],compile=code=>(()=>{})[fromString`constructor`](fromString(code))();(async()=>{process.stdout.write(`Code: `);for await(const code of console){await Bun.write(`./output/banana.js`,compile(code)),process.exit()}})();"));

// Bun.write('./output.js', compile('console.log(\'Banana\')'));