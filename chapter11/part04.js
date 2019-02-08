/*-----------------------
예외처리와 호출 스택

프로그램이 함수를 호출하고, 그 함수는 다른 함수를 호출하고 호출된 함수는 또 다른 함수를 호출하는 일이 반볻된다.
자바스크립트 인터프리터는 이런 과정을 모두 처적하고 있어야한다. (인터프리터란 프로그램밍 언어의 소스 코드를 바로 실행하는 컴퓨터 프로그램 또는 환경)
함수 a가 함수 b를 호출하고 함수 b는 함수 c를 호출한다면, 함수 c가 실행을 마칠때 실행 흐름은 함수 b로 돌아단다.
그리고 함수 b가 실행을 마칠때 실행흐름은 함수 a로 돌아간다.
함수 c가 실행 중일때는 a와 b는 완료될수 없다 이렇게 완료되지 않은 함수가 쌓이는것을 호출 스택(Call stack)이라 한다.

c에서 에러가 일어난다면 b에서 에러가 나고 또 a에서 에러가난다. 에러는 캐치될 때까지 호출스택을 따라 올라간다.

에러는 호출 슽택 어디에서든 캐치할수 있다
어디에서 이 에러를 캐치하지 않으면 자바스크립트 인터 프리터는 프로그램을 멈춘다 이런것을 처리하지않은 예외(unhandled exception),
캐치하지 않은 예외(uncatched exception)이라고 부르며 프로그램이 충돌하는 원인디 된다.

에러를 캐치하면 호출 스택에서 문제 해결에 유용한 정보를 얻을수 있다.

대부분의 자바스크립트 환경에서 Error인스턴스에는 스택을 문자열로 표현한 stack 프로퍼티가 있다
이 기능은 자바스크립트 표준은 아니지만 대부분의 환경에서 지원한다
----------------------*/

function a(){
    console.log("a.calling b");
    b();
    console.log("a.done");
}

function b(){
    console.log("b.calling c");
    c();
    console.log("b.done");
}

function c(){
    console.log("c:throwing error");
    throw new Error('c error');
    console.log("c.done");
}

function d(){
    console.log("d.calling c");
    c();
    console.log("d:done");
}

try {
    a();
} catch (err) {
    console.log(err.stack);
}

try {
    d();
} catch (err) {
    console.log(err.stack);
}

