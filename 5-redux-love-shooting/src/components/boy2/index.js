import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import sending from "../../asserts/image/mao.gif";
import defaultImg from "../../asserts/image/mao.png";
import {actions} from "../../store/action";

export const Boy2 = () => {


    const [isSend, setIsSend] = useState(false);
    const status = useSelector(state => state);
    const dispatch = useDispatch();

    function handleClick() {
        setIsSend(!isSend)
        dispatch(actions.changeAction());
    }


    return (
        <div className="boy">
            <img src={status.isSend ? sending :defaultImg} style={{width: "300px", height: "300px"}} alt=""/>
            <div>
                <button onClick={handleClick}>发射爱心</button>
            </div>
        </div>
    )
}