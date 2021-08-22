import React, { Component } from 'react';
import './App.css';
import PropsComponent from './03Components/PropsComponent';
import ChildComponent from './03Components/ChildComponent';
import BooleanComponent from './03Components/BooleanComponent';
import ChildComponent2 from './03Components/ChildComponent2';
import DefaultPropsComponent from './03Components/DefaultPropsComponent';
import ChildProperty from './03Components/CHildProperty';
import StateExample from './03Components/StateExample';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="numbering">1.TodaysPlan 컴포넌트 만들기</h1>
        <PropsComponent name="React" />
        <br></br>
        <hr></hr>
        <h1 className="numbering">2. 프로퍼티 기초</h1>
        <ChildComponent
          boolValue={true}
          numValue={1}
          arrayValue={[1, 2, 3]}
          objValue={{ name: '제목', age: 30 }}
          nodeValue={<h1>노드</h1>}
          funcValue={() => {
            console.log('msg');
          }}
        />
        <br></br>
        <hr></hr>
        <h1 className="numbering">3. boolean 프로퍼티</h1>
        <div>
          <b>지루할 때 :</b>
          <BooleanComponent bored />
        </div>
        <div>
          <b>즐거울 때 :</b>
          <BooleanComponent />
        </div>
        <br></br>
        <hr></hr>
        <h1 className="numbering">4. 객체형 프로퍼티/ 필수 프로퍼티 사용하기</h1>
        <ChildComponent2 objValue={{ age: 20 }} rqStringValue="abc" />
        <br></br>
        <hr></hr>
        <h1 className="numbering">5. 프로퍼티 기본값 설정 </h1>
        <DefaultPropsComponent />
        <br></br>
        <hr></hr>
        <h1 className="numbering">6. 자식 프로퍼티 사용하기 </h1>
        <ChildProperty>
          <div style={{ marginTop: 20 }}>
            <span>자식 노드의 값</span>
          </div>
        </ChildProperty>
        {/* 혹은 */}
        <ChildProperty
          children={
            <div style={{ marginTop: 20 }}>
              <span> 속성으로 보내주는 값입니다.</span>
            </div>
          }
        />
        <br></br>
        <hr></hr>
        <h1 className="numbering">7. State로 상태 관리하기 </h1>
        <StateExample />
      </div>
    );
  }
}
/* 
  생성자에서 반드시 초기화해야한다.
  state값을 변경할 때에는 setState()함수를 사용해야한다.
  setState()함수는 비동기로 처리되며, setState()코드 이후로 연결된 함수들의 실행이 완료된 시점에 화면 동기화 과정을 거친다. 
*/
export default App;
