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

                <div className="flex flex-wrap md:flex-nowrap rounded-lg">
                    <div className="w-full md:w-1/2 m-8 md:p-20 md:mt-0">
                        <div className="w-120 bg-[#041A40]">
                            <div class="relative">
                                <img
                                    src="/images/formal spongebob.jpg"
                                    className="w-full h-[250px]"
                                    alt="Formal Spongebob"
                                />
                                <img
                                    src="/images/2x2.jpg"
                                    className="outline outline-[#041A40] ml-5 rounded-full absolute top-40 w-40 "
                                    alt="Formal Spongebob"
                                />
                            </div>
                            <br />
                            <br />
                            <br />
                            <div class="m-3 bg-[#193159] rounded-sm">
                                <h1 class="ml-5">
                                    {' '}
                                    <b>Aubrey Marie Quiatchon</b>
                                    
                                </h1>

                                <h3 class="ml-5 text-sm">breyxmarie</h3>
                                <hr />
                                <h3 class="ml-5 text-sm">
                                    "to live for the hope of it all"
                                    
                                </h3>
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
                                                        src={
                                                            result.albumImageUrl
                                                        }
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
                    </div>

                    <div className="w-full md:w-1/2 mx-8 md:pt-20  p-5 rounded-lg">
                        <p class="bg-[#041A40] p-5 rounded-md">
                            Hello My name is Aubrey Marie Quiatchon.
                            <br />
                            <br />I am an aspiring developer hoping to
                            specialize in developing software and mobile
                            applications. I also aspire to have a career in data
                            analytics. Throughout my years in university I was
                            able to enhance my skills to develop a strong
                            foundationn in different programming languages such
                            as Java, C#, C++, Python and Javascript. Alongside
                            to this I was able to develop a strong foundation
                            with database managament to be specific using SQL to
                            create multiple entries, process, transactions and
                            triggeres in between tables of data in the database.
                            Coding is more than just a hobby for me it's my way
                            of expressing my creativity and problem solving
                            through the use of different logics and techniques.
                            <br />
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
