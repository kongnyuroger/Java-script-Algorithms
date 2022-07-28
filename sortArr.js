function sortArr(arr){
    const newArr = [];
    for(let i = 0; i <= arr.length; i++){
       
      if(arr[0] < arr[1]){
       newArr.push(arr[0])
      } else { newArr.push(arr[1])}
 
      console.log(newArr)
    }
 }
 sortArr([3,2,7,5])
 