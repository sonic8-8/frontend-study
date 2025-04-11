import useInput from "../hooks/useInput";

// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능하다
// 2. 조건문이나 반복문으로 호출될 수 없다 (호출 순서가 엉망이 됨)
// 3. 나만의 훅(Custom Hook)을 직접 만들 수 있다

// const state = useState();
// 이런 곳에 Hook을 호출할 수 없다는 것임

const HookExam = () => {

    const [input, onChange] = useInput();
    const [input2, onChange2] = useInput();

    return (
        <div>
            <input value={input} onChange={onChange} />
            <input value={input2} onChange={onChange2} />
        </div>
    )
}

export default HookExam;