import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.scss"

export default function Featured({type}) {
    return (
        <div className="featured">
             {type && (
                 <div className="category">
                    <span>
                        {type === "Movie" ? "Movies" : "Series"}
                    </span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                    </select>
                 </div>
             )}
            <img src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
            alt=""/>

            <div className="info">
                <img src="https://www.freepnglogos.com/uploads/avengers-png-logo/file-marvel-the-avengers-film-logo-png-6.png"
                alt="" />
                <span className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur debitis mollitia quisquam odit ea maiores, fugiat, provident, animi ipsam reiciendis magnam quibusdam quod autem. Eos asperiores sed dicta perferendis alias.
                
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
