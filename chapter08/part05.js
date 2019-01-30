/*-----------------------
reduce
reduce는 배열자체를 변형
reduce가 반환하는 값 하나는 객체일수도 있고 다른 배열일수도 있다.
reduce는 map과 filter를 비롯하여 다른 배열 메서드의 
reduce는 map이나 filter와 마찬가지로 콜백함수를 받는다
다른 배열메서드가 받는 콜백의 첫번째함수는 배열 요소였지만
reduce가 받는 콜백의 첫번째함수는 배열이 줄어드는 대상인 어큐뮬레이터이다.
두번째 매개변수부터 현재배열요소 ,현재 인덱스, 배열자체이다
reduce는 초깃값도 옵션으로 받을숭 ㅣㅆ다.
------------------------*/

{
    const arr = [5,7,2,4];
    const sum = arr.reduce((a,x) => a +=x, 0);
    console.log(sum)
    /*--------
    reduce의 콜백 함수는 매개변수로 누적값 a와 현재 배열의 요소 x 누적값 0을 받았다
    첫번째 요소 5에서 (익명) 함수를 호출 a의 초깃값은 0이고 x의 값은 5
           함수는 a와 x(5)의 합읠 반환, 이 값은 다음 a의 값이 된다
    다음은 반복

    초깃값을 할당하지않으면 첫번째 배열 요소를 초깃값으로 보고 두번째 요소에서 부터 함수를 호출
    ----------*/
}

/*-----------------
reduce는 보통 숫자나 문자열 같은 원시 값을 누적값으로 사용하지만
객체 또한 누적값이 될수 있다.
------------------*/
{
    const words = ["Beachball","Rodeo","Angel","Aardvark","Xylophone","November","Chocolate","Papaya","Uniform","Joker","Clover","Bali"];
    const sortWords = words.sort();     //예제에없지만 A부터 돌리기위해서
    const alphabetical = sortWords.reduce((a,x) => {
        if(!a[x[0]]) a[x[0]] = [];
        a[x[0]].push(x);
        return a;
    },{})
    console.log(alphabetical)
}

/*--------------------
reduce 통계에 사용하기
데이터 셋의 평균과 분산 계산
뭔뜻인지 모름....
---------------------*/
{
    const data = [3.3, 5, 7.2, 12, 4, 6, 10.3];
    //도널드 커누스가 분산계산을 위해만든 알고리즘
    //컴퓨터 프로그래밍의 예술:준수치적 알고리즘
    const stats = data.reduce((a,x)=>{
        a.N++;
        let delta = x - a.mean;
        a.mean += delta/a.N;
        a.M2 += delta * (x-a.mean);
        return a;
    },{N:0,mean:0,M2:0});
    if(stats.N > 2){
        stats.variance = stats.M2/(stats.N-1);
        stats.stdev = Math.sqrt(stats.variance);
    }
    console.log(stats)
}

/*-----------------------
6글자가 넘는 문자열을 하나로 만들기
------------------------*/
{
    const words = ["Beachball","Rodeo","Angel","Aardvark","Xylophone","November","Chocolate","Papaya","Uniform","Joker","Clover","Bali"];
    const longWords = words.reduce((a,w) => w.length>6?a+" "+w:a," ").trim();
    console.log(longWords);
}