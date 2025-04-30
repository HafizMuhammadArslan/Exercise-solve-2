function findSum() {
    let a = 0;

    for (let number = 1; number < 1000; number++) {
      if (number % 3 === 0 || number % 5 === 0) {
        a += number;
      }
    }

    alert(" Sum of all 3 or 5 below 1000 is  " + a);
  }