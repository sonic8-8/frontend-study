// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있습니다
// 값으로 평가되는 것만 넣을 수 있다는 것임
// 2. 숫자, 문자열, 배열 값만 렌더링 된다
// 3. 모든 태그는 닫는 태그가 있어야 함 <img></img> 이런식으로 되야함
// 4. 최상위 태그는 반드시 하나여야한다

const Main = () => {

    const user = {
        name: "이승환",
        isLogin: true,
    }

    if (user.isLogin) {
        return <div>로그아웃</div>
    } else {
        return <div>로그인</div>
    }

    // return (
    //     <>
    //         {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}
    //     </>
    // )
}

export default Main;