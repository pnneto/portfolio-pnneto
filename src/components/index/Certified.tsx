import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import CursoUxUsabilidade from 'components/certifiedPags/Cursos/UxUsabilidade';
import CursoDesignSystem from 'components/certifiedPags/Cursos/DesignSystem';
import CursoUxProduto from 'components/certifiedPags/Cursos/UxProduto';
import CursoUxStrategy from 'components/certifiedPags/Cursos/UxStrategy';


export default function Certified() {

    return (
        <>

            <div className="container mt-5">

                <div className="row d-flex mb-3">
                    <div className="col-4 col-lg-8">
                        <h4 className="pt-1">Certificados</h4>
                    </div>
                    <div className="col-8 col-sm-8 col-lg-4 d-flex flex-row-reverse btn-secundario-xm">
                        <Link className="btn btn-secundario" to="/certificados"><span className="texto-corrido-bold">
                            Ver todos os Certificados
                            <FontAwesomeIcon icon={faAngleRight} className="ps-2" />
                        </span>
                        </Link>
                    </div>
                </div>

                {/* <!-- PROJETOS --> */}
                <div className="row">

                    <CursoUxUsabilidade />
                    <CursoUxStrategy />
                    <CursoUxProduto />
                    <CursoDesignSystem />

                </div>
            </div>

        </>
    )
}