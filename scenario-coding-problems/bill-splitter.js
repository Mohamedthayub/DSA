function billSpliter(totalAmount,people){
    if(!totalAmount || !people){
        return "invalid amount";
    }
    let onePersonAmount = totalAmount / people;
    return `one person should pay amount ${onePersonAmount}`; 
}

console.log(billSpliter(1200,4));

/*
5. 🧾 Bill Splitter

Friends want to split bill equally.

👉 Given:

const totalAmount = 1200;
const numberOfPeople = 4;

👉 Task:
Find how much each person should pay.
*/