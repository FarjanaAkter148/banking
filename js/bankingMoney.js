// 1. deposit  money  

document.getElementById('depositBtn').addEventListener('click', function () {
      //1.deposit Amount input with value
    const depositInput = document.getElementById('depositInput');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);
    // console.log(depositField);

   //Total deposit Amount value added
    const depositTotal = document.getElementById('deposiTotal');

    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount  + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

// 2. Total  balance
  //update account balance
    const balanceTotal = document.getElementById('balanceTotal');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    //clean input field
    depositInput.value = '';
    })

 // // 3. withdraw money // Handle withdraw event handler 
document.getElementById('withdrawBtn').addEventListener('click', function () {
  const withdrawInput = document.getElementById('withdrawInput');
  const withdrawAmountText = withdrawInput.value;
  const newwithdrawAmount = parseFloat(withdrawAmountText);
 
 // set withdraw total
  const withdrawTotalAmount = document.getElementById('withdrawTotal');
  const previouswithdrawText = withdrawTotalAmount.innerText;
  const previouswithdrawTextAmount = parseFloat(previouswithdrawText);
  const newWithdrawTotal = previouswithdrawTextAmount + newwithdrawAmount;
  withdrawTotalAmount.innerText = newWithdrawTotal;

 
  // 4.balace total withdraw  update balance 
  const balanceToTal = document.getElementById('balanceTotal');
  const balanceToTalText = balanceToTal.innerText;
  const balanceToTalAmount = parseFloat(balanceToTalText);
  // console.log(balanceToTalAmount);
  const newBalanceTotalwithdraw = balanceToTalAmount - newwithdrawAmount;
  balanceToTal.innerText = newBalanceTotalwithdraw;
  withdrawInput.value = '';
  console.log(newBalanceTotalwithdraw);
})



    


