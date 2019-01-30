/*----
02-01
배열의 처음이나 끝에서 요소 하나를 추가하거나 제거하기

배열의 첫번째요소 = 0
배열의 마지막요소 = array.length-1
push,pop = 배열끝에서 추가하거나 삭제       ===스택
shift,unshift = 배열의 처음요소를 수가하거나 삭제       ===큐
-----*/
{
    console.log(`02-01 배열의 처음이나 끝에서 요소 하나를 추가하거나 제거하기`)
    const arr = ["b","c","d"];
    arr.push("e");
    console.log(`arr.push("e") : ${arr}`);
    arr.pop();
    console.log(`arr.pop() : ${arr}`);
    arr.unshift("a");
    console.log(`arr.unshift("a") : ${arr}`);
    arr.shift();
    console.log(`arr.shift() : ${arr}`);
    console.log("---------------------------------------------------------------\n")
}

/*--------
02-02
배열의 끝에 여러 요소 추가하기
concat 메서드는 배열의 끝에 여러 요소를 추가한 사본을 반환
concat에 벼열을 넘기면 이 메서드는 배열을 반해해서 원래 배열에 추가한 사본을 반환
--------*/
{
    console.log(`02-02 배열의 끝에 여러 요소 추가하기`)
    const arr = [1,2,3];
    console.log("arr.concat(4,5,6) : ");
    console.log(arr.concat(4,5,6));
    console.log("arr.concat([4,5,6]) : ");
    console.log(arr.concat([4,5,6]));
    console.log("arr.concat([4,5],6) : ");
    console.log(arr.concat([4,5],6));
    console.log("arr.concat(4,[5,6]) : ");
    console.log(arr.concat([4,[5,6]]));
    console.log("arr은 바뀌지 않음")
    console.log(arr)
    console.log("---------------------------------------------------------------\n")
}

/*-----------
02-03
배열 일부 가져오기

배열의 일부를 가져올 떄는 slice 메서드를 사용
slice메서드는 매개변수 두개를 받는다 첫번째는 어디서 가져올지를 두번째 매개변수는 어디까지 가죠올지(바로앞인덱스 까지 가져온다)
두번째 메서드를 생략하면 배열의 마지막 까지 반환
음수 인덱스를 쓰면 배열의 끝에서 요소를 센다
-----------*/
{
    console.log(`02-03 배열 일부 가져오기`)
    const arr = [1,2,3,4,5];
    console.log(arr)
    console.log("arr.slice(3) : ")
    console.log(arr.slice(3));
    console.log("arr.slice(2,4) : ")
    console.log(arr.slice(2,4));
    console.log("arr.slice(-2) : ")
    console.log(arr.slice(-2));
    console.log("arr.slice(1,-2) : ")
    console.log(arr.slice(1,-2));
    console.log("arr.slice(-2,-1) : ")
    console.log(arr.slice(-2,-1));
    console.log("arr은 바뀌지 않음")
    console.log(arr)
    console.log("---------------------------------------------------------------\n")
}

/*--------
02-04
임의의 위치에 요소 추가하거나 제거하기

splice는 배열을 자유롭게 수정할수 있음
첫번째 매개변수는 수정을 시작할 인덱스 
두번째 매개변수는 제거할 요소 숫자
아무 요소도 제거하지 않을때눈 0을 넘긴다
나머지 매개변수는 배열에 추가될 요소
--------*/

{
    console.log(`02-04 임의의 위치에 요소 추가하거나 제거하기`)
    const arr = [1,5,7];
    console.log(arr)
    arr.splice(1,0,2,3,4) //[ 1, 2, 3, 4, 5, 7 ]
    console.log(arr);
    arr.splice(5,0,6) //[ 1, 2, 3, 4, 5, 6, 7 ]
    console.log(arr);
    arr.splice(1,2); //[ 1, 4, 5, 6, 7 ]
    console.log(arr)
    arr.splice(2,1,'a','b') // [ 1, 4, 'a', 'b', 6, 7 ]
    console.log(arr)
    console.log("---------------------------------------------------------------\n")
}

/*---------
02-05
배열안에서 요소 교체하기

copyWithin은 ES6에서 도입한 새메서드 
이 메소드는 배열요소를 복사해서 다른 위치에 붙여넣고 기존의 요소를 덮어쓴다
첫 번째 매개변수는 복사한 요소를 붙여넣을 위치이고, 
두번째 매개변수는 복사를 시작할 위치, 
새변째 매개변수는 복사를 끝낼 위치다(생략 가능)
slice와 마찬가지로 음수인덱스를 사용하면 배열의 끝에서 부터 센다
----------*/

{
    console.log(`02-05 배열안에서 요소 교체하기`)
    const arr = [1,2,3,4];
    arr.copyWithin(1,2);
    console.log(arr)
    arr.copyWithin(2,0,2);
    console.log(arr)
    arr.copyWithin(0,-3,-1)
    console.log(arr)
    console.log("---------------------------------------------------------------\n")
}

/*-------
02-06 
특정 값으로 배열 채우기

ES6에서 도입한 새 메서드 fill은 Array 생성자와 잘 어울린다
배영ㄹ의 일부만 채우려 할때에는 시작 인덱스와 끝인덱스를 지정하면된다
음수인덱스도 사용 가능
--------*/
{
    console.log("02-06 특정 값으로 배열 채우기")
    const arr = new Array(5).fill(1);   //길이 5인 배열에 숫자 1을 채워넣음
    console.log(arr)
    arr.fill("a");                      //배열에 문자열 a를 채워넣음
    console.log(arr)
    arr.fill("b",1);                    //1인덱스부터 문자열 b를 채워넣음
    console.log(arr)
    arr.fill("c",2,4);                  //2인덱스 부터 4인덱스 전까지 문자열 c를 채워넣음
    console.log(arr)
    arr.fill(5.5,-4)                    //숫자 5.5를 뒤부터 4번째까지 채워넣음
    console.log(arr)
    arr.fill(0,-3,-1)                   //숫자 0을 뒤부터 3번째부터 뒤부터 첫번째앞까지 채워넣음
    console.log(arr)
    console.log("---------------------------------------------------------------\n")
}

/*---------
02-07
배열 정렬과 역순 정렬
reverse 는 배열의 순서를 반대로 바꿈
sort는 배열을 정순으로 구성
---------*/
{
    console.log("02-07 배열 정렬과 역순 정렬")
    let arr =  [1,2,3,4,5];
    console.log("초기배열")
    console.log(arr)
    arr.reverse();
    console.log("arr.reverse : ")
    console.log(arr)
    arr =  [5,3,2,4,1];
    console.log("초기배열")
    console.log(arr)
    arr.sort();
    console.log("arr.sort : ")
    console.log(arr)
    //sort는 정렬함수를 받읈후 있다
    //일반적으로는 객체가 들어있는 배열을 정렬할수 없지만 정렬함수를 사용하면 가능

    arr = [
        { name:"Suzanne"},
        { name:"Jim"},
        { name:"Trevor"},
        { name:"Amanda"},
    ]
    arr.sort();// 정렬되지 않음
    console.log(arr)

    arr.sort((a,b)=> a.name >b.name);       //arr는 name의 프로퍼티의 알파벳 순으로 정렬
    console.log(arr)

    arr.sort((a,b)=> a.name[1]<b.name[1])   //arr는 name의 프로퍼티의 2번째글자의 알파벳 역순으로 정렬
    console.log(arr)
}