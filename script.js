let checkNumberEven = function (number) {
    return new Promise((resolve, reject) => {
        if (number % 2 == 0) {
            resolve("So " + number + " la so chan");
        } else {
            reject("So " + number + " la so le");
        }
    });
}

let check = function () {
    let number = document.getElementById("input").value;
    checkNumberEven(number)
    .then((msg) => {
        console.log("Ket qua:", msg);
    })
    .catch((err) => {
        console.log("Loi:", err);
    });
}




