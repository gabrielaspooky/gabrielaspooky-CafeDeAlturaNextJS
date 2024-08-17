import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <img src="/path-to-your-icon1.png" alt="Icono 1" className="w-12 h-12 mb-2" />,
      title: 'Recibe tu pedido sin preocuparte',
      description: 'Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana.',
    },
    {
      icon: <img src="/path-to-your-icon2.png" alt="Icono 2" className="w-12 h-12 mb-2" />,
      title: 'Envío en 24/48h',
      description: 'Pide tu café antes de las 12h y lo recibirás al día siguiente.',
    },
    {
      icon: <img src="/path-to-your-icon3.png" alt="Icono 3" className="w-12 h-12 mb-2" />,
      title: 'Descuentos y beneficios',
      description: 'Disfruta de descuentos exclusivos y beneficios adicionales al suscribirte a nuestro servicio.',
    },
  ];

  return (
    <div className="bg-cover bg-center py-12" style={{ backgroundImage: `url('/coffee-background.jpg')` }}>
     
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">Café con las mejores condiciones</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
              <div>{benefit.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mt-4">{benefit.title}</h3>
              <p className="text-gray-600 mt-2">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
  );
};

export default BenefitsSection;
