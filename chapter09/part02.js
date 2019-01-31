/*---------------
객체지향 프로그래밍

객체지향 프로그래밍(OOP)은 컴퓨터 과학에서 전통적인 패러다임이다.
우리가 알고있는 OOP의 개념 중 일부는 1950년대부터 있었지만,
시뮬러67과 스몰토크가 등장하면서 OOP의 형태가 갖춰지기 시작했다.

OOP의 기본아이디어 = 객체는 데이터와 기능을 논리적으로 묶어놓은 것

OOP 기본용어
    클래스 = 추상적이고 범용적인것 ex)어떤 자동차
    인스턴스 = 구체적이고 한정적인 것 ex)특정 자동차
    메서드 = 기능 ex)달린다, 멈춘다
    클래스메서드 = 특정 인스턴스에 묶이지 않는 기능 ex) 시동을 건다
    * 인스턴스를 처음 만들때는 생성자가 실행, 생성자는 객체 인스턴스를 초기화한다.

    슈퍼클래스 = 하위 클래스를 묶는 클래스 ex)운송수단
    서브클래스 = 슈퍼클래스에 묶여있는 클래스 ex)자동차,보트,비행기...등등
----------------*/

/*---------------------
02-01
클래스와 인스턴스 생성

ES6 이전에 자바스크립트에서 클래스를 만드는건 직관직이지도 않고 번거로운 일이었다
ES6에서 클래스를 만드는 간편한 새문 법을 도입
----------------------*/

{
    class Car{
        constructor(){}
    }// 새클래스 car를 생성 아직 인스턴스는 만들어지지 않음

    const car1 = new Car();
    const car2 = new Car();
    //인스턴스 생성 인스턴스를 만들때는 new 키워드를 사용

    console.log(car1 instanceof Car);
    console.log(car1 instanceof Array);
    //객체가 클래스의 인스턴스인지 확인 'instanceof' boolean type
}
/*------------------------------------------
Car 클래스에 제조사와 모델데이터 변속기능을 추가
------------------------------------------*/
{
    class Car{
        constructor(make, model){
            this.make = make;                   //생성된 객체의 제조사
            this.model = model;                 //생성된 객체의 모델명
            this.userGears = ['P','N','R','D']; //사용가능한 기어
            this.userGear = this.userGears[0];  //초기기어는 P로 고정
        }
        //메서드를 호출한 인스턴스를 가리키는 목적
        shift(gear){
            if(this.userGears.indexOf(gear)<0)
                throw new Error(`Invalid gear : ${gear}`);
            this.userGear = gear;
        }
    }

    const car1 = new Car("Tesla","Model S") //Tesla제조사의 Model s 모델 자동차 객체 생성
    const car2 = new Car("Mazda","3i")  //Mazda제조사의 3i 모델 자동차 객체 생성
    
    car1.shift('D');    //car1의 기어 'D'로 변속
    car2.shift('R');    //car2의 기어 'R'로 변속

    console.log(car1.userGear); // D
    console.log(car2.userGear); // R
}

/*-----------------
Car클래스의 shift메드를 사용함년 잘못된 기어를 선택하는 싨후를 방지할 수있을것처럼 보이지만
car1.userGear = 'X'라소 설정한다면 막을수 없음
대부분의 객체지향 언어에서 메서드와 프로퍼티에 어느수준까지 접근할 수 있는지 대단히 세밀하게 설정할 수있는 메커님즘을 제공해서 car1.userGear = 'X'같은 실수를 막을수 있게한다.
하지만 자바스크립테이는 그런 메커니즘이 없고, 이는 언어의 문자로 자주 비판을 받음
다음과 같은 예제로 기어프로퍼트릴 고치지 안ㅎ도록 어느정도 막을수있다.
-----------------*/
{
    class Car{
        constructor(make, model){
            this.make = make;                   
            this.model = model;                 
            this._userGears = ['P','N','R','D']; 
            this._userGear = this._userGears[0];  
        }
        get userGear(){ return this._userGear};
        set userGear(value){
            if(this._userGears.indexOf(value) < 0)
                throw new Error(`Invalid gear : ${value}`);
            this._userGear = value;
        }

        shift(gear){this.userGear = gear};
    }
}
/*---------------------------------------------
위 예제도 car1._userGear = 'X' 로 직접 변경 간으하지만
프로퍼티 이름 앞에 밑줄을 붙이는 소위 '가짜접근제한'을 사용하여 빨리 찾을수있게하는 임시방편

프로퍼티를 꼭 보호해야한다면 스코프를 이용해 보호하는 WeakMap 인스터스를 사용
---------------------------------------------*/

{
    const Car = (function(){
        const carProps = new WeakMap();

        class Car{
            constructor(make, model){
                this.make = make;                   
                this.model = model;                 
                this._userGears = ['P','N','R','D']; 
                carProps.set(this, {userGear:this._userGears[0]});
            }
            get userGear(){ return carProps.get(this).userGear;};
            set userGear(value){
                if(this._userGears.indexOf(value) < 0)
                    throw new Error(`Invalid gear : ${value}`);
                carProps.get(this).userGear = value;
            }

            shift(gear){this.userGear = gear};
        };
        return Car;
    })
    const car1 = new Car();
    console.log(car1.userGear)
}

/*---------------------------------------
02-02
클래스는 함수다

ES6에서 class 키워드를 도입하기 전까지, 클래스를 만든다는 것은 곧 클래스생성자로 사용할 함수를 만든다는 의미였다
class 문법이 훨씬 더 직관적이도 단순하긴하지만 사실 class는 단축 문법일 뿐이며 자바스크립트의 클래스 자체가 바뀐것은 아님

class는 사실 함수일뿐 ES5애서는 쿨래스를 다음과 같이 만들었다
----------------------------------------*/
{
    function Car(make, model){
        this.make = make;
        this.model = model;
        this.userGears = ['P','N','R','D']; 
        this.userGear = this.userGears[0];  
    }
}
/*------------------------------------------------
ES6에서도 똑같이 할수 있다
---------------------------------------------------*/
{
    class Es6Car{}
    function Es5Car(){ return null};

    console.log(typeof Es6Car)      //function
    console.log(typeof Es5Car)      //function

    // == class도 함수이다
}


/*------------------
02-03
프로토 타입

클래스의 인스턴스에서 사용할 수 있는 메서드라고 하면 그건 프로토타입 메서드를 말하는 것
예를들어 Car의 인스턴스에서 사용할수 있는 shift 메서드는 프로토타입 메서드이다.

프로토타입 메서드는 Car.prototype.shift처럼 표기할때가 많다
Array의 Foeach를 Array.protorype.forEach로 쓰는것과 마찬가지이다.

 * 최근에는 프로토타입 메서드를 #으로 표시하는 표기법이 널리 쓰인다
   예을들어 Car.prototype.shift를 Car#shift로 쓴다.
 
모든 함수에는 prototype이라는 특별한 프로퍼티가 있다. 
일반적인 함수에서는 프로토타입을 사용할 일이 없지만 객체 생성자로 동작하는 함수에선ㄴ 프로토타입이 중요하다

 * 객체생성자, 즉 클래스는 Car처럼 항상 첫글자를 대문자로 표기한다.

함수의 prototype 프로퍼티가 중요해지는 시점은 new 키워드로 새 인스턴스를 만들었을 때이다.
new 키워드로 만든 새 객체는 생성자의 prototype 프로퍼티에 접근할수 있다
객체 인스턴스는 생성자의 prototype 프로퍼트릴 __proto__ 프로퍼티에 저장한다.

프로토타입에서 중요하는 동적 디스패치라는 메커니즘이다. 여기서 디스패치는 메서드 호출과 같은 의미 
객체의 프로퍼티나 메서드에 접근하려 할때 그런 프로퍼티나 메서드가 존재하지 않으면 
자바스크립트는 객체의 프로토타입에서 해당 프로퍼티나 메서드를 찾는다
클래스의 인스턴스는 모두 같은 프로토타입을 공유하므로 프로토타입에 프로퍼티나 메서드가 있다면 
해당 클래스의 인스턴스는 모두 그프로퍼티나 메서드에 접근할수 있다.
------------------*/
{
    class Car{
        constructor(make, model){
            this.make = make;                   
            this.model = model;                 
            this._userGears = ['P','N','R','D']; 
            this._userGear = this._userGears[0];  
        }
        get userGear(){ return this._userGear};
        set userGear(value){
            if(this._userGears.indexOf(value) < 0)
                throw new Error(`Invalid gear : ${value}`);
            this._userGear = value;
        }

        shift(gear){this.userGear = gear};
    }

    const car1 = new Car();
    const car2 = new Car();

    console.log(car1.shift===Car.prototype.shift);       //true Car클래스의 프로톹타입메서드이다
    car1.shift('D');
    //car1.shift('d')   //소문자 d는 err 반환한다
    console.log(car1.userGear)      //D 위에서 shift메서드를 통해 변경함
    console.log(car1.shift===car2.shift);               //true 같은 프로토타입메서드

    car1.shift = function(gear){this.userGear = gear.toUpperCase();}
    console.log(car1.shift === Car.prototype.shift) //false  위에서 car1.shift를 재정의했기 떄문
    console.log(car1.shift === car2.shift) // false   위에서 car1.shift를 재정의했기 떄문
    car1.shift('r') // 재정의한 메서드에서 uppercase를 써서 대문자로 바꾸었기 때문에 오류없음
    console.log(car1.userGear);
}

/*------------------------------------------------------
02-04
정적 메서드

정적메서드는 특정 인스턴스에 적용되지않는다
정적메서드에서 this는 인스턴스가 아니라 글래스 자체에 묶인다.
일반적으로 정적메서드에서는 this대신 클래스이름을 사용하는 것이 좋은 습관이다.

정적메서드는 클래스에 관련되지만 인스턴스와 는 관련이 없는 범용적인 작업에 사용된다.

------------------------------------------------------*/
{
    class Car{
        static getNextVin(){
            return Car.nextVin++;
        }

        constructor(make, model){
            this.make = make;
            this.model = model;
            this.vin = Car.getNextVin();
        }

        static areSimilar(car1,car2){
            return car1.make===car2.make && car1.model === car2.model;
        }

        static areSame(car1, car2){
            return car1.vin === car2.vin
        }
    }//end Class Car

    Car.nextVin = 0

    const car1 = new Car("Tesla","S");
    const car2 = new Car("Mazda","3");
    const car3 = new Car("Mazda","3");

    console.log(car1.vin);      //0
    console.log(car2.vin);      //1
    console.log(car3.vin);      //2

    console.log(Car.areSimilar(car1,car2)); //false
    console.log(Car.areSimilar(car2,car3)); //true

    console.log(Car.areSame(car2,car3));    //false
    console.log(Car.areSame(car2,car2));    //true
}


/*--------------------------------------------------------
02-05
상속

클래스의 인스턴스는 클래스의 기능을 모두 상송한다.

객체의 프로토타입에서 메서드를 찾지못하면 자바스크립트는 프로토타입의 프로토타입을 검색한다.
프로토타입체인은 이런식으로 ㅁ나들어진다.
자바스크립트는 조건에 마즌ㄴ 프로토타입을 찾을 때까지 프로토타입체인을 계속 거슬러 올라간다.
조건에 맞는 프로토타입을 찾지못하면 에러를 일으킨다.
---------------------------------------------------------*/
{
    class Vehicle{
        constructor(){
            this.passengers = [];
            console.log("Vehicle created");
        }
        addPassenger(p){
            this.passengers.push(p)
        }
    }

    class Car extends Vehicle{
        constructor(){
            super();
            console.log("Car created")
        }
        deployAirbags(){
            console.log("BWOOSH!");
        }
    }
    /*-----------------
    extends 키워드는 Car를 Vehicle의 서브클래스로 만든다
    
    super()는 슈퍼클래스의 생성재를 호출하는 특별한 함수이다.
    서브클래스에서는 이함수를 반드시호출해야한다. 호출하지않으면 에러가 일어난다.
    -----------------*/
    const v = new Vehicle();
    v.addPassenger("Frank");
    v.addPassenger("Judy");
    console.log(v.passengers);
    const c = new Car();
    c.addPassenger("Alice")
    c.addPassenger("Cameron")
    console.log(c.passengers);
    //v.deployAirbags();    //error Vehicle엔 deployAirbags 메서드가 없음
    c.deployAirbags();      
}

/*---------------------------------------------------
02-06 
다형성

다형성이란 객체지향 언어에서 여러 슈퍼클래스의 멤버인 인스턴스를 가리키는 말이다. 
대부분의 객체지향 언어에서 다형성은 특별한 경우에 속한다
자바스크립트는 느슨한 타입을 사용하고 어디서근 객체를 쓸수 있으므로(정확한 결과가 보장되진 않지만), 
어떤면에서는 자바스크립트의 객체는 모두 다형성을 갖고 있다고 할수 있다.

자바스크립트에는 객체가 클래스의 인스턴스인지 확인하는 instanceof 연산자가있다
이연산자를 속일수도 있지만, prototype과 __proto__ 프로퍼티에 손대지 ㅇ낳았다면 정확한 결과를 기대할수 있다.
----------------------------------------------------*/
{
    class Vehicle{
        constructor(){
            this.passengers = [];
            console.log("Vehicle created");
        }
        addPassenger(p){
            this.passengers.push(p)
        }
    }

    class Car extends Vehicle{
        constructor(){
            super();
            console.log("Car created")
        }
        deployAirbags(){
            console.log("BWOOSH!");
        }
    }

    class Motocycle extends Vehicle{};

    const c = new Car();
    const m = new Motocycle();

    console.log(c instanceof Car);          //true  객체 c는 Car의 인스턴스이다
    console.log(c instanceof Vehicle);      //true  객체 c는 Vehicle의 인스턴스이다(Car가 상속받았기 때문)
    console.log(m instanceof Car);          //false 객체 m은 Car의 인스턴스가 아니다(같은 Vehicle을 상속받았지만 Car와 Motocycle은 다른 객체)
    console.log(m instanceof Motocycle);    //true  객체 m은 Motocycle의 인스턴스이다.
    console.log(m instanceof Vehicle);      //true  객체 m은 Vehicle의 인스턴스이다(Motocycle이 상속받았기 때문)
}

/*-----------------
02-07
객체 프로퍼티 나열 다시 보기
------------------*/
{
    class Super{
        constructor(){
            this.name = 'Super';
            this.isSuper = true;
        }
    }

    //유효하지만 권장하지 않는다
    Super.prototype.sneaky = 'not recommended!';

    class Sub extends Super{
        constructor(){
            super();
            this.name = 'Sub';
            this.isSub = true;
        }
    }

    const obj = new Sub();
    const objSuper = new Super();

    for(let p in obj){
        console.log(`${p} : ${obj[p]}`+
            (obj.hasOwnProperty(p) ? '' : ' (inherited)'));
    }

    for(let p in objSuper){
        console.log(`${p} : ${obj[p]}`+
            (obj.hasOwnProperty(p) ? '' : ' (inherited)'));
    }
}

/*----------------------------------------------------
02-08
문자열 표현

모든 객체는 Object를 상속하므로 Object의 메서드는 기본적으로 모든 객체에서 사용할 수 있다.
객체의 기본적인 문자열 표현을 제공하는 toString도 그런 메서드 중 하나이다
toString의 기본동작은 "[object Object]"를 반환하는 것인데ㅡ 이건 거의 쓸모가 없다

toString 메서드에서 객체에관한 중요한 정보를 제공한다면 디버깅에도 유용하고, 객체를 한눈에 파악할수 있다.
-----------------------------------------------------*/
