import React from 'react';
import { Link } from 'react-router-dom';
import { Job } from '../types';

const MOCK_JOBS: Job[] = [
  { id: 1, title: 'Diseñador Gráfico Jr.', company: 'Innovate Solutions', location: '1.5 km', distance: '1.5 km', pay: 25, status: 'Disponible', description: 'Design things' },
  { id: 2, title: 'Ayudante de Evento', company: 'Campus Events Co.', location: '0.8 km', distance: '0.8 km', pay: 18, status: 'Aceptado', description: 'Help out' },
  { id: 3, title: 'Tutor de Matemáticas', company: 'LearnFast Tutors', location: '2.1 km', distance: '2.1 km', pay: 30, status: 'Cerrado', description: 'Teach math' },
];

const StudentDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold">Trabajos Disponibles ({MOCK_JOBS.length})</h1>
        
        <div className="relative w-full md:w-auto min-w-[300px]">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-500">search</span>
          <input 
            type="text" 
            placeholder="Buscar por título, empresa..." 
            className="w-full pl-10 pr-4 h-10 rounded-lg bg-[#1a0d1a] border border-gray-800 text-white placeholder:text-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
         {/* Filters Sidebar for large screens */}
         <div className="hidden lg:block w-72 flex-shrink-0 space-y-6">
            <div className="bg-[#1a0d1a] border border-gray-800 rounded-xl p-5">
               <h3 className="font-bold mb-4 flex items-center gap-2">
                 <span className="material-symbols-outlined">tune</span> Filtros
               </h3>
               
               <div className="space-y-6">
                 <div>
                    <div className="flex justify-between text-sm mb-2">
                       <span className="text-gray-400">Distancia</span>
                       <span className="text-primary font-bold">10 km</span>
                    </div>
                    <input type="range" className="w-full accent-primary h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer" />
                 </div>

                 <div>
                    <div className="flex justify-between text-sm mb-2">
                       <span className="text-gray-400">Pago por hora</span>
                       <span className="text-primary font-bold">$15 - $50</span>
                    </div>
                    <div className="relative h-1 bg-gray-700 rounded-lg">
                       <div className="absolute left-1/4 right-1/4 h-full bg-primary rounded-lg"></div>
                       <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary border-2 border-[#1a0d1a] rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
                       <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary border-2 border-[#1a0d1a] rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
                    </div>
                 </div>

                 <div>
                    <label className="text-sm text-gray-400 block mb-2">Categoría</label>
                    <select className="w-full h-10 bg-background-dark border border-gray-700 rounded-lg px-3 text-sm focus:border-primary outline-none">
                       <option>Todas las categorías</option>
                       <option>Diseño</option>
                       <option>Eventos</option>
                       <option>Educación</option>
                    </select>
                 </div>
                 
                 <button className="w-full h-10 bg-primary/10 text-primary font-bold rounded-lg hover:bg-primary/20 transition-colors text-sm">
                    Aplicar Filtros
                 </button>
               </div>
            </div>
         </div>

         {/* Job Grid */}
         <div className="flex-1 grid grid-cols-1 xl:grid-cols-2 gap-6">
            {MOCK_JOBS.map((job) => (
              <div key={job.id} className={`bg-[#1a0d1a] border border-gray-800 rounded-xl overflow-hidden flex flex-col ${job.status === 'Cerrado' ? 'opacity-60' : ''}`}>
                 <div className="p-6 flex-1">
                    <div className="flex justify-between items-start mb-4">
                       <div className="flex gap-4">
                          <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center text-xl font-bold text-gray-500">
                             {job.company[0]}
                          </div>
                          <div>
                             <h3 className="font-bold text-lg">{job.title}</h3>
                             <p className="text-gray-400 text-sm">{job.company}</p>
                          </div>
                       </div>
                       <span className={`px-3 py-1 rounded-full text-xs font-bold 
                         ${job.status === 'Disponible' ? 'bg-green-900/30 text-green-400' : 
                           job.status === 'Aceptado' ? 'bg-blue-900/30 text-blue-400' : 'bg-gray-800 text-gray-400'}`}>
                         {job.status}
                       </span>
                    </div>
                    
                    <div className="flex items-center gap-6 text-sm text-gray-400 mt-2">
                       <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-lg">payments</span>
                          ${job.pay}/hr
                       </div>
                       <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-lg">location_on</span>
                          {job.location}
                       </div>
                    </div>
                 </div>
                 
                 <div className="flex border-t border-gray-800 divide-x divide-gray-800">
                    <Link to={`/jobs/${job.id}`} className={`flex-1 h-12 flex items-center justify-center font-bold text-sm hover:bg-white/5 transition-colors ${job.status === 'Cerrado' ? 'pointer-events-none' : ''}`}>
                       Ver Detalles
                    </Link>
                    <button className={`flex-1 h-12 flex items-center justify-center font-bold text-sm text-primary bg-primary/5 hover:bg-primary/10 transition-colors ${job.status === 'Cerrado' ? 'pointer-events-none text-gray-500 bg-transparent' : ''}`}>
                       {job.status === 'Aceptado' ? 'Contactar' : 'Postular'}
                    </button>
                 </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default StudentDashboard;