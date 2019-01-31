/*----------
프로퍼티 나열

객체는 컨테이너이고 프로퍼티 나열을 지원한다.
순서는 보장되지 않는다.
-----------*/

/*----------
01-01
for...in
for....in 루프에는 키가 심볼인 프로퍼티는 포함되지 않음
**for...in을 배열에 사용할수도 있지만,
  일반적으로 for루프나 forEach를 사용하자
-----------*/
{
    const SYM = Symbol();

    const o = {a:1, b:2, c:3, [SYM] : 4};
    console.log("for...in 루프")
    for(let prop in o){
        if(!o.hasOwnProperty(prop)) continue;
        console.log(`${prop} : ${o[prop]}`)
    }
    console.log("\n---------------------------------\n")
}

/*----------
01-02
Object.keys

객체에서 나열가능한 문자열 프로퍼티를 배열로 반환
-----------*/

{
    console.log("Object.keys 루프")

    const SYM = Symbol();
    
    const o = {a:1, b:2, c:3, [SYM] : 4};

    Object.keys(o).forEach(prop => console.log(`${prop} : ${o[prop]}`));

    console.log("\n---------------------------------\n")
}
/*-----------
위 예제는 for..in 루프를 썻을 때와 같은 결과이고 hasOwnProperty를 체크할 필요는 없다
 객체의 프로퍼티 키를 배열로 가져와야 할때는 Object.key가 편리
 객체에서 x로 시작하는 프로퍼티를 모주 가져온다음ㄴ 다음과 같다
-----------*/
{
    console.log("x로 시작하는 프로퍼티")

    const o = {
        apple : 1,
        xochitl : 2,
        balloon : 3,
        guitar : 4,
        xylophone : 5,
    }

    Object.keys(o)
        .filter( prop => prop.match(/^x/))                      //fiter매서드로 x와 일치하는거 찾음(정규식사용)
        .forEach(prop => console.log(`${prop} : ${o[prop]}`));  //foreach로 배열 나열
}

