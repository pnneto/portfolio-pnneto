import diploma from 'assets/certified/componentes/componentes.png'
import { ReactComponent as FigmaComponentes } from 'assets/certified/componentes/figma-componentes-interface.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function CursoFigmaComponentes() {
    return (
        <>
            {/* <!-- CERITICADO Curso --> */}
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-4 card-centralizado">
                <div className="card cards" style={{ width: "12rem", height: "17rem" }}>
                    <div className="card-body" style={{ background: "#151515" }}>
                        <button className="btn" data-bs-toggle="modal" data-bs-target="#FigmaComponentes" >
                            <div className="text-center mb-2">
                                <FigmaComponentes width={50} />
                            </div>
                            <div className="text-center" style={{ opacity: "0.5" }}>
                                Alura
                            </div>
                            <div className="text-center card-titulo texto-corrido-bold m-2 ">
                                Figma
                            </div>
                            <div className="text-center" style={{ opacity: "0.5" }}>
                                Componentes da interface
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* <!-- Modal Graduação --> */}
            <div className="modal fade" id="FigmaComponentes" tabIndex={-1} aria-labelledby="FigmaComponentes" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content" style={{ background: "#121212" }}>
                        <div className="modal-header d-flex justify-content-end">
                            <Link to={''}>
                                <FontAwesomeIcon icon={faXmark} data-bs-dismiss="modal" aria-label="Close" className="fs-2" />
                            </Link>                        </div>
                        <div className="modal-body  d-flex justify-content-center">
                            <img className="d-block w-100" src={diploma} alt="Diploma Figma" />
                        </div>
                    </div>
                </div>
            </div>

        </>)
}
