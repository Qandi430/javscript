/*------------------------------------------
이터레이터와 제네레이터

ES6에서는 새로운 개념인 이터레이터와 제네이터를 도입

이터레이터는 '지금 어디있는지' 파악할 수 있도록 돕는다는 면에서 일종의 책갈피와 비슷한 개념
배열은 이터러블(iterable) 객체의 좋은 예이다.
책에 여러 페이지가 있는 것처럼 배열에는 여러 요소가 들어있으므로, 책에 책갈피를 끼울 수 있듯 배열에는 이터레이터를 사용할수 있다.
-------------------------------------------*/
{
    const book = [
        "Twinkle, twinkle, little bat!",
        "How I wonder what you're at!",
        "Up adobe the world you fly,",
        "Like a tea tray in the sky",
        "Twinkle, twinkle, little bat!",
        "How I wonder what you're at!",
    ];
    //book 배열에 values 메서드를 ㅆ서 이터레이터를 만든다

    const it = book.values();
    /*
        이터레이터(보통 it이라고 줄여쓴다.)는 책갈피 이지만, 이책에만 사용할수 있다. 그리고 '읽기 시작하기 전'에는 책갈피를 꽂을수 없다. 
        '읽기 시작'하려면 이터레이터의 next 메서드를 호출한다,
        이 메서드가 반환하는 객체에는 value프로퍼티(지금 보이는 페이지)와 done 프로퍼티(마지막 페이지를 읽으면 true로 바뀌는)가있다.

    */
   for(let i = 1; i<=10; i++){
       console.log(`${i}번째 it : ${it.next().value},`);
   }
   //6번째 이후로는 undefined

}

/*------------------------
배열의 요소만 나열하는 것이 목적이라면 for 루프나 for...of루프를 쓸수 있다.
while루프를 사용해서 for...of 루프를 흉내
--------------------------*/
{
    const book = [
        "Twinkle, twinkle, little bat!",
        "How I wonder what you're at!",
        "Up adobe the world you fly,",
        "Like a tea tray in the sky",
        "Twinkle, twinkle, little bat!",
        "How I wonder what you're at!",
    ];

    const it = book.values();
    let current = it.next();

    while(!current.done){
        console.log(current.value);
        current = it.next();
    }
}

/*----------------------------------------------
이터레이터는 모두 독립적이다. 즉, 새 이터레이터를 만들 때 마다 처음에서 시작한다
그리고 각각 다른 요소를 가리키는 이터레이터 여러개를 동시에 사용할수도 있다.
----------------------------------------------*/
{
    const book = [
        "Twinkle, twinkle, little bat!",
        "How I wonder what you're at!",
        "Up adobe the world you fly,",
        "Like a tea tray in the sky",
        "Twinkle, twinkle, little bat!",
        "How I wonder what you're at!",
    ];

    const it1 = book.values();
    const it2 = book.values();

    //it1으로 두페이지를 읽는다.
    it1.next(); //{value :"Twinkle, twinkle, little bat!", done:false }
    it1.next(); //{value :"How I wonder what you're at!", little bat!", done:false }

    //it2로 한페이지를 읽는다.
    it2.next(); //{value :"Twinkle, twinkle, little bat!", done:false }

    //it1으로 한페이지를 더읽는다.
    it1.next(); //{value :"Up adobe the world you fly,", little bat!", done:false }

    //서로 독립된 객체임을 보여줌
}