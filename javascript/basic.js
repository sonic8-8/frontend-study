//변수
let age = 27;
console.log(age);

//상수
const birth = "100";
console.log(birth);

//변수명은 숫자로 시작할 수 없다
//$ _ 같은 특수문자만 변수명에 넣을 수 있다

// ===, !==
//자바스크립트는 타입이 너무 자유로워서 ===로 타입까지 일치하는지 확인해줘야함

//null 병합 연산자
//-> null, undefined가 아닌 값을 찾아내는 연산자
let var1 = 10;
let var2 = null;
let var3 = var1 ?? var2;
console.log(var3);

//typeof 연산자
let var4 = 30;
let var5 = String(var4);
console.log(typeof var5);

let var6 = "30개";
let var7 = parseInt(var6);
console.log(var7);

//삼항 연산자
let var8 = 10;
let var9 = 20;
let var10 = var8 > var9 ? var8 : var9;
console.log(var10);

//---
//함수선언
function greeting() {
    console.log("안녕하세요!");
}

greeting();

//매개변수에 타입을 지정하지 않고 변수명만 넣어야한다는 차이점이 있음
function getArea(width, height) {
    let area = width * height;
    return area;
}

console.log(getArea(10, 20));

//중첩함수
//함수안에 함수를 선언할 수 있는 것이구요
function test1(number) {
    function test2() {
        console.log("중첩함수 테스트임");
    }
    test2();
    return console.log(number);
}

test1(10);

//호이스팅(hoisting)
//선언문을 호출문보다 아래에 적어도 위쪽으로 끌어올려서 적용해주는 자바스크립트 기능

//함수표현식과 화살표 함수
//함수를 값으로 취급해서 변수에 담을 수 있다는 것이 자바와 다른점
//일급 객체라는 것이구요
let varA = function funA() {
    console.log("funA");
};

varA();

let funB = (num1, num2) => {
    return num1 + num2;
}

console.log(funB(1, 10));

//---
//콜백함수
// 함수를 담은 값은 함수명만 입력하는거고
// 함수 자체를 호출하려면 ()까지 붙여줘야함

function repeat(count, callback) {
    for (let i = 0; i < count; i++) {
        callback(i);
    }
}

repeat(5, (i) => {
    console.log(i);
});

repeat(5, (i) => {
    console.log(i * 2);
})

//---
//객체
let obj1 = new Object(); //객체 생성자
let obj2 = {}; //객체 리터럴 (대부분 이걸 사용)

let person = {
    name: "사람",
    age: 10,
    hobby: "숨쉬기"
}

// 자바처럼 클래스를 따로 만드는게 아니라는 차이점입니다

//객체 프로퍼티 다루는 방법 (점 표기법, 괄호 표기법)
let name = person.name;
let hobby = person["hobby"];

//프로퍼티 추가하는법
person.job = "developer";
person["favoriteFood"] = "삼겹살";

//수정하는법
person.name = "인간";
person["age"] = 13;

//삭제하는법
delete person.job;
delete person["favoriteFood"];

//프로퍼티 존재 유무 확인 방법
let result1 = "name" in person;

const animal = {
    type: "고양이",
    name: "나비",
    color: "black"
}

// animal 객체 자체에 다른 객체를 담는 것만 막습니다
// 나머지 추가, 수정, 삭제는 가능함 (너무 자유로운듯)

// 객체 안에 당연히 메서드도 추가 가능합니다
const person2 = {
    name: "사람",
    sayHi() {
        console.log("하이");
    }
};

person2.sayHi();

//---
//배열
let arrA = new Array(); //배열 생성자
let arrB = []; //배열 리터럴

let arrC = [1, 2, 3];
// 크기 제한도 따로 없고 아무거나 넣을 수 있음 (너무 자유로운듯)

let item1 = arrC[0];
console.log(item1);