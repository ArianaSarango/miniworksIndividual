import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Por favor completa todos los campos.');
      return;
    }
    if (email.includes('employer')) {
      navigate('/employer-dashboard');
    } else {
      navigate('/student-dashboard');
    }
  };

  return (
    <div className="min-h-screen flex bg-background-dark text-white font-display">
       {/* Left Hero */}
       <div className="hidden lg:flex flex-1 relative items-center justify-center bg-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1784&q=80')] bg-cover bg-center opacity-40"></div>
          <div className="relative z-10 p-12 max-w-lg">
             <div className="flex items-center gap-3 mb-6">
                <div className="text-primary size-10">
                   <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fillRule="evenodd"></path></svg>
                </div>
                <h1 className="text-3xl font-bold">MiniWorks</h1>
             </div>
             <h2 className="text-5xl font-black mb-4 leading-tight">Bienvenido de vuelta</h2>
             <p className="text-xl text-gray-300">Conectando el talento estudiantil con oportunidades locales.</p>
          </div>
       </div>

       {/* Right Form */}
       <div className="flex-1 flex items-center justify-center p-8 bg-[#1a0d1a]">
          <div className="w-full max-w-md space-y-8">
             <div>
                <h2 className="text-3xl font-bold mb-2">Iniciar sesión</h2>
                <p className="text-gray-400">Ingresa tus credenciales para acceder</p>
             </div>

             {error && (
               <div className="bg-red-900/30 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-lg">error</span>
                  {error}
               </div>
             )}

             <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                   <label className="text-sm font-medium text-gray-300">Email</label>
                   <input 
                     type="email" 
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     className="w-full h-12 px-4 rounded-lg bg-background-dark border border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                     placeholder="tu@email.com"
                   />
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-medium text-gray-300">Contraseña</label>
                   <div className="relative">
                     <input 
                       type={showPassword ? "text" : "password"} 
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       className="w-full h-12 px-4 rounded-lg bg-background-dark border border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors pr-12"
                       placeholder="••••••••"
                     />
                     <button 
                       type="button"
                       onClick={() => setShowPassword(!showPassword)}
                       className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                     >
                        <span className="material-symbols-outlined text-xl">
                          {showPassword ? 'visibility_off' : 'visibility'}
                        </span>
                     </button>
                   </div>
                </div>

                <div className="flex items-center justify-between">
                   <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded bg-gray-700 border-gray-600 text-primary focus:ring-primary" />
                      <span className="text-sm text-gray-300">Recordarme</span>
                   </label>
                   <a href="#" className="text-sm font-bold text-primary hover:underline">¿Olvidaste tu contraseña?</a>
                </div>

                <button type="submit" className="w-full h-14 bg-primary hover:bg-[#d912d7] text-background-dark font-bold text-lg rounded-lg transition-colors">
                   Iniciar sesión
                </button>
             </form>

             <div className="relative my-8">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-800"></div></div>
                <div className="relative flex justify-center"><span className="bg-[#1a0d1a] px-4 text-sm text-gray-500">O continúa con</span></div>
             </div>

             <button type="button" className="w-full h-14 bg-transparent border border-gray-700 hover:bg-gray-800 text-white font-bold text-base rounded-lg transition-colors flex items-center justify-center gap-3">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-6 h-6" />
                Login con Google
             </button>

             <p className="text-center text-gray-400">
                ¿No tienes una cuenta? <Link to="/register" className="text-primary font-bold hover:underline">Regístrate</Link>
             </p>
          </div>
       </div>
    </div>
  );
};

export default Login;