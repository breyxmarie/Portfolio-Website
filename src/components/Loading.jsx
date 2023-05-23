import React from 'react'
import ReactLoading from 'react-loading'

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-white">
            <center>
                <img
                    className="justify-center"
                    src="src/images/Cofeeee.gif"
                    width="200"
                    height="200"
                />
                <div className="flex">
                    <h2></h2>

                    <ReactLoading
                        className="justify-center"
                        type="bubbles"
                        color="#0000FF"
                        height={50}
                        width={20}
                    />
                </div>
            </center>
        </div>
    )
}

export default Loading
