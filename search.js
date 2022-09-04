export function search (n , t){
    for(let i = 0; i <= n.length; i++){
       if(n[i] === t){
            return i;
       } 
    }
      return -1
  }
 search([1,3,5,6,7], 4);