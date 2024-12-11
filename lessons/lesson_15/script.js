let bankAccount = {
  balance: 0,
};
const bank = [];

function createAccount() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value.trim();

  // falsy null, '', 0, undefined, NaN
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

  nameInput.value = "";
  console.log(bank);
}

//Todo (HW_14)
function showAccounts() {
  // Мой код:
  // if (bank.length > 0) {
  //   let accountsList = "Accounts:\n";
  //   for (let account of bank) {
  //     accountsList += `---------------------------------------------------------------------\n`;
  //     accountsList += `Account number: ${account.accountNumber}, Account holder name: ${account.accountHolderName}, Balance: ${account.balance}\n `;
  //   }
  //   alert(accountsList);
  // } else {
  //   alert("No accounts");
  // }

  // Преподавателя код:
  const accountList = document.getElementById("accountList");
  accountList.innerHTML = "";

  // for (const account of bank) {
  //   // Option 1 in For-loop
  //   /*account.balance
  //   const li = document.createElement("li");
  //   li.textContent = `ID: ${accountNumber}, Name: ${accountHolderName}, Balance: ${account.balance}`;
  //   accountList.appendChild(li);*/

  //   accountList.innerHTML += `<li> ID: ${account.accountNumber}, Name: ${account.accountHolderName}, Balance: ${account.balance}</li>`;
  // }

  // Option 2 forEach под массив
  bank.forEach((account, index) => {
    accountList.innerHTML += `<li>${index + 1}. ID: ${
      account.accountNumber
    }, Name: ${account.accountHolderName}, Balance: ${account.balance}</li>`;
  });

  // Option 3 For-loop
  // for (let index = 0; index < bank.length; index++) {
  //   //bank[i].balance

  // }
}


// ДЕБЕТОВАЯ КАРТА (карта не уходящая в минус)

const deposit = document.getElementById("deposit");
const withdraw = document.getElementById("withdraw");

deposit.onclick = function() {
  // TODO (Описание действия при нажатии на кнопку deposit)
  

}

withdraw.onclick = function() {
  // TODO  (Описание действия при нажатии на кнопку withdraw)

}
