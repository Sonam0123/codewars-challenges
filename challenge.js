// function twoNumberSum(array, targetSum) {
//     let newArr = {}
//     for (let i = 0; i < array.length; i++) {
//         let num = array[i]
//         let diff = targetSum - num
//         if (diff in newArr) {

//             return [diff, num]
//         } else {
//             newArr[num] = true
//         }
//     }
//     return []
    
//   }

// console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))

var isSubsequence = function(s, t) {
    let sSplit = s.split('')
    let tSplit = t.split('')
    let sIdx = 0
    let tIdx = 0
    while(sIdx < sSplit.length && tIdx < tSplit.length){
      if(sSplit[sIdx] === tSplit[tIdx]){
        sIdx ++
      }
      tIdx++
    }
    return sIdx === sSplit.length
  
  };
  
  // console.log(isSubsequence("abc", "ahbgdc"))
  
  function filter_list(l) {
    let arr = []
    for(let i = 0; i < l.length; i++){
      if(typeof l[i] === "number"){
        arr.push(l[i])
      }
    }
    return arr
  }
  
    // console.log(filter_list([1,'a','b',0,15]))
  
  
    function sortedSquaredArray(array) {
      const map = array.map(numbers => {
        return numbers * numbers
      })
      let sorted = map.sort()
      return sorted
    }
    // console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]))
  
  
  function isPalindrome(string) {
    let split = string.split('')
    let rev = split.reverse()
    let left = 0
    let right = split.length - 1
    while(left < right){
      if(split[left] === rev[left]){
        left += 1
    }else{
      break
    }
     if(left === right){
      return true
    }else{
      return false
    }
  }
      
  }
  // console.log(isPalindrome('abcba'))  
  function twoNumberSum(array, targetSum) {
    let map = {}
    for (let i = 0; i < array.length; i++) {
      let curr = targetSum - array[i]
      if(curr in map){
        return [curr, array[i]]
      }else{
        map[array[i]] = true
      }
    }
  }
  // console.log(twoNumberSum([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5));
  var mergeTwoLists = function(list1, list2) {
    let arr =[]
    for(let i = 0; i < list1.length; i++){
      arr.push(list1[i])
    }
    for(let j = 0; j < list2.length; j++){
      arr.push(list2[j])
    }
    return arr.sort()
    
  };
  
  // console.log(mergeTwoLists([1,2,4],[1,3,4]));
  function more4than0(n) {
      let obj = {
      4 : 0,
      0 : 0
    };
    for(let i = 0; i < n.length; i++){
      if(n[i] = 0){
        obj[0] += 1
      }else if(n[i] = 4){
        obj[4] +=1 
      }
    }
    console.log(obj);
    
    if(obj[4] > obj[0]){
      return true
    }else{
      return false
    }
  }
  console.log(more4than0([4,0,4,0]));
  
  
  