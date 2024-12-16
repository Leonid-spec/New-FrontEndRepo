// HW

// DEBIT CARD
// Создать объект bankAccount, который:
/* 
    1. accountNumber: "123456789"
    2. accountHolderName: "Alice"
    3. balance: 0

    4. deposit(sum) {
            // TODO Пополнение счёта
       }
    5. withdraw(sum) {
            // TODO Списание счёта
       }
    6. checkBalance() {
            // TODO Просмотр баланса счёта
       }
*/

let bankAccount = {
  accountNumber: "123456789",
  accountHolderName: "Alice",
  balance: 0,
};

// this.balance += sum
bankAccount.deposit = function (sum) {
  sum >= 5 && sum <= 5000
    ? (this.balance += sum)
    : alert("Некорректная сумма пополнения"); // this.balance = this.balance + sum
};

// this.balance -= sum
// Бизнес-логика
bankAccount.withdraw = function (sum) {
  sum <= this.balance && sum > 0
    ? (this.balance -= sum)
    : alert("Некорректная сумма списания");
};

// Просмотр баланса
bankAccount.checkBalance = function () {
  console.log(`Баланс Вашего аккаунта равен: ${this.balance}`);
};

const bank = [];

function createAccount() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value.trim();

  if (name) {
    bank.push({
      ...bankAccount,
      accountNumber: bank.length + 1,
      accountHolderName: name,
    });

    alert("Account created successfully");
  } else {
    alert("Please, enter a valid name");
  }

  nameInput.value = ""; // Очистка поля ввода
}

function showAccounts() {
  const accountList = document.getElementById("accountList");

  accountList.innerHTML = "";

  bank.forEach((account, index) => {
    // accountList.innerHTML += `<li>${index + 1}. ID: ${
    //   account.accountNumber
    // }, Name: ${account.accountHolderName}, Balance: ${account.balance}  </li> `;

    const li = document.createElement("li");
    li.textContent = `ID: ${account.accountNumber}, Name: ${account.accountHolderName}, Balance: ${account.balance}`;

    // Логика удаления
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    
    
    deleteBtn.onclick = function () {
      bank.splice(index, 1);
      showAccounts();
    };


    li.accountList.append(deleteBtn);
    accountList.append(li);
  });
}

// bankAccount.remove = function (accountNumber) {
//   accountNumber === accountId
//     ? bankAccount.remove(accountNumber)
//     : alert("Account not found");
// };

// ДЕБЕТОВАЯ КАРТА (карта не уходящая в минус)

const deposit = document.getElementById("deposit");
const withdraw = document.getElementById("withdraw");
const remove = document.getElementById("remove");

// Описание действия при нажатии на кнопку deposit
deposit.onclick = function () {
  operation("deposit");
};

// Описание действия при нажатии на кнопку withdraw
withdraw.onclick = function () {
  operation("withdraw");
};

function operation(operator) {
  const accountIdInput = document.getElementById("accountId");
  const amountInput = document.getElementById("amount");

  const accountId = accountIdInput.value.trim(); // string
  const amount = +amountInput.value.trim(); // number (число или NaN)

  const accountFind = bank.find(
    (e) => e.accountNumber.toString() === accountId
  );

  if (accountFind) {
    if (operator === "deposit") {
      accountFind.deposit(amount);
    } else {
      accountFind.withdraw(amount);
    }
  } else {
    alert("Account not found");
  }

  accountIdInput.value = "";
  amountInput.value = "";
}
