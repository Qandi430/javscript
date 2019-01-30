/*------------
변수
--------------*/
//변수 : 이름이 붙는 값 바꿀수 있는값

let currentTempC  = 22;

//위 문은 변수 currentTempC를 선언(생성)하고 초깃값을 할당하는 두 가지 일을 함
//let 키워드는 ES6에처 새로 생김 ES6 이전에는 var 키워드만 사용할 수 있었다

currentTempC = 22.5;
//currentTempC 변수의 값을 변경
//let은 변수 선언에만 쓰이고, 각 변수는 한번만 선언할수 있음

//변수를 선언할때 꼭 초기값을 지정해야하지 않는다 초깃값을 할당하지 않으면
// 암시적으로 특별한 값 undifined가 할당됨
let targetTempC; // let targetTempC = undefined; 

//let문 하나에서 변수 여러 개를 선언할수 있음
let targetTempC2,room1 = "conference_room_a",room2 = "lobby";
//targetTempC2 = undifeined
//room1 = "conference_room_a"
//room2 = "lobby";

console.log(`currentTempC = ${currentTempC}, 
targetTempC = ${targetTempC}, 
targetTempC2 = ${targetTempC2}, 
room1 = ${room1}. 
room2 = ${room2}`);

/*----------
상수
------------*/

/**
 * 상수는 ES6에서 처음 나생김
 * 상수도 변수와 마찬가지로 값을 할당 받을수 있지만 한 번 할당한 값을 바꿀수 없음
 * const 역시 상수 여러 개를 선언할 수 있습니다.
 */
const ROOM_TEMP_C = 21.5, MAX_TEMP_C = 30;

//상수에서는 보통 대문자와 밑줄만 사용함
