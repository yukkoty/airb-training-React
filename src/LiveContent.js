import naturehouse from './naturehouse.jpeg'
import uniquehouse from './uniquehouse.jpeg'
import wholehouse from './wholehouse.jpeg'
import dog from './dog.jpeg'
import hostingwoman from './hostingwoman.jpeg'
import goat from './goat.jpeg'
import onlinemeeting from './onlinemeeting.jpeg'
import instrument from'./instrument.jpeg'
import './LiveContent.css'

function LiveContent() {
    return (
        <>
                <div className="bottom-container-title">好きなところに暮らそう</div>
                    <div className="bottom-container"> 
                        <img className="bottomImg"src={naturehouse} />
                    <div className="bottomcontent">自然に囲まれた宿泊先</div>
                        <img className="bottomImg"src={uniquehouse} />
                    <div className="bottomcontent">ユニークなリスティング</div>　 
                    <img className="bottomImg"src={wholehouse} />
                    <div className="bottomcontent">まるまる貸切</div>
                    <img className="bottomImg"src={dog} />
                    <div className="bottomcontent">ペット同伴OK</div>
                </div>
                        <img className="hostingwoman"src={hostingwoman} />
                    <div className="hosting" >
                        <div>ホスティングに挑戦しよう</div>
                        <div>お部屋をシェアしてゆとりのある暮らしと新たな機会を</div>
                        <div>さらに詳しく</div>　 
                </div>　 
                <div className="bottom-container2">
                    <img className="bottomImg2"src={goat} />
                    <div className="bottomcontent2">Airbnb体験</div>
                    <div className="bottomcontent2">近場で忘れられない体験を見つけよう</div>
                    <img className="bottomImg2"src={onlinemeeting} />
                    <div className="bottomcontent2">オンライン体験</div>
                    <div className="bottomcontent2">ホストが案内するLIVE配信でインタラクティブに参加できる体験</div>
                    <img className="bottomImg2"src={instrument} />
                    <div className="bottomcontent2">注目のコレクション</div>
                 </div>
        
        </>
        
    );
    
}
export default LiveContent