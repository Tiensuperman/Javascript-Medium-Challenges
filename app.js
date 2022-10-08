function convertToBoolean (arr) {
    return arr.map(elem => !!elem)
}

console.log(convertToBoolean(['', NaN, 500, null, false, 0]))