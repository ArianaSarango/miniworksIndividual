import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<'student' | 'employer' | null>(null);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate registration
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-background-dark flex items-center justify-center p-4 font-display text-white">
      <div className="max-w-2xl w-full">
         <div className="text-center mb-10">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <div className="text-primary size-8">
                   <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fillRule="evenodd"></path></svg>
              </div>
              <h1 className="text-2xl font-bold">MiniWorks</h1>
            </Link>
            <h2 className="text-4xl font-black mb-2">Crea tu cuenta</h2>
            <p className="text-gray-400">Selecciona tu rol para comenzar</p>
         </div>

         <div className="bg-[#1a0d1a] border border-gray-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
               <button 
                 onClick={() => setRole('student')}
                 className={`p-6 rounded-xl border-2 transition-all flex flex-col items-center text-center gap-3 ${role === 'student' ? 'border-primary bg-primary/10' : 'border-gray-800 hover:border-gray-600'}`}
               >
                  <span className={`material-symbols-outlined text-4xl ${role === 'student' ? 'text-primary' : 'text-gray-400'}`}>school</span>
                  <div>
                    <h3 className="font-bold text-lg">Soy Estudiante</h3>
                    <p className="text-xs text-gray-400 mt-1">Busco oportunidades flexibles</p>
                  </div>
               </button>
               <button 
                 onClick={() => setRole('employer')}
                 className={`p-6 rounded-xl border-2 transition-all flex flex-col items-center text-center gap-3 ${role === 'employer' ? 'border-primary bg-primary/10' : 'border-gray-800 hover:border-gray-600'}`}
               >
                  <span className={`material-symbols-outlined text-4xl ${role === 'employer' ? 'text-primary' : 'text-gray-400'}`}>business_center</span>
                  <div>
                    <h3 className="font-bold text-lg">Soy Empleador</h3>
                    <p className="text-xs text-gray-400 mt-1">Quiero contratar talento</p>
                  </div>
               </button>
            </div>

            <form onSubmit={handleRegister} className="space-y-5">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1">
                     <label className="text-sm font-medium text-gray-300">Nombre completo</label>
                     <input type="text" className="w-full h-12 px-4 rounded-lg bg-background-dark border border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="Juan Pérez" required />
                  </div>
                  <div className="space-y-1">
                     <label className="text-sm font-medium text-gray-300">Email {role === 'student' ? 'Universitario' : 'Corporativo'}</label>
                     <input type="email" className="w-full h-12 px-4 rounded-lg bg-background-dark border border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="nombre@ejemplo.com" required />
                  </div>
               </div>
               
               <div className="space-y-1">
                   <label className="text-sm font-medium text-gray-300">Contraseña</label>
                   <input type="password" className="w-full h-12 px-4 rounded-lg bg-background-dark border border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="Crea una contraseña segura" required />
               </div>

               <div className="flex items-start gap-3 py-2">
                  <input type="checkbox" className="mt-1 rounded bg-gray-700 border-gray-600 text-primary focus:ring-primary" required />
                  <span className="text-sm text-gray-400">Acepto los <a href="#" className="text-primary hover:underline">Términos y Condiciones</a> y la <a href="#" className="text-primary hover:underline">Política de Privacidad</a>.</span>
               </div>

               <button type="submit" className="w-full h-12 bg-primary hover:bg-[#d912d7] text-background-dark font-bold text-lg rounded-lg transition-colors transform active:scale-[0.98]">
                  Crear Cuenta
               </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-400">
               ¿Ya tienes una cuenta? <Link to="/login" className="text-primary font-bold hover:underline">Inicia sesión</Link>
            </p>
         </div>
      </div>
    </div>
  );
};

export default Register;