import React, { useEffect, useState } from 'react'
import {FaTimes} from 'react-icons/fa'
import { menuData } from '../../data/MenuData'
// import Button from '../button/Button'
import './Dropdown.scss'

const Dropdown = (props) => {
    const{isOpen,toggleHandler}= props

        return (
            <div className="dropdown" animation={Number(isOpen)}>
                <div className="dropdown__icon">
                    <FaTimes onClick={toggleHandler} className="h-4 md:h-8 w-4 md:w-8" />
                </div>
                <div className="dropdown__wrapper">
                    <div className="dropdown__wrapper-menu">
                        {
                            menuData.map((item,index)=>(
                                <a className="dropdown__wrapper-link" href={item.link} key={index}>{item.title}</a>
                            ))
                        }
                    </div>
                    {/* <div className="dropdown__wrapper-btn">
                        <Button btnText="Contact Me" classes="primary small cutomWidth"/>
                    </div> */}
                </div>
               
                
            </div>
           
        )
   
    }
    

export default Dropdown
