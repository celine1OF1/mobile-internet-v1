function handletopup() {
    let contact = document.getElementById("topup-tel").value;
    let amt = document.getElementById("topup-amount").value;
    if (amt <100 || amt > 5000){
        alert("Sorry, the amount entered is invalid! Please re-enter.");
    }
    else{
        alert("Top Up successful!");
    }
    }
    