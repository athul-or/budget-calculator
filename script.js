function expense() {
        uname = uname.value,
        income = income.value,
        utilities = utilities.value,
        insurance = insurance.value,
        rent = rent.value,
        food = food.value,
        others = others.value



    if (uname == "" && income == "") {
        alert("Please fill all fields!!");
    }
    else {
        totalExpense = (utilities==''?0:parseInt(utilities)) + (insurance==''?0:parseInt(insurance)) + 
        (rent==''?0:parseInt(rent))+ (food==''?0:parseInt(food)) +(others==''?0:parseInt(others));
        console.log(totalExpense)
        totalBalance = parseInt(income) - totalExpense;
        console.log(totalBalance);
        tbalance.value = totalBalance;
        texpense.value = totalExpense;
    }
}

