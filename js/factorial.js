exports.factorial = function(num) {
    let result = 1;	
    // factorial 0! = 1	
    if (num === 0){	
      return 1;	
    } else {
    // test case of factorial(45) fails without recursion
        return num * exports.factorial(num - 1);
    }
};
