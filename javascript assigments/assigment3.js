//asigment3

// a = ["bscs","bscaf","bsEE","phd","masters","etc"]
// for (degress of a){
//     document.write("*"+degress+"</br>")
// }


//2
// a=[];
// b=[];
// a[0]=prompt("enter student names")
// b[0]=prompt("now his marks")
// a[1]=prompt("enter student names")
// b[1]=prompt("now his marks")
// a[2]=prompt("enter student names")
// b[2]=prompt("now his marks")
//////////////////////////////////////??????????????????????????????????????????

// //11
// let a = ["apple", "oranges", "banana", "tuc", "oreo"];
// let b = prompt("Name of fruits or cookies?")

// let c = a.includes(b);

// if(c==true)
// {
//     d=a.indexOf(b);
//     alert("yes we do have this item on index number " +d)
// }
// else{
//     alert("sorry")
// }



///10

a = [20,53.78,4,91,12]
a.sort((a,b) => {
    return a-b});
    for (val of a){
        document.write(val, " ,")
    }