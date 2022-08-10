class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    // throw an exception if amount is negative
    if(amount>=0){
      this.#amount += amount;

    }
    else{
      throw Error("negative deposit is not allowed")
    }
    
  }

  withdraw(amount) {
    // throw an exception if amount is negative or if withdrawal amount is greater than current amount
    if(amount<this.#amount){
      this.#amount -= amount;

    }
    
    else if(amount<0||amount>this.#amount){
      throw Error('operation is not allowed, either amount is negative or withdrawal is greater than the current balance!')
    }
    
  }

  
}
try {
  const bankAccount = new BankAccount(1000);
  bankAccount.deposit(-500);
  bankAccount.deposit(200);
  //bankAccount.withdraw(100); // This operation should not be possible, because you cannot withdraw more than the account balance
  
  
} catch (error) {
  console.log(error.message)
  
}
try {
  const bankAccount = new BankAccount(1000);
  bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
  
} catch (error) {
  console.log(error.message)
}

