function atmMachine(amt,balance){
    if(amt <= balance){
        console.log("Amount Debited." , amt);
        console.log("Balance Amount is ",balance - amt );
    }
    else{
        console.log("Insuffcient Amount");
    }
}
atmMachine(1000,1000);

/*
9. 🏦 Simple ATM Withdrawal

ATM system:

👉 Given:

let balance = 5000;
let withdrawAmount = 2000;

👉 Task:

If balance is enough → deduct and show remaining
Else → "Insufficient balance"
*/