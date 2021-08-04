import React from 'react'
// import './Slider.scss'

const Slider = (props) => {
    const{icon,onClick}=props
    return (
        <div>
            <div onClick={onClick} 
            className="bg-white cursor-pointer h-8 md:h-16 w-8 md:w-16 rounded-full text-black mr-2 md:mr-4 p-1 transition-all duration-300 flex justify-center items-center hover:bg-red-700 transform scale-105 "
            //  className="slider"
             >
             {icon}                    
            </div>
        </div>
        
    )
}

export default Slider
