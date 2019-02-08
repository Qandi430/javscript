/*-----------------------------
이터레이션 프로토콜

이터레이터는 그 자체로 크게 쓸모가 있기 보다는 더 쓸모있는 동작이 가능해지도록 한다는데 의미가 있다.
이터레이터 프로토콜은 모든 객체를 이터러블 객체로 바꿀수 있다.

메세지에 타임스태프를 붙이는 로그 클래스가 필요하고 생각해보자
내적으로 타임스태프가 붙은 메세지는 배열에 저장한다.
-------------------------------*/
{
    class Log{
        constructor(){
            this.messages = [];
        }
        add(message){
            this.messages.push({message,timestamp:Date.now()});
        }
        /**
         * 로그를 기록한 항목을 순회 하기위하여 log.messages에 접근할수 있지만 log를 배열을 조작하듯 할수 있게 이터레이션 프로토콜 사용
         * 이터레이션 프로토콜은 클래스에 심볼 메서드 Symbol.iterator가 있고 이 메서드가 이터레이터 처럼 동작하는 객체,
         * 즉, value와 done프로퍼티가 있는 객체를 반환하는 next메서드를 가진 객체를 반환한다
         * 
         */
        [Symbol.iterator](){
            return this.messages.values();
        }
    }

    const log = new Log();
    log.add("first day at sea");
    log.add("spotted whale");
    log.add("spotted another vessal");

    for(let entry of log){
        console.log(`${entry.message} @ ${entry.timestamp}`);
    }
}
/**
 * message 배열에서 이터레이터를 가져와 이터레이터 프로토콜을 구현할수도 있지만
 * 직접 이터레이터를 만들 수도 있다.
 */
{
    class Log{
        constructor(){
            this.messages = [];
        }
        add(message){
            this.messages.push({message,timestamp:Date.now()});
        }

        [Symbol.iterator](){
            let i = 0;
            const messages = this.messages;
            return{
                next(){
                    if(i>=messages.length)
                        return {value : undefined, done: true}
                    return {value : messages[i++],done:false};
                }
            }
        }
    }

    const log = new Log();
    log.add("first day at sea");
    log.add("spotted whale");
    log.add("spotted another vessal");

    for(let entry of log){
        console.log(`${entry.message} @ ${entry.timestamp}`);
    }
}

/*------------------
피보나치 수열만들기
------------------*/
{
    class FibonacciSequence{
        [Symbol.iterator](){
            let a = 0, b = 1;
            return{
                next(){
                    let rval = {value:b,done:false};
                    b += a;
                    a = rval.value;
                    return rval;
                }
            }
        }
    }

    const fib = new FibonacciSequence();
    let i = 0;
    for(let n of fib){
        console.log(n);
        if(++i>9)break;
    }
}