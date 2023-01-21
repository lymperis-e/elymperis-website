import ProjectItem from '../components/Projects/ProjectItem'

function Projects() {


    return (
        <>

            <div id="project-container" style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                width: "80vw",
                alignItems: "center",
                justifyContent: "center"
            }}>

                <ProjectItem />

            </div>

            
        </>
    )
}

export default Projects