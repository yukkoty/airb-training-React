import naturehouse from './naturehouse.jpeg'
import uniquehouse from './uniquehouse.jpeg'
import wholehouse from './wholehouse.jpeg'
import dog from './dog.jpeg'
import hostingwoman from './hostingwoman.jpeg'
import goat from './goat.jpeg'
import onlinemeeting from './onlinemeeting.jpeg'
import instrument from'./instrument.jpeg'

function LiveContent() {
    return (
        <p>
            <div className="bottom-container">
                <div>好きなところに暮らそう</div>
                    <img className="naturehouse"src={naturehouse} />
                <div className="bottomcontent" >
                    <div>自然に囲まれた宿泊先</div>
                </div>　 
                    <img className="uniquehouse"src={uniquehouse} />
                <div className="bottomcontent" >
                    <div>ユニークなリスティング</div>
                </div>　 
                <img className="wholehouse"src={wholehouse} />
                <div className="bottomcontent" >
                    <div>まるまる貸切</div>
                </div>　 
                <img className="dog"src={dog} />
                <div className="bottomcontent" >
                    <div>ペット同伴OK</div>
                    </div>
            </div>
            <div className="bottom-container2">
                    <img className="hostingwoman"src={hostingwoman} />
                <div className="bottomcontent2" >
                    <div>ホスティングに挑戦しよう</div>
                    <div>お部屋をシェアしてゆとりのある暮らしと新たな機会を</div>
                    <div>さらに詳しく</div>
                </div>　 
                <div className="unforgettable-experience">
                    <img className="goat"src={goat} />
                    <div>Airbnb体験</div>
                    <div>近場で忘れられない体験を見つけよう</div>
                    <img className="onlinemeeting"src={onlinemeeting} />
                    <div>オンライン体験</div>
                    <div>ホストが案内するLIVE配信でインタラクティブに参加できる体験</div>
                    <img className="instrument"src={instrument} />
                    <div>注目のコレクション</div>
            </div>
            </div>
        </p>
        
    );
    
}
export default LiveContent