import ProjectItem from '../components/Projects/ProjectItem'

function Projects() {


    document.body.style.backgroundColor = "antiquewhite";


    return (
        <>

            <div id="project-container" style={{
                marginTop: "200px",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                width: "80vw",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff0",
                borderRadius: "7px",
                color: "#252525",
                border: "solid 1px #fbb442",
                backdropFilter: "blur(3px)"
            }}>


                <h1
                    style={{
                        borderBottom: "solid 1px #faebd721",
                        marginBottom: "8px",
                        marginTop: "200px"
                    }}
                >
                    &lt;/&gt; FEATURED PROJECTS

                </h1>

                <ProjectItem />
             




            </div>


        </>
    )
}

export default Projects