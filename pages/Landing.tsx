import React from 'react';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-dark text-white font-lexend overflow-x-hidden">
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="text-primary size-8">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fillRule="evenodd"></path>
            </svg>
          </div>
          <h1 className="text-xl font-bold">MiniWorks</h1>
        </div>
        <div className="hidden sm:flex gap-6 items-center">
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">How it works</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Pricing</a>
          <Link to="/login" className="text-sm font-medium hover:text-primary transition-colors">Login</Link>
        </div>
      </header>

      <main>
        <section className="py-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <h1 className="text-5xl sm:text-6xl font-black leading-tight">
              Conecta estudiantes de la UNL con empleos cortos en tu comunidad
            </h1>
            <p className="text-lg text-gray-400 max-w-xl">
              La plataforma ideal para encontrar oportunidades laborales flexibles o el talento joven que necesitas para tus proyectos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/onboarding" className="h-14 px-8 bg-primary rounded-lg flex items-center justify-center font-bold text-background-dark text-lg hover:opacity-90 transition-opacity">
                Soy Estudiante
              </Link>
              <Link to="/onboarding" className="h-14 px-8 bg-gray-800 rounded-lg flex items-center justify-center font-bold text-white text-lg hover:bg-gray-700 transition-colors">
                Soy Empleador
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div 
              className="aspect-video w-full rounded-2xl bg-cover bg-center shadow-2xl border border-gray-800"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1742&q=80")' }}
            ></div>
          </div>
        </section>

        <section className="py-20 bg-[#1a0d1a] border-t border-gray-800">
           <div className="max-w-7xl mx-auto px-6">
             <h2 className="text-3xl font-bold text-center mb-16">Confiado por nuestra comunidad</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { name: "Carlos Sarango", role: "Estudiante de UNL", quote: "MiniWorks me ayudó a encontrar trabajos flexibles que se ajustan a mi horario de clases.", img: "https://i.pravatar.cc/150?u=a04258a2462d826712d" },
                  { name: "Adrián Rodriguez", role: "Dueño de Tienda", quote: "Encontré estudiantes talentosos y motivados para proyectos de corto plazo.", img: "https://i.pravatar.cc/150?u=a042581f4e29026024d" },
                  { name: "Daniela Gomez", role: "Personal UNL", quote: "Una excelente iniciativa que fortalece los lazos entre la universidad y la comunidad.", img: "https://i.pravatar.cc/150?u=a042581f4e29026704d" }
                ].map((review, i) => (
                  <div key={i} className="bg-background-dark p-8 rounded-xl border border-gray-800">
                     <div className="flex items-center gap-4 mb-4">
                        <img src={review.img} alt={review.name} className="w-12 h-12 rounded-full" />
                        <div>
                          <p className="font-bold">{review.name}</p>
                          <p className="text-sm text-primary">{review.role}</p>
                        </div>
                     </div>
                     <div className="flex text-primary mb-4">
                        {[1,2,3,4,5].map(s => <span key={s} className="material-symbols-outlined fill-icon text-sm">star</span>)}
                     </div>
                     <p className="text-gray-300">"{review.quote}"</p>
                  </div>
                ))}
             </div>
           </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 py-12 text-center text-gray-500">
        <p>© 2024 MiniWorks. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Landing;