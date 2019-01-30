/*-----------
map과 filter
------------*/

/*---------
map
map은 배열 요소를 변형한다.
map과 filter는 모두 사본을 반환하면 원래 배열은 바뀌지않는다
---------*/
{
    const cart = [
        {name : "Widget", price : 9.95},
        {name : "Gadget", price : 22.95},
    ]
    const names = cart.map(x => x.name);
    const prices = cart.map(x => x.price);
    const discountPrices = prices.map(x => x*0.8);
    console.log("names의 배열")
    console.log(names)
    console.log("price의 배열")
    console.log(prices)
    console.log("price의 20%할인 배열")
    console.log(discountPrices)
}

/*----------
map을 사용해서 배열을 객체화하여 합치기
-----------*/
{
    const items = ["Widget","Gadget"];
    const prices = [9.95,22.95];
    const cart = items.map((x,i) => ([{name : x,price:prices[i]}]));
    console.log("items[] + prices[]")
    console.log(cart)
}

/*-------------
filter 
map과 마찬가지로 사본을 반환
필요한요소만 담은 배열 리턴
----------------*/

{
    //카드덱을 만든다
    const cards = [];
    for(let suit of ['H','C','D','S'])
        for(let value = 1; value<=13; value++)
            cards.push({suit,value});
    
    console.log("카드뭉치 : ")
    console.log(cards)

    console.log("\n--------------------구분선---------------------\n")
    //value가 2인카드
    const twoCards = cards.filter(c => c.value ===2);
    console.log("value가 2인 카드")
    console.log(twoCards)

    console.log("\n--------------------구분선---------------------\n")
    //다이아몬드
    const diamond = cards.filter(c => c.suit === 'D');
    console.log("무늬가 다이아몬드인 카드")
    console.log(diamond)

    console.log("\n--------------------구분선---------------------\n")
    //킹퀸주니어
    const kqj = cards.filter(c => c.value > 10);
    console.log("킹,퀸,주니어")
    console.log(kqj)

    //하트의 킹퀸 주니어
    const hkqj = cards.filter(c => c.value >10 && c.suit==='H');
    console.log("하트의 킹 퀸 주니어")
    console.log(hkqj)

    /*------
    map과 filter를 결합
    카드그림엔 유니코드 킹퀸주니어는 알파벳으로 표기
    --------*/

    function cardToString(c){
        const suits = {
            'H':'\u2665',
            'C':'\u2663',
            'D':'\u2666',
            'S':'\u2660',
        }
        const values = {
            1 : 'A',
            11 : 'J',
            12 : 'Q',
            13 : 'K',
        }
        for(let i = 2; i<=10; i++) values[i] = i;
        return values[c.value]+suits[c.suit];
    }

    //value가 2인 카드
    const val2 = cards.filter(c => c.value===2).map(cardToString);
    console.log(val2)

    //하트의 킹,퀸,주니어
    const hkqj2 = cards.filter(c => c.value > 10 && c.suit === 'H').map(cardToString);
    console.log(hkqj2)

    //덱 그림으로 변경
    const deck = cards.map(cardToString);
    console.log(deck)
}