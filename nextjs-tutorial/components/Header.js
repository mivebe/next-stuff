import headerStyles from "../styles/Header.module.css"
import { useState } from "react"

const Header = () => {
    const [randColor, setRandColor] = useState("green")
    return (

        <div style={{ display: "flex", flexDirection: "row" }}>      {/*inline jsx styles*/}

            {/* module styles */}
            <h1 className={headerStyles.title}>
                <span>SOME HEADER </span>STUFF
            </h1>

            {/* global styles */}
            <button onClick={(e) => { setRandColor("#" + Math.floor(Math.random() * 16777215).toString(16)) }}>Randomize</button>

            {/* jsx styles from the style tab below */}
            <h1 className="title">
                <span>SOME OTHER </span>STUFF
            </h1>
            <style jsx>
                {`
            .title {
                color: red;
            }
            .title span{
                color: ${randColor}
            }
            `}
            </style>
        </div>
    )
}



export default Header
