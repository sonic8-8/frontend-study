import './App.css'
import Header from "./components/Header";
import Main from './components/Main';
import Footer from "./components/Footer";
import Button from './components/Button';
import Bulb from './components/Bulb';
import Counter from './components/Counter';
import Register from './components/Register';
import HookExam from './components/HookExam';

// 부모 컴포넌트
// App 컴포넌트를 일반적으로 모든 컴포넌트들의 뿌리인 조상 컴포넌트로 사용하는게 일반적입니다
function App() {

  return (
    <>
      {/* 자식 컴포넌트를 사용하기 위해선 부모 컴포넌트 안에 배치해주면 됩니다 */}
      <Header />
      <Main />
      <Footer />

      <Button text={"메일"} color={"red"} />
      <Button text={"카페"} />
      <Button text={"블로그"} />

      <Counter />
      <Bulb />

      <Register />

      <HookExam />
    </>
  )
}

export default App;
