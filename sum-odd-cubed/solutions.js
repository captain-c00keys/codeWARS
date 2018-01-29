function cubeOdd(arr) {
    var sum = 0;
    var tester = function findOdd(num) {
        if (num% 2 !== 0) {
            return num;
        } else {
            return undefined;
        }
    }
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number") {
            return undefined;
        } else if (tester(arr[i]) !== undefined){
            sum += Math.pow(arr[i], 3);
        } 
    }
return sum;
}

cubeOdd([1, 2, 3, 4]) // 28