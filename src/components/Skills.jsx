import { useState, useEffect } from 'react'

const Skills = () => {
    return (
        <div id="skill" className="h-screen text-white font-raleway pt-20">
            <div className="p-8 text-6xl">
                <center>Skills</center>
            </div>

            <div className="flex flex-row basis-1/2 px-40">
                <div className="flex flex-row basis-1/2 text-4xl ">
                    <div className="basis-1/8 pt-4 pr-20 mr-5">Java</div>
                    <div className="basis-1/2">
                        <img
                            src="/images/coffee.png"
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className="basis-1/2">
                        <img
                            src="/images/coffee.png"
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className="basis-1/2">
                        <img
                            src="/images/coffee.png"
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className="basis-1/2">
                        <img
                            src="/images/coffee.png"
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className="basis-1/2"></div>
                </div>

                <div className="flex flex-row basis-1/2">
                    <div className="basis-1/2 pt-4 pr-6 text-4xl">Figma</div>
                    <div className="basis-1/2">
                        <img
                            src="/images/coffee.png"
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className="basis-1/2"></div>
                    <div className="basis-1/2"></div>
                    <div className="basis-1/2"></div>
                    <div className="basis-1/2"></div>
                </div>
            </div>

            <div className="flex flex-row basis-1/2 px-40">
                <div className="flex flex-row basis-1/2 ">
                    <div className="basis-1/8 pt-4 pr-10 text-4xl ">Python</div>
                    <div className="basis-1/2 ml-5">
                        <img
                            src="/images/coffee.png"
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className="basis-1/2">
                        <img
                            src="/images/coffee.png"
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className="basis-1/2">
                        <img
                            src="/images/coffee.png"
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className="basis-1/2"></div>
                    <div className="basis-1/2"></div>
                </div>

                <div className="flex flex-row basis-1/2">
                    <div className="basis-1/2 pt-4 pr-6 text-4xl">SQL</div>
                    <div className="basis-1/2">
                        <img
                            src="/images/coffee.png"
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className="basis-1/2">
                        <img
                            src="/images/coffee.png"
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className="basis-1/2">
                        <img
                            src="/images/coffee.png"
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className="basis-1/2">
                        <img
                            src="/images/coffee.png"
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className="basis-1/2"></div>
                </div>
            </div>

            <div className="flex flex-row basis-1/2 px-40">
                <div className="flex flex-row basis-1/2 ">
                    <div className="basis-1/8 pt-4 pr-10 text-4xl ">C++</div>
                    <div className="basis-1/2 ml-20">
                        <img
                            src="/images/coffee.png"
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className="basis-1/2">
                        <img
                            src="/images/coffee.png"
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className="basis-1/2">
                        <img
                            src="/images/coffee.png"
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className="basis-1/2"></div>
                    <div className="basis-1/2"></div>
                </div>

                <div className="flex flex-row basis-1/2">
                    <div className="basis-1/2 pt-4 pr-6 text-4xl">HTML</div>
                    <div className="basis-1/2">
                        <img
                            src="/images/coffee.png"
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className="basis-1/2">
                        <img
                            src="/images/coffee.png"
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className="basis-1/2">
                        <img
                            src="/images/coffee.png"
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className="basis-1/2"></div>
                    <div className="basis-1/2"></div>
                </div>
            </div>

            <div className="flex flex-row basis-1/2 px-40">
                <div className="flex flex-row basis-1/2 ">
                    <div className="basis-1/8 pt-4 pr-24 text-4xl ">C#</div>
                    <div className="basis-1/2 ml-10">
                        <img
                            src="/images/coffee.png"
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className="basis-1/2">
                        <img
                            src="/images/coffee.png"
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className="basis-1/2">
                        <img
                            src="/images/coffee.png"
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className="basis-1/2"></div>
                    <div className="basis-1/2"></div>
                </div>

                <div className="flex flex-row basis-1/2">
                    <div className="basis-1/2 pt-4 pr-6 text-4xl">CSS</div>
                    <div className="basis-1/2">
                        <img
                            src="/images/coffee.png"
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className="basis-1/2">
                        <img
                            src="/images/coffee.png"
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className="basis-1/2"></div>
                    <div className="basis-1/2"></div>
                    <div className="basis-1/2"></div>
                </div>
            </div>

            <div className="flex flex-row basis-1/2 px-40">
                <div className="flex flex-row basis-1/2">
                    <div className="basis-1/8 pt-4 text-4xl mr-5">
                        Java
                        <br />
                        script
                    </div>
                    <div className="basis-1/2 ml-9">
                        <img
                            src="/images/coffee.png"
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className="basis-1/2">
                        <img
                            src="/images/coffee.png"
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className="basis-1/2">
                        <img
                            src="/images/coffee.png"
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className="basis-1/2"></div>
                    <div className="basis-1/2"></div>
                </div>

                <div className="flex flex-row basis-1/2">
                    <div className="basis-1/2 pt-4 pr-6 text-4xl"></div>
                    <div className="basis-1/2"></div>
                    <div className="basis-1/2"></div>
                    <div className="basis-1/2"></div>
                    <div className="basis-1/2"></div>
                    <div className="basis-1/2"></div>
                </div>
            </div>
        </div>
    )
}

export default Skills
