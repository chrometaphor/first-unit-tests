// functions.js
function addTwoNumbers(num1, num2) {
     return (num1 + num2)


}

function sayHello(name) {
    if (name === 'Will') {
       return  'No more testing Will!'
    } else {
        return `Hi there ${name}!`
    }
}

function buildCar(carColor, carType) {
    var carDetails = {
        color: carColor,
        type: carType
    }
    if (carColor || carType) {
        return carDetails
    } else {
        return {}
    }


    // return carDetails
}

// function buildCar(carColor, carType) {
//     var carDetails = {
//     }
//     carDetails.color = carColor
//     carDetails.type = carType

//     return carDetails
// }

module.exports = {
    addTwoNumbers,
    sayHello,
    buildCar
}

// color: carColor,
// type: carType