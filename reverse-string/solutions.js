function reverseString(str){
    var revStr = "";
    var cutstr = str;
    var length = str.length;
    for(var i=str.length; i>0; i--){
      revStr = revStr + str.slice(-1);
      str= str.slice(0,-1);
    }
     
    
    return revStr;
  }