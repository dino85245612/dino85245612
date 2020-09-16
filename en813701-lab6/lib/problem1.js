while (true) {
    let n = prompt("Enter a positive interger")
    let nArray = []

    if (n > 0 && n % 1 == 0) {
        if (n == 1) {
            alert("Empty list")
            break;

        } else if (n > 1) {
            nextPrime:
            for (let i = 2; i <= n; i++) {
                for (let j = 2; j < i; j++) {
                    if (i % j == 0) continue nextPrime;
                }
                nArray.push(i)
            }
            
            alert("For n =" + n + " prime numbers are " + nArray)
            break;
        }
    }
}