// functions --

// 1. Deposit the money
// 2. Determine the number of lines to bet on 
// 3. Take bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. Play again

const prompt = require("prompt-sync")();

const deposit = ()=> {
    while(true){
        const depositAmount = prompt("Enter the the deposit amount: ");
        if(isNaN(depositAmount)|| depositAmount <= 0){
            console.log("Enter a valid amount");
        }else{
            const numberDepostiAmount = parseFloat(depositAmount);
            
            return numberDepostiAmount;
        }
    }
}

deposit();