import diploma from 'assets/certified/Componentes.png'
import { ReactComponent as FigmaComponentes } from 'assets/img/figma-componentes-interface.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function CursoFigmaComponentes() {
    return (
        <>
            {/* <!-- CERITICADO Curso --> */}
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 card-centralizado">
                <div className="card" style={{ width: "12rem", height: "17rem" }}>
                    <div className="card-body" style={{ background: "#151515" }}>
                        <a className="btn" data-bs-toggle="modal" data-bs-target="#FigmaComponentes" >
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
                        </a>
                    </div>
                </div>
            </div>

            {/* <!-- Modal Graduação --> */}
            <div className="modal fade" id="FigmaComponentes" tabIndex={-1} aria-labelledby="FigmaComponentes" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content" style={{ background: "#121212" }}>
                        <div className="modal-header d-flex justify-content-end">
                            <FontAwesomeIcon icon={faXmark} data-bs-dismiss="modal" aria-label="Close" className="fs-2" />
                        </div>
                        <div className="modal-body  d-flex justify-content-center">
                            <img className="d-block w-100" src={diploma} alt="Diploma Figma" />
                        </div>
                    </div>
                </div>
            </div>

        </>)
}
