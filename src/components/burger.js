import React from 'react'
import '../styles/burger.scss'

function Burger({ prop1, prop2, onClick , classSet}) {
    return (
        <div onClick={onClick} className={`
                                    burger
                                    ${classSet === 0 ? 'active' : ''}
         `}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
    );
}

export default Burger