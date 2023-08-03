import { useState, useEffect } from 'react'
import Typewriter from 'typewriter-effect'
import React from 'react'
import Particle from '../Particle'

const Home = () => {
    return (
        <div className="max-w-7xl h-screen mx-auto py-0 sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}
            <div className="px-4 py-0 rounded-lg sm:px-0">
                <div className="">
                    <div className="flex flex-col sm:flex-row h-screen text-white text-4xl font-raleway">
                        <Particle />
                        <div className="sm:basis-1/2 py-0 m-auto text-center sm:text-left">
                            <center>
                                <h1>Hello I'm Aubrey</h1>
                                <div className="flex flex-row items-center justify-center">
                                    <div className="pl-2 sm:pl-0">
                                        An aspiring
                                    </div>
                                    <div className="pl-2">
                                        <Typewriter
                                            options={{
                                                strings: ['Developer'],
                                                autoStart: true,

                                                loop: true,
                                            }}
                                        />
                                    </div>
                                </div>

                                <br />
                                <div className="flex justify-center">
                                    <img
                                        className="justify-center"
                                        src="/images/duck.png"
                                        width="50"
                                        height="50"
                                    />
                                    <img
                                        className="justify-center mx-10"
                                        src="/images/duck.png"
                                        width="50"
                                        height="50"
                                    />
                                    <img
                                        className="justify-center"
                                        src="/images/duck.png"
                                        width="50"
                                        height="50"
                                    />
                                </div>
                            </center>
                        </div>
                        <div className="sm:basis-1/2 pt-10 sm:pt-40 ">
                            <center>
                                <img
                                    src="/random.png"
                                    width="70%"
                                    height="50%"
                                />
                            </center>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- /End replace --> */}
        </div>
    )
}

export default Home
