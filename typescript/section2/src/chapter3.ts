// 객체 리터럴 타입
// 구조적 타입 시스템 (프로퍼티를 기준으로 객체의 구조를 정하듯 타입을 정의)
// 명목적 타입 시스템 (이름만 붙여서 타입을 정의), Java에서 사용하는 방식
let user: {
    id: number;
    name: string;
} = {
    id: 1,
    name: "이승환",
};

let dog: {
    name: string;
    color: string;
} = {
    name: "돌돌이",
    color: "brown",
};

// 선택적 프로퍼티 ?:
// 프로퍼티가 있어도 되고 없어도 된다는 뜻, 만약 있을거면 뒤에 나오는 타입이어야 함
let select: {
    whatever?: string;
    name: string;
} = {
    name: "hi",
}

// 값을 바꾸지 못하게 하려면 readonly 속성을 넣어주면 됨
let config: {
    readonly apiKey: string;
} = {
    apiKey: "MY API KEY",
}