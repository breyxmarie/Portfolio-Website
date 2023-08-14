import { useState, useEffect } from 'react'

const Contact = () => {
    return (
        <footer className="w-full bg-white bg-opacity-10 p-8 text-white font-raleway">
            <center>
                <h2 className="text-3xl">Contact Me</h2>

                <h2 className="text-lg">Aubrey Marie Quiatchon</h2>
                <br />
                <a
                    href="https://www.linkedin.com/in/aubrey-marie-quiatchon-447182287/"
                    target="_blank"
                >
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        LinkedIn
                    </button>{' '}
                </a>
                <a href="https://github.com/breyxmarie" target="_blank">
                    <button class="bg-black hover:bg-gray-700 text-white font-bold py-2 mx-6 px-4 rounded">
                        Github
                    </button>{' '}
                </a>
                <a href="" target="_blank">
                    <button class="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">
                        Email
                    </button>{' '}
                </a>
            </center>
        </footer>
    )
}

export default Contact
