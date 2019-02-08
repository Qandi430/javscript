/*--------------------------------------
제네레이터
제네레이터란 이터레이터를 사용해 자신의 실행을 제어하는 함수
일반적인 함수는 매개변수를 받고 값을 반환하지만, 호출자는 매개변수 외에는 함수의 실행을 제어할 방법이 없다.
함수를 호출하면 그 함수가 종료될때까지 제어권을 완전히 넘기지만 제네레이터는 그렇지 않다

제네레이터는 두가지 개념을 도임
하나는 함수의 실행을 개별적 단계로 나눔으로써 함수의 실행을 제어한다
다른 하나는 실행중인 함수와 통신한다는 것이다.

제네레이터는 두가지 예외를 제외하면 일반적인 함수와 같다
- 제네레이터는 언제든 호출자에게 제어권을 넘길수 있다.
- 제네레이터는 호출한 즉시 실행되지는 않는다 대신 이터레이터를 반환하고 이터레이터의 next메서드를 호출함에 따라 살행된다..

제네레이터를 만들때는 function 키워드 뒤에 애스터리스크(*)를 붙인다.
이것을 제외하면 일반적인 함수와 같다 제네레이터에서는 return 외에 yield키워드를 쓸수있다.
----------------------------------------*/

{
    //무지개 색깔을 반환하는 단순한 제네레이터 예제
    function*rainbow(){
        yield  'red';
        yield  'orange';
        yield  'yellow';
        yield  'green';
        yield  'blue';
        yield  'indigo';
        yield  'violet';
    };

    //이터레이터를 사용하여 제네레이터 호출
    // const it = rainbow();
    // console.log(it.next()) //{value:'red',done:'false'}
    // console.log(it.next()) //{value:'orange',done:'false'}
    // console.log(it.next()) //{value:'yellow',done:'false'}
    // console.log(it.next()) //{value:'green',done:'false'}
    // console.log(it.next()) //{value:'blue',done:'false'}
    // console.log(it.next()) //{value:'indigo',done:'false'}
    // console.log(it.next()) //{value:'violet',done:'false'}
    // console.log(it.next()) //{value:undefined,done:'true'}

    //for...of를 사용하여 제네레이터 호출
    for(let color of rainbow())
        console.log(color)
}

/*--------------------------
2-1
yeild 표현식과 양방향 통신

제네레이터와 호출자 사이에서의 양방향 통신은 yield표현식을 통해 이뤄진다.
yeild표현식의 값은 호출자가 제너레이터의 이터레이터 next를호출할때 제공하는 매개변수이다.
--------------------------*/
{
    //대화를 이어가는 제네레이터 생성
    function*interrogate(){
        const name = yield "What is your name";
        const color = yield "What is favaorite color?";
        return `${name}'s favorit color is ${color}`;
    }
    
}