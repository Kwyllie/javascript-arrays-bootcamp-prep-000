var chocolateBars=[
  "snickers", "hundred grand", "kitkat", "skittles"]
  
  function addElementToBeginningOfArray(array, element){
   const arr2=[element,...array]
   return arr2
  }
  
  function destructivelyAddElementToBeginningOfArray(array, element){
     array.unshift(element)
    return array
  }
  
  function addElementToEndOfArray(array, element){
    const arr2=array.concat(element)
    return arr2
  }
  
  function destructivelyAddElementToEndOfArray (array, element){
    array.push(element)
    return array

  }
  
  function accessElementInArray(array, index){
  return array[index]
  }
  
  function destructivelyRemoveElementFromBeginningOfArray(array){
    return array.shift(1)
  }
  
  function removeElementFromBeginningOfArray(array){
    const arr2=array.slice(1)
    return arr2
  }
   
  function destructivelyRemoveElementFromEndOfArray(array){
    return array.pop()
  }
  
  function removeElementFromEndOfArray (array){
    array.slice(0,array.lenth-1)
  }