import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const Particle = () => {
    const particlesInit = async (main) => {
        console.log(main)
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main)
    }
    const particlesLoaded = (container) => {
        console.log(container)
    }

    return (
        <div className="">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 60,
                    background: {
                        color: {
                            value: '#041A40',
                            //  value: '#041A40' AB372E,
                        },
                    },
                    particles: {
                        shape: {
                            type: 'circle',
                        },
                        size: {
                            random: {
                                enable: true,
                                minimumValue: 0.5,
                            },
                            value: 1.4,
                        },
                        color: {
                            value: '#f1f1f1',
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1080,
                            },
                            limit: 0,
                            value: 800,
                        },
                        opacity: {
                            animation: {
                                enable: true,
                                minimumValue: 0.05,
                                speed: 1.6,
                                sync: false,
                            },
                            random: {
                                enable: true,
                                minimumValue: 0.1,
                            },
                            value: 1,
                        },
                        interactivity: {
                            detectsOn: 'canvas',
                            events: {
                                resize: true,
                            },
                            fullScreen: { enable: false },
                        },
                    },
                }}
            />
        </div>
    )
}

export default Particle
