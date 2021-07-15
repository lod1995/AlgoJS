// solution one - the loop method.


function sumUp(n){
let result = 0;
for(let i = 1; i <= n; i++){
result += i;
  }
  return result;
}

sumUp(2);






// ver 2 - math to remove loop - faster method

function sumUp(n){
return( n / 2) * (1 + n );
}

sumUp(3);
