const linearSearch = function(valueToFind, arrayToSearchThrough){
   let found
   for(let i = 0; i < arrayToSearchThrough.length; i++){
      if(valueToFind === arrayToSearchThrough[i]){
         found = i
      }
   }
   return found
}

const linearSearchGlobal = function(valueToFind, arrayToSearchThrough){
   let found = []
   for(let i = 0; i < arrayToSearchThrough.length; i++){
      if(valueToFind === arrayToSearchThrough[i]){
         found.push(i)
      }
   }
   return found
}

module.exports.linearSearch = linearSearch
module.exports.linearSearchGlobal = linearSearchGlobal
