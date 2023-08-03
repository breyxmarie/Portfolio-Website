import { useState, useEffect } from 'react'

const CodeProjects = () => {
    return (
        <div
            id="project"
            className="bg-white bg-opacity-10 text-white font-mono pt-20"
        >
            <div className="p-8 text-6xl ">
                <center>Projects</center>
            </div>

            <div className="flex flex-col lg:flex-row mx-4 lg:mx-20">
                <div className="bg-[#041A40] px-10 pb-10 w-full rounded-3xl lg:w-1/2 lg:mr-5">
                    <center>
                        <img
                            src="/images/pin.png"
                            className="mx-10 pt-1"
                            width="20"
                            height="20"
                        />
                        <div className="mt-3 text-xl">Vending Machine</div>
                    </center>
                    <div className="flex flex-row pt-8 lg:text-base text-sm">
                        <div className="w-full lg:w-1/2 py-2 ProjDesc">
                            <br />
                            <br />
                            <br />
                            &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;Coming Soon
                            <br />
                            <br />
                            <br />
                            <br />
                            <div className="flex">
                                <a href="">
                                    <button class="bg-red-700 hover:bg-red-900 text-white font-bold py-1 mx-2 px-2 rounded">
                                        View Demo
                                    </button>
                                </a>
                                <a href="">
                                    <button class="bg-black hover:bg-gray-700 text-white font-bold py-1 mx-0 px-2 rounded">
                                        View Codes
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <img
                                className="w-full"
                                src="/images/coffee Spongebob.jpg"
                                width="50%"
                                height="30%"
                            />
                        </div>
                    </div>
                </div>

                <div className="bg-[#041A40] ml-0 lg:ml-5 mt-5 lg:mt-0 px-10 pb-10 w-full lg:w-1/2 rounded-3xl">
                    <center>
                        <img
                            src="/images/pin.png"
                            className="mx-10 pt-1"
                            width="20"
                            height="20"
                        />
                        <div className="mt-3 text-xl">Coming Soon</div>
                    </center>
                    <div className="flex flex-row pt-8 lg:text-base text-sm">
                        <div className="w-full lg:w-1/2 py-2 ProjDesc">
                            <br />
                            <br />
                            <br />
                            &nbsp; &nbsp; &nbsp; &nbsp;Coming Soon
                            <br />
                            <br />
                            <br />
                            <br />
                            <div className="flex">
                                <a href="">
                                    <button class="bg-red-700 hover:bg-red-900 text-white font-bold py-1 mx-2 px-2 rounded">
                                        View Demo
                                    </button>
                                </a>
                                <a href="">
                                    <button class="bg-black hover:bg-gray-700 text-white font-bold py-1 mx-0 px-2 rounded">
                                        View Codes
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <img
                                className="w-full"
                                src="/images/coffee Spongebob.jpg"
                                width="50%"
                                height="30%"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col py-10 lg:flex-row mx-4 lg:mx-20">
                <div className="bg-[#041A40] px-10 pb-10 w-full rounded-3xl lg:w-1/2 lg:mr-5">
                    <center>
                        <img
                            src="/images/pin.png"
                            className="mx-10 pt-1"
                            width="20"
                            height="20"
                        />
                        <div className="mt-3 text-xl">Coming Soon</div>
                    </center>
                    <div className="flex flex-row pt-8 lg:text-base text-sm">
                        <div className="w-full lg:w-1/2 py-2 ProjDesc">
                            <br />
                            <br />
                            <br />
                            Coming Soon
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <img
                                className="w-full"
                                src="/images/coffee Spongebob.jpg"
                                width="50%"
                                height="30%"
                            />
                        </div>
                    </div>
                </div>

                <div className="bg-[#041A40] ml-0 lg:ml-5 mt-5 lg:mt-0 px-10 pb-10 w-full lg:w-1/2 rounded-3xl">
                    <center>
                        <img
                            src="/images/pin.png"
                            className="mx-10 pt-1"
                            width="20"
                            height="20"
                        />
                        <div className="mt-3 text-xl">Coming Soon</div>
                    </center>
                    <div className="flex flex-row pt-8 lg:text-base text-sm">
                        <div className="w-full lg:w-1/2 py-2 ProjDesc">
                            <br />
                            <br />
                            <br />
                            Coming Soon
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <img
                                className="w-full"
                                src="/images/coffee Spongebob.jpg"
                                width="50%"
                                height="30%"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CodeProjects
