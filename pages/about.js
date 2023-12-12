import Image from "next/image";
import styles from "@/styles/About.module.css"
import {useState} from "react";

export default function About() {
    const [fontSize, setFontSize]= useState (2)
    return (
        <>
        <h1>About Me</h1>
        <p className={styles.greenColor}>
            This is where I will fill in an about me section
        </p>
        {/* <img src = "/redshell.png" alt ="redshell" /> */}

        <style jsx>{`
        .fontSize {
            font-size: ${fontSize}rem;
        }
        `}    
        </style>
        <Image
        src = "/redshell.png"
        alt ="redshell"
        width = {300}
        height ={200}
        />
        <button onClick={()=> setFontSize(fontSize + 1)} >Click Me!</button>
        </>
    )
}