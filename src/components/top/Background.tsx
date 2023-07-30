import Level1 from "./level1";
import { useState } from "react";
import '../../styles/background.css'
import TaskBar from "./TaskBar";

const Taglines = [
    "Fashion Frenzy: Elevate Your Wardrobe with Trendy Finds!",
    "Discover a World of Style: Shop Your Heart Out!",
    "Unleash Your Shopping Desires: Endless Choices Await!",
    "Shop Smarter, Save Bigger: Unbeatable Deals Inside!"
  ]

const Background = () => {
    const [tagline, setTagline] = useState(0);
    function prevSlide() {
        if (tagline > 0) {
          setTagline(tagline-1);
        } else {
          setTagline(Taglines.length - 1);
        }
      }
      
      function nextSlide() {
        if (tagline < Taglines.length-1) {
          setTagline(tagline+1);
        } else {
          setTagline(0);
        }
      } 
    return(
        <div className="background">
            <Level1 />
            <div className="company">Elevate</div>
            <TaskBar />
            <div className="slider">
                <button onClick={prevSlide} className="slider-button">&lt;</button>
                <div className="slider-content">
                    {Taglines[tagline]}
                </div>
                <button onClick={nextSlide} className="slider-button">&gt;</button>
            </div>
        </div>
    )
}

export default Background;