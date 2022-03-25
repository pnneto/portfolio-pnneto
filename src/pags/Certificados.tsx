import CertificadosGraduação from 'components/certifiedPags/certifiedGraduacao';
import CertificadosPosGraduação from 'components/certifiedPags/certifiedPosGraducao';
import CursoUxUsabilidade from 'components/certifiedPags/cursos/UxUsabilidade';
import CursoUxStrategy from 'components/certifiedPags/cursos/UxStrategy';
import CursoUxProduto from 'components/certifiedPags/cursos/UxProduto';
import CursoDesignSystem from 'components/certifiedPags/cursos/DesignSystem';
import CursoFigmaDesign from 'components/certifiedPags/cursos/FigmaDesign';
import CursoFigmaComponentes from 'components/certifiedPags/cursos/FigmaComponentes';

export default function Certificados() {

    return (
        <>
            <div className="container mt-5 mb-1">

                <div className="row d-flex mt-5 mb-4 pb-5">
                    <div className="col-4 col-lg-8">
                        <h1 className="pt-1">Certificados</h1>
                    </div>
                </div>

                {/* <!-- CERITICADO GRADUAÇÃO --> */}
                <CertificadosGraduação />
                <CertificadosPosGraduação />

                {/* <!-- CERTIFICADO CURSOS --> */}
                <div className="rounded mb-3">
                    <div className="row d-flex mt-5 mb-3">
                        <div className="col-4 col-lg-8">
                            <h4 className="pt-1">Cursos</h4>
                        </div>
                    </div>
                    <div className="row card-centralizado">
                        <CursoUxUsabilidade />
                        <CursoUxStrategy />
                        <CursoUxProduto/>
                        <CursoDesignSystem/>
                        <CursoFigmaDesign/>
                        <CursoFigmaComponentes/>
                    </div>
                </div>
            </div>

        </>
    )
}