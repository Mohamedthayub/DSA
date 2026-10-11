let operations = ["5","2","C","D","+"];
let record = [];
for(let i = 0; i<operations.length; i++){
   
    if(operations[i] == "C"){
        record.pop();       
    }
    else if (operations[i] == "D"){
        let last = record[record.length - 1];
        record.push(last * 2);
    }
    else if(operations[i] == "+"){
        let last =  record[record.length - 1];
        let  secondLast = record[record.length -2];
        record.push(last +secondLast);
    }
    else {
        record.push(Number(operations[i]));
    }
}
let totalSum = 0;
for(let k = 0; k<record.length; k++){
    totalSum += record[k];
}
console.log(totalSum);

