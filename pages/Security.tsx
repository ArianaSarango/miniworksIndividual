import React, { useState } from 'react';
import Modal from '../components/Modal';

interface Session {
  id: number;
  name: string;
  details: string;
  active: boolean;
  type: 'desktop' | 'mobile';
}

const Security: React.FC = () => {
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [sessions, setSessions] = useState<Session[]>([
    { id: 1, name: 'Chrome on Windows', details: 'Lincoln, NE · 192.168.1.1', active: true, type: 'desktop' },
    { id: 2, name: 'MiniWorks App on iOS', details: 'Omaha, NE · 10.0.0.5 · 2 hours ago', active: false, type: 'mobile' }
  ]);
  const [sessionToRevoke, setSessionToRevoke] = useState<Session | null>(null);

  const handleRevokeSession = () => {
    if (sessionToRevoke) {
      setSessions(sessions.filter(s => s.id !== sessionToRevoke.id));
      setSessionToRevoke(null);
    }
  };

  const handleRevokeAll = () => {
    setSessions(sessions.filter(s => s.active));
  };

  return (
    <div className="max-w-4xl mx-auto">
       <div className="mb-8">
          <h1 className="text-3xl font-black mb-2">Ajustes de Seguridad</h1>
          <p className="text-gray-400">Manage your password, two-factor authentication, and active sessions.</p>
       </div>

       <div className="space-y-8">
          {/* Password */}
          <section className="bg-[#1a0d1a] border border-gray-800 rounded-xl p-6">
             <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-gray-500">lock</span> Cambiar contraseña
             </h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2 space-y-2">
                   <label className="text-sm font-medium text-gray-300">Current password</label>
                   <input type="password" className="w-full h-12 bg-background-dark border border-gray-700 rounded-lg px-4 focus:border-primary outline-none" />
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-medium text-gray-300">New password</label>
                   <input type="password" className="w-full h-12 bg-background-dark border border-gray-700 rounded-lg px-4 focus:border-primary outline-none" />
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-medium text-gray-300">Confirm new password</label>
                   <input type="password" className="w-full h-12 bg-background-dark border border-gray-700 rounded-lg px-4 focus:border-primary outline-none" />
                </div>
             </div>
             <div className="mt-6 flex justify-end">
                <button className="h-10 px-6 bg-primary text-background-dark font-bold text-sm rounded-lg">Save Changes</button>
             </div>
          </section>

          {/* 2FA */}
          <section className="bg-[#1a0d1a] border border-gray-800 rounded-xl p-6">
             <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold flex items-center gap-3">
                   <span className="material-symbols-outlined text-gray-500">shield</span> Autenticación en dos pasos (2FA)
                </h2>
                <div className="flex items-center gap-3">
                   <span className="text-sm text-gray-400">Enable 2FA</span>
                   <button 
                     onClick={() => setIs2FAEnabled(!is2FAEnabled)}
                     className={`w-12 h-6 rounded-full transition-colors relative ${is2FAEnabled ? 'bg-primary' : 'bg-gray-700'}`}
                   >
                     <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all ${is2FAEnabled ? 'left-6.5' : 'left-0.5'}`}></div>
                   </button>
                </div>
             </div>
             
             {is2FAEnabled && (
               <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row gap-8">
                  <div className="flex flex-col items-center">
                     <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center text-black font-bold">QR CODE</div>
                     <p className="text-xs text-gray-500 mt-2">Scan with app</p>
                  </div>
                  <div className="flex-1 space-y-4">
                     <div>
                        <p className="text-sm font-medium mb-2">Or enter code manually:</p>
                        <div className="bg-gray-800 p-3 rounded-lg font-mono tracking-widest text-center">ABCD EFGH IJKL</div>
                     </div>
                     <div>
                        <label className="text-sm font-medium block mb-2">Verify Code</label>
                        <input type="text" className="w-40 h-10 bg-background-dark border border-gray-700 rounded-lg px-3 text-center" placeholder="123456" />
                     </div>
                  </div>
               </div>
             )}
          </section>

          {/* Sessions */}
          <section className="bg-[#1a0d1a] border border-gray-800 rounded-xl p-6">
             <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-gray-500">devices</span> Sesiones Activas
             </h2>
             <ul className="divide-y divide-gray-800">
                {sessions.map(session => (
                  <li key={session.id} className="py-4 flex items-center justify-between">
                     <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-3xl text-gray-500">
                           {session.type === 'desktop' ? 'desktop_windows' : 'smartphone'}
                        </span>
                        <div>
                           <p className="font-medium flex items-center gap-2">
                              {session.name}
                              {session.active && <span className="px-2 py-0.5 bg-green-900/30 text-green-400 text-xs rounded-full">Current</span>}
                           </p>
                           <p className="text-sm text-gray-500">{session.details}</p>
                        </div>
                     </div>
                     {!session.active ? (
                        <button onClick={() => setSessionToRevoke(session)} className="px-3 py-1.5 border border-gray-700 rounded-lg text-sm hover:bg-gray-800">Cerrar sesión</button>
                     ) : (
                        <button disabled className="px-3 py-1.5 bg-gray-800 text-gray-500 rounded-lg text-sm cursor-default">Active</button>
                     )}
                  </li>
                ))}
             </ul>
          </section>

          {/* Danger Zone */}
          <section className="bg-[#1a0d1a] border border-red-900/30 rounded-xl p-6 flex items-start gap-4">
             <span className="material-symbols-outlined text-3xl text-red-500">warning</span>
             <div>
                <h3 className="text-lg font-bold text-white">Cerrar todas las demás sesiones</h3>
                <p className="text-gray-400 mb-4 text-sm">Sign out of all other devices.</p>
                <button onClick={handleRevokeAll} className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-lg transition-colors">
                   Cerrar todas las sesiones
                </button>
             </div>
          </section>
       </div>

       <Modal
          isOpen={!!sessionToRevoke}
          onClose={() => setSessionToRevoke(null)}
          title="Revocar Sesión"
          footer={
             <>
               <button onClick={() => setSessionToRevoke(null)} className="px-4 py-2 text-gray-400 hover:text-white">Cancelar</button>
               <button onClick={handleRevokeSession} className="px-4 py-2 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700">Sí, cerrar sesión</button>
             </>
          }
       >
          <p className="text-gray-300">¿Estás seguro que deseas cerrar la sesión en <strong>{sessionToRevoke?.name}</strong>?</p>
       </Modal>
    </div>
  );
};

export default Security;