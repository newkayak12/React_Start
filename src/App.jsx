import React, { Component } from 'react';
import PropsComponent from './03TodoPlan/PropsComponent';
import ChildComponent from './03TodoPlan/ChildComponent';
import BooleanComponent from './03TodoPlan/BooleanComponent';
class App extends Component {
  render() {
    return (
      <div>
        <PropsComponent name="React" />
        <br></br>
        <hr></hr>
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
        <div>
          <b>지루할 때 :</b>
          <BooleanComponent bored />
        </div>
        <div>
          <b>즐거울 때 :</b>
          <BooleanComponent />
        </div>
      </div>
    );
  }
}

export default App;
