import React from 'react';

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Nuestros Servicios</h1>

      {/* Servicios */}
      <section className="mb-16">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Servicios</h2>
          <p className="text-gray-600">
            Ofrecemos una amplia gama de servicios personalizados para satisfacer las necesidades de cada paciente.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card: Consultas */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Consultas</h2>
              <p>
                Realizamos consultas detalladas y personalizadas para evaluar y entender las necesidades individuales de cada paciente.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Más información</button>
              </div>
            </div>
          </div>

          {/* Card: Tratamientos */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Tratamientos</h2>
              <p>
                Ofrecemos una variedad de tratamientos avanzados basados en la última tecnología para asegurar los mejores resultados.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Más información</button>
              </div>
            </div>
          </div>

          {/* Card: Seguimiento */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Seguimiento</h2>
              <p>
                Proporcionamos seguimiento continuo para asegurar la recuperación completa y mantener la salud a largo plazo.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Más información</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
