function f1(){
    console.log("one");
}
function f2(){
    console.log("two")
}

f2();
f1();
f2();


const x = 3;

function f(){
    console.log(x);
    console.log(y);
}

// {
//     const y = 5;
//     f(); //y = 정적스코프
// }

//--------------------------------------------//
// let name = "Irena"; //전역
// let age = 25;       //전역
// name 과 age가 바뀔수 있음

//단일객체에 저장하므로 의도적이지 않은 변경을 줄임 //오류남 왜? // = 을 : 으로 변경(Json 형태?)
let user = {
    name : "Irena",
    age : 25,
}

function greet(user){
    console.log(`Hello ,${user.name}!`)
}
function getBirthYear(user){
    return new Date().getFullYear() - user.age;
}

greet(user);
console.log(getBirthYear(user));
