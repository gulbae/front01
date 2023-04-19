import axios from 'axios';
import React, { useEffect } from 'react';

function App() {
    const name ="주민지";

    // postman으로는 잘됨.
    // Acess-Control-Allow-Origin => CORS문제 => 같은서버가 아니면 rest자료를 받을 수 없다.
    // 함수생성
    // async function selectList() { }
    const selectList = async() => {
        const url = `/web03/api/board/select.json?page=1`;
        const headers = {"Content-Type":"application/json"};
        const { data } = await axios.get(url, {headers});
        console.log(data);
    }

    // 화면이 로딩될때
    useEffect( () => {
        selectList(); //함수 호출하기
    },[])

    return(
        <div>

            <h3>board까아아아아아ㅏㅇ아ㅗㅁㄹ히ㅏ옿;ㅣㅏ농ㄹ;ㅣ낭럼;ㅣ나ㅓ</h3>
            <h1>{name}</h1>
            <h1>날씨왜이래!!!!!!!!!!!!!!!!!!!!</h1>
            <p>으아아아ㅏ아아아앙아아아ㅏㅇ아아악!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</p>
        </div>
    );
}

export default App;