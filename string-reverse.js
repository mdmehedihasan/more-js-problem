function strReverse(givenString) {
    let revString = '';
    for (let stringBox of givenString) {
        revString = stringBox + revString;


    }
    console.log(revString);

}
strReverse('hello');


//another way

function anotherWay(takeString) {

    let total = '';
    for (let i = takeString.length - 1; i >= 0; i--) {
        //console.log(takeString[i]);
        total = total + takeString[i];
    }
    console.log(total);

}

anotherWay('valobasi');