function getPrimeNumber(quantity) {

    count = 0;
    allCounts = [];
    primeCounts = [];
    number = 2;


    while (count < quantity) {

        isPrime = true;

        for (let i=0; i<allCounts.length; i++) {
            if (number % allCounts[i] === 0) {
                isPrime = false;
                break;
            }
        }

        allCounts.push(number);
        if (isPrime === true) {
            primeCounts.push(number);

            count++;
        }

        number++;
    }
    return primeCounts;
}


console.log(getPrimeNumber(process.argv[2]));
