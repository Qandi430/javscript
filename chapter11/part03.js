/*-------------------------
01-03 
에러 일으키기

try...catch문을 써서, 문자열이 아닌 것에서 match 메서드를 호풀하려 할때 자바스크립트가 일으킨 에러를 캐치했다
자바스크립트가 에러를 일이크기만 기다릴 필요없이 직접 에러를 일으켜서 예외처리 작업을 시작할수 있다.
--------------------------*/
{
    function billPay(amount, payee, account){
        if(amount > account.balance)
            throw new Error("insufficient funds");
        account.transfer(payee,amount)
    }
}
//throw를 호출하면 함수는 즉시실행을 멈춘다.