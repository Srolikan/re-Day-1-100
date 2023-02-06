import React from 'react'
import './sizebar.css';

function Sizebar({done}) {
    const [style, setStyle] = React.useState();
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
    return (
        <div className='size'>
            <p>01</p>
            <div className='sizebar' id='sizebar'>
                <div className='done-sizebar' style={style}>
                    {done}
                </div>
            </div>
            <p>06</p>
        </div>
    )
}

export default Sizebar