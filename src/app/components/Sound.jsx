'use client'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useRef } from "react";
import { createPortal } from "react-dom";
import { set } from "react-hook-form";

const Modal = ({ onClose, toggle}) => {
    return createPortal(
        <div className="fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-background/20 border border-accent/30 border-solide backdro-blur-[6px]
            py-8 px-6 xd:px-10 sm:px-16 rounder shadow-glass-inset text-center space-y-8">
                
                <p className="font-light">Want to play background music?</p>
                <div className="flex items-center justify-center space-x-4">
                    <button onClick={toggle} className="px-4 py-2 border border-accent/30 border-solid hover-shadow-glass-sm rounder mr-2">Yes</button>
                    <button onClick={onClose} className="px-4 py-2 border border-accent/30 border-solid hover-shadow-glass-sm rounder mr-2">No</button>
                </div>
            </div>
            </div>
        ,
        document.getElementById('by-modal')
    )

}

const Sound = () => {
    
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showModal, setShowModal] = useState(false);

    
    const handleFirstUserInteraction = () => {
         const musicConsent = localStorage.getItem('musicConsent')
         if(musicConsent === 'true' && !isPlaying){
            if(audioRef.current){
                audioRef.current.play()
            setIsPlaying(true)}
            
            ['click', 'keydown', 'touchstart'].forEach(event => {
                    document.removeEventListener(event, handleFirstUserInteraction)
                }, [])

    }
}
    useEffect(() => {
       
        const consent = localStorage.getItem('musicConsent')
        const consentTime = localStorage.getItem('consentTime')

        if(consent && consentTime && new Date(consentTime).getTime() + 3*24*60*60*1000 > new Date()){
            setIsPlaying(consent === 'true')
            if(consent === 'true'){
                ['click', 'keydown', 'touchstart'].forEach(event => {
                    document.addEventListener(event, handleFirstUserInteraction)
                })
        }
        }else{
            setShowModal(true)
            
        }
}, [])
        
            
    const toggle = () => {

      const newState = !isPlaying;
        setIsPlaying(!isPlaying)
        
        newState ? audioRef.current.play() : audioRef.current.pause();
        localStorage.setItem('musicConsent', String(newState));
        localStorage.setItem('consentTime', new Date().toISOString());
        setShowModal(false)
    }

    return (
        <div className="fixed top-4 right-2.5 xs:right-4 z-50 group">


            {
                showModal && 
                <Modal onClose={() => setShowModal(false)} toggle={toggle} />
            }

            <audio ref = {audioRef}  loop>
                <source src= {'/audio/californication.mp4'} type= {'audio/mpeg'}/>
                Your browser does not support the audio element.
            </audio>
            <motion.button 
            onClick={toggle}

initial = {{scale: 0}}
animate = {{scale: 1}}
transition={{delay: 1}}

    href = {'/'}
    className="w-10 h-10 xs:w-14 xs:h-14 rounded-full text-foreground flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 
    bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset
    hover:shadow-glass-sm"
        aria-label = {'Sound Control Button'}
         name = {'Sound Control Button'}>
            
            {   isPlaying ?
            <Volume2 className="w-full h-full text-foreground group-hover:text-accent" strokeWidth={1.5} /> :
            <VolumeX className="w-full h-full text-foreground group-hover:text-accent" strokeWidth={1.5} /> 


            }
           
            

          
        </motion.button>
        </div>
    )
}
export default Sound