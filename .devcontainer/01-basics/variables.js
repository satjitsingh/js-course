const accountID = 123344; // const means it cannot be changed once declared
let accountEmail = "satjit@gmail.com";
var accountPassword = "12345"; // we don't use var now, because of issue in block scope and functional scope.
accountCity = "Mohali";
let accountState; // it would be treated as undefined.

// accountID = 123;  // not allowed

accountEmail = "satjitsingh@gmail.com"
accountPassword = "123"
accountCity = "Chandigarh"

// console.log(accountID);
console.table([accountID, accountEmail, accountPassword, accountCity,accountState])
