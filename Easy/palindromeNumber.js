/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y = ''
    let z = ''
   
 if (x < 0) {
       return false;
   }
    var str = x.toString();
       for(var j=str.length-1;j>=0;j--){
           
           y+=(str[j])
           z = y.toString()
          
           }
       
    return str===z
           
        
   
};
