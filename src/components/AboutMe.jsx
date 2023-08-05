import { useState, useEffect } from 'react'
import SpotifyLogo from './SpotifyLogo'
import PlayingAnimation from './PlayingAnimation'
import getNowPlayingItem from './SpotifyAPI'

const AboutMe = (props) => {
    const [loading, setLoading] = useState(true)
    const [result, setResult] = useState({})
    useEffect(() => {
        Promise.all([
            getNowPlayingItem(
                props.client_id,
                props.client_secret,
                props.refresh_token
            ),
        ]).then((results) => {
            setResult(results[0])
            setLoading(false)
        })
    })

    return (
        <div
            id="about"
            className="min-h-screen pt-20 bg-white bg-opacity-10 text-white font-raleway"
        >
            <div classname="border-4 border-dashed border-gray-200 rounded-lg">
                <div className="px-8 text-6xl text-center">About Me</div>

                <div className="flex flex-wrap md:flex-nowrap">
                    <div className="w-full md:w-1/2 m-8 md:p-20 md:mt-8">
                        <div className="w-60">
                            <img
                                src="/images/formal spongebob.jpg"
                                className="w-20% h-10%"
                                alt="Formal Spongebob"
                            />
                            Brey
                            <br />
                            breyxmarie
                            <hr />
                            <div>
                                {loading && <p>Loading...</p>}
                                {!loading &&
                                    !isPlaying(
                                        <div>
                                            <SpotifyLogo />
                                            <span>Currently offline"</span>
                                        </div>
                                    )}
                                {!loading &&
                                    isPlaying(
                                        <div>
                                            <div>
                                                <SpotifyLogo />
                                                <span>Now playing</span>
                                            </div>
                                            <div>
                                                <img
                                                    src={result.albumImageUrl}
                                                    alt={`${result.title} album art`}
                                                />
                                                <PlayingAnimation />
                                                <a
                                                    href={result.songUrl}
                                                    target="_blank"
                                                >
                                                    {result.title}
                                                </a>
                                                <p>{result.artist}</p>
                                            </div>
                                        </div>
                                    )}
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 m-8 md:pt-20">
                        <p>
                            Hello, My Name is Aubrey Marie Quiatchon. As an
                            aspiring developer, I thrive on turning ideas into
                            functional and innovative software solutions. With a
                            strong foundation in programming languages such as
                            Java, C#, C++, Python and Javascript, I constantly
                            seek to expand my knowledge and skills to stay at
                            the forefront of technological advancements. Coding
                            is not just a hobby for me; it's a way of expressing
                            creativity and problem-solving. I enjoy tackling
                            complex challenges and finding elegant solutions
                            through clean, efficient code. The thrill of seeing
                            my ideas come to life and the satisfaction of
                            building something from scratch drive me to
                            constantly improve my coding abilities.
                            <br />
                            In addition to coding, another essential ingredient
                            in my daily routine is coffee. It's not just a
                            source of caffeine; it's a ritual that fuels my
                            focus and energizes my mind. Whether it's a robust
                            espresso or a perfectly brewed pour-over, the aroma
                            and taste of coffee inspire me and enhance my
                            productivity..
                            <br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
