import React from 'react' ;
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';


const Adress = () => {
    return (
        <>
            <div>
            <h1> Adress</h1>
                <div>
                    <FaHome /> :  Thiaroye Gare Hambdalaye 4 or  Almadies/Ngor Extension 
                </div>
                <div>
                    <FaLinkedin /> :   https://www.linkedin.com/in/assane-ndiaye-330723219/
                </div>
                <div>
                    <FaMailBulk />  :  yahassane.learn@gmail.com
                </div>
                <div>
                    <FaPhoneSquareAlt /> :  77 165 46 22
                </div>
                <div>
                    <FaWhatsappSquare /> :  77 165 46 22
                </div>
                               
            </div>
        </>
    )
}
export default Adress ;