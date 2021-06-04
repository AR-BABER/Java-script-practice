// //to declare a function, the "function" keyword is used


// checking globlness of variable in functions

// function showmsg(){
//     console.log("helo world")
//     console.log(m3);
// }

// let m5= 2;


// showmsg2();
// console.log("out side")
// showmsg();
// var m4=2+2;
// // console.log(m1)
// // console.log(m2)
// // console.log(m3)
// // console.log(m4)
// // console.log(m5)

// function showmsg2(){

//     var m1 = "i am learning js 1";  //local variable
//     let m2 = "i am learning js 2";// local
//     m3 = "i am learning js 3";// gloable
//     m4 = "i am learning js 4";// gloable
//      m5 = "i am learning js 5";// globle
   
//    console.log(m1)
//    console.log(m2)
//    console.log(m3)
//    console.log(m4)
//    console.log(m5)

   

// }


// var a=5;
// var b=7;
// function sum(a,b){
//  document.write (a+b);
// }
// sum(a,b);


// a= prompt("enter first num");
// b= prompt("enter 2nd num");
// res= sum(Number(a),Number(b));
// document.write("sum is" +res);


// // function showmsg (text){
// //     text = text || 'empty';
// //     document.write(text)
// // }
// // showmsg(a = prompt("enter your msg or leave it empty"));

// //  let local = function (){
// //     m1="helo "
// //     var m2 = "how are you ";
// //     let m3 = "today.";

// //     document.write(m1+m2+m3, "<br>")
// // }
// // local();

// // var loc = function(){
// //     document.write("<br>", m1)
// //     local();
// // }

// // loc();  

// let a = prompt(" what is your age");
// let wel;
// if (a<18) {
//    wel= function () 
//     {
//         document.write("helo")
//     }
    
    
// }
// else {

//     wel= function () 
//     {
//         document.write("greetings")
//     }
    
// }
// wel();

function a(b){
 document.write("a", b)
}

a(function c (){
    document.write("for apple");
});
