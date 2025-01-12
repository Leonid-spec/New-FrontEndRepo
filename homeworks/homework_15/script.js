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
    accountList.innerHTML += `<li>${index + 1}. ID: ${
      account.accountNumber
    }, Name: ${account.accountHolderName}, Balance: ${account.balance}</li>`;
  });
}

// ДЕБЕТОВАЯ КАРТА (карта не уходящая в минус!)

const deposit = document.getElementById("deposit");
const withdraw = document.getElementById("withdraw");

deposit.onclick = function () {
  // TODO (Описание действия при нажатии на кнопку deposit)
  const accountIdInput = document.getElementById("accountId");
  const amountInput = document.getElementById("amount");

  const accountId = accountIdInput.value.trim();
  const amount = Number(amountInput.value.trim());

  bank.forEach((accountElement) => {
    if (accountElement.accountNumber.toString() === accountId) {
      const initialBalance = accountElement.balance; // Сохраняем начальный баланс
      accountElement.deposit(amount); // Проверяем, изменился ли баланс

      if (accountElement.balance > initialBalance) {
        alert(`Successfully deposited ${amount} to account ID: ${accountId}`);
      }
    }
  });
};

withdraw.onclick = function () {
  // TODO (Описание действия при нажатии на кнопку withdraw)
  const accountIdInput = document.getElementById("accountId");
  const accountId = accountIdInput.value.trim();

  const amountInput = document.getElementById("amount");
  const amount = Number(amountInput.value.trim());

  bank.forEach((accountElement) => {
    if (accountElement.accountNumber.toString() === accountId) {
      const initialBalance = accountElement.balance; // Сохраняем начальный баланс
      accountElement.withdraw(amount); // Проверяем, изменился ли баланс

      if (accountElement.balance < initialBalance) {
        alert(`Successfully withdraw ${amount} to account ID: ${accountId}`);
      }
    }
  });
};
