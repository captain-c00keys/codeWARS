function isNice(arr){
  for (var i=0; i < arr.length; i++) {
  if (arr.indexOf(arr[i] + 1) < 0 && arr.indexOf(arr[i] - 1) <0) {
    return false;
    
  } else {
  
  }
  }
  return true;
}