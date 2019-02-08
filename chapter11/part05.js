/*-------------------------------------
try...catch...finally

try 블록의 코드가 http 연결이나 파일 같은 일종의 '자원'을 처리할때가 있다.
프로그램에서 이자원을 계속 가지고 있을 수는 없으므로 에러가 있든 없든 어느 시점에서는 이자원을 해제해야한다.
try블록에는 문을 원하는 만큼 쓸수 있고, 그중 어디서든 에러가 일어나서 자원을 헤제할 기회가 아예 사라질 수도 있으므로
try브ㅡㄹ록에서 자원을 해제하는건 안전하지않다. 에러가 일어나지 않으면 실행되징 않는 catch블록 역시 안전하지 않다
이런 상황에서 finally 블록이 필요하다 finally 블록은 에러가 일어나든 일어나지않든 반드시 호출된다.
-------------------------------------*/
{
    try {
        console.log("this line is executed")
        throw new Error("whoops");
        console.log("this line is not..")
    } catch (err) {
        console.log("there was an error...")
    } finally{
        console.log("...always executed")
        console.log("perform cleanup hear")
    }
}