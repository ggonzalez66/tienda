import person from "../../assets/images/person.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Experience",
    description: "15 Y.",
  },
  {
    id: 2,
    title: "Projects Completed",
    description: "250+",
  },
  {
    id: 3,
    title: "Happy Clients",
    description: "58",
  },
];

const Introduction = () => {
  return (
    <section
      className="w-full flex flex-col items-center justify-center py-16 px-4 bg-white"
      id="introduction"
    >
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
          TopPlanet Holding
        </h1>
        <h2 className="text-xl sm:text-2xl font-medium text-picto-primary mb-4">
          Innovación, energía y resultados para tu empresa
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
          En TopPlanet Holding creemos en hacer las cosas de manera diferente: con innovación, energía y un servicio que realmente genera resultados. Somos una empresa dedicada a ofrecer soluciones de venta y un catálogo empresarial diseñado para impulsar el crecimiento de nuestros clientes.<br /><br />
          Cada producto, cada servicio y cada proyecto que desarrollamos está pensado para brindar valor real y nuevas oportunidades. Si buscas calidad, variedad y una atención profesional, estás en el lugar correcto.
        </p>
        <a
          className="btn-primary btn btn-lg text-white px-8 py-3 text-lg font-semibold shadow-md hover:scale-105 transition-transform"
          href="#portfolio"
        >
          Ver nuestro Servicios
        </a>
      </div>
    </section>
  );
};

export default Introduction;
