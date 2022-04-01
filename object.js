var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021,
    engine: "disel",
    transmission: "mechanics"
};

var cadi = {
    make: "GM",
    model: "Cadillac",
    year: 1995,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892,
    engine: "petrol",
    transmission: "auto"
};

var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    engine: "petrol",
    transmission: "auto"
};

var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341,
    engine: "disel",
    transmission: "mechanics"
};

function prequal(car) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return false;
    }
    return true;
}

var worthALook1 = prequal(taxi);
var worthALook2 = prequal(chevy);
var worthALook3 = prequal(cadi);
var worthALook4 = prequal(fiat);

function answer(worthALook, car) {
    if (worthALook) {
        console.log("You gotta check out this " + car.make + " " + car.model);
    } else {
        console.log("You should really pass on the " + car.make + " " + car.model);
    }
}

answer(worthALook1, taxi);
answer(worthALook2, chevy);
answer(worthALook3, cadi);
answer(worthALook4, fiat);