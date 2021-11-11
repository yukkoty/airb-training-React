import './Footer.css';
import { useState } from 'react';

const Footer=()=> {
    const [selected, setSelected] =  useState('')
    const onClickHandler = (selected) => {

        setSelected(selected)
    }
    return(
        <div className="footerContainer">
            <div className="footerbox4" onClick={( ) => onClickHandler('support')}>
            <div className="footertitle">サポート</div>
            {selected == 'support' &&
                    <div className="underLine3"></div>
                }
                <div>ヘルプセンター</div>
                <div>安全に関する情報</div>
                <div>キャンセルオプション</div>
                <div>Airbnbの新型コロナウイルスに対する取り組み</div>
                <div>障害のある方へのサポート</div>
                <div>近隣トラブルを報告する</div>
            </div>
            <div className="footerbox4" onClick={( ) => onClickHandler('community')}>
            <div className="footertitle">コミュニティ</div>
            {selected == 'community' &&
                    <div className="underLine3"></div>
                }
                <div>Airbnb.org：災害発生時の滞在先</div>
                <div>アフガン難民支援</div>
                <div>ダイバーシティ＆ビロンギングの促進</div>
                <div>差別に対する取り組み</div>
            </div>
            <div className="footerbox4" onClick={( ) => onClickHandler('hosting')}>
            <div className="footertitle">ホスティング</div>
            {selected == 'hosting' &&
                    <div className="underLine3"></div>
                }
                <div>ホスティングをはじめる</div>
                <div>AirCover：ホストに対する保護措置</div>
                <div>ホスト向けリソースを確認</div>
                <div>コミュニティフォーラムへ</div>
                <div>責任をもってホスティングする方法</div>
            </div>
            <div className="footerbox4" onClick={( ) => onClickHandler('companyinformation')}>
                <div className="footertitle">企業情報</div>
                {selected == 'companyinformation' &&
                    <div className="underLine3"></div>
                }
                <div>ニュースルーム</div>
                <div>新機能のご紹介</div>
                <div>Airbnb創業者からの手紙</div>
                <div>採用情報</div>
                <div>株主・投資家のみなさまへ</div>
                <div>Airbnb Luxe</div>
            </div>　 
            <div></div>
        </div>
        
    )
}
export default Footer