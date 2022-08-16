import { Typography } from '@mui/material'
import React from 'react'
import "../styles/homePage.css"


const HomeHeadSection = () => {
   
    return (
        <div className="home-head">
            <div>
                <img className='book-background-image' src="../images/homeHeadSection.jpg" alt="book-background" />
            </div>
            <div className="book-head-text">
                <div className="animated-title">
                    <div className="text-top">
                        <div>
                            <Typography variant='h1'>BTK AKADEMİ</Typography>
                            <Typography variant='h1'>INNOVA BİLİŞİM</Typography>
                        </div>
                    </div>
                    <div className="text-bottom">
                        <Typography className="text-bottom-info" variant='h3'>JAVA & REACT BOOTCAMP</Typography>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HomeHeadSection