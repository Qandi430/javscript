//배열의 기초

/**
 * 배열은 객체와 달리 본질에서 순서가 있는 데이터 집합이며 0으로 시작하는 숫자형 인덱스를 사용
 * 자바스크립트의 배열은 비균질적 즉 한배열의 요소가 모두 같은 타입을 필ㅛ가없다. 다른배열이나 객체도 포함시킬수 있다/
 * 배열 리터럴은 대괄호를 만들고, 배열요소에 인덱스로 접근할 때도 대괄호를 사용
 * 배열에 배열길이보다 큰인덱스를 사용해서 요소를 할당하면 배열은 자동으로 그 인덱스에 맞게 늘어나며 빈 자리는 undefined로 채워짐
 * Array 생성자를 써서 배열을 만들 수도 있ㅈ지만 그럴게 해야할 경우는 별로 없다
 */

//벼열리터럴
const arr1 = [1,2,3];                       //숫자로 구성된 배열
const arr2 = ["one",2,"three"];             //비균질적 배열
const arr3 = [[1,2,3],["one",2,"three"]];   //배열을 포함한 배열
const arr4 = [                              //비 균질적 배열
    {name : "Fred",type : "object", luckyNumber : [5,7,13]},
    [
        {name:"Susan",type:"object"},
        {name:"Anthony",type:"object"},
    ],
    1,
    function(){return "arrays can contain fuctions too"},
    "three",
];

//배열요소에 접근하기
console.log(arr1[0]);
console.log(arr1[2]);
console.log(arr3[1]);
console.log(arr4[1][0]);

//배열 길이
console.log(arr1.length);
console.log(arr4.length);
console.log(arr4[1].length);

//배열길이 늘이기
arr1[4] = 5;
console.log(arr1[1]);
console.log(arr1[1].length);

//배열의 현재길이보다 큰 인덱스에 접근하는 것만으로 배열의 길이가 늘어나지는 않는다
console.log(arr2[10]);
console.log(arr2.length);

//Array 생성자(거의 사용하지 않음)
const arr5 = new Array();       //빈배열
const arr6 = new Array(1,2,3);  //[1,2,3]
const arr7 = new Array(2);      //길이가 2인 배열 요소는 모두 undefined
const arr8 = new Array("2");    //["2"]

console.log(arr5);
console.log(arr6);
console.log(arr7);
console.log(arr8);
