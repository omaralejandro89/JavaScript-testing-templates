/**
 * Created by Omar on 10/14/14.
 */
var age = Number(prompt("What is your age?", ""));

var string = "";
while (age > 0 ) {
    string += "Happy birthday \n";
    age = age - 1;
}

console.log(string);
