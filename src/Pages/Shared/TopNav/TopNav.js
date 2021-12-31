import React, { useState } from 'react';
import './TopNav.css'

const TopNav = () => {
    const [topNav, setTopNav] = useState(true);
    const handleTopNavCross = () => {
        setTopNav(!topNav)
        console.log('clicked')
    }

    return (
        <div className="top-div-nav">
            {topNav && <div className='top-nav d-flex justify-content-between align-items-center'>
                <p>Due to the <span>COVID 19</span> epidemic, orders may be processed with a slight delay</p>
                <i onClick={handleTopNavCross} class="fas fa-times"></i>
            </div>}
        </div>
    );
};

export default TopNav;