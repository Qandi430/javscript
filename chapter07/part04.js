console.log('before block');
{
    console.log('inside block');
    const x = 3;    // 블록스코프 = 블록안에서만 정의
    console.log(x)
}
console.log(`outside block; x=${x}`); //ReferenceError: x is not defined