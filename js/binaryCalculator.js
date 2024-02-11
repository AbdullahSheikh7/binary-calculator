let zero = document.querySelector("#btn0");
let one = document.querySelector("#btn1");

let res = document.querySelector("#res");
let exp1 = "", exp2 = "", result = "";

let eql = document.querySelector("#btnEql");
let clr = document.querySelector("#btnClr");

let sum = document.querySelector("#btnSum");
let sub = document.querySelector("#btnSub");
let mul = document.querySelector("#btnMul");
let div = document.querySelector("#btnDiv");

const inputOpe = (e, re) => {
    if (res.innerHTML == "") {
        return;
    }
    if (exp2 != "") {
        exp1 += parseInt(exp2, 2);
        result = eval(exp1);
        exp1 = result;
        exp2 = "";
        res.innerHTML = result.toString(2);
        res.innerHTML += e.target.innerHTML;
    } else {
        exp1 = parseInt(exp1, 2);
        exp1 += e.target.innerHTML;
        res.innerHTML += e.target.innerHTML;
    }
}

const inputNum = (e) => {
    res.innerHTML += e.target.innerHTML;
    if ((/[+\-*\/]/).test(exp1)) {
        exp2 += e.target.innerHTML;
    } else {
        exp1 += e.target.innerHTML;
    }
}

const clearAll = () => {
    res.innerHTML = "";
    exp1 = "";
    exp2 = "";
    result = "";
}

const equal = () => {}

zero.addEventListener("click", inputNum);
one.addEventListener("click", inputNum);

clr.addEventListener("click", clearAll);
eql.addEventListener("click", equal);

sum.addEventListener("click", inputOpe);
sub.addEventListener("click", inputOpe);
mul.addEventListener("click", inputOpe);
div.addEventListener("click", inputOpe);
