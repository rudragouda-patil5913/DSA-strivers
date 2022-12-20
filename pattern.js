console.log("pattern questions and answers");

// let str ="";

// const pattern = (n) =>{
//   for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//       str += "*";
//     }
//     str += "\n";
//   }
//   return str;
// }
// console.log(pattern(5));

// *****
// *****
// *****
// *****
// *****

// ==================================================

// let str ="";

// const pattern = (n) =>{
//   for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//       str += "*";
//     }
//     str += "\n";
//   }
//   return str;
// }
// console.log(pattern(5));
// *
// **
// ***
// ****
// *****

// ==================================================

// let str ="";

// const pattern = (n) =>{
//   for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//       str += j;
//     }
//     str += "\n";
//   }
//   return str;
// }
// console.log(pattern(5));

// 1
// 12
// 123
// 1234
// 12345
// ==================================================


// let str ="";

// const pattern = (n) =>{
//   for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//       str += i;
//     }
//     str += "\n";
//   }
//   return str;
// }
// console.log(pattern(5));
// 1
// 22
// 333
// 4444
// 55555

// ==================================================

// let str ="";

// const pattern = (n) =>{
//   for(let i=1;i<=n;i++){
//     for(let j=1;j<=n-i+1;j++){
//       str += "*";
//     }
//     str += "\n";
//   }
//   return str;
// }
// console.log(pattern(5));
// *****
// ****
// ***
// **
// *

// ==================================================
// let str ="";

// const pattern = (n) =>{
//   for(let i=1;i<=n;i++){
//     for(let j=1;j<=n-i+1;j++){
//       str += j;
//     }
//     str += "\n";
//   }
//   return str;
// }
// console.log(pattern(5));

// 12345
// 1234
// 123
// 12
// 1
// ==================================================

// let str ="";

// const pattern = (n) =>{
//   for(let i=1;i<=n;i++){
//     for(let j=1;j<=n-i;j++){
//       str += " ";
//     }
//     for(let j=1;j<=2*i-1;j++){
//       str += "*";
//     }
//     str += "\n";
//   }
//   return str;
// }
// console.log(pattern(5));
//     *
//    ***
//   *****
//  *******
// *********
// ==================================================
// let str ="";

// const pattern = (n) =>{
//   for(let i=n;i>=1;i--){
//     for(let j=1;j<n-i+1;j++){
//        str += " ";
//     }
//     for(let j=1;j<=2*i-1;j++){
//       str += "*";
//     }
//      for(let j=1;j<n-i+1;j++){
//       str += " ";
//     }
//     str += "\n";
//   }
//   return str;
// }
// console.log(pattern(5));
// *********
//  *******
//   *****
//    ***
//     *

// ==================================================
// let str ="";

// const pattern = (n) =>{
//   for(let i=n;i>=1;i--){
//     for(let j=1;j<n-i+1;j++){
//       str += " ";
//     }
//     for(let j=1;j<=2*i-1;j++){
//       str += "*";
//     }
//      for(let j=1;j<n-i+1;j++){
//       str += " ";
//     }
//     str += "\n";
//   }
//   return str;
// }
// console.log(pattern(5));
// *********
//  *******
//   *****
//    ***
//     *

// ==================================================
// let str ="";

// const pattern = (n) =>{
//  for(let i=1;i<=n;i++){
//     for(let j=1;j<=n-i;j++){
//       str += " ";
//     }
//     for(let j=1;j<=2*i-1;j++){
//       str += "*";
//     }
//     str += "\n";
//   }

//   for(let i=n;i>=1;i--){
//     for(let j=1;j<n-i+1;j++){
//       str += " ";
//     }
//     for(let j=1;j<=2*i-1;j++){
//       str += "*";
//     }
//     //  for(let j=1;j<n-i+1;j++){
//     //   str += " ";
//     // }
//     str += "\n";
//   }
//   return str;
// }
// console.log(pattern(5));
//     *
//    ***
//   *****
//  *******
// *********
// *********
//  *******
//   *****
//    ***
//     *

// ==================================================
// let str ="";

// const pattern = (n) =>{
//  for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//       str += "*";
//     }
//     str += "\n";
//   }

//   for(let i=n;i>=1;i--){
//     for(let j=1;j<=i-1;j++){
//       str += "*";
//     }
//     str += "\n"; 
//   }
//   return str;
// }
// console.log(pattern(5));
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *
// ==================================================
// let str ="";

// const pattern = (n) =>{
//  for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//       if((i+j)%2 === 0){
//         str += "1 ";
//       }else{
//         str +="0 "
//       }
//     }
//     str += "\n";
//   }

  
//   return str;
// }
// console.log(pattern(5));
// 1 
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1
// ==================================================
// let str ="";

// const pattern = (n) =>{
   
//  for(let i=1;i<=n;i++){
       
//     for(let j=1;j<=i;j++){
//       str += j;
//     }
//     for(let j=1;j<=((n*2)-(i*2));j++){
//       str +=  " ";
//     }
//     for(let j=i;j>=1;j--){
//       str += j;
//     }

//     str += "\n";
//   }

//   return str;
// }
// console.log(pattern(4));
// 1      1
// 12    21
// 123  321
// 12344321

// ==================================================
// let str = "";

// const pattern = (n) =>{
//   let k=1; 
//  for(let i=1;i<=n;i++){  
//     for(let j=1;j<=i;j++){
        
//       str += k + " ";
//       k++;
//     }
//     str += "\n";
//   }
//   return str;
// }
// console.log(pattern(5));
// 1 
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15
// ==================================================

// let N = 65;
// let str ="";
// const pattern = (n) =>{
//   let k=1;
//  for(let i=1;i<=n;i++){
   
//     for(let j=0;j<i;j++){
//       str += String.fromCharCode(N+j);
//     }
//     str += "\n";
//   }
//  return str;
// }
// console.log(pattern(5));
// A
// AB
// ABC
// ABCD
// ABCDE
// ==================================================
// let str ="";
// const pattern = (n) =>{
//  for(let i=1;i<=n;i++){
//    let N = 65;
//     for(let j=n-i+1;j>=1;j--){
//       str += String.fromCharCode(N)+" ";
//       N++;
//     }
//     str += "\n";
//   }
//  return str;
// }
// console.log(pattern(5));
// A B C D E 
// A B C D
// A B C
// A B
// A
// ==================================================
// console.log(Number.isNaN(NaN));
// console.log(isNaN(NaN));
// console.log(NaN);
// console.log("str"===NaN);
// ==================================================
// let str ="";

// const pattern = (n) =>{
//  for(let i=1;i<=n;i++){
//      let N = 64;
//     for(let j=1;j<=n-i;j++){
//       str +=" ";
//     }
//     for(let j=1;j<=i;j++){
        
//         str += String.fromCharCode(N+(j));
       
//     }
//     N = N+(i-1);
//     for(let j=1;j<i;j++){
//         str += String.fromCharCode(N);
//         N--;
//     }
//     str += "\n";
//   }
//  return str;
// }
// console.log(pattern(4));
//   A
//   ABA
//  ABCBA
// ABCDCBA
// ==================================================
// let str ="";

// const pattern = (n) =>{
//  for(let i=1;i<=n;i++){
//      let N = 64;
//       N = N + (n-(i-1));
//     for(let j=1;j<=i;j++){
//           str += String.fromCharCode(N+(j-1)) +" ";
//     }
   
//     str += "\n";
//   }
//  return str;
// }
// console.log(pattern(5));
// E 
// D E
// C D E
// B C D E
// A B C D E
// ==================================================
// let str = "";
// function pattern(n){
// for(let i = 1; i<=n; i++) { 
//   for(let j = n-i+1; j >= 1; j--) { 
//    str += "*";
//   }
//   for(let j = i; j > 1; j--) { 
//    str += "  ";
//   }
//   for(let j = n-i+1; j >= 1; j--) { 
//    str += "*";
//   }
    
//   str += "\n";
// }
// for(let i = 1; i<=n; i++){
//     for(j=1;j<=i;j++){
//         str +="*";
//     }
//     for(let j =n-i; j >= 1; j--) { 
//         str += "  ";
//     }
//    for(j=1;j<=i;j++){
//         str +="*";
//     }
//     str+="\n";
// }
// return str;
// }

// console.log(pattern(5));
// **********
// ****  ****
// ***    ***
// **      **
// *        *
// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ==================================================
// let str = "";
// function pattern(n){
    
//     for(let i = 1; i<=n; i++){
//     for(j=1;j<=i;j++){
//         str +="*";
//     }
//     for(let j =n-i; j >= 1; j--) { 
//         str += "  ";
//     }
//    for(j=1;j<=i;j++){
//         str +="*";
//     }
//     str+="\n";
// }
// for(let i = 1; i<=n; i++) { 
//   for(let j = n-i+1; j >= 1; j--) { 
//    str += "*";
//   }
//   for(let j = i; j > 1; j--) { 
//    str += "  ";
//   }
//   for(let j = n-i+1; j >= 1; j--) { 
//    str += "*";
//   }
    
//   str += "\n";
// }

// return str;
// }

// console.log(pattern(5));
// *        *
// **      **
// ***    ***
// ****  ****
// **********
// **********
// ****  ****
// ***    ***
// **      **
// *        *
// ==================================================
// let str = "";
// function pattern(n){
// for(let i = 1; i<n*2; i++) { 
//   for(let j = 1; j<n*2; j++) { 
//   str += Math.max(Math.abs(n-i)+1,Math.abs(n-j)+1);
//   }
 
//   str += "\n";
// }

// return str;
// }

// console.log(pattern(4));
// 4444444
// 4333334
// 4322234
// 4321234
// 4322234
// 4333334
// 4444444



// ==================================================