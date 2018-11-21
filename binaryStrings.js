
function strSum(aString, bString) { 

	var a = aString.split('');
	var b = bString.split('');

	if (aString.length >= bString.length) {
		var longest = a;
		var index = a.length - 1;

		for (var i = index; i >= 0; i--) {
			if (!(b[index])) {
				b.unshift('0');
			}
		}
		
	}
	if (bString.length > aString.length) {
		var longest = b;
		var index = b.length - 1;

		for (var i = index; i >= 0; i--) {
			if (!(a[index])) {
				a.unshift('0');
			}
		}
	}
	

	// for (var i = a.length - 1; i > 0; i--) {
	// 	if (b[i] !== 0 || b[i] !== 1) {
	// 			b.unshift("0");
	// 	}
	// }
	// var i = a.length - 1;
	var carryOver = 0;
	var result = "";

	// return b;

	for (var i = longest.length - 1; i >= 0; i--) {
		// console.log("index is " + result);
		var sum = Number(a[i]) + Number(b[i]) + carryOver;
		// console.log("index: " + i + ", a: " + Number(a[i]) + ", b: " + Number(b[i]) + ", carryOver: " + carryOver);
		// console.log(sum);
		if (sum === 2) {
			result = "0" + result;
			carryOver = 1;
			// console.log("index:" + i + ", sum === 2: " + result);
		}
		if (sum === 3) {
			result = "1" + result;
			carryOver = 1;
			// console.log("index:" + i + ", sum === 3: " + result);
		}
		if (sum === 0 || sum === 1) {
			if (sum === 0) {
				result = "0" + result;	
			}
			if (sum === 1) {
				result = "1" + result;		
			}
			// console.log(result);
			carryOver = 0;
			// console.log("index:" + i + ", sum === 0 or 1: " + sum);
		}
	}
	return carryOver + result;
}

console.log(strSum("11","1")); //100
console.log(strSum("1010","1011"));// Output: "10101"
console.log(strSum("1","11"));// Output: "10101"
console.log(strSum("1111","1"));// Output: "10000"