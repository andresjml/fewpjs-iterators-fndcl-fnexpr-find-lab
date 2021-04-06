function superbowlWin(arr) {
    let obj = arr.find( result => result.result === "W" )
    if(!!obj){
        return obj.year
    }
    else{
        return undefined;
    }
    
  }