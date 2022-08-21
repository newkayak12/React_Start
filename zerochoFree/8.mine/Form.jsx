import React,{useState, useCallback, useContext} from 'react'
import {TableContext, TYPE} from "./MineSweeper";
const Form = () =>{
    const [row, setRow] = useState(10)
    const [cell, setCell] = useState(10)
    const [mine, setMine] = useState(20)
    const {dispatch} = useContext(TableContext);

    const onChangeRow = useCallback((e) =>{setRow(e.target.value)},[])
    const onChangeCell = useCallback((e) =>{setCell(e.target.value)},[])
    const onChangeMine = useCallback((e) =>{
        if((parseInt(row)*parseInt(cell)) < parseInt(mine)){
            console.log(mine)
            setMine(mine)
            alert("EXCEED")
            return
        }
        setMine(e.target.value)
    },[])
    const onClickBtn = ()=> {
        dispatch({type: TYPE.START_GAME, row, cell, mine}, [row,cell,mine])
    }
    return (
        <div style={{margin:'10px 0'}}>
            <input style={{marginRight:'5px'}} type="number" placeholder="세로" value={row} onChange={onChangeRow}/>
            <input style={{marginRight:'5px'}} type="number" placeholder="가로" value={cell} onChange={onChangeCell}/>
            <input style={{marginRight:'5px'}} type="number" placeholder="지뢰" value={mine} onChange={onChangeMine}/>
            <button onClick={onClickBtn}>시작</button>
        </div>
    )
}
export default Form