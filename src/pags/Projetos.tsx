import { ProjectsList } from 'constantsObjects/projects';

export default function Projetos() {
    const projects = ProjectsList.filter(e => e.id >= 0).reverse();

    return (
        <>
        
        <div className="container-fluid p-3">
            <div className="container mt-4 mb-1">
                {/* <!-- TITULO --> */}
                <div className="row d-flex mt-5 mb-4 pb-5">
                    <div className="col-4 col-lg-8">
                        <h1 className="pt-1 titulo-pag">Projetos</h1>
                    </div>
                </div>

                {/* <!-- PROJETOS --> */}
                <div className="row mt-3">

                    {/* PROJETOS PRONTOS */}
                    {projects.map( project => (
                        <div key={project.id} className="col-sm-12 col-md-6 mb-4">
                            <div className="ml-5 ml-auto borda-shadow">
                                {project.foto}
                            </div>
                            <div className="mt-3">
                                <h4>{project.titulo}</h4>
                                <p style={{ opacity: "0.5" }} className="texto-corrido">{project.paragrafo}</p>
                                <div className="">
                                    <a className="btn btn-principal my-2 my-sm-0" target="_blank" rel="noreferrer" href={project.link}>
                                        Projeto completo
                                    </a>
                                </div>
                            </div>
                        </div>))}

                </div>
            </div>
        </div>

        </>
    )
}