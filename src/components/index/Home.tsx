import perfil from 'assets/img/Perfil.png';

import { ReactComponent as Instagram } from 'assets/img/Instagram.svg';
import { ReactComponent as Linkedin } from 'assets/img/linkedin.svg';
import { ReactComponent as Gmail } from 'assets/img/gmail.svg';

export default function Home() {
    return (
        <>
            <div className="container-fluid rounded pt-3 pb-5">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-5 col-md-4 col-sm-12 pt-5">
                            <div className="d-flex justify-content-left">
                                <h4 className=" mb-2">
                                    OLÁ, EU SOU
                                </h4>
                            </div>
                            <div className="d-flex justify-content-left">
                                <h1 className="titulo-maior" style={{color: "#008AFF"}}>
                                    Pedro Neto
                                </h1>
                            </div>
                            <div className="d-flex justify-content-left">
                                <h4 className=" mb-2">
                                    UX/UI DESIGNER
                                </h4>
                            </div>
                            <p className="pt-2 texto-corrido">
                                “É a maneira como você experimenta o mundo, é a maneira como você experimenta sua vida, é a maneira que você experimenta um serviço, ou um aplicativo ou um sistema de computador” - Don Norman
                            </p>
                            <div className="mb-3 d-flex">
                            <a className="pe-2" href="https://www.instagram.com/pnsndesign/" target="_blank">
                                <Instagram width={40}/>
                            </a>
                            <a className="pe-2" href="https://www.linkedin.com/in/pedro-neto-sn/" target="_blank">
                                <Linkedin width={40}/>
                            </a>
                            <a className="pe-2" href="mailto:pedrontsousa@gmail.com" target="_blank">
                                <Gmail width={40}/>
                            </a>
                            </div>
                            <div className="">
                                <a className="btn btn-principal my-2 my-sm-0" href="#about">
                                    Saiba mais sobre mim
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-8 d-none d-sm-block d-sm-none d-md-block">
                            <div className="ml-5 ml-auto">
                                <img className="d-block w-100 rounded-circle" src={perfil} alt="Primeiro Slide"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}