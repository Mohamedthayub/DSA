function loginSystem(userObj){
   if(!userObj.username || !userObj.password){
    return "Invalid Credentials";
   }
   if(userObj.username.length < 3 || userObj.password.length < 3){
    return "Invalid  credentials";
   }
   return "Login Success";
}
console.log(loginSystem( {username: "admin", password: "1234" }));


/*
4. 🔐 Login System (Basic)

User tries to login.

👉 Given:

const user = { username: "admin", password: "1234" };

👉 Input:

username = "admin"
password = "1234"

👉 Task:
Check login:

If correct → "Login Success"
Else → "Invalid Credentials"
*/