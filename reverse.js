function reverse(text) {
    let re = '';
    for(i = text.length-1; i>=0; i--){
        const element = text[i];
        re = re + element;
        console.log(element, re);
    }
    return re
}
const m = 'i am  a gd boy ';
const reverses = reverse(re)
