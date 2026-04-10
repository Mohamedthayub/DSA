function emailFormatter(email){
    let modifiedEmail = "";
    for(let i = 0; i<email.length; i++){
        if(email[i] != " "){
            modifiedEmail += email[i].toLowerCase();
        }
    }   
    return modifiedEmail;
}
console.log(emailFormatter( "  THAYUB@GMAIL.COM   "));

/*
10. 📧 Email Formatter

User enters email in wrong format.

👉 Given:

const email = "   USER@GMAIL.COM   ";

👉 Task:
Clean it:

remove spaces
convert to lowercase

👉 Output:

"user@gmail.com"
*/