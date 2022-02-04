//if divisible by 3 then return foo   divisible by 5 then bar if both foobar

function foo_bar(n) {
    for (let i = 0; i <= n; i++) {

        if (i % 5 == 0 && i % 3 == 0) {
            console.log('foobar')
            continue;
        }
        if (i % 3 == 0) {
            console.log('foo');
            continue;
        }
        if (i % 5 == 0) {
            console.log('bar');
            continue;
        }

        console.log(i);
    }
}
foo_bar(50);