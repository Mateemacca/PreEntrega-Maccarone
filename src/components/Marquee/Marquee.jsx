import React from 'react'
import { useEffect } from 'react';
import './Marquee.css'
import { RiScissorsFill } from 'react-icons/ri';
export default function Marquee() {
    //funcion de marquee extraida de un proyecto de js nativo para reproducir la animacion de la marquee
    useEffect(() => {
        const setMarqueeElements = () => {
          const contenidoMarquee = document.querySelector("ul.marquee-content");
          if (contenidoMarquee) {
            const root = document.documentElement;
            const elementosMostradosMarquee = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
    
            root.style.setProperty("--marquee-elements", contenidoMarquee.children.length);
    
            for (let i = 0; i < elementosMostradosMarquee; i++) {
              contenidoMarquee.appendChild(contenidoMarquee.children[i].cloneNode(true));
            }
          }
        };
    
        setMarqueeElements();
      }, []);
  return (
    <div className="marquee bg-[#f6f6f6] text-black dark:text-white dark:bg-[#111111] mt-[-5rem]">
    <ul className="marquee-content">
        <li className="blest-cursive">Blest</li>
        <li>
            <img className="pray-icon" src="imgs/logoblestvectorizadoahorasi.png" alt=""/>
            {/* <img className="pray-icon dark:hidden" src="imgs/pray-black.png" alt=""/> */}
        </li>
        <li className="blest-cursive">Blest</li>
        <li><i className="ri-scissors-fill"><RiScissorsFill/></i></li>
        <li className="blest-cursive">Blest</li>
        <li>
        <img className="pray-icon" src="imgs/logoblestvectorizadoahorasi.png" alt=""/>
        </li>
        <li className="blest-cursive">Blest</li>
        <li><i className="ri-scissors-fill"><RiScissorsFill/></i></li>
        <li className="blest-cursive">Blest</li>
        <li>
        <img className="pray-icon" src="imgs/logoblestvectorizadoahorasi.png" alt=""/>
        </li>
        <li className="blest-cursive">Blest</li>
        <li><i className="ri-scissors-fill"><RiScissorsFill/></i></li>
    </ul>
  </div>
  )
}
