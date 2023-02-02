function maxInarray(numbers) {
    let largest = numbers[0]
// console.log('is okay' , numbers);
for (i=0; i< numbers.length; i++){
    
    const index = i;
// console.log(index);
const element = numbers[index]
if (element < largest) {
   largest = element 
}

}
return largest


}
    


const height = [167,190,120,165,137];
const tallets = maxInarray (height);
console.log('tallest is ', tallets );