/*-----------------------
식별자 이름
------------------------*/

/**
 * 변수와 상수, 함수 이름을 식별자(indenfier)라 부른다
 * 
 * 식별자 규칙
 * - 식별자는 반드시 글자나 달러 기호($),밑줄(_)로 시작해야 한다.
 * - 식별자에는 글자와 숫자, 달러기호, 밑줄만 쓸수 있다
 * - 파이나  오메가 같은 유니코드 문자도 쓸수 있다.
 * - 예약어는 식별자로 쓸수 없다
 * 
 * 자바스크립트 식별자 표기법은 여러가지 이지만, 가장 널리 쓰이는 두가지는 다음과 같다
 * 
 * 카멜 케이스
 * currentTempC,anIdemtifierName 처럼 이름 중간중간 대문자가 혹처럼 보인다해서 카멜케이스라 불린다.
 * 
 * 스네이크 케이스
 * 
 * current_temp_c, an_identifier_name 등 중간중간 밑줄을 넣는다.
 * 
 * 식별자 방침
 * 
 * - 식별자는 대문자로 시작해서는 안된다 예외 = class
 * - 밑줄 한개 또는 두개로 시작하는 식별자는 아주 특별한 상황 또는 '내부' 변수에서만 사용한다
 *   자신만의 특별한 변수 카테고리를 만들지 않는 한, 변수나 상수 이름을 밑줄로 시작하면 안된다
 * - 제이쿼리를 사용할 경우, 달러 기호로 시작하는 식별자는 보통 제이쿼리 객체라는의미이다.
 */