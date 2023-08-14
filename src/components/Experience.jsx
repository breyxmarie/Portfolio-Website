import { useState, useEffect } from 'react'

const Experience = () => {
    return (
        <div
            id="experience"
            className="flex flex-col lg:flex-row mx-4 lg:mx-20 text-white font-raleway pb-10"
        >
            <div className="basis-1/2 sm:ml-20 mt-10 sm:mt-30">
                <h3 className="text-5xl">Education</h3>
                <br />
                <p className="mt-10 sm:mt-5">Mapua University 2019-Present</p>
                <p className="sm:mt-2">
                    Bachelor of Science in Information Technology{' '}
                </p>
                <p className="sm:mt-2">
                    Application Development Specialization
                </p>

                <p className="mt-10 sm:mt-5">
                    STI College Santa Rosa 2017 - 2019
                </p>
                <p className="sm:mt-2">
                    Information and Communications Technology (TVL Track){' '}
                </p>
                <p className="sm:mt-2">
                    Mobile Application and Web Development
                </p>
            </div>

            <div className="basis-1/2 mt-10 ml-20 ">
                <h3 className="text-5xl">Work Experience</h3>

                <p className="mt-10"></p>
            </div>
        </div>
    )
}

export default Experience
