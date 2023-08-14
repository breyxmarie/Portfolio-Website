import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import CodeProjects from './components/CodeProjects'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Particle from './Particle'
import Experience from './components/Experience'
import Contact from './components/Contact'
import NavBar from './components/NavBar'

//import { Helmet } from "react-helmet"
import React from 'react'
import Loading from './components/Loading'

//import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles";

function App() {
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <div id="particles-js">
            {loading ? (
                <Loading />
            ) : (
                <>
                    <NavBar />
                    <Home />
                    <AboutMe />
                    <Skills></Skills>
                    <CodeProjects></CodeProjects>
                    <Experience />

                    <Contact />
                </>
            )}
        </div>
    )
}

export default App
