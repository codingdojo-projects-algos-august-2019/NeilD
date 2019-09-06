// Study Guide

/*Recursive Sigma*/

function rSigma(num) {
    if (num == 1) {
      return 1;
    }
    return rSigma(num-1) + num;
  }
  
  console.log(rSigma(99));
  
  /*Recursive Factorial*/
  
  function rFactorial(num) {
    if (num <= 1) {
      return 1;
    }
    return rFactorial(num - 1) * num;
  }
  
  console.log(rFactorial(5));