import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';
import { ProjectsList } from 'constantsObjects/projects';

export default function Projects() {
    const projects = ProjectsList.filter(e => e.id <= 1).reverse();

    return (
        <>
            <div className="container-fluid p-3" style={{ background: "#151515" }}>
                <div className="container mt-4 mb-1">
                <div className="row d-flex">
                        <div className="col-4 col-lg-8">
                            <h4 className="pt-1">Projetos</h4>
                        </div>
                        <div className="col-8 col-sm-8 col-lg-4 d-flex flex-row-reverse btn-secundario-xm">
                            <Link className="btn-secundario" to="/projetos">
                                <span className="texto-corrido-bold">
                                    Ver todos os Projetos
                                    <FontAwesomeIcon icon={faAngleRight} className="ps-2"/>
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="row mt-3">

                    {projects.map(project => (
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