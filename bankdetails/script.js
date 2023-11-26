function bankAccount(accountNumber,name,type,balance){
  this.accountNumber=accountNumber;
  this.name=name;
  this.type =type;
  this.balance=balance;
// here deposit function is start here 
  this.deposit=function(amount){
    this.balance += amount;
  }
//   withddraw function start here
 this.withdraw=function(amount){
    // 600 100
    // this.balance-=amount;
    if(balance<=amount){
        this.balance-=amount;
      console.log("you have some insufficent account please add some money in your account",this.balance);
    }
    else{
        console.log("withdraw succesfully",this.balance )
    }
    
 }
 this.checkBalance=function(){
    console.log("hey your total balance is:- ", this.balance)
 }


// if balance is greater than 0 than return true otherwise false;
 this.isActive=function(){
  return this.balance > 0;
 };

}
// normal account
let account1= new bankAccount(12345,"vinay","saving",500);
let account2= new bankAccount(12346,"nitin","saving",500);
let account3= new bankAccount(12347,"anmol","saving",500);
// console.log(account1,"this is normal account without adding money");

// some money add (deposite start here)
account1.deposit(100)
account2.deposit(200)
account3.deposit(200)
// console.log(account1,"hey i am deposite some money in my account")
// console.log(account2,"hey i am deposite some money in my account")
// console.log(account3,"hey i am deposite some money in my account")

// withdraw 
account1.withdraw(1000);
account2.withdraw(300);
account3.withdraw(500);
// console.log(account);

// checking balance in your account;
account1.checkBalance()
account2.checkBalance()
account3.checkBalance()

// get total ammount in total account;
let totalAmounts=[account1,account2,account3];
console.log(totalAmounts);


function getTotalBalance(totalAmounts){

let total=0;

for (let i = 0; i < totalAmounts.length; i++) {
    total += totalAmounts[i].balance;
}
console.log("Hello, this is the total amount of all account ", total)
}
getTotalBalance(totalAmounts);

// check if account are active 
console.log(`Account 1 is active: ${account1.isActive()}`);
console.log(`Account 2 is active: ${account2.isActive()}`);
console.log(`Account 3 is active: ${account3.isActive()}`);
