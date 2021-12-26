import React, {useState} from 'react';
import './TopNav.css'

const TopNav = () => {
    const [topNav, setTopNav] = useState("second-top-style");
    const handleTopNavCross = () => {
        setTopNav("second-top-style")
        console.log('clicked')
    }
        
    return (
        <div className={topNav}>
            <div className='top-nav d-flex justify-content-between align-items-center'>
            <p>Due to the <span>COVID 19</span> epidemic, orders may be processed with a slight delay</p>
            <i onClick={handleTopNavCross} class="fas fa-times"></i>
        </div>
        </div>
    );
};

export default TopNav;