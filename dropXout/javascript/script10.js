// public private access modifiers

class BankAccount {
  //private variable
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    console.log(
      `Deposited amount is ${amount} , new balance is ${this.#balance}`
    );
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log('insufficient balance');
    } else {
      this.#balance -= amount;
      console.log(
        `withdraw amount is ${amount} and balance is ${this.#balance}`
      );
    }
  }

  balance() {
    console.log(this.#balance);
  }
}
const acc = new BankAccount();
acc.deposit(100);
acc.deposit(100000);
acc.withdraw(100);
acc.balance();

//**************  try catch throw ************************ */

function divide(a, b) {
  try {
    if (b == 0) {
      throw new Error("Can't divide by 0 ");
    } else {
      return a / b;
    }
    console.log(res);
  } catch (err) {
    console.log(err.message);
  }
}

divide(10, 0);
