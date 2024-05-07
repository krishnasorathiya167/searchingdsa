// kadens algo

// let arr = [-21,-3,14,12,-21,11,-5];

// let max = 0;
// let current = arr[0];
// for(let i =0 ;i<arr.length;i++){
//     current = current+arr[i];
//     if(current <0){
//         current=0
//     }
//     if(max<current){
//         max=current
//     }
// }
// console.log(max);

// linear search

// let arr = [1,2,3,4,5,,6,7,8];
// let element = 5;

// let found = false;

// for(i=0;i<arr.length;i++){
//     if(arr[i]===element){
//         found = true;
//         console.log("this element found");
//         break;
//     }
// }
// if(!found){
//     console.log("this element not found");
// }

// binary search

// let arr = [11, 12, 13, 14, 15, 16];
// let search = (arr, element, start, end) => {
//     let mid = (start + end) / 2;

//     if (arr[mid] === element) {
//         return mid; 
//     } else if (arr[mid] > element) {
//         return search(arr, element, start, mid - 1); 
//     } else {
//         return search(arr, element, mid + 1, end); 
//     }
// }
// let result = search(arr, 14, 0, arr.length);
// console.log(result);

