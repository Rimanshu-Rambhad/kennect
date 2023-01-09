function isPrime(x) {
    if (x < 2) {
        return false;
    }
    for (let i = 2; i < x; i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}
function nextPrimeDifference(x) {
    let nextPrime = x + 1;
    while (!isPrime(nextPrime)) {
        nextPrime++;
    }
    return nextPrime - x;
}
const x = 89;
console.log(isPrime(x));
console.log(nextPrimeDifference(x));
