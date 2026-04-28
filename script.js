function elem(selector) {
    return document.querySelector(selector);
}

function elems(selector) {
    return document.querySelectorAll(selector);
}

let input = elem("input"),
    last_number,
    operation;

elems(".number").forEach( button => {
    button.addEventListener("click", function () {
        let number = this.innerText;
        input.value = input.value + number;
    });
});

elem("#add").addEventListener("click", function () {
    last_number = input.value;
    input.value = "";
    operation = "add"
});

elem("#sub").addEventListener("click", function () {
    last_number = input.value;
    input.value = "";
    operation = "sub"
});

elem("#mul").addEventListener("click", function () {
    last_number = input.value;
    input.value = "";
    operation = "mul"
});

elem("#div").addEventListener("click", function () {
    last_number = input.value;
    input.value = "";
    operation = "div"
});

elem("#eql").addEventListener("click", function () {
    if (last_number && operation) {
        let result;
        switch (operation) {
            case "add": {
                result = parseInt(last_number) + parseInt(input.value);
            } break;
            case "sub": {
                result = parseInt(last_number) - parseInt(input.value);
            } break;
            case "mul": {
                result = parseInt(last_number) * parseInt(input.value);
            } break;
            case "div": {
                if (parseInt(input.value) === 0) {
                    result = "Ошибка: деление на 0";
                } 
                else {
                    result = parseInt(last_number) / parseInt(input.value);
                }
            } break;
            case "pow": {
                result = Math.pow(parseFloat(last_number), parseFloat(input.value));
            } break;
        }
        input.value = result;
        last_number = null;
        operation = null;
    }
});

elem("#sqr").addEventListener("click", function () {
    let number = parseInt(input.value);
    input.value = Math.pow(number, 2);
});

elem("#slr").addEventListener("click", function () {
    input.value = "";
    last_number = null;
    operation = null;
});

elem("#vvs").addEventListener("click", function () {
    last_number = input.value;
    input.value = "";
    operation = "pow";
});

elem("#crn").addEventListener("click", function () {
    let number = parseFloat(input.value);
    if (number < 0) {
        input.value = "Ошибка: отрицательное число";
    } 
    else {
        input.value = Math.sqrt(number);
    }
});