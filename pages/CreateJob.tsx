import React from 'react';

const CreateJob: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
       <h1 className="text-3xl font-black mb-8">Create New Job</h1>
       
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-2 space-y-6">
             <div className="bg-[#1a0d1a] border border-gray-800 rounded-xl overflow-hidden">
                <div className="p-4 border-b border-gray-800 bg-background-dark">
                   <h2 className="font-bold">Job Details</h2>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="md:col-span-2 space-y-2">
                      <label className="text-sm font-medium text-gray-300">Job Title</label>
                      <input type="text" className="w-full h-12 bg-background-dark border border-gray-700 rounded-lg px-4 focus:border-primary outline-none" placeholder="e.g. Social Media Assistant" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Category</label>
                      <select className="w-full h-12 bg-background-dark border border-gray-700 rounded-lg px-4 focus:border-primary outline-none text-gray-300">
                         <option>Select...</option>
                         <option>Tutoring</option>
                         <option>Design</option>
                      </select>
                   </div>
                   <div className="md:col-span-2 space-y-2">
                      <label className="text-sm font-medium text-gray-300">Description</label>
                      <textarea className="w-full h-32 bg-background-dark border border-gray-700 rounded-lg p-4 focus:border-primary outline-none resize-none" placeholder="Describe the role..."></textarea>
                   </div>
                </div>
             </div>

             <div className="bg-[#1a0d1a] border border-gray-800 rounded-xl overflow-hidden">
                <div className="p-4 border-b border-gray-800 bg-background-dark">
                   <h2 className="font-bold">Logistics</h2>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2 space-y-2">
                       <label className="text-sm font-medium text-gray-300">Skills</label>
                       <div className="flex flex-wrap gap-2 p-3 bg-background-dark border border-gray-700 rounded-lg">
                          <span className="bg-primary/20 text-primary px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">Canva <button>×</button></span>
                          <span className="bg-primary/20 text-primary px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">Service <button>×</button></span>
                          <input type="text" className="bg-transparent outline-none text-sm min-w-[100px]" placeholder="Add skill..." />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-medium text-gray-300">Remuneration</label>
                       <input type="text" className="w-full h-12 bg-background-dark border border-gray-700 rounded-lg px-4 focus:border-primary outline-none" placeholder="$15/hr" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-medium text-gray-300">Location</label>
                       <input type="text" className="w-full h-12 bg-background-dark border border-gray-700 rounded-lg px-4 focus:border-primary outline-none" placeholder="Remote or Address" />
                    </div>
                </div>
             </div>
          </div>

          {/* Preview */}
          <div className="lg:col-span-1 sticky top-6">
             <div className="bg-[#1a0d1a] border border-gray-800 rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                   <h3 className="font-bold">Live Preview</h3>
                   <span className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-400">Card</span>
                </div>
                
                <div className="border border-dashed border-gray-700 rounded-xl p-4">
                   <div className="flex justify-between items-start mb-3">
                      <div>
                         <h4 className="font-bold text-lg">Social Media Assistant</h4>
                         <p className="text-primary text-sm font-bold">MiniWorks Inc.</p>
                      </div>
                      <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                   </div>
                   
                   <div className="flex flex-wrap gap-3 text-xs text-gray-400 mb-3">
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span> Remote</span>
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">payments</span> $15/hr</span>
                   </div>
                   
                   <p className="text-sm text-gray-300 mb-4 line-clamp-3">Describe the responsibilities and requirements for this job... We are looking for a creative student...</p>
                   
                   <div className="flex gap-2 mb-4">
                      <span className="text-xs bg-gray-800 px-2 py-1 rounded-full text-gray-300">Canva</span>
                      <span className="text-xs bg-gray-800 px-2 py-1 rounded-full text-gray-300">Service</span>
                   </div>
                   
                   <button className="w-full h-9 bg-primary text-background-dark font-bold text-sm rounded-lg">Apply Now</button>
                </div>
             </div>
             
             <div className="flex gap-4 mt-6 justify-end">
                <button className="h-12 px-6 bg-gray-800 rounded-lg font-bold hover:bg-gray-700">Draft</button>
                <button className="h-12 px-6 bg-primary text-background-dark rounded-lg font-bold hover:opacity-90">Publish Job</button>
             </div>
          </div>
       </div>
    </div>
  );
};

export default CreateJob;