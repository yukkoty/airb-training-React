import tokyo from './tokyo.jpeg'
import kyoto from './kyoto.jpeg'
import osaka from './osaka.jpeg'
import shinjyuku from './shinjyuku.jpeg'
import './Button.css';
import { useState } from 'react';

function LiveContent() {
    return (
        <p>
            <div className="">
                    <img className=""src={} />
                <div className="" >
                    <div></div>
                    <div></div>
                </div>　 
                    <img className=""src={} />
                <div className="" >
                    <div></div>
                    <div></div>
                </div>　 
                
            <div>
        </div>
        </div>
        <div className="boxContainer2">
                    <img className="Imgtachi"src={tokyo} />
                <div className="box2" >
                    <div>東京</div>
                    <div>車で6.5時間</div>
                </div>　 
                    <img className="Imgtachi"src={osaka} />
                <div className="box2" >
                    <div>大阪</div>
                    <div>車で15分</div>
                </div>　 
                <img className="Imgtachi"src={kyoto} />
                <div className="box2" >
                    <div>京都</div>
                    <div>車で1時間</div>
                </div>　 
                <img className="Imgtachi"src={shinjyuku} />
                <div className="box2" >
                    <div>新宿</div>
                    <div>車で6.5時間</div>
        </div>
        </div>
        </p>
    );
    
}
export default LiveContent