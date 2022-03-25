import { ReactComponent as Logo } from 'assets/img/Logo.svg';
import { ReactComponent as Menu } from 'assets/img/Menu.svg';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <> 
        <nav id="sidebar">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <div id="dismiss" className="mt-4">
                        <Link to={''}>
                                <FontAwesomeIcon icon={faXmark} data-bs-dismiss="modal" aria-label="Close" className="fs-2" />
                            </Link> 
                    </div>
                </div>
            </div>
            <div className="m-3">
                <ul className="list-unstyled components">
                    <li className="nav-item">
                        <Link className="nav-link texto-grande nav-close" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link texto-grande nav-close" to="/projetos">Projetos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link texto-grande nav-close" to="/certificados">Certificados</Link>
                    </li>
                </ul>
            </div>
        </nav>

        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <Link to="/"><Logo width={100} height={112} className="logo"/></Link>
                <button itemType="button" id="sidebarCollapse" className="btn d-lg-none ml-auto" data-bs-toggle="collapse">
                    <Menu width={75}/>
                </button>
                <div className="collapse navbar-collapse justify-content-end">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link pe-5 texto-grande" to="/"><strong>Home</strong></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link pe-5 texto-grande" to="/projetos"><strong>Projetos</strong></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link pe-5 texto-grande" to="/certificados"><strong>Certificados</strong></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}