/**
 * Created by Omar on 10/14/14.
 */

var constant = 32;

function celciusToFar ( temperature) {
    var farenheitTemp = temperature*9/5 + constant;
    return farenheitTemp;
}


output.innerHTML = celciusToFar(36);