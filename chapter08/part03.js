/*-------
배열검색
--------*/

/*-------
indexOf 찾고자하는것과 정확히 일치 하는 첫번째 요소의 인덱스를 반환
lastindexof 배열의 끝에서부터 검색
시작인덱스를 지정가능
일치하는것을 찾지 못하면 -1을 반환
array.indexOf( value, start )
------*/

{
    const o = {name:"Jerry"};
    const arr = [1,5,"a",o,true,5,[1,2],"9"];

    console.log(arr.indexOf(5))                 //앞에서 부터 검색 1
    console.log(arr.lastIndexOf(5))             //뒤에서 부터 검색 5
    console.log(arr.indexOf("a"))               //2
    console.log(arr.lastIndexOf("a"))           //2
    console.log(arr.indexOf({name:"Jerry"}))    //객체 는 정확히 일치하지안음
    console.log(arr.indexOf(o))                 
    console.log(arr.indexOf([1,2]))             //배열도 객체이므로 정확히 검색할수 없음
    console.log(arr.indexOf("9"))
    console.log(arr.indexOf(9))                 //타입이 다르기때문에 검색되지않음

    console.log(arr.indexOf("a",5));            //5번째 인덱스부터 검색하기때문에 -1 리턴
    console.log(arr.indexOf(5,5));
    console.log(arr.lastIndexOf(5,4));
    console.log(arr.lastIndexOf(true,3));       //뒤에서 세번째부터 검색하기때문에 -1 리턴
}

/*-------
findIndex는 일치하지 하는것을 못찾았을때 -1을 반환한다는 점에서는 indexOf와 비슷하지만,
보조함수를 써서 검색조건을 지정할 수 있으므로 indexOf보다 더 다양한 상황에서 활용할수 있다
하지만 findIndex는 검색을 시작할 인덱스를 지정할수 없고 뒤에서부터 찾는 findLastIndex 같은 짝도 없다
--------*/
{
    const arr = [
        {id:5,name:"Judith"},
        {id:7,name:"Francis"},
    ]

    console.log(arr.findIndex(o => o.id === 5));
    console.log(arr.findIndex(o => o.name === "Francis"));
    console.log(arr.findIndex(o => o === 3));
    console.log(arr.findIndex(o => o.id === 17))
}

/*---------
조건에 맞는요소 자체를 원할땐 find를 사용 
findIndex와 마찬가지로 검색조건을 함수로 전달
조건에 맞는요소가 없을땐 undefined를 반환
----------*/
{
    const arr = [
        {id:5,name:"Judith"},
        {id:7,name:"Francis"},
    ];
    console.log(arr.find(o => o.id === 5));
    console.log(arr.find(o => o.id === 1));
    console.log(arr.find(o => o.name === "Francis"));
}

/*----------
find사용 제곱수 찾기
find,findIndex에 전달하는 함수는 배열의 각 요소를 첫번째 매개변수로 받고 현재요소의 인덱스와 배열 자체도 매개변수로 받는다
----------*/
{
    const arr = [1,17,16,5,4,16,10,3,49];
    let answer = arr.find((x,i)=> i>2 && Number.isInteger(Math.sqrt(x)));
    console.log(answer)
}

/*---------
find사용 ID를 조건으로 Person 객체를 검색
find와findIndex에 전달하는 함수의 this도 수정가능
이를 이용해서 함수가 객체의 메서드인 것처럼 호출할 수 있다
----------*/
{
    class Person{
        constructor(name){
            this.name = name;
            this.id = Person.nextId++;
        }
    }//end Person

    Person.nextId = 0;
    const jamie = new Person("Jamie"),
        juliet = new Person("Juliet"),
        peter = new Person("Peter"),
        jay = new Person("Jay");
    const arr = [jamie,juliet,peter,jay];

    //옵션1 : ID를 직접 비교하는 방법
    let findJuliet = arr.find(p => p.id === juliet.id);
    console.log(findJuliet);

    //옵션2 : "this"매개변수를 이용하는 방법
    let findJay = arr.find(function(p){
        return p.id === this.id
    },jay);
    console.log(findJay)
}

/*---------------
some
some은 조건에 맞는 요소를 찾으면 즉시 검색을 멈추고 true를 반환
조건에 맞는 요소를 찾지못하면 false를 반환
----------------*/
{
    const arr = [5, 7, 12, 15, 17];
    console.log(arr.some(x => x%2===0));                            //짝수검색 12가 짝수므로 true
    console.log(arr.some(x => Number.isInteger(Math.sqrt(x))));     //제곱수가 없으므로 false
}

/*--------------
every
every는 배열의 모든 요소가 조건에 맞아야 true를 반환
every는 조건에 맞지않는 요소를 찾아야 검색을 멈추고 false를 반환
조건에 맞지않는 요소거 없다면 배열전체검색후 true 반환
--------------*/
{
    const arr = [4,6,16,36];
    console.log(arr.every(x => x%2===0));                           //배열 전체가 짝수이므로 true 반환
    console.log(arr.every(x => Number.isInteger(Math.sqrt(x))));    //6은 제곱수가 아니라 false 반환
}