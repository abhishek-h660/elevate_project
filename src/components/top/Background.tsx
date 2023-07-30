import Level1 from "./level1";
import './../../styles/background.css'
import TaskBar from "./TaskBar";
import Slider from "./Slider";

const Background = () => {
    return(
        <div className="background">
            <Level1 />
            <div className="company">Elevate</div>
            <TaskBar />
            <Slider />
            <div></div>
        </div>
    )
}

export default Background;