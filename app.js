
// 17.Basketbol o’yinida ikki ochkolik va uch ochkolik gollar
// mavjud. Agar funksiya 1-argument sifatida ikki ochkolik gollar
// sonini va 2-argument sifatida uch ochkolik gollar sonini qabul
// qilsa, jamoaning jami ochkosini qaytaradigan funksiya yasang.
// function ochkolar(x,y) {
//     return (x*2)+(y*3)
// }
// console.log(ochkolar(+prompt("Son kiriting: "),+prompt("Son kiriting: ")));

// ***********************************************

// 18.Quyidagi namunalarni kuzatgan holda unga muvofiq
// funksiya yasang.
// Namuna:
// nameString("Mubashir") ᔍ "MubashirEdabit"

// function edabit(a){
//     return a+"Edabit"
// }
// console.log(edabit(prompt("So'z kiriting")));

// ***********************************************

// 19.Ikkita son kiritilsa, agar ularning yig’indisi 100dan kichkina
// bo’lsa rost, katta bo’lsa yolg’on qiymat qaytaradigan funksiya
// yasang.

// function ikkitaSon(x,y) {
//     if(x+y<100){
//         return true
//     }
//     else {
//         return false
//     }
// }
// console.log(ikkitaSon(+prompt("1-Son"), +prompt("2-son")));

// ***********************************************

// 20.Quyidagi namunalarni kuzatgan holda unga muvofiq keladigan funksiya yasang.
// Namuna:
// printArray(1) ᔍ [1]

// function printArray(n) {
//     let arr = [];

//     for(let i = 1; i<=n; i++){
//         arr.push(i);
//     }

//     return arr;
// }
// console.log(printArray(+prompt("Son kiriting: ")));

// ***********************************************

// 21.Fermada turli xildagi hayvonlar mavjud. Shunday funksiya
// yasangki, ushbu funksiya jami fermadagi hayvonlar oyoqlari
// nechta ekanligini hisoblab qaytarsin. Bunda funksiya birinchi
// argument sifatida tovuqlar sonini, ikkinchi argument sifatida
// qo’ylarni va uchinchi argument sifatida sigirlarning sonini
// qabul qiladi.

// function oyoqlar(tovuq, qoy, sigir) {
//     return (tovuq*2)+(qoy*4)+(sigir*4)
// }
// console.log(oyoqlar(+prompt("tovuqlar soni:"), +prompt("qo'ylar soni"), +prompt("sigirlar soni:")));

// ***********************************************

// FizzBuzz

// function fizzbuzz(a){
//     if(a%3==0 && a%5==0){
//         return "FizzBuzz"
//     }
//     else if ( a%3==0){
//         return "Fizz"
//     }
//     else if (a%5==0){
//         return "Buzz"
//     }
//     else {
//         return false
//     }
// }
// console.log(fizzbuzz(+prompt("Son kiriting: ")));

// ***********************************************


// var fibonacci_series = function (n) {
//     if (n <= 1) {
//       return [0, 1];
//     } else {
//       var s = fibonacci_series(n - 1);
//       s.push(s[s.length - 1] + s[s.length - 2]);
//       return s.slice(0, n);
//     }
//   };
//   console.log(fibonacci_series(+prompt("Fibonachchi indeksi :")));
   
