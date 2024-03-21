class BankAccount {
    constructor( accountHolder , accountNumber ,  balance = 0 )  {
    
        this.balance = balance;
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
    }

    deposite = (amt) => {
        this.balance += amt;
        console.log(this.balance);
    }
    withdraw = (amt) => {
        if (this.balance < amt) {
            console.log("not sufficient balance");
        } else {
            this.balance -= amt;
            console.log("balance "+ this.balance);
        }
    }
}