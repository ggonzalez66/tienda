import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: "/tiendaOnline.jpeg",
    category: "",
    title: "TIENDA ONLINE",
    description:
      "Ofrecemos una variedad de productos en línea, con catálogo variado, una experiencia de compra rápida, moderna y accesible desde cualquier dispositivo.",
    link: "https://tienda.tplanet.cl",
  },
  {
    id: 2,
    image: card2,
    category: "",
    title: "CATÁLOGO EMPRESA",
    description:
      "Ofrecemos un catálogo amplio, que abarcan productos y servicios diseñaods para mejorar la eficiencia, reducir costos y apoyar la sustentabilidad de las organizaciones..",
    link: "#!",
  },
  {
    id: 3,
    image: card3,
    category: "",
    title: "BUSINESS MARKET",
    description:
      "Ofrecemos productos al por mayor, soluciones de compra eficientes y un catálogo amplio orientado a negocios, emprendedores y organizaciones que requieren abastecimiento",
    link: "#!",
  },
  {
    id: 4,
    image: card4,
    category: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Created a responsive dashboard layout that adapts smoothly across devices and screen sizes and so on.",
    link: "#!",
  },
  {
    id: 5,
    image: card5,
    category: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Implemented interactive charts and widgets to visualize product data effectively for stakeholders.",
    link: "#!",
  },
  {
    id: 6,
    image: card6,
    category: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Enhanced user experience by streamlining workflows and optimizing interface components and so on.",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Divisiones Top Planet</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Descubre las unidades de negocio que impulsan a Top Planet Holding:
            soluciones en retail, abastecimiento corporativo y servicios
            especializados que generan valor real para nuestros clientes.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.slice(0, 3).map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Portfolio;
