// 1.User gives 2 numbers (A and B). Print to the console the result of dividing A by B and the remainder of the division.
// let A = prompt("Please enter the value:");
// let B = prompt("Please enter the value:");
// console.log(A/B , A%B);

// 2.The user enters 2 values (A and B). Swap the contents of variables A and B (that means the value of variable B must be assigned to variable A, and vice versa).
// let A = prompt("Please enter the value:");
// let B = prompt("Please enter the value:");
// let X=A;
//  A=B;
//  B=X;
//  console.log(A,B);

// 3.The user enters 3 non-zero numbers (A, B and C). Print to the console the solution (the value of X) of the standard linear equation, where A*X+B=C.
// let A = +prompt("Please enter the value:");
// while(A===0 || A===""  ){
//     A=+prompt("value cannot be zero or empty");
// }

// let B = +prompt("Please enter the value:");
// while(B===0 || B===""  ){
//     B=+prompt("value cannot be zero or empty");
// }
// let C = +prompt("Please enter the value:");
// while(C===0 || C===""  ){
//     C=+prompt("value cannot be zero or empty");
// }
// let x = (C- B)/A;
// console.log(x);

// 4.User gives 2 numbers (A and B). If A>B then print to the console the result of A+B, if A=B then the result of A*B, if A<B then A-B.
// let A = prompt("Please enter the value:");
// let B = prompt("Please enter the value:");
// if(A>B){
//     console.log(A+B);
// }
// else if (A===B){
//     console.log(A*B);
// }
// else{
//     console.log(A-B);

// }

// 5.User gives 3 numbers (a, b, c). Find out and print to the console the solution of quadratic equation ax^2+bx+c=0.
// let A = prompt("Please enter the value:");
// let B = prompt("Please enter the value:");
// let C = prompt("Please enter the value:");
// let root1;
// let root2;
// const D = Math.pow(B,2)-4*A*C;
// if(D<0){
//     console.log(`No solution`);
// }
// else if (D ===0)  {
//     root1=root2=-B/2*A;
//     console.log(root1);
// }
// else{
//      root1= (-B+Math.sqrt(D))/2*A;
//      root2= (-B-Math.sqrt(D))/2*A;
//      console.log(root1 , root2);

// }

// 6.The user enters a two-digit number. Print the literal representation of this number to the console. For example, typing "25" will display "twenty five" in the console, and "13" will display "thirteen".
// let a = prompt("please enter the value");
// let firstpart;
// let secondpart;
// if (a.length !== 2) {
//     alert(`enter the two digit number`);
// }
// else { 
//     if (a == 10) {
//     console.log(`ten`);
//     firstpart = "";
//     secondpart = "";
// }
// if (a ==11) {
//     console.log(`eleven`);
//     firstpart = "";
//     secondpart = "";

// }
// if (a ==12) {
//     console.log(`twelfe`);
//     firstpart = "";
//     secondpart = "";

// }
// if (a == 13) {
//     console.log(`threeteen`);
//     firstpart = "";
//     secondpart = "";

// }
// if (a == 14) {
//     console.log(`fourteen`);
//     firstpart = "";
//     secondpart = "";

// }
// if (a ==15) {
//     console.log(`fiveteen`);
//     firstpart = "";
//     secondpart = "";

// }
// if (a == 16) {
//     console.log(`sixteen`);
//     firstpart = "";
//     secondpart = "";

// }
// if (a ==17) {
//     console.log(`seventeen`);
//     firstpart = "";
//     secondpart = "";

// }
// if (a ==18) {
//     console.log(`eightteen`);
//     firstpart = "";
//     secondpart = "";

// }
// if (a ==19) {
//     console.log(`nineteen`);
//     firstpart = "";
//     secondpart = "";

// }
// if (a.startsWith("2")) {
//     firstpart = "twenty";
//     secondpart = "";
// }
// if (a.startsWith("3")) {
//     firstpart = "thirty";
//     secondpart = "";
// } if (a.startsWith("4")) {
//     firstpart = "forty";
//     secondpart = "";
// } if (a.startsWith("5")) {
//     firstpart = "fifty";
//     secondpart = "";
// } if (a.startsWith("6")) {
//     firstpart = "sixty";
//     secondpart = "";
// } if (a.startsWith("7")) {
//     firstpart = "seventy";
//     secondpart = "";
// } if (a.startsWith("8")) {
//     firstpart = "eighty";
//     secondpart = "";
// }
// if (a.startsWith("9")) {
//     firstpart = "ninety";
//     secondpart = "";
// }
// if (a.endsWith("1",2  ) == true && !a.startsWith("1")) {
//     secondpart = "one";
    

// }
// if (a.endsWith("2",2)==true && !a.startsWith("1")) {
    
//     secondpart = "two";

// } if (a.endsWith("3",2)==true && !a.startsWith("1")) {
    
//     secondpart = "three";

// } if (a.endsWith("4",2)==true && !a.startsWith("1")) {
    
//     secondpart = "four";

// } if (a.endsWith("5",2)==true && !a.startsWith("1")) {
    
//     secondpart = "five";

// } if (a.endsWith("6",2)==true && !a.startsWith("1")) {
   
//     secondpart = "six";

// } if (a.endsWith("7",2)==true && !a.startsWith("1")) {
   
//     secondpart = "seven";

// } if (a.endsWith("8",2)==true && !a.startsWith("1")) {
   
//     secondpart = "eight";

// } if (a.endsWith("9",2)==true && !a.startsWith("1")) {
   
//     secondpart = "nine";

// }

// }
// console.log(firstpart,secondpart);


// 7.User gives 3 numbers (x, y, r). Find out if point with location (x,y) is inside a circle with radius r? (the center of the circle is at the origin)

// let x = prompt("Please enter the value:");
// let y= prompt("Please enter the value:");
// let r = prompt("Please enter the value:");
// if(Math.pow(x,2)+Math.pow(y,2)<Math.pow(r,2)){
//     console.log("in the circle");
// }
// else if (Math.pow(x,2)+Math.pow(y,2)==Math.pow(r,2)){
//     console.log("uste uste dusur");
// }
// else{
//     console.log ("outside");
// }












