// @ts-ignore
import profilePicture from '../assets/profile.png'
import '../stylesheets/App.css'

function Home() {
    return (
        <div className="App">
            <br/>
            <br/>

            <img src={profilePicture} className="profile-picture" alt="profile-picture" />
            <h1>Hey! I'm JamieIsGeek :D</h1>

            <div className="info">
                <p> Hey! My name is Jamie! I'm a developer from the UK. </p>

                <p> I currently work at <a href="https://discord.gg/wilbur" target="_blank">The WilburSoot Discord</a> and <a href="https://sootmc.net" target="_blank">SootMC</a>, as well as working on my own projects! </p>
                <br/>
                <p> This is my developer portfolio! Here you can find my contact info, projects I have worked on and more! </p>
            </div>

            <br/>
            <br/>

            <div className="buttons">
                <button className="contact">
                    <a href="contact">Contact Me</a>
                </button>

                <button className="github">
                    <a href="https://github.com/JamieOnSootMC/" target="_blank">GitHub</a>
                </button>

                <button className="discord">
                    <a href="https://discord.com/users/338063500616138752" target="_blank">Discord</a>
                </button>
            </div>
        </div>
    )
}

export default Home
