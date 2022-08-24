class BankAccount{
  currentValue=0;
  constructor(initialValue){
      this.currentValue=initialValue;

  }
  deposit(amount){
      
      return this.currentValue+=amount;
  }
  withdraw(amount){
      return this.currentValue-=amount;
  }
  view(){
      console.log(this.currentValue)
  }
}
class BankAccountVip extends BankAccount{
  constructor(initialValue,interest=0.03){
    super(initialValue);
    this.interest=interest
  }
  depositPlus(amount){
    if(amount>=1000){
      console.log(this.currentValue+=(amount +amount*0.03))

    }else{
      this.currentValue+=amount;

    }
  }
  view(){
    console.log(this.currentValue)
}
}

const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.depositPlus(500);
bankAccountVip.depositPlus(1200);
bankAccountVip.withdraw(800);
bankAccountVip.depositPlus(3500);
bankAccountVip.view()
