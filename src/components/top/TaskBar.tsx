import './../../styles/taskbar.css'
const TaskBar = () => {
    return(
        <div className="taskbar">
            <div className="menu_icon">
                <img src='/icons/menu_icon.svg' />
            </div>
            <div className='category'>
                <div className='text'>All Category</div>
                <img src='/icons/dropdown_icon.svg'/>
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