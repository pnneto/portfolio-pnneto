import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contato() {
    return (
        <>
            <div className="btn-contato ">
                <div className="icon-container mt-1 mb-3">
                    <a href="https://www.instagram.com/pnsndesign/" target="_blank" rel="noreferrer" className="icon icon-fill me-3" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} className="icon-contato" />
                    </a>
                    <a href="https://www.linkedin.com/in/pedro-neto-sn/" target="_blank" rel="noreferrer" className="icon icon-fill me-3" aria-label="Linkedin">
                        <FontAwesomeIcon icon={faLinkedinIn} className="icon-contato" />
                    </a>
                    <a href="mailto:pedrontsousa@gmail.com" target="_blank" rel="noreferrer" className="icon icon-fill" aria-label="Gmail">
                        <FontAwesomeIcon icon={faEnvelope} className="icon-contato" />
                    </a>
                </div>
            </div>
        </>
    )
}