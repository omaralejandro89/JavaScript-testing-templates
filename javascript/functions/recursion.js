/**
 * Created by Omar on 10/14/14.
 */
//iterable

function nonRecursive (num,exp) {
    var retval = 1;
    for (var i =0; i < exp; i++) {
        retval *= num;
    }
    return retval;
}

var answer = nonRecursive(3,4);
alert(answer)