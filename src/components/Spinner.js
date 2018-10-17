import React from 'react'
import "./Spinner.scss"

const Spinner = (props) => {
    return (
        <div class="wrapper">
        <div class="flex-center">
            <div class="spin-container">
                <div class="container-dot dot-a">
                <div class="dot"></div>
                </div>

                <div class="container-dot dot-b">
                <div class="dot"></div>
                </div>
                <div class="container-dot dot-c">
                <div class="dot"></div>
                </div>

                <div class="container-dot dot-d">
                <div class="dot"></div>
                </div>

                <div class="container-dot dot-e">
                <div class="dot"></div>
                </div>

                <div class="container-dot dot-f">
                <div class="dot"></div>
                </div>
                <div class="container-dot dot-g">
                <div class="dot"></div>
                </div>

                <div class="container-dot dot-h">
                <div class="dot"></div>
                </div>
            </div>
        </div>
        <p class="loading-text">{props.message}</p>
    </div>

    )
}

export default Spinner;