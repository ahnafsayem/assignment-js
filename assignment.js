//------Kilometer to Meter Conversion:-----//

function kilometerToMeter(number){
    var meter = number*1000;
    if(number<0){
        var meter = "Invalid Input";
    }
    return meter;
}
var result = kilometerToMeter(20);
console.log(result)


//-------------Budget Calculator-------------//

     function budgetCalculator(watch, phone, laptop){
         var watchPrice = watch * 50;
         var phonePrice = phone * 100;
         var laptopPrice = laptop * 500;
         var total = watchPrice+phonePrice+laptopPrice;
         return total;
     }
     var totalExpense = budgetCalculator(2,1,1);
     console.log(totalExpense);

//-------------Hotel Expenses--------//

function hotelCost(duration){
    var cost = 0;
    if(duration <= 10){
        cost = duration * 100;
    }
    else if(duration <= 20){
        var firstPart = 10 * 100;
        remaining = duration - 10;
        secondPart = remaining * 80;
        cost = firstPart + secondPart;
    }
    else{
        var firstPart = 10 * 100;
        secondPart = 10 * 80;
        remaining = duration - 20;
        thirdPart = remaining * 50;
        cost = firstPart + secondPart + thirdPart; 
    }
    return cost;
}
var expense = hotelCost(15);
console.log(expense);


//-----------Mega Friend---------//

function megaFriend(names){
    var max = names[0];
    for(i=0; i<names.length; i++){
        var element = names[i]
        if(element>max){
            max=element;
        }
    }
    return max;
}
var result = megaFriend(["Fahim","SultanSolaiman","JobbarVai","Samy"]);
console.log(result);
