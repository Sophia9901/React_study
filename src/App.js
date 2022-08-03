// eslint-disable

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // 변수는 내용이 바뀔 경우 수동으로 html 코드를 다시 수정해야한다.
  let [글제목, 글제목변경] = useState(['남자 코드 추천', '강남 우동맛집', '파이썬 독학']);
  // state는 자동으로 html 재랜더링이 자동으로 된다.
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [우우, 우우변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let[입력값, 입력값변경] =  useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {/* <div className="list">
        <h4>
          {글제목[0]}
          <span onClick={()=> {따봉변경(따봉+1)}}>👍</span> {따봉}
          <span onClick={()=> {우우변경(우우-1)}}>🔻</span> {우우}
        </h4>
        <p>2월 17일 발행</p>
      </div> */}
    

      {
        글제목.map(function(a, i){
          return (
            <div className="list" key={i}>
            <h4 onClick={() => { setModal(true); setTitle(i) }}>
              {글제목[i]}
              <span onClick={(e) => { 
                  e.stopPropagation(); // 이벤트 물려주기 그만하기
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy)  
              }}>👍</span> {따봉[i]}
              <span onClick={() => { 
                  let copy = [...우우];
                  copy[i] = copy[i] + 1;
                  우우변경(copy)  
              }}>🔻</span> {우우[i]} 
            </h4>
            <p>2월 17일 발행</p>
            <button>삭제</button>
          </div>
          )
        })
      }
      
      <input onChange={(e)=>{
        입력값변경(e.target.value); // 비동기처리: 늦게 처리됨
        console.log(입력값);
        }} />
      <button >글발행</button>

      {
        //조건식 ? 참일때 실행할 코드 : 거직일 때 실행할 코드
        modal == true ? <Modal title={title} 글제목={글제목}/> : null
        
      }

    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}


export default App;
