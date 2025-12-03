import React from 'react';
import { Link } from 'react-router-dom';

const EmployerDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h1 className="text-4xl font-black tracking-tight">Mis ofertas</h1>
          <Link to="/create-job" className="h-10 px-6 bg-primary text-background-dark font-bold rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity">
             <span className="material-symbols-outlined">add</span>
             Crear Oferta
          </Link>
       </div>

       <div className="bg-[#1a0d1a] border border-gray-800 rounded-xl overflow-hidden mb-8">
          <div className="overflow-x-auto">
             <table className="w-full text-left">
                <thead className="bg-background-dark border-b border-gray-800">
                   <tr>
                      <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">Título del trabajo</th>
                      <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">Estado</th>
                      <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">Vistas</th>
                      <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">Aplicantes</th>
                      <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase text-right">Acciones</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                   {[
                     { title: "Diseñador Gráfico Junior", status: "Activa", views: 1204, apps: 42 },
                     { title: "Asistente de Marketing Digital", status: "Activa", views: 987, apps: 31 },
                     { title: "Desarrollador de Software (Pasantía)", status: "Cerrada", views: 2510, apps: 112 },
                   ].map((job, i) => (
                     <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4 font-medium">{job.title}</td>
                        <td className="px-6 py-4">
                           <span className={`px-2 py-1 rounded-full text-xs font-bold ${job.status === 'Activa' ? 'bg-green-900/30 text-green-400' : 'bg-gray-800 text-gray-400'}`}>
                             {job.status}
                           </span>
                        </td>
                        <td className="px-6 py-4 text-gray-400">{job.views}</td>
                        <td className="px-6 py-4 text-gray-400">{job.apps}</td>
                        <td className="px-6 py-4 text-right">
                           <div className="flex items-center justify-end gap-2">
                              <button className="p-2 hover:bg-gray-800 rounded-lg text-gray-400 hover:text-white"><span className="material-symbols-outlined text-lg">edit</span></button>
                              <button className="p-2 hover:bg-gray-800 rounded-lg text-gray-400 hover:text-white"><span className="material-symbols-outlined text-lg">group</span></button>
                              <button className="p-2 hover:bg-gray-800 rounded-lg text-gray-400 hover:text-red-400"><span className="material-symbols-outlined text-lg">close</span></button>
                           </div>
                        </td>
                     </tr>
                   ))}
                </tbody>
             </table>
          </div>
       </div>

       {/* Empty State Demo */}
       <div className="border-2 border-dashed border-gray-800 rounded-xl p-12 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4">
             <span className="material-symbols-outlined text-3xl text-gray-400">work_history</span>
          </div>
          <h3 className="text-xl font-bold mb-2">Empieza a contratar</h3>
          <p className="text-gray-400 max-w-sm mb-6">Crea tu primera oferta de trabajo para empezar a conectar con estudiantes talentosos de la UNL.</p>
          <Link to="/create-job" className="h-10 px-6 bg-primary text-background-dark font-bold rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity">
             <span className="material-symbols-outlined">add</span>
             Crear Oferta
          </Link>
       </div>
    </div>
  );
};

export default EmployerDashboard;