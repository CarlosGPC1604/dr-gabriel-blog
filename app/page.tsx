import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-between p-24">
        <section className="hero bg-base-100">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Salud Masculina de Excelencia</h1>
              <p className="py-6">Cuidando tu salud con los mejores tratamientos personalizados para ti.</p>
              <button className="btn btn-primary">Agenda tu consulta</button>
            </div>
          </div>
        </section>
      </main>

      <div
        className="hero min-h-screen"
        >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <section className="py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Nuestros Servicios</h2>
          <p className="py-4">Brindamos soluciones avanzadas y personalizadas para tu bienestar.</p>
        </div>
        <div className="flex justify-center gap-8">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure><Image src="https://via.placeholder.com/400x200" alt="Servicio 1" width={400} height={200} /></figure>
            <div className="card-body">
              <h2 className="card-title">Servicio 1</h2>
              <p>Descripción breve del servicio 1.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Ver más</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure><Image src="https://via.placeholder.com/400x200" alt="Servicio 2" width={400} height={200} /></figure>
            <div className="card-body">
              <h2 className="card-title">Servicio 2</h2>
              <p>Descripción breve del servicio 2.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Ver más</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-base-200">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Testimonios</h2>
          <p className="py-4">Lo que nuestros pacientes dicen sobre nosotros.</p>
        </div>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item w-full">
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
              <div className="card-body">
                <h2 className="card-title">Paciente 1</h2>
                <p>Dr. Gabriel me ayudó a mejorar mi salud y bienestar de manera increíble.</p>
              </div>
            </div>
          </div>
          <div id="slide2" className="carousel-item w-full">
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
              <div className="card-body">
                <h2 className="card-title">Paciente 2</h2>
                <p>El servicio fue excelente y muy profesional. ¡Altamente recomendado!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#slide1" className="btn btn-xs">1</a>
          <a href="#slide2" className="btn btn-xs">2</a>
        </div>
      </section>
    </>
  );
}
