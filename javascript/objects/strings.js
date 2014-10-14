/**
 * Created by Omar on 10/14/14.
 */
var string1 = "Hi Omar and ";
var string2 = "Hi gssfsd Espen \"du\"";

var newString = string1 + string2;
//alert(newString);

//alert(newString.split(" "));

var indexOfOmar = newString.indexOf("Omar");
var indexOfOEspen = newString.indexOf("Espen");

//alert(indexOfOmar);

var cadena = newString.slice(indexOfOmar, indexOfOEspen);
alert(cadena);
