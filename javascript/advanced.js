//--------------------------------------------------------------------------------------

// Truthy와 Falsy
// 실제로 true나 false가 아니더라도
// 조건문 내에서 참이나 거짓으로 평가되는 값들을 말함

// 1. Falsy 한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// 2. Truthy 한 값
// 7가지 Falsy 한 값을 제외한 나머지 모든 값이 Truthy입니다
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => { };

// 3. 활용 사례
// 조건문에 person이 null인지 undefined인지 하나하나 다 입력하고 있으면 너무 드럽죠 길어지고
// 이런거 Falsy한지 Truthy한지로 손쉽게 조건문 만들어서 해결할 수 있습니다

function printName(person) {
    if (!person) {
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}

let person;
printName(person);

//--------------------------------------------------------------------------------------

// 단락평가 (short-circuit-evaluation)
// console.log(false && true)
// 이런식으로 왼쪽 값만으로도 결과를 확정할 수 있으면 오른쪽은 평가하지 않는 최적화 기법임
// 자바도 똑같죠

function returnFalse() {
    console.log("False 함수");
    return false;
}

function returnTrue() {
    console.log("True 함수");
    return true;
}

console.log(returnFalse() && returnTrue());

// 자바스크립트는 변수에도 이 연산자를 사용할 수 있습니다
// const result = true && "hi"; 이런식임

// T && T: 앞부분이 T니까 뒷부분도 확인하는것임
// F && T: 앞부분에서 F니까 굳이 뒷부분 확인 안하겠죠
// T || T: 앞부분이 T면 어차피 참이죠 그래서 앞부분만 확인함
// F || T: 앞부분이 F면 뒷부분은 T인지 확인해야겠죠

//--------------------------------------------------------------------------------------

// 구조 분해 할당
// 말그대로 분해해서 할당한다는것임

// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two] = arr;
console.log(one, two);
// 이렇게 배열 요소를 분해해서 할당해줄 수 있습니다

// 2. 객체의 구조 분해 할당
let object = {
    name: "사람",
    age: 20,
    hobby: "축구"
}

let { name, age, hobby } = object;
console.log(name, age, hobby);
// 마찬가지로 객체도 분해해서 할당 가능함


// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra = 4 }) => {
    console.log(name, age, hobby, extra);
}

func(object);
// arrow function 매개변수에 
// 구조 분해 할당이라는 걸 인식할 수 있도록 {} 안쪽에 할당받을 변수들 입려해주면 됨
// 참고로 위처럼 default 값도 지정해줄 수 있음요

//--------------------------------------------------------------------------------------

// Spread 연산자와 Rest 매개변수
// 공통점: ...을 사용한다

// 1. Spread 연산자
// 이게 뭐냐면 배열이나 객체의 값을 펼쳐서 넣는 것임
// ...배열명 ...객체명 이런식으로 사용하면 됩니다

let arr1 = [1, 2, 3];
let arr2 = [...arr1];
let arr3 = [0, ...arr1, 4];

console.log(arr2); // 1 2 3 이렇게 나오겠죠
console.log(arr3); // 0 1 2 3 4 이렇게 나오겠죠

let obj1 = {
    a: 1,
    b: 2
};

let obj2 = {
    ...obj1,
    c: 3,
    d: 4
};

console.log(obj2);

// 2. Rest 매개변수
// 이게 뭐냐면 매개변수들을 배열로 모아서 받는 문법입니다
// 매개변수 자리에 ...rest 이런식으로 사용할 수 있음

function funcA(one, ...rest) {
    console.log(one); // 1번째 요소는 one이라는 변수에 담기고
    console.log(rest); // 이건 2번째 요소부터 마지막까지는 배열에 담깁니다
};

funcA(...arr1);

//--------------------------------------------------------------------------------------

// 원시타입 vs 객체타입
// 저장하고 복사될때 차이가 있음

// 불변값: 실제 메모리에 저장된 원본 값이 변수를 복사하더라도 사라지지 않고 메모리 상에 남아있어서 불변값이라고 함
// 가변값: 메모리 값이 원본을 실제로 수정해서 가변값이라고 함

// [객체 타입 복사시 주의사항]
// 얕은 복사: 객체의 참조 값을 그대로 대입해줘서 같은 참조값을 갖게 되는것. 근데 이러면 값을 수정했을때 원본이 수정돼버림
// 깊은 복사: 새로운 객체를 생성하면서 프로퍼티만 따로 복사하는 것, Spread 문법으로 복사하면 됩니다. 원본이 수정될 일이 없어서 안전하겠죠

// [객체간의 비교]
// 기본적으로 객체간 비교는 참조값을 기준으로 이루어집니다
// 만약 참조값이 아닌 프로퍼티를 기준으로 비교하고 싶다면
// JSON.stringify()를 이용해서 string으로 타입 캐스팅해서 비교해야함
// 
// 얕은 비교: 참조값을 기준으로 비교
// 깊은 비교: 객체를 문자열로 변환하여 비교

// [배열과 함수도 사실 객체다]
// 자바스크립트에서는 배열과 함수가 객체입니다

//--------------------------------------------------------------------------------------

// 반복문으로 배열과 객체 순회하기

// 1. 배열 순회
let 배열순회 = [1, 2, 3];

for (let i = 0; i < 배열순회.length; i++) {
    console.log(배열순회[i]);
}

// for of 반복문
for (let item of 배열순회) {
    console.log(item);
}

// 2. 객체 순회
let 객체순회 = {
    name: "사람",
    age: 10,
    hobby: "축구"
};

// 객체에서 key만 뽑아서 새로운 배열로 반환
let keys = Object.keys(객체순회);

for (let key of keys) {
    const value = 객체순회[key];
    console.log(key, value);
}

let values = Object.values(객체순회);

for (let value of values) {
    console.log(value);
}

// for in (객체에만 사용할 수 있음)
// 객체의 key를 할당해줍니다
for (let key in 객체순회) {
    const value = 객체순회[key];
    console.log(key, value);
}

// for of 는 배열에만 사용할 수 있고
// for in 은 객체에만 사용할 수 있습니다

//--------------------------------------------------------------------------------------

// 배열 메서드 
// 요소 조작 메서드
// 총 6개임

// 1. push
// 스택도 아닌데 왜 push랑 pop이 되냐면
// 자바스크립트의 배열은 사실 스택, 큐, 리스트를 다 섞은 잡탕입니다
// 자바에서의 그 배열이 아님
// push와 pop이라고 이름을 붙인 이유는 stack 동작이랑 똑같이 사용할 수 있어서 push pop입니다

let 잡탕 = [1, 2, 3];
const new잡탕 = 잡탕.push(4, 5, 6, 7);

// 2. pop
// 마지막에 넣었던 거 pop하고 배열로 반환해줍니다
const popped잡탕 = 잡탕.pop();

// 3. shift
// 맨 앞에 있는 요소 제거하고 반환해줌
const shifted잡탕 = 잡탕.shift();

// 4.unshift
// 맨 앞에 새로운 요소를 추가해줌
const unshifted잡탕 = 잡탕.unshift(0);

// 5. slice
// 배열 특정 범위를 잘라내고 잘라낸 것을 새로운 배열로 반환해줌
let sliced = 잡탕.slice(1, 3);
// 3번 전까지 잘라달라는거구요 [2, 3] 이렇게 반환해줌
// 근데 이렇게 쓸거면 그냥 slice(1) 이라고만 해줘도 됩니다
// 이러면 알아서 1번 인덱스부터 끝까지 잘라서 반환해줌

// 6. concat
// 서로 다른 배열 2개를 이어붙인 후 반환
let 잡탕1 = [1, 2, 3];
let 잡탕2 = [4, 5, 6];
let concated = 잡탕1.concat(잡탕2);
console.log(concated);

//--------------------------------------------------------------------------------------

// 배열 메서드
// 요소 순회와 탐색 메서드
// 5개임

// 1. forEach
// 배열 돌면서 일 처리(출력, 계산, 저장 같은거)할때 시키구요
// 뭘 반환해주진 않습니다
// 그냥 돌면서 뭔가 "일 처리" 시킬때 사용함

// 2. includes
// 배열에 특정 요소가 있는지? true/false 반환해줌

// 3. indexOf
// 배열 안에 찾는 "값"이 "몇 번째" 인덱스에 있는지 알려줌
// 없으면 -1 이구요

// 4. findIndex
// 배열 안에 "조건을 만족"하는 요소가 "몇 번째" 인덱스에 있는지 찾아줌
// 객체 타입의 index 찾을 때 의미가 있습니다

// 5. find
// 배열 안에 "조건에 맞는" "요소 자체"를 반환해줌
// 없으면 undefined 반환합니다

//--------------------------------------------------------------------------------------

// 배열 메서드
// 배열 변형 메서드
// 5개임

// 1. filter
// 조건(콜백함수)을 만족하는 요소만 필터링해서 새로운 배열로 반환

// 2. map
// 배열 각 요소에 함수(콜백함수)를 적용한 결과를 모아서 새로운 배열을 반환

// 3. sort
// "원본 배열"을 사전순(문자열 기준)으로 정렬해주는 메서드 (수정되는 것임)
// 근데 숫자로 정렬은 따로 설정을 해줘야함요

// 4. toSorted
// sort()랑 똑같은데 원본 배열을 수정하는게 아니라 정렬된 "새로운 배열"을 반환하는 메서드임

// 5. join
// 배열의 모든 요소를 구분자(seperator)를 기준으로 연결해 하나의 문자열로 반환해주는 메서드
// 잡탕.join(); 이렇게 하면 구분자가 ,라서 hello,world 이런식으로 되고
// 잡탕.join("-"); 이렇게 하면 hello-world 이런식이 됩니다

//--------------------------------------------------------------------------------------

// Date 객체와 날짜

// 1. Date 객체 생성하는 방법
let date1 = new Date();
console.log(date1);

let date2 = new Date("1997-01-07 23:59:59");
console.log(date2);

// 2. 타임 스탬프
// 1970.01.01 00:00:00 기준부터 몇 ms 지났는지 확인 가능
let ts1 = date1.getTime();
console.log(ts1);

// ms를 매개변수로 넣으면 저 기준 날짜부터 얼마나 지났는지 계산해줍니다
let date = new Date(ts1);
console.log(date);

// 3. 시간 요소 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth();
let date3 = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// 4. 시간 수정하기
// setter 사용해서 수정 가능함요
date1.setFullYear(2023);
date1.setMonth(2); // 0이 1월임 2면 3월이겠죠

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleString());


//--------------------------------------------------------------------------------------

// 동기와 비동기

// 동기란?
// 작업을 한 번에 하나씩 처리하는 것 입니다
// 순서가 중요하겠죠 한 번에 하나씩 처리하니까
// 참고로 이런 작업들은 쓰레드가 해주는 것임

// 근데 동기 방식의 치명적인 단점이 있습니다
// 뭐냐면 
// 중간에 오래 걸리는 작업이 하나 끼었을때 
// 뒤 작업들이 모두 밀려버린다는 것임

// 그럼 이런걸 해결할 순 없는걸까요
// 자바에선 멀티 쓰레드가 지원되기 때문에 이런거 해결되는데
// 자바스크립트는 쓰레드가 한 개뿐이라 멀티 쓰레드는 불가능하죠
// 그래서 이를 해결하기 위해 비동기 처리 방식을 이용합니다

// 어떻게 하냐구요
// Web APIs를 이용하는건데 쉽게 말해 웹 브라우저에게 도와달라고 하는 것임
// 웹 브라우저에게 처리해달라고 한다는 건데 
// 웹 브라우저는 하나의 애플리케이션이기 때문에 당연히 이런 기능들을 가질 수 있고
// C++ 같은 언어 수준에서 미리 구현해놨습니다
// 이걸 이용하는 것임

console.log(1);

setTimeout(() => {
    console.log(2);
}, 3000);

console.log(3);

//--------------------------------------------------------------------------------------

// 비동기 작업 처리하기
// 1. 콜백함수

// 비동기 처리 함수 안에서 만들어진 값을 return하면 바로 사용할 수 없습니다
// 예를 들어, 아래처럼 처리하면 result 값이 undefined로 출력되죠

let result;

setTimeout(() => {
    result = 100;
}, 1000);

console.log(result);

// 어떻게해야 result를 100으로 출력하게 만들 수 있을까요
// 정답은 콜백함수를 사용하면 됩니다
// 처음에 result를 선언해놓는다고 값이 받아와지는게 아님

function getData(callback) {

    setTimeout(() => {
        const data = 100;
        callback(data);
    }, 1000);
}

getData((result) => {
    console.log(result);
})

// 이렇게 비동기함수 안에서 만든 변수를 밖에서 사용하고 싶다면
// 콜백함수를 사용하면 됩니다
// 콜백함수의 매개변수로 변수를 넘긴 다음 이걸 arrow function으로 원하는대로 사용하면 됨
// 그럼 위에서처럼
// 100을 출력할 수 있습니다
// 근데 갑자기 1초, 2초, 3초 후에 이런식으로 메서드를 비동기 방식으로 처리할 알이 생기면 어떡하죠
// 이렇게 하면 되겠죠

function getFood(callback) {
    setTimeout(() => {
        const result = "음식";
        callback(result);
    }, 1000);
}

function packageFood(food, callback) {
    setTimeout(() => {
        const packagedFood = `포장된 ${food}`;
        callback(packagedFood);
    }, 1000);
}

function deliveryFood(packagedFood, callback) {
    setTimeout(() => {
        const delivery = `${packagedFood} 배달완료`;
        callback(delivery);
    }, 1000);
}

getFood((food) => {
    console.log(food);

    packageFood(food, (packagedFood) => {
        console.log(packagedFood);

        deliveryFood(packagedFood, (delivery) => {
            console.log(delivery);
        })
    });
});

// 근데 이러면 너무 depth가 깊어지지 않습니까
// 당연히 이런건 안티패턴이죠
// 그럼 이런 콜백 지옥을 어떻게 해결하면 될까요
// 방법은 Promise를 사용하면 됨

//--------------------------------------------------------------------------------------

// 비동기 작업 처리하기
// 2. Promise

// Promise가 뭐냐면 
// 비동기 작업을 감싸는 객체입니다
// 근데 왜 Promise라고 부르냐구요
// 그 이유는 Promise가 
// '비동기 작업의 성공이나 실패 결과가 지금은 없긴한데 나중에 줌' 하고 약속하는 객체이기 때문입니다

// 그래서 Promise에는 3가지 상태가 있습니다
// pending, fulfilled, rejected
// 지금은 없긴한데 나중에 성공이나 실패 결과 준다고 했으니까
// 자연스럽게 대기중, 성공함, 실패함
// 이렇게 이해가 되죠

// 그리고 성공이나 실패 결과를 나중에 준다고 약속했지 않습니까
// 이걸 메서드로는 어떻게 표현하냐면
// 성공하면 .then()에 매개변수로 담아서 알려드림
// 실패하면 .catch()에 매개변수로 담아서 알려드림
// 이런 식으로 나타냅니다

// 추가로 Promise chaining 을 사용하면 더 가독성 좋게 비동기 처리 함수를 표현할 수 있습니다

function 프로미스(number) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number > 3) {
                resolve(`${number}는 3보다 큽니다`);
            } else {
                reject(`${number}는 3보다 작습니다`);
            }
        }, 2000);
    })
    return promise;
}


프로미스(10)
    .then((결과) => {
        console.log(결과);
        return 프로미스(100);
    })
    .then((결과) => {
        console.log(결과);
    })
    .catch((에러임) => {
        console.log(에러임);
    });

// 이렇게 연속으로 Promise 반환 값을 메서드 체이닝으로 넘겨 줄 수도 있습니다

new Promise((resolve, reject) => {
    let result = true;
    setTimeout(() => {
        if (result) {
            resolve("성공요");
        } else {
            reject("실패요");
        }
    }, 4000);
})
    .then((결과) => {
        console.log(결과);
    })
    .catch((결과) => {
        console.log(결과);
    })

//--------------------------------------------------------------------------------------

// 비동기 처리하기
// 3. Async / Await

// 방금 본 Promise 좋긴한데 코드가 길어지면 가독성이 구려지지 않습니까
// 이걸 해결하기 위해 async/await가 만들어졌습니다

// 이 키워드를 사용하면 비동기함수를 동기함수처럼 사용할 수 있게 됩니다
// 무슨 말이냐면 함수 앞에 async를 붙이면 이제부터 반환 값에 자동으로 Promise를 감싸서 반환해준다는 것입니다
// 그럼 await은 뭘까요
// await은 async 함수 안에서만 사용할 수 있는 키워드입니다
// 뜻만 봐도 기다리는 거죠
// 근데 뭘 기다리는걸까요 
// 정답은 Promise()를 기다린다 입니다.
// 성공이든 실패든 그 결과를 기다리고 있는것임
// 그래서 await을 사용하면 그 결과를 기다렸다가 변수에 담아줍니다
// 이제 .then() .catch() 같은 것에 결과를 매개변수로 안담아도 된다는것임
// 구체적으로 코드를 봅시다

async function 비동기지롱() {
    try {
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                const result = true;

                if (result) {
                    resolve("응 맞아 성공임");
                } else {
                    reject("실패요 ㅅㄱ");
                }
            }, 4000);
        });

        console.log(result); // 여기서 .then() 이걸로 안받아도 되죠죠
    } catch (error) { // 근데 try-catch로 잡아줘야하긴함
        console.error("에러발생요", error);
    }
}

비동기지롱();

// 위 예시는 사실 좀 구린 예시고
// 제대로 await을 사용하려면 
// 비동기 함수가 Promise()로 감싸서 만들어져있어야 의미가 있겠죠
// 예시를 봅시다

async function async테스트() {
    try {
        const result = await 프로미스("하이");
        console.log(result);
    } catch (error) {
        console.error("실패함 ㅅㄱ", error);
    }
}

async테스트();

// 이렇게 하면 되게 깔끔하게 코드 작성할 수 있지 않습니까 굿이구요