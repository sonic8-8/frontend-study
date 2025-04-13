import { useSearchParams } from "react-router-dom";

const Home = () => {
    const [parmas, setParams] = useSearchParams();
    // console.log(parmas.get("value"));

    return (
        <div>Home</div>
    )
}

export default Home;