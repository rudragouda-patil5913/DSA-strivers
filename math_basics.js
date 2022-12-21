// console.log("Maths basics ")
/*  ===================================================================== */
//Count Digits

// const count = (n) =>{
//     n = Math.abs(n);
//     let y = n.toString();
//     y = y.length;
//     return y;
// }
// console.log(count(12323231));

/*  ===================================================================== */


// Reverse a Palindrome

// var reverse = function(x) {
//   var y = Math.abs(x);
//     var result = 0;
//     while(y !== 0){
//         result = result * 10 + y % 10;
//         y = parseInt(y / 10);
//     }
//     x > 0 ? result = result : result = -result;
//     if(result > 2147483648 || result < -2147483649) return 0;
//     return result;
// };
// console.log(reverse(-12349));

/*  ===================================================================== */

//Palindrome true or false
// var isPalindrome = function(x) {
//     let y = x.toString().split('').reverse().join('');
//     y= parseInt(y);
//     if(x === y){
//         return true;
//     }
//     return false;
// };

// console.log(isPalindrome(-121));
/*  ===================================================================== */

//GCD or HCM

// const gcd = (a,b)=>{
//     if(b===0){
//         return a;
//     }
//     return gcd(b,a%b);
// }

// console.log(gcd(2,3));


// const GCD=(a,b)=>{
//     var ans;
//     for(let i=1;i<=Math.min(a,b);i++){
//         if(a%i ===0 && b%i ===0){
//             ans = i;
//         }
//     }
//     return ans;
// }
// console.log(GCD(8,4));
/*  ===================================================================== */
//Armstrong number

// const Armstrong = (a)=>{
//     let s = a.toString().split('');
//     len = s.length;
//     let ans=0;
//     s.map((ele)=>{
//         ans += Math.pow(ele,len);
//     })
//     if(ans===a) return 1;
    
    
//     return 0;
// }

// console.log(Armstrong(1634));
/*  ===================================================================== */

//Print all divisor of the given number

// const PrintDiv=(n)=>{
//     let ans=[];
//     let k = Math.floor(Math.sqrt(n));
//     for(let i=1;i<=k;i++){
//         if(n % i === 0){
//             ans.push(i);
//             if(i!= n/i) ans.push(n/i);
//         }
//     }
//     return ans;
// }
// console.log(PrintDiv(36));
/*  ===================================================================== */

//Check for prime

// const Prime =(n)=>{
//     if(n==1){
//        return false;
//     }
//     let k = Math.floor(Math.sqrt(n));
//     for(let i=2;i<=k;i++){
//         if(n%i === 0){
//             return false;
//         }
//     }
//     return true;
// }

// function isPrime(n){
    
//     if(Prime(n)){
//         console.log("Prime number");
//     }else{
//         console.log("Not a Prime number");
//     }
// }
// isPrime(1);