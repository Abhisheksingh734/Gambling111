// functions --

// 1. Deposit the money
// 2. Determine the number of lines to bet on 
// 3. Take bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. Play again


const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOL_COUNT = {
    A:2,
    B:3,
    C:4,
    D:5
}

const SYMBOL_VALUE ={
    A: 5,
    B:4,
    C:3,
    D:2
}



const deposit = ()=>{

    while(true){
        const depositAmount = parseFloat(prompt("Enter amount to deposit: "));
    
        if(isNaN(depositAmount)||depositAmount<=0){
            console.log("Enter a valid amount");
        }else{
            console.log("Your Balance:",depositAmount);
            return depositAmount;
        }
    }
    

}

const getNumberOfLines = ()=>{
    while(true){
        const numberOfLines = parseFloat(prompt("Enter number of lines to bet on(1-3): "));
    
        if(isNaN(numberOfLines)||numberOfLines<=0 || numberOfLines>3){
            console.log("Invalid number of lines, try again");
        }else{
            return numberOfLines;
        }
    }
}

const getBet =(balance,lines)=>{
    while(true){
        const bet = parseFloat(prompt("Enter the bet per line: "));
        if(isNaN(bet) || bet<=0 || bet>(balance/lines)){
            console.log("Enter a valid bet amount, Try again");
        }else{
            return bet;
        }
    }

}




const spin = ()=>{
    const symbols =[];
    for(const [Symbol,count] of Object.entries(SYMBOL_COUNT) ){
        for(let i=0; i<count;i++){
            symbols.push(Symbol);
        }
        
    }
    console.log(symbols);

    const reels =[];
    for(let i=0;i<COLS;i++){
        reels.push([])
        const reelSymbols = [...symbols];
        for(let j=0;j<ROWS;j++){
            const randomIndex = Math.floor(Math.random()*reelSymbols.length);
            const symbolSelected = reelSymbols[randomIndex];
            reels[i].push(symbolSelected);
            reelSymbols.splice(randomIndex,1);
        }
    }
    return reels;
}


const spins = spin();
console.log(spins);
let balance = deposit();
// console.log("deposited",depositAmount);
const numberOfLines = getNumberOfLines(); 
// console.log("bet on line number,",LinestoBet);

const bet = getBet(balance,numberOfLines);





