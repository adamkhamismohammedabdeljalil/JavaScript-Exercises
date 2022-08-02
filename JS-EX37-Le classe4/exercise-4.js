

class BankAccount{
    #currentValue=0;
    constructor(initialValue){
        this.#currentValue=initialValue;

    }
    deposit(amount){
        
        return this.#currentValue+=amount;
    }
    withdraw(amount){
        return this.#currentValue-=amount;
    }
    view(){
        console.log(this.#currentValue)
    }
}
const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();