import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Onboarding: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background-dark text-white flex flex-col font-display">
       <header className="p-6 flex justify-between items-center border-b border-gray-800">
         <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="text-primary size-6">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fillRule="evenodd"></path>
              </svg>
            </div>
            MiniWorks
         </Link>
         <Link to="/login" className="px-4 py-2 border border-gray-700 rounded-lg text-sm font-bold hover:bg-gray-800 transition-colors">
            Iniciar sesión
         </Link>
       </header>

       <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
             {[
               { icon: 'badge', title: 'Crea tu perfil', desc: 'Muestra tus habilidades únicas.' },
               { icon: 'hub', title: 'Conecta', desc: 'Postula fácilmente a mini-trabajos.' },
               { icon: 'verified_user', title: 'Seguro', desc: 'Sistema de pago seguro y confiable.' }
             ].map((item, i) => (
               <div key={i} className="bg-[#1a0d1a] border border-gray-800 rounded-xl overflow-hidden flex flex-col">
                  <div className="h-40 bg-primary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-6xl text-white">{item.icon}</span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
               </div>
             ))}
          </div>
          
          <div className="flex gap-2 mb-12">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <div className="w-2 h-2 rounded-full bg-gray-700"></div>
            <div className="w-2 h-2 rounded-full bg-gray-700"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <button onClick={() => navigate('/register')} className="flex-1 h-12 bg-primary text-background-dark font-bold rounded-lg hover:opacity-90 transition-opacity">
              Crear cuenta
            </button>
            <button onClick={() => navigate('/login')} className="flex-1 h-12 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 transition-colors">
              Iniciar sesión
            </button>
          </div>
          <button onClick={() => navigate('/student-dashboard')} className="mt-6 text-gray-500 hover:text-white text-sm underline">
            Saltar (Demo Estudiante)
          </button>
       </main>
    </div>
  );
};

export default Onboarding;