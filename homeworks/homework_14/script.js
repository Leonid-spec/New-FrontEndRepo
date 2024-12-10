let bankAccount = {
    balance: 0
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
  if (bank.length > 0) {
    let accountsList = "Accounts:\n";
    for (let account of bank) {
      accountsList += `---------------------------------------------------------------------\n`;
      accountsList += `Account number: ${account.accountNumber}, Account holder name: ${account.accountHolderName}, Balance: ${account.balance}\n `;
    }
    alert(accountsList);
  } else {
    alert("No accounts");
  }
}
