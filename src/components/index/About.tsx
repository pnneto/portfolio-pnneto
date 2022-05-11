import perfil from 'assets/img/profile/perfil2.jpg';

import { ReactComponent as Instagram } from 'assets/img/icons/instagram.svg';
import { ReactComponent as Linkedin } from 'assets/img/icons/linkedin.svg';
import { ReactComponent as Gmail } from 'assets/img/icons/gmail.svg';

import { ReactComponent as Figma } from 'assets/img/skills/Figma.svg';
import { ReactComponent as Photoshop } from 'assets/img/skills/Photoshop.svg';
import { ReactComponent as Illustrator } from 'assets/img/skills/Illustrator.svg';
import { ReactComponent as JavaScript } from 'assets/img/skills/JavaScript.svg';
import { ReactComponent as Html } from 'assets/img/skills/Html.svg';
import { ReactComponent as Css } from 'assets/img/skills/Css.svg';



export default function Home() {
    return (
        <>
        
        <div className="container-fluid rounded mt-4 pt-5 pb-5" id="about" style={{background: "#151515"}}>
            <div className="container">
                <div className="row d-flex">
                    <div className="col-12 col-lg-5">
                        <div className="ml-5 ml-auto borda-shadow d-flex justify-content-center">
                            <img className="d-block w-75 rounded" src={perfil} alt="Foto de Perfil"/>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 pt-4">
                        <div className="d-flex justify-content-start">
                            <h4 className="mb-2">
                                SOBRE MIM
                            </h4>
                        </div>
                        <p className="pt-2 texto-corrido" style={{opacity: "0.5"}}>
                            Atuo como UX Designer desde setembro de 2021. Estou habituado a trabalhar com metodologias ágeis tanto Scrum como Kanban, com Design Thinking, pesquisas, wireframes e protótipos. Atualmente participo do projeto Mappiá no Banco do Brasil, o qual busca
                            o aprimoramento do produto rural brasileiro com soluções de inteligência artificial.
                        </p>
                        <div className="mb-3 d-flex">
                            <a className="pe-2" href="https://www.instagram.com/pnsndesign/" target="_blank" rel="noreferrer">
                                <Instagram width={40}/>
                            </a>
                            <a className="pe-2" href="https://www.linkedin.com/in/pedro-neto-sn/" target="_blank" rel="noreferrer">
                                <Linkedin width={40}/>
                            </a>
                            <a className="pe-2" href="mailto:pedrontsousa@gmail.com" target="_blank" rel="noreferrer">
                                <Gmail width={40}/>
                            </a>
                        </div>
                        <div className="mb-3 d-flex">
                            <a className="btn btn-principal my-2 my-sm-0" href="https://drive.google.com/file/d/1-NlgjnPs8jwybgLRPw_DSxDdU6CN2Gac/view" target="_blank" rel="noreferrer">Currículo</a>
                        </div>
                        <h5 className="mb-2">
                            Minhas principais habilidades
                        </h5>
                        <div className="mb-3 d-flex">
                            <Figma width={30} className="me-2"/>
                            <Photoshop width={30} className="me-2"/>
                            <Illustrator width={30} className="me-2"/>
                            <JavaScript width={30} className="me-2" />
                            <Html width={30} className="me-2"/>
                            <Css width={30} className="me-2"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}