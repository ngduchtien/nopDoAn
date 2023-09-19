var incrementButton = document.getElementsByClassName('plus_btn');
var decrementButton = document.getElementsByClassName('minus_btn');
//var input = document.getElementsByClassName('box');
console.log(incrementButton);
console.log(decrementButton);

//increment
for (var i = 0; i < incrementButton.length; i++) {
    var button = incrementButton[i];
    button.addEventListener('click', function (event) {
        var buttonClicked = event.target;
        //console.log(buttonClicked);
        var input = buttonClicked.parentElement.children[1];
        //console.log(input);
        var inputValue = input.value;
        //console.log(inputValue);
        var newValue = parseInt(inputValue) + 1;
        //console.log(newValue);
        input.value = newValue;
        //console.log(input.value);
    })

}

//decrement
for (var i = 0; i < decrementButton.length; i++) {
    var button = decrementButton[i];
    button.addEventListener('click', function (event) {
        var buttonClicked = event.target;
        //console.log(buttonClicked);
        var input = buttonClicked.parentElement.children[1];
        //console.log(input);
        var inputValue = input.value;
        //console.log(inputValue);
        var newValue = parseInt(inputValue) - 1;
        //console.log(newValue);
        input.value = newValue;
        //console.log(input.value);
        if (newValue >= 0) {
            input.value = newValue;
        } else {
            input.value = 0;
            alert('giá trị không thể nhỏ hơn 0')
        }

    })

}


