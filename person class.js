class acc{

    constructor(name,accno,balance)
    {
        this.accno=accno;
        this.name=name;
        this.balance=balance;
    }
 getBalance()
 {

return "Balance:"+this.balance;

 }

 withdraw(money)
 {
     if(this.balance>=money)
     {
     this.balance=this.balance-money;
     console.log(this.getBalance())
     }
     else
     console.log("INSUFFICIENT BALANCE!! Your Balance is "+this.balance)
 }

 deposit(money)
 {
     if(money<=200000)
     {
    this.balance=this.balance+money;
     console.log(this.getBalance())
     }
    else{
        console.log("Daily limit for the day exceeded")
    }
    
 }
}
const vaish=new acc("vaish",101,5000)
vaish.deposit(25000);
vaish.withdraw(3);