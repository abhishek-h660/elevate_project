import { useContext, useState } from 'react';
import './../../styles/taskbar.css'
import { CategoryContext } from '../../App';
const TaskBar = () => {
    const {category, setCategory} = useContext(CategoryContext)
    const [display, setDisplay] = useState({display:"none"})

    const handleOption = (value: string)=>{
        if(display.display == "none"){
            setDisplay({display:"block"});
        }else{
            setDisplay({display:"none"});
        }
        setCategory(value)
    }

    const handleToggle = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if(display.display == "none"){
            setDisplay({display:"block"});
        }else{
            setDisplay({display:"none"});
        }
    }

    return(
        <div className="taskbar">
            <div className="menu_icon">
                <img src='/icons/menu_icon.svg' />
            </div>
            <div className='category' onClick={(e)=>{handleToggle(e)}}>
                <div className='text'>
                {category}
                </div>
                <img src='/icons/dropdown_icon.svg'/>
                <div className='content' id='dropdown' style={display}>
                    <option value="option1" onClick={(e)=>{handleOption("All Category")}}>All Category</option>
                    <option value="option2" onClick={(e)=>{handleOption("electronics")}}>electronics</option>
                    <option value="option3" onClick={(e)=>{handleOption("jewelery")}}>jewelery</option>
                    <option value="option4" onClick={(e)=>{handleOption("men's clothing")}}>men's clothing</option>
                    <option value="option5" onClick={(e)=>{handleOption("women's clothing")}}>women's clothing</option>
                </div>
            </div>
            <div className='searchbar'>
                <input type='text' name='search' placeholder='Search this blog'/>
                <img src='./icons/search_icon.svg'/>
            </div>
            <div className='language'>
                <div className='text'>English</div> 
                <img src='/icons/dropdown_icon.svg'/>
            </div>
            <div className='cart-section'>
                <img src='./icons/cart_icon.svg'/>
                <div>CART</div>
            </div>
            <div className='profile-section'>
                <img src='./icons/profile_icon.svg'/>
                <div>Profile</div>
            </div>
        </div>
    )
}

export default TaskBar;