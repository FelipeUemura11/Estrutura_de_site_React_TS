import { FC } from 'react';

// Ícones opcionais, se quiser adicionar
// import { UsersIcon, SparklesIcon, HeartIcon } from '@heroicons/react/outline';

const About: FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12"> {/* Container principal com padding e espaçamento entre seções */}

      {/* Seção 1: Título Principal */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Sobre Nós
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Conheça um pouco mais sobre nossa história, missão e os valores que nos guiam.
        </p>
      </section>

      {/* Seção 2: Nossa Missão e Visão (Exemplo com duas colunas) */}
      <section className="grid md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-lg shadow-sm">
        <div>
          {/* Ícone opcional */}
          {/* <SparklesIcon className="w-12 h-12 text-blue-500 mb-4" /> */}
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Nossa Missão</h2>
          <p className="text-gray-600 leading-relaxed">
            Nossa missão é fornecer soluções inovadoras e de alta qualidade que transformem ideias em realidade digital. Buscamos constantemente superar as expectativas dos nossos clientes através da tecnologia e criatividade.
          </p>
        </div>
        <div className="mt-8 md:mt-0">
          {/* Ícone opcional */}
          {/* <HeartIcon className="w-12 h-12 text-red-500 mb-4" /> */}
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Nossos Valores</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Compromisso com a excelência</li>
            <li>Inovação contínua</li>
            <li>Transparência e ética</li>
            <li>Colaboração e trabalho em equipe</li>
            <li>Foco no cliente</li>
          </ul>
        </div>
      </section>

      {/* Seção 3: A Equipe (Exemplo com cards) */}
      <section>
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Conheça a Equipe
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card Membro 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
            {/* Ícone opcional */}
            {/* <UsersIcon className="w-16 h-16 mx-auto text-gray-400 mb-4 rounded-full bg-gray-100 p-3" /> */}
            <img src="/path/to/avatar1.jpg" alt="Membro 1" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" /> {/* Imagem de exemplo */}
            <h3 className="text-xl font-semibold text-gray-800 mb-1">Nome do Membro 1</h3>
            <p className="text-blue-600 font-medium mb-2">Cargo</p>
            <p className="text-gray-500 text-sm">Uma breve descrição sobre o membro da equipe e suas especialidades.</p>
          </div>

          {/* Card Membro 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
            <img src="/path/to/avatar2.jpg" alt="Membro 2" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-semibold text-gray-800 mb-1">Nome do Membro 2</h3>
            <p className="text-blue-600 font-medium mb-2">Cargo</p>
            <p className="text-gray-500 text-sm">Outra descrição interessante sobre um membro talentoso.</p>
          </div>

          {/* Card Membro 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
            <img src="/path/to/avatar3.jpg" alt="Membro 3" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-semibold text-gray-800 mb-1">Nome do Membro 3</h3>
            <p className="text-blue-600 font-medium mb-2">Cargo</p>
            <p className="text-gray-500 text-sm">Mais um membro incrível que faz parte da nossa jornada.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;