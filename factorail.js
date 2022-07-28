export function factorail(n){
    let result = 1;
    for(let i = 1; i <= n; i++){
        result = result * i
    }

    return result
 }  
 console.log(factorail(  5));
 console.log(factorail(6));
 console.log(factorail(10));