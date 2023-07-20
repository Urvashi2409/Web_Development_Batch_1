// document.querySelector(".heading1").textContent = "HIIIIIIIIIIIIIIIIIIIIIIIIIIIIII";
// document.querySelector("#heading2").textContent = "H!!!!!!!!";

// console.log("HELLOOOOO EVERYONE GLAD MEETING YOU!")

// literals and variables 

// 23.4 
// "Brian"

// literals: we cannot change its value 
// variable: we can change its value 

// numbers in front doesn't work 
// let 45raymond = "raymond";
// console.log(45raymond);

// numbers in between or end works 
// let raym45ond = "raymond";
// console.log(raym45ond);

// starting with uppercase works 
// let RAYmond = "function";
// console.log(RAYmond);

// small case also works 
// let name = "raymond";
// console.log(name);

// you cannot use reserved keywords 
// let for = 34;
// console.log(for);

// variable can be as long as possible 
// let aakjsfasdgfsgdfksdfgkdsfgsdsdkfsdkfgsdkfgfdsgfgskgdfgdffkjfdjfsdf4743287424834 = 34;
// console.log(aakjsfasdgfsgdfksdfgkdsfgsdsdkfsdkfgsdkfgfdsgfgskgdfgdffkjfdjfsdf4743287424834);

// only $ and _ works as symbols in variables 
// let $_34rtl = "Brian";
// console.log($_34rtl);

// let %ythis = 45;
// console.log(%ythis);
// let _456 = 45;
// console.log(_456);
// data types 
// let a = 23;
// console.log(typeof a);

// let a = 'r';
// console.log(typeof a);

// let a = "hello world";
// console.log(typeof a);

// let a = true;
// console.log(typeof a);

// let a = 45.6;
// console.log(typeof a);

// let a = 45.73284238344437824238446238462347437;
// console.log(typeof a);

// let a;
// console.log(typeof a);

// let a = null;
// console.log(typeof a);

// to show bigint data type you need to add 'n' at the end of the number 
// let a = 17899999999999999637689952297262604707763763781924021995402759317737096166765929102732906163840610893143733352942093575278589544416123407498484317896261917232629524426272214176638262229922362643847008815021898799795474786619818468662801396611976926115098855495297046201853378792672517656002125878565687158374434564364534535n;
// console.log(typeof a);

// let vs const vs var 
// let a = 34;
// console.log(a);

// a = 56;
// console.log(a);

// var r = 34;
// console.log(r);

// r = 56;
// console.log(r);

// const p = 34;
// console.log(p);

// p = 56;
// console.log(p);

// we can change the value of var and let but the const variable 

// you can initialize the var variable even before decalaring it 
// you can initialize the let variable only after decalaring it 

// let brian;
// brian = 10000000;

// console.log(brian);

// brian = 10000000;
// var brian; 

// console.log(brian);

// arithematic operators 
// +, -, *, /, % , ** 

// console.log(34+3);
// console.log(34-3);
// console.log(34*3);
// console.log(34/3);
// console.log(3%34);
// console.log(34**3);

// age = 12;
// if(age > 18){
//     console.log("You can vote");
// }
// else if(age < 18){
//     console.log("You cannot vote");
// }
// else{
//     console.log("Go and apply for voter id");
// }


// if(2 == 3){
//     console.log("yes");
// }
// if(2 == 4){
//     console.log("no");
// }
// if(2 == 5){
//     console.log("not at all");
// }
// if(false == true){
//     console.log("i dont know");
// }
// if(true){
//     console.log("yes kyler!");
// }
// else if(4 != 5){
//     console.log("no kyler!");
// }
// else if(4 != 4){
//     console.log("okay taking yout point of view");
// }
// else if(!4){
//     console.log("okaaaaayyy");
// }
// else{
//     console.log("default value");
// }

// if(2 == 2){
//     console.log("yes");
// }
// if(3 == 4){
//     console.log("no");
// }
// if(3 == 3){
//     console.log("not at all");
// }
// if(4 != 9){
//     console.log("okay taking yout point of view");
// }
// if(4 != 0){
//     console.log("Dooooooooooo it");
// }
// else if(4 == 9){
//     console.log("okaaaaayyy");
// }
// else{
//     console.log("default value");
// }

// relational operators in javascript 
// ==, !=, >=, <=, <, > 
// == checks if two things are equal 
// != checks if two things are not equal 
// >= checks if first value is greater than or equal to second value
// <= checks if first value is less than or equal to second value
// > checks if first value is greater than second value
// {/* < checks if first value is less than second value */}

// assignment operators 
// =, +=, -=, *=, /=, %= 

age = 3;
// age += 4;
// age = age + 4;

// age -= 6;
// age = age - 6;

// age *= 3;
// age = age * 3;

// age /= 5;
// age = age / 5;

age %= 7;
// age %= 0;
// age = age % 0;

console.log(age);