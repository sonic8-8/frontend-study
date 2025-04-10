// math 모듈

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

// 이렇게 export 해줄 수 있고 default로 설정하면 이 math 모듈을 대표하는 하나의 메서드가 됩니다
// 근데 이거 사용하는 곳에선 어떻게 사용해야하냐구요
// 그냥 export 한 거랑 좀 다릅니다
// import 할 때 {} 안에 메서드명을 넣는게 아니라
// import multiply from "./math.js";
// 이런식으로 해야됨
export default function multiply(a, b) {
    return a * b;
}

// CJS 방식
// module.exports = {
//     add: add,
//     sub: sub
// }

// ESM 방식
export { add, sub };