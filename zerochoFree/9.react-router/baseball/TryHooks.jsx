import React, {memo} from "react";
const TryHooks = memo((props) =>{
    //memo로 감싸주면 쓸데 없는 재렌더를 방지할 수 있다. => 부모 컴포넌트 영역의 재렌더는 피할 수 없다.
    // const {try, result} = props
    /**
     * props는 자식 -> 부모로 바꿀 수 없다?
     * vue는 v-model : value로 가능할텐데?
     * 아니면... 하긴 $emit()으로 올려서 부모가 바꾸게 유도하는 식으로 쓰는구나..?!
     *
     * 만약 바꾸고 싶다면 여기서 state에 set하고 바꿔주는 식으로 (초기 값만 갖고 오고 state는 자식 컴포넌트대로 따로 있는 식으로
     */
    return (
        <>
            <li>{props.try} / {props.result}</li>
        </>
    )
});
TryHooks.displayName = "TryHooks"
//memo를 쓰면 컴포넌트 이름이 달라지는데 여기서 이름을 할당할 수 있다.
export default TryHooks
