balance=1000
function view_balance(){
    alert("Your current balance is $1000");
}
function exit(){
    alert("Thank you for visiting our bank.Have a nice day!")
}
function withdraw_process(){
    let amount=document.getElementById("withdrawlAmount").value
    if(amount==""){
        alert("please Enter The Amount")
    }
    else if(amount>balance){
        alert("Insufficient Balance")
    }
    else{
        balance=balance-amount
        alert("Successfully Withdrawn $" + amount + ". Your current balance is $" + balance)
    }
}
function deposit_process(){
    let amount=document.getElementById("depositAmount").value
    if(amount==""){
        alert("Please Enter The Amount")
    }
    else{
        balance=balance+Number(amount)
        alert("Successfully Deposited $" + amount + ". Your current balance is $" + balance)
    }

}