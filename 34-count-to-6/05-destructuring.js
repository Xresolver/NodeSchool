const userArray = process.argv.slice(2);
const userObj = {};
[,userObj.username, userObj.email] = userArray; 

console.log(userObj);