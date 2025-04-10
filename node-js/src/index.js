//--------------------------------------------------------------------------------------

// node.js 사용하기

// Ctrl + j 단축키로 터미널을 열 수 있습니다
// npm init으로 package.json을 생성할 수 있는데

console.log("안녕 Node.js");

// 내가 만든 자바스크립트 파일을 실행시켜보고 싶다면
// node 파일명 을 터미널로 명령해주면 됩니다
// 구체적으로
// node index.js
// node src/index.js
// 이런식으로 터미널에 입력하면 된다는 것임

// 근데 이제 매번 이렇게 파일명을 입력해서 실행하면 귀찮잖아요
// 이런거 자동으로 못함?

// 할 수 있습니다

// [방법]
// package.json 설정 파일에 
// scripts 부분에 "start": node 경로
// 이걸 입력해주면 됩니다
// "start": node src/index.js
// 이런식으로 하라는거임

// 설정했으면
// 이제부터 npm run start만 입력해줘도 경로로 설정한 파일이 실행됩니다 굿

//--------------------------------------------------------------------------------------

// 모듈 시스템

// 모듈이 뭘까요
// 기능별로 나누어진 자바스크립트 파일을 모듈이라고 함

// 회원 관리 기능을 만들었다면 user 모듈
// 장바구니 기능을 만들었다면 cart 모듈
// 이런식으로 부른다는 것입니다

// 이런 모듈을 생성하고 사용하는 등 모듈을 다루는 다양한 기능을 제공하는 시스템을 모듈 시스템이라고 합니다

// Common JS
// ES Module
// 이라는 모듈 시스템을 알아봅시다

// Common JS (CJS) 
// CJS 모듈 시스템을 사용하려면 먼저 모듈을 만들고
// module.exports = {}
// 를 이용해서 만든 메서드를 객체에 담아서 밖에서 사용할 수 있도록 만들어야합니다

// 그럼 이걸 사용하는 곳에선 어떻게 사용하느냐
// require(모듈경로) 를 이용하거나
// 객체 구조 분해 할당을 이용해주면 됩니다

// 구체적인건 코드로 봅시다

// require(모듈 경로)
// const moduleData = require("./math");

// 객체 구조 분해 할당을 이용하면 이렇게도 가능함
// const { add, sub } = require("./math");

// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// console.log(add(1, 2));
// console.log(sub(1, 2));

// ES Module (ESM)
// CJS 보다 최신인 ESM을 사용하려면
// package.json에 설정을 추가해줘야합니다
// "type": "module";
// 을 추가해서 이 패키지는 ES 모듈 시스템을 사용하겠다고 설정해줘야함
// 참고로 CJS랑 EMS는 하나만 사용할 수 있습니다

// 모듈을 만든 곳에서는 export로 내보낼 수 있도록 하고
// 모듈을 사용하고 싶은 곳에서는 import로 받아올 수 있도록 해주면 됩니다
import { add, sub } from "./math.js";

// 이렇게 default 메서드명 자체를 import 해줘야 정상적으로 동작한다는 것임
// math.js 참고하십쇼
import multiply from "./math.js";

// 이렇게 한 번에 import 하는 것도 가능합니다 사실 이게 깔끔하고 좋은듯
// import multiply, {add, sub} from "./math.js";

console.log(add(1, 2));
console.log(sub(1, 2));

console.log(multiply(1, 2));

//--------------------------------------------------------------------------------------

// 라이브러리 사용하기

// 라이브러리 어떻게 사용하냐구요
// 모듈 시스템을 이용해서 불러오면 됩니다

// package.json 에는 대략적인 버전의 정보가 적혀있고
// node_modules에는 실제 라이브러리를 저장해놓습니다
// 근데 package-lock.json 은 package.json이랑 뭐가 다르냐구요
// package-lock.json 에는 정확한 버전의 정보가 적혀있습니다

// 라이브러리는 from 뒤에 경로를 입력하는게 아니라 라이브러리의 이름을 적어주면 된다는 차이점이 있습니다
import randomcolor from "randomcolor";

const color = randomcolor();
console.log(color);

// 근데 만약 node_modules 폴더가 지워져버리면 어떡하죠
// 여기엔 실제 라이브러리들이 저장돼있잖아요 이거 지워지면 패키지 실행 못하는거 아님?
// 맞긴한데 package.json만 살아있으면 상관없습니다
// npm i 혹은 npm install 을 입력해주면 package.json 의 dependencies를 참고하여 라이브러리를 다시 다운받아줌
// 그래서 협업할때는 node_modules 까지 보낼 필요가 없습니다