import ReadLine from 'readline';

const readline = ReadLine.createInterface(process.stdin);
const WELCOME: string= `
    Alterna Academy, Fundamentos de Programación\n
    Practica 3.

    Este programa, al insertar un numero decimal "n", entre:
    0 < n < 4000; devuelve su version en numerales romanos. Ej:
    1945 devolveria MCMXLV.
`;



function parseRoman(quantity: string): string {
    const character: Map<string, string[]> = new Map();
    character.set("1", ["I", "X", "C", "M"]);
    character.set("2", ["II", "XX", "CC", "MM"]);
    character.set("3", ["III", "XXX", "CCC", "MMM"]);
    character.set("4", ["IV", "XL", "CD", "Err"]);
    character.set("5", ["V", "L", "D", "Err"]);
    character.set("6", ["VI", "LX", "DC", "Err"]);
    character.set("7", ["VII", "LXX", "DCC", "Err"]);
    character.set("8", ["VIII", "LXXX", "DCCC", "Err"]);
    character.set("9", ["IX", "XC", "CM", "Err"]);

    const dummieArray: string[]= ['', '', '', '', '']
    let romanString: string= '';

    let size: number= quantity.length;
    let lvl: number= 0;

    while(size>0){
        const current: string = quantity.slice(size - 1, size);
        let posibilities: string[] = character.get(current) || dummieArray;
        romanString= posibilities[lvl] + romanString;
        //console.log('size ', size, 'level', lvl, 'current', current, posibilities[lvl])
        size--;
        lvl++;
    }

    return romanString;
}


function startPoint(){
    const INSTRUCTIONS: string = "Inserte un numero decimal entre 0 y 4000, o inserte 's' para salir.";

    console.log(INSTRUCTIONS);

    readline.question('', (quant: string)=>{
        if(quant === 's')
            process.exit();
        console.log(parseRoman(quant));
        startPoint();
    });
}

console.log(WELCOME);

startPoint();
