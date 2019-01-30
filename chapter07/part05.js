{
    console.log("block 1");
    const x =  'blue';
    console.log(x)
}
console.log(typeof x); // undefined // 블록 밖에 있음
{
    console.log("block 2")
    const x = 3;
    console.log(x);
}
console.log(typeof x); // undefined // 블록 밖에 있음

{
    //외부 블록
    let y = 'blue';
    console.log(y);
    console.log("외부블록 y의 타입 : "+ typeof y);
    {
        //내부블록
        let y = 3;
        console.log(y)
        console.log("내부블록 y의 타입 : "+ typeof y);
    }
    console.log(y)
}
console.log("블록 밖 y의 타입 : "+ typeof y);
console.log("\n------------------------------------------------\n")
{
    //외부블록
    let x = {color:"blue"};
    let y = x;                  // y와 x는 같은 객체를 가르킴
    let z = 3;
    {
        let x = 5;              //바깥 x는 가려짐
        console.log(x);         //5
        console.log(y.color);   //blue
        y.color = "red";        
        console.log(z);
    }

    console.log(x.color);       //"red"; 객체는 내부 스코프에서 수정됨
    console.log(y.color);       //"red"; y는 x와 같은 객체를 가르킴
    console.log(z)
}