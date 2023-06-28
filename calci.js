function calculator(arth) {
    var VALUE1 = document.getElementById('VALUE1').value;
    var VALUE2 = document.getElementById('VALUE2').value;
    var TOTAL = document.getElementById('show');
    if (arth == '+') {
        TOTAL.innerHTML = Addition(parseInt(VALUE1), parseInt(VALUE2));
    }
    if (arth == '-') {
        TOTAL.innerHTML = Subtraction(parseInt(VALUE1), parseInt(VALUE2));
    }
    if (arth == '*') {
        TOTAL.innerHTML = Multiplication(parseInt(VALUE1), parseInt(VALUE2));
    }
    if (arth == '/') {
        TOTAL.innerHTML = Division(parseInt(VALUE1), parseInt(VALUE2));
    }
}
var Addition = function (VALUE1, VALUE2) {
    return VALUE1 + VALUE2;
};
var Subtraction = function (VALUE1, VALUE2) {
    return VALUE1 - VALUE2;
};
var Multiplication = function (VALUE1, VALUE2) {
    return VALUE1 * VALUE2;
};
var Division = function (VALUE1, VALUE2) {
    return VALUE1 / VALUE2;
};
