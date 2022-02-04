
function dupNum(num) {
    let duplicate = [];
    for (let element of num) {
        if (duplicate.indexOf(element) == -1) {
            duplicate.push(element);
        }

    }
    console.log(duplicate);
}
//let num = ['bulbul', 'kabull', 'jabul', 'habul', 'habul', 'bulbul', 'rubul', 'jabul'];
let num = [38, 45, 35, 23, 65, 86, 35, 38, 45, 78];
dupNum(num);