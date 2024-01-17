function Resume(){
    return(
        <section className="resume-section">
            <h2>Proficiencies</h2>
            <a href="https://drive.google.com/file/d/17frQufSyQ_yONxtnZpgjJwCLEnYhLMIJ/view">Full Resume</a>
            <div className="skillbox">
                <h3>Front End</h3>
                <ul>
                    <li>ReactJS</li>
                    <li>JS</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>CDN Styles</li>
                </ul>
            </div>
            <div className="skillbox">
                <h3>Backend End</h3>
                <ul>
                    <li>
                        <h4>Server</h4>
                        <ul>
                            <li>API</li>
                            <i>REST</i>
                            <li>NodeJS</li>
                            <li>ExpressJS</li>
                        </ul>
                    </li>
                    <li>
                        <h4>Database</h4>
                        <ul>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Resume;