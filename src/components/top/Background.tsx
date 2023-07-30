import Level1 from "./level1";
import '../../styles/background.css'
import TaskBar from "./TaskBar";

const Background = () => {
    return(
        <div className="background">
            <Level1 />
            <div className="company">Elevate</div>
            <TaskBar />
            <div></div>
        </div>
    )
}

export default Background;