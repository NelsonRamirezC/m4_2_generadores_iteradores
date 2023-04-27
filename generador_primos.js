/* En matemáticas, un número primo es un número natural mayor que 1 que tiene únicamente dos divisores positivos distintos: él mismo y el 1 */
function* infinitePrimes() {
    let num = 2;

    while (true) {
        if (isPrime(num)) {
            yield num;
        }

        num++;
    }
}

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

const primes = infinitePrimes();

console.log(primes.next()); // 2
console.log(primes.next()); // 3
console.log(primes.next()); // 5
