var arr1 =  ["orange", "banana", "apple"]


for( let i = 0; i< arr1.length;i++) {
    console.log(i)
}

for (i in arr1) {
    arr1[i] == 'banana' && arr1.splice(i,1)
}
console.log(arr1)


