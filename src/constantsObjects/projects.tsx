import portfolio from 'assets/img/ProjetoPortfolio.png'
import rockburger from 'assets/img/ProjetoRockBurger.png'

export const ProjectsList = [
    {
        id: 0,
        foto: <img className="d-block w-100 border-shadow rounded" src={portfolio} alt="Apresetação do Portfólio" />,
        titulo: "Portfólio",
        paragrafo: "Confiram abaixo o desenvolvimento do Portfólio.",
        link: "https://pnsneto.notion.site/Portf-lio-5bc9966349b4450f89d4d4f696b7eb5e",
    },
    {
        id: 1,
        foto: <img className="d-block w-100 border-shadow rounded" src={rockburger} alt="Apresetação do Rockburger" />,
        titulo: "RockBurger",
        paragrafo: "Confiram abaixo o desenvolvimento do RockBurger.",
        link: "https://pnsneto.notion.site/RockBurger-1bf7e69651a14621bc0b41bb9005c9e6",
    }

]