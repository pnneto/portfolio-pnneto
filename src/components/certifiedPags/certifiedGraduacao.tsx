import unip from 'assets/img/Unip.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function CertificadosGraduação() {
    return (
        <>
            {/* <!-- CERITICADO GRADUAÇÃO --> */}
            <div className="row d-flex mt-2 mb-3">
                <div className="col-4 col-lg-8">
                    <h4 className="pt-1">Graduação</h4>
                </div>
            </div>
            <div className="row card-centralizado">
                <div className="col-8 col-sm-6 col-md-4 col-lg-2 mb-4">
                    <img className="rounded w-100" src={unip} alt="Unip" />

                </div>
                <div className="col-lg-8 col-md-4 col-sm-12 mt-3">
                    <div className="d-flex justify-content-left card-centralizado">
                        <h4 className="texto-grande mb-2">
                            Bacharelado
                        </h4>
                    </div>
                    <div className="d-flex justify-content-left card-centralizado">
                        <h2 className="" style={{ color: "#008AFF" }}>
                            Ciência da Computação
                        </h2>
                    </div>
                    <div className="d-flex justify-content-left card-centralizado">
                        <h4 className="texto-grande mb-2">
                            2016-2019
                        </h4>
                    </div>
                    <div className="pt-2">
                        <button className="btn btn-principal my-2 my-sm-0" data-bs-toggle="modal" data-bs-target="#Unip">
                            Ver meu diploma
                        </button>
                    </div>
                </div>
            </div>

            {/* <!-- Modal Graduação --> */}
            <div className="modal fade" id="Unip" aria-labelledby="Unip" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content" style={{ background: "#121212" }}>
                        <div className="modal-header d-flex justify-content-end">
                            <FontAwesomeIcon  icon={faXmark} data-bs-dismiss="modal" aria-label="Close" className="fs-2" />
                        </div>
                        <div className="modal-body  d-flex justify-content-center">
                            Teste
                        </div>
                    </div>
                </div>
            </div>

        </>)
}
