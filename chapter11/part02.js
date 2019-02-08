/*---------------------------------
01-02
try/catch와 예외처리

예외처리는 try...catch문을 사용
뭔가를 시도(try) 하고, 예외가 있음ㄴ 그것을 캐치(catch)gksek
----------------------------------*/
{
    function validateEmail(email){
        return email.match(/@/) ?
            email : 
            new Error(`invalid email : ${email}`)
    }

    const email = null;

    try {
        const validatedEmail = validateEmail(email);

        if(validatedEmail instanceof Error){
            console.log(`Error:${validatedEmail.message}`)
        }else{
            console.log(`Valid email : ${validatedEmail}`);
        }
    } catch (err) {
        console.error(`Error : ${err.message}`);
    }
}
