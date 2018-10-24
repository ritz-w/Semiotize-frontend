import React from 'react'
import "./Spinner.scss"

const Spinner = (props) => {
    return (
        <div class="wrapper">
            <div class="flex-center">
                <div class="content">
                    <svg className="spinner-canvas" viewBox="0 0 800 300">

                        <symbol id="s-text">
                            <text textAnchor="middle" x="50%" y="50%" dy=".35em">
                                {props.message}
                            </text>
                        </symbol>

                <use xlinkHref="#s-text" class="text"></use>
                <use xlinkHref="#s-text" class="text"></use>
                <use xlinkHref="#s-text" class="text"></use>
                <use xlinkHref="#s-text" class="text"></use>
                <use xlinkHref="#s-text" class="text"></use>


                    </svg>
                </div>
            </div>
    </div>

    )
}

export default Spinner;