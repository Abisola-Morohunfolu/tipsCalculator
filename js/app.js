//storing class names in object
var DOMStrings = {
    billAmount: '.bill-amount',
    billSharing: '.bill-sharing',
    billRating: '.bill-rating',
    button: '.btn-submit'
}

var calculateTips = function(amount, users, rating) {
    var tipsPercent, tips;
    
        if (rating === 5) {
            tipsPercent = .25;
        } else if (rating === 4) {
            tipsPercent = .2;
        } else if (rating === 3) {
            tipsPercent = .15;
        } else if (rating === 2) {
            tipsPercent = .1;
        } else if (rating === 1) {
            tipsPercent = .05;
        }
        return tips = Math.round((amount/users) * tipsPercent);
    
};

//clearing input fields
var clearFields = function() {
    var fields, fieldsArr;
    fields = document.querySelectorAll(DOMStrings.billAmount + ',' + DOMStrings.billSharing);
    //coverting into array
    fieldsArr = Array.prototype.slice.call(fields);
    fieldsArr.forEach(function(current, index, val){
        current.value = "";
    });
    //move mouse focus
    fieldsArr[0].focus();
}



var calculateUserTips = function() {
    var userBill, userNo, userRating, userTip;
    //receiving user inputs
    userBill = parseFloat(document.querySelector(DOMStrings.billAmount).value);
    userNo = parseInt(document.querySelector(DOMStrings.billSharing).value);
    userRating = parseInt(document.querySelector(DOMStrings.billRating).value);

    //validate input before calculating tips
    if (userNo > 0 && !isNaN(userBill) && !isNaN(userNo)) {
    userTip = calculateTips(userBill, userNo, userRating);
    document.querySelector('.tip-amount').textContent = userTip
    console.log(userTip);
    }

    //clear User Inputs
    clearFields();
}

//setting up event listners
document.querySelector('.btn-submit').addEventListener('click', calculateUserTips);

document.addEventListener('keypress', function(event){
    //adding conditional statement to check if enter was pressed
        if (event.keycode === 13 || event.which === 13){
            calculateUserTips();
        }
    });


