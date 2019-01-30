//var로 선언된 변수와 마찬가지로 함수선언도 스코프맨위로 끌어올려지짐
f();
function f(){
    console.log('f');
}


//변수에 할당된 함수 표현식은 끌어올려지지않음
g();
let g = function(){
    console.log('g')
}