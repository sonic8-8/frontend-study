const Button = ({ text, color = "black" }) => {
    const onClickButton = (event) => {
        console.log(text);
        console.log(event); // synthetic Event 라는 추상화 된 이벤트 객체로 cross browsing issue 대부분을 해결해줍니다
    }

    return (
        <button
            onClick={onClickButton}
            // onMouseEnter={onClickButton}
            style={{ color: color }}>
            {text} - {color.toUpperCase()}
        </button>
    );
};

export default Button;