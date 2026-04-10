function studentFailOrPass(students){
    let studentResults = [];
    for(let i = 0; i<students.length; i++){
        if(students[i].marks >= 35){
            let obj = {}
            obj["name"]  = students[i].name;
            obj["result"] = "Pass";
            studentResults.push(obj);
        }
    }    
    return studentResults;
}
const students = [
  { name: "A", marks: 35 },
  { name: "B", marks: 80 },
  { name: "C", marks: 20 }
];
console.log(studentFailOrPass(students));

/*
2. 🎓 Student Pass or Fail

A teacher wants to know who passed.

👉 Given:

const students = [
  { name: "A", marks: 35 },
  { name: "B", marks: 80 },
  { name: "C", marks: 20 }
];

👉 Task:
Return a new array with:

[{ name: "A", result: "Pass/Fail" }, ...]

👉 Rule:

Pass if marks >= 35
*/