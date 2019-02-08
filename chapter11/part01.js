/*------------------
01-01
Error객체

자바스크립트에는 내장된 Error객체가 있고
이 객체는여러 에러처리에 간편하게 사용할수 있음
Error 인스턴스를 만들면서 에러메세지를 지정할수 있다.
-------------------*/

{
    const err = new Error('invalid emal');
    /*
        Error 인스턴스를 만드는 것 만으로는 아무일도 일어나지 않는다.
    */
   
    // 이메일 주소 유효성 검사함수
    //검사한 이메일이 올바르면 이메일주소 문자열로 반환 바르지않다면 Error 인스턴스 반환.
    function validateEmail(email){
        return email.match(/@/) ?
            email : 
            new Error(`invalid email : ${email}`)
    }
    //instanceof 연산자를 써서 Error인스턴스가 반환되었는지 확인
    const email = 'dltmdwo430@gmail.com'

    const validatedEmail = validateEmail(email);

    if(validatedEmail instanceof Error){
        console.log(`Error:${validatedEmail.message}`)
    }else{
        console.log(`Valid email : ${validatedEmail}`);
    }
}


