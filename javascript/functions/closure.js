/**
 * Created by Omar on 10/14/14.
 */
var scope = "global";

function testScope() {
    var scope = "local";
    function innerFunc() {
        return scope;
    }
    return innerFunc();
}

var answer = testScope();
output.innerHTML = answer;
alert(answer)
