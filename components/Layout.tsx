import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';

const Layout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isEmployer = location.pathname.includes('employer') || location.pathname.includes('create-job');
  
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = isEmployer ? [
    { name: 'Dashboard', icon: 'dashboard', path: '/employer-dashboard' },
    { name: 'Mis ofertas', icon: 'work', path: '/employer-dashboard', activeIcon: true }, // Reusing dash for demo
    { name: 'Mensajes', icon: 'mail', path: '#' },
    { name: 'Perfil', icon: 'person', path: '/profile' },
  ] : [
    { name: 'Explorar Trabajos', icon: 'search', path: '/student-dashboard' },
    { name: 'Mis Postulaciones', icon: 'work', path: '#' },
    { name: 'Historial', icon: 'history', path: '#' },
    { name: 'Perfil', icon: 'person', path: '/profile' },
    { name: 'Seguridad', icon: 'settings', path: '/security' },
  ];

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen bg-background-dark text-white font-display">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex w-64 flex-col border-r border-gray-800 bg-[#1a0d1a]">
        <div className="flex flex-col h-full p-4">
          <div className="flex items-center gap-3 px-2 mb-8 mt-2">
             <div className="size-8 text-primary">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fillRule="evenodd"></path>
              </svg>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold tracking-tight">MiniWorks</h1>
              <p className="text-xs text-gray-400">{isEmployer ? 'Employer Portal' : 'Student Portal'}</p>
            </div>
          </div>

          <nav className="flex-1 flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-primary/20 text-primary' 
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <span className={`material-symbols-outlined ${isActive ? 'fill-icon' : ''}`}>{link.icon}</span>
                  <span className="text-sm font-medium">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto pt-4 border-t border-gray-800">
             <Link
              to="/help"
              className="flex items-center gap-3 px-3 py-3 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors"
            >
              <span className="material-symbols-outlined">help</span>
              <span className="text-sm font-medium">Help Center</span>
            </Link>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors text-left"
            >
              <span className="material-symbols-outlined">logout</span>
              <span className="text-sm font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between p-4 border-b border-gray-800 bg-[#1a0d1a]">
          <div className="flex items-center gap-3">
             <div className="size-6 text-primary">
                <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fillRule="evenodd"></path>
                </svg>
              </div>
             <span className="font-bold">MiniWorks</span>
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className="material-symbols-outlined">menu</span>
          </button>
        </header>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#1a0d1a] border-b border-gray-800 p-4 absolute top-16 left-0 w-full z-50">
             <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-800 text-gray-300"
                  >
                    <span className="material-symbols-outlined">{link.icon}</span>
                    <span className="text-sm font-medium">{link.name}</span>
                  </Link>
                ))}
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-800 text-gray-300 w-full text-left"
                >
                  <span className="material-symbols-outlined">logout</span>
                  <span className="text-sm font-medium">Logout</span>
                </button>
             </nav>
          </div>
        )}

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-background-dark p-4 md:p-8">
           <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;