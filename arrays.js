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
     array.shift()
     return array
  }
  
  function removeElementFromBeginningOfArray(array){
    const arr2=array.slice(1)
    return arr2
  }
   
  function destructivelyRemoveElementFromEndOfArray(array){
     array.pop()
     return array
  }
  
  function removeElementFromEndOfArray (array){
  const arr2= array.slice(0,array.length-1)
    return arr2
  }