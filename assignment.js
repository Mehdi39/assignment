
// function for converting kilometer to meter.
function kilometerToMeter(kilometers) {

    // as we know 1000 meter = 1 kilometer.
    var meter = 1000;
    var result = kilometers * meter;

    return result;
}

//  function for calculating watch/mobile/laptop shopping budget
function budgetCalculator(watch, mobile, laptop) {

    //  price for per watch = $50
    var watchBudget = 50 * watch;

    //  price for per mobile  = $100
    var mobileBudget = 100 * mobile;

    //  price for per laptop = $500
    var laptopBudget = 500 * laptop;

    var totalBudget = watchBudget + mobileBudget + laptopBudget;

    return totalBudget;
}

// function for calculating hotelCost. first 10 days are 100 per night. after 10 days per night costs 80. 
function hotelCost(days) {

    // checking if customer/client staying 10 days or not.
    if (days <= 10) {
        totalCost = days * 100;
        return totalCost;
    } else { // code runs if customer/client stay more than 10 days.
        var baseCost = 1000;
        var afterDiscountCost = (days - 10) * 80;
        var totalCost = baseCost + afterDiscountCost;

        return totalCost;
    }
}

// function for find the biggest name of an Array using array.sort method.
function megaFriend(friendList) {

    // array.sort function is used.
    var biggestName = friends.sort( 
        function (a, b) {
            return b.length - a.length;
        }
    )[0]; // sob thke boro value ta store korbe karon boro theke choto sorting kora hoitase...position [0] te sob thke boro ta thkbe

    return biggestName;
}