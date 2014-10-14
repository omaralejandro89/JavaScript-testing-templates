/**
 * Created by Omar on 10/14/14.
 */
var age = Number(prompt("What is your age"));

var string = "";
for (var counter = 1; counter < age; counter+= 1) {
    string += "Happy birthday \n";
    if (counter % 7 == 0) {
        break;
    }
}
alert(string);