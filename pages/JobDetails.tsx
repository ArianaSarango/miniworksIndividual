import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from '../components/Modal';

const JobDetails: React.FC = () => {
  const { id } = useParams();
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [hasApplied, setHasApplied] = useState(false);

  const handleApply = () => {
    setHasApplied(true);
    setIsApplyModalOpen(false);
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
         <span className="hover:text-primary cursor-pointer">Home</span>
         <span>/</span>
         <span className="hover:text-primary cursor-pointer">Jobs</span>
         <span>/</span>
         <span className="text-white">UI/UX Designer</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-8">
            <div>
               <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-red-900/20 text-red-400 mb-4 border border-red-900/50">
                  <span className="material-symbols-outlined text-lg">cancel</span>
                  <span className="text-xs font-bold">Esta oferta está cerrada. Ya no se aceptan postulaciones.</span>
               </div>
               
               <p className="text-sm text-gray-400 mb-1 underline">Posted by Tech Solutions Inc.</p>
               <h1 className="text-4xl font-black leading-tight mb-4">UI/UX Designer for Web Platform</h1>
               
               <div className="flex gap-3">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">Part-time</span>
                  <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm font-medium">One-time gig</span>
               </div>
            </div>

            <section>
               <h2 className="text-2xl font-bold mb-4">Job Details</h2>
               <p className="text-gray-300 leading-relaxed">
                 We are seeking a talented and passionate UI/UX Designer to join our team. You will be responsible for creating intuitive and visually appealing web interfaces for our new platform. The ideal candidate has a strong understanding of user-centered design principles.
               </p>
            </section>

            <section>
               <h2 className="text-2xl font-bold mb-4">Requirements</h2>
               <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Proven experience as a UI/UX Designer.</li>
                  <li>Portfolio of design projects.</li>
                  <li>Proficiency in Figma, Sketch or Adobe XD.</li>
                  <li>Strong communication skills.</li>
               </ul>
            </section>

            <section>
               <h2 className="text-2xl font-bold mb-4">Comments & Ratings</h2>
               <div className="bg-[#1a0d1a] border border-gray-800 rounded-xl p-4">
                  <div className="flex justify-between items-start mb-2">
                     <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-700"></div>
                        <div>
                           <p className="font-bold">Alex Johnson</p>
                           <p className="text-xs text-gray-500">June 10, 2024</p>
                        </div>
                     </div>
                     <div className="flex text-yellow-500 text-sm">
                        {[1,2,3,4,5].map(s => <span key={s} className="material-symbols-outlined fill-icon text-sm">star</span>)}
                     </div>
                  </div>
                  <p className="text-sm text-gray-300">Great experience working with this company. Very supportive team.</p>
               </div>
            </section>
         </div>

         <div className="lg:col-span-1 space-y-6">
            <div className="bg-[#1a0d1a] border border-gray-800 rounded-xl p-6">
               {hasApplied ? (
                  <div className="w-full h-12 bg-green-900/30 text-green-400 rounded-lg flex items-center justify-center gap-2 font-bold mb-4 border border-green-900/50">
                     <span className="material-symbols-outlined">check_circle</span>
                     Postulado
                  </div>
               ) : (
                  <button onClick={() => setIsApplyModalOpen(true)} className="w-full h-12 bg-primary text-background-dark font-bold rounded-lg hover:opacity-90 transition-opacity mb-4">
                     Postular
                  </button>
               )}
               <button className="w-full h-12 bg-transparent border border-gray-700 font-bold rounded-lg hover:bg-gray-800 transition-colors text-sm">
                  Contactar candidato
               </button>
            </div>

            <div className="bg-[#1a0d1a] border border-gray-800 rounded-xl p-6">
               <h3 className="font-bold text-lg mb-4">Job Summary</h3>
               <div className="space-y-4">
                  {[
                    { icon: 'payments', label: 'Remuneration', val: '$25/hour' },
                    { icon: 'schedule', label: 'Duration', val: '3 weeks' },
                    { icon: 'calendar_today', label: 'Dates', val: 'July 1 - July 21' },
                    { icon: 'location_on', label: 'Location', val: 'Lincoln, NE' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                       <div className="w-10 h-10 rounded-lg bg-background-dark flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined">{item.icon}</span>
                       </div>
                       <div>
                          <p className="text-xs text-gray-500">{item.label}</p>
                          <p className="font-bold">{item.val}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>

      <Modal 
        isOpen={isApplyModalOpen} 
        onClose={() => setIsApplyModalOpen(false)}
        title="Postular al trabajo"
        footer={
           <>
             <button onClick={() => setIsApplyModalOpen(false)} className="px-4 py-2 text-gray-400 hover:text-white font-medium">Cancelar</button>
             <button onClick={handleApply} className="px-4 py-2 bg-primary text-background-dark rounded-lg font-bold">Enviar Postulación</button>
           </>
        }
      >
        <p className="mb-4 text-gray-300">Estás a punto de postular para <strong>UI/UX Designer</strong>. ¿Deseas incluir tu CV actual?</p>
        <div className="flex items-center gap-3 p-3 bg-background-dark rounded-lg border border-gray-700">
           <span className="material-symbols-outlined text-gray-400">description</span>
           <div className="flex-1">
              <p className="text-sm font-bold">CV_Alexandra_2024.pdf</p>
              <p className="text-xs text-gray-500">Subido hace 2 días</p>
           </div>
           <span className="material-symbols-outlined text-green-500">check_circle</span>
        </div>
      </Modal>
    </div>
  );
};

export default JobDetails;