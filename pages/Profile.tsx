import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
       <h1 className="text-3xl font-black mb-8">Perfil de Usuario</h1>
       
       <div className="space-y-8">
          {/* Basic Info */}
          <div className="bg-[#1a0d1a] border border-gray-800 rounded-xl overflow-hidden">
             <div className="p-5 border-b border-gray-800 flex items-center gap-3">
                <span className="material-symbols-outlined">person</span>
                <h2 className="font-bold text-lg">Información Básica</h2>
             </div>
             <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: "Name", val: "Alexandra Kuznetsova" },
                  { label: "Role", val: "Estudiante" },
                  { label: "Email", val: "alex.kuz@example.com" },
                  { label: "University", val: "University of Nebraska-Lincoln" }
                ].map((item, i) => (
                  <div key={i} className="pb-4 border-b border-gray-800 last:border-0 md:last:border-0 md:nth-last-child-2:border-0">
                     <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                     <p className="font-medium">{item.val}</p>
                  </div>
                ))}
             </div>
             <div className="p-4 bg-black/20 border-t border-gray-800">
                <button className="h-9 px-4 bg-primary text-background-dark font-bold text-sm rounded-lg">Edit</button>
             </div>
          </div>

          {/* Docs */}
          <div className="bg-[#1a0d1a] border border-gray-800 rounded-xl overflow-hidden">
             <div className="p-5 border-b border-gray-800 flex items-center gap-3">
                <span className="material-symbols-outlined">verified_user</span>
                <h2 className="font-bold text-lg">Documentos y Verificaciones</h2>
             </div>
             <div className="p-6 space-y-4">
                {['Upload CV', 'Upload University Certificate'].map((item, i) => (
                   <div key={i} className="flex justify-between items-center">
                      <span>{item}</span>
                      <button className="h-9 px-4 bg-gray-800 hover:bg-gray-700 text-sm font-bold rounded-lg flex items-center gap-2">
                         <span className="material-symbols-outlined text-base">upload_file</span>
                         Upload
                      </button>
                   </div>
                ))}
                <div className="flex justify-between items-center pt-2">
                   <span>Verification Status</span>
                   <span className="px-2 py-1 bg-green-900/30 text-green-400 rounded-full text-xs font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">check_circle</span> Verified
                   </span>
                </div>
             </div>
          </div>

          {/* History */}
          <div className="bg-[#1a0d1a] border border-gray-800 rounded-xl overflow-hidden">
             <div className="p-5 border-b border-gray-800 flex items-center gap-3">
                <span className="material-symbols-outlined">history</span>
                <h2 className="font-bold text-lg">Historial de Actividad</h2>
             </div>
             <div className="p-6 space-y-4">
                {[
                  { title: "Social Media Manager", date: "2023-10-15", stars: 4.5 },
                  { title: "Local Tutoring Session", date: "2023-09-22", stars: 5 },
                ].map((item, i) => (
                  <div key={i} className="p-4 border border-gray-800 rounded-lg flex justify-between items-center">
                     <div>
                        <p className="font-bold">{item.title}</p>
                        <p className="text-sm text-gray-500">Completed on: {item.date}</p>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="flex text-yellow-500">
                           {[1,2,3,4,5].map(s => <span key={s} className="material-symbols-outlined fill-icon text-sm">star</span>)}
                        </div>
                        <button className="text-sm font-bold text-primary">View Details</button>
                     </div>
                  </div>
                ))}
             </div>
          </div>
       </div>
    </div>
  );
};

export default Profile;