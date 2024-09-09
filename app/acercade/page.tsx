import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      {/* Sección Principal */}
      <main className="container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center">
        {/* Información del Doctor */}
        <div className="px-4 lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-4xl font-bold mb-4">Dr. Gabriel López</h1>
          <p className="text-lg mb-4">
            Es un reconocido especialista en urología con más de 10 años de experiencia en el campo de la salud masculina. Graduado de la Universidad Nacional de Medicina, el Dr. López ha dedicado su carrera a brindar atención personalizada y de calidad a sus pacientes.
          </p>
          <p className="text-lg mb-4">
            A lo largo de su trayectoria, ha trabajado en diversos hospitales de renombre, donde ha desarrollado técnicas innovadoras en tratamientos urológicos. Además, es autor de múltiples artículos científicos y ha sido invitado como ponente en conferencias internacionales.
          </p>
          <p className="text-lg mb-4">
            Su enfoque se centra en la empatía, el conocimiento profundo y el compromiso con la salud y el bienestar de sus pacientes, ofreciendo tratamientos basados en la última tecnología médica.
          </p>
        </div>

        {/* Foto del Doctor */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/DrGabriel_Retrato_Vertical.jpg"
            alt="Dr. Gabriel López"
            width={300}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </main>

      <div
        className="hero min-h-96 min-w-full"
        style={{
          backgroundImage: "url(/hero-2.png)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-4 text-5xl font-bold -z-10">Una experiencia a medida</h1>
            <p className="mb-5">
              Revisa las opiniones del Dr. Gabriel en Doctoralia y conoce uno de los tratamientos más profesionales del país.
            </p>
            <div className="rating rating-md mr-4">
              <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"/>
              <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
            </div>
            <button className="btn btn-primary">Doctoralia</button>
          </div>
        </div>
      </div>

      {/* Carrusel de Participaciones, Trabajos, Capacitaciones */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Participaciones y Logros</h2>
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <div className="card-body">
                  <h3 className="card-title">Congreso Internacional de Urología 2021</h3>
                  <p>
                    Ponencia destacada sobre técnicas avanzadas en cirugía mínimamente invasiva.
                  </p>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <div className="card-body">
                  <h3 className="card-title">Publicación en Journal of Urology</h3>
                  <p>
                    Artículo sobre los avances en el tratamiento de la hiperplasia prostática benigna.
                  </p>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <div className="card-body">
                  <h3 className="card-title">Capacitación en Nuevas Tecnologías</h3>
                  <p>
                    Certificación en técnicas robóticas avanzadas para procedimientos urológicos complejos.
                  </p>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
