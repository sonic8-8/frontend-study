import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext } from "../App";
import { DiaryStateContext } from "../App";

const Edit = () => {
    const params = useParams();
    const nav = useNavigate();
    const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
    const data = useContext(DiaryStateContext);
    const [currentDiaryItem, setCurrentDiaryItem] = useState();

    useEffect(() => {
        const currentDiaryItem = data.find((item) =>
            String(item.id) === String(params.id)
        );

        if (!currentDiaryItem) {
            window.alert("존재하지 않는 일기입니다.");
            nav(-1, { replace: true });
        }

        setCurrentDiaryItem(currentDiaryItem);
    }, [params.id]);

    const onClickDelete = () => {
        if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
            onDelete(params.id);
            nav(-1, { replace: true });
        }
    }

    const onSubmit = (input) => {
        if (window.confirm("일기를 정말 수정할까요?")) {
            onUpdate(
                params.id,
                input.createdDate.getTime(),
                input.emotionId,
                input.content
            );
            nav("/", { replace: true });
        }
    }

    return (
        <div className="Edit">
            <section className="header_section">
                <Header
                    title={"일기 수정하기"}
                    leftChild={<Button text={"< 뒤로가기"} onClick={() => nav(-1)} />}
                    rightChild={<Button text={"삭제하기"} type={"NEGATIVE"} onClick={onClickDelete} />} />
            </section>
            <section className="">
                <Editor initData={currentDiaryItem} onSubmit={onSubmit} />
            </section>
        </div>
    )
}

export default Edit;