//GitHub:  https://github.com/ahnafsayem/assignment-js

//------Kilometer to Meter Conversion:-----//

function kilometerToMeter(number)
{
    var meter = number*1000;              //mathematical logic//
    if(number<0)
    {
        var meter = "Invalid Input";
    }
    return meter;
}
var result = kilometerToMeter(40);
console.log(result)


//-------------Budget Calculator-------------//

     function budgetCalculator(watch, phone, laptop)                //input watch,phone,laptop quantity//
     {
         var watchPrice = watch * 50;                               //mathematical logics//
         var phonePrice = phone * 100;                              
         var laptopPrice = laptop * 500;                            
         var total = watchPrice+phonePrice+laptopPrice;             //total price//
         return total;
     }
     var totalExpense = budgetCalculator(4,3,1);
     console.log(totalExpense);

//-------------Hotel Expenses--------//

function hotelCost(duration)
{
    var cost = 0;
    if(duration <= 10)
    {                                    //Person staying less than 10 Days//
        cost = duration * 100;                             //total cost//
    }
    else if(duration <= 20)
    {                               //person staying more than 10 days but less than 20 days//
        var firstPart = 10 * 100;
        remaining = duration - 10;
        secondPart = remaining * 80;
        cost = firstPart + secondPart;                      //total cost//
    }
    else{
        var firstPart = 10 * 100;                          //person staying more than 20 days//
        secondPart = 10 * 80;
        remaining = duration - 20;
        thirdPart = remaining * 50;
        cost = firstPart + secondPart + thirdPart;         //total-cost//
    }
    return cost;
}
var expense = hotelCost(13);
console.log(expense);


//-----------Mega Friend---------//

function megaFriend(names)
{
    var largestName = names[0];
    for(i=0; i<names.length; i++)
    {
        var element = names[i]                      //going through all elements of the array//
        if(element>largestName)
        {
            largestName=element;                            //if element is greater than the maximum,then replace//
        }
    }
    return largestName;                                     //returning the maximum//
}
var result = megaFriend(["Fahim","SultanSolaiman","MultanJolaiman","JobbarVai","Samy"]);
console.log(result);
