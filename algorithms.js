function reverseArr (arr){
    var temp = 0;
    if( arr.length % 2 ==0){
        for(var i =0; i< arr.length){

        }
        temp= arr[i];

    }
}

function DoubleUp (arr){
    var origLen = arr.length; //3
    arr.length = arr.length*2;
    for (var i= origLen -1; i >= 0 ; i--){
        arr[i*2] = arr[i];
        arr[i*2+1] = arr[i];
        console.log(arr)
    }
    return arr;
}
console.log(DoubleUp([7,4,10]))