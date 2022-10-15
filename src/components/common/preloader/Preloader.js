import React from "react";
import loading from "../../../assets/images/loading.svg";
import style from './Preloader.module.css'

let Preloader = () => {
    return (
        <div>
            <div>
                <img src={loading} className={style.PreloaderImg}/>
            </div>
        </div>

    )
}
export default Preloader;