// let outsideVariable = 5;
//
// function doSomething () {
//   var test =19;
//   console.log(outsideVariable);
// }
// doSomething();
// console.log(outsideVariable);

// function firstFunction() {
//   console.log("I am the first function.");
// }
// function secondFunction() {
//   firstFunction()
//   console.log("I am the second function.");
//   function insideSecondFunction() {
//     console.log('Im insideSecondFunction');
//   }
//   insideSecondFunction();
// }
// secondFunction()
//
// function joinStringsAndPrint(string1, string2) {
//   var newstring = string1 + string2;
//   function printString() {
//     console.log(newstring);
//   }
//   printString(newstring)
//   return newstring;
// }
// var hello = 'Hello ';
// var world = 'world';
// joinStringsAndPrint(hello, world)

function joinStringsAndPrint( string1 , string2 ) {

	var newString =  string1 + string2;

	function printString( string ) {

		console.log(string);

		// Q3
		// console.log(newString);

		// Q4
		// console.log(string1 + string2);

	}

	printString( newString );

	return newString;


}
var string1 = "hello, ";
var string2 = "world";
joinStringsAndPrint( string1 , string2 );

// Q1
// printString( "run from outside joinStrings" );

// Q2
// console.log(newString)
