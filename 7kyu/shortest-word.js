// Simple, given a string of words, return the length of the shortest word(s).

//My solution
function findShort(s){
    return  s.split(" ").reduce((a,b) => a.length<=b.length ? a : b ).length
  }