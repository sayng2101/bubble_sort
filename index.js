function swap(arr, first_Index, second_Index) {
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}

function bubble_Sort(arr) {
    var len = arr.length, i, j, stop;
    for (i = 0; i < len; i++) {
        for(j = 0, stop = len - i; j < stop; j++){
            if (arr[j] > arr[j+1]) {
                swap(arr, j , j+1);
            }
        }
    }
    return arr;
}

console.log(bubble_Sort([9,8,-1,4,-5,6]))

var demo = document.getElementById("demo");


// var number = 1;
// console.log(number);


