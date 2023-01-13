// complete the given function

function palindrome(str){
str = str.toLowerCase();
let x = str.length;
for(let i=0;i<x/2;i++){
	if(str.charAt(i)!=str.charAt(x-i)){
		return false;
	}
}
return true;
}
module.exports = palindrome
