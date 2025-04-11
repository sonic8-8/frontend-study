import { useState, useRef } from "react";

const Register = () => {

    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: "",
    });

    const inputRef = useRef();

    const onChange = (e) => {
        console.log(e.target.name, e.target.value);
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    }

    const onSubmit = () => {
        if (input.name === "") {
            inputRef.current.focus();
        }
    }

    return (
        <div>
            <div>
                <input ref={inputRef} name="name" type="text" placeholder="이름" onChange={onChange} />
            </div>
            <div>
                <input name="birth" type="date" onChange={onChange} />
            </div>
            <div>
                <select name="country" onChange={onChange}>
                    <option></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>
            <div>
                <textarea name="bio" onChange={onChange} />
            </div>
            <button onClick={onSubmit}>제출</button>
        </div>
    )
}

export default Register;