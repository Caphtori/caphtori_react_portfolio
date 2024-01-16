import avatar from '../assets/images/caphtori_avi.png'

function About(){
    return(
        <section className="about-section">
            <div className="avi-card">
                <img src={img} alt="Caphtori's Avatar: a meatball sighing above the ocean." />
            </div>
            <div className='about-box'>
                <h2>About Me</h2>
                <p>
                    I'm a guy who likes to buckle down and get things done.  Over the past ten years, I've worked as a writer, executive, and now a fullstack software developer.
                    Most recently, I acted as the Director of Monetization for the largest reward currency exchange in the world.
                </p>
                <p>I drew the meatball myself.</p>
            </div>
        </section>
    );
};

export default About;