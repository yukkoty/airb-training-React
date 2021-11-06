import './Message.css';
import { useState } from 'react';

const Message=()=> {
    const [selected, setSelected] =  useState('')
    const onClickHandler = (selected) => {

        setSelected(selected)
    }
    return(
        <div className="boxContainer1">
            <div className="box1" onClick={( ) => onClickHandler('visitPlace')}>
                <div>次はどこへ行こう？より柔軟な検索で、広がる旅の可能性。</div>
                {selected == 'p' &&
                    <div className="underLine1"></div>
                }
        </div>　
        </div>
            )
    }
export default Message