import React from 'react';
import { Home, Settings, Users, BarChart3, FileText, HelpCircle, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const location = useLocation();
const socialLinks = [
    {
      icon: Github,
      href: '#',
      label: 'GitHub'
    },
    {
      icon: Twitter,
      href: '#',
      label: 'Twitter'
    },
    {
      icon: Linkedin,
      href: '#',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:info@example.com',
      label: 'Email'
    }
  ];
  const menuItems = [
    {
      icon: Home,
      label: t('home') || 'Ana Sayfa',
      path: '/home',
      active: location.pathname === '/home'
    },
    {
      icon: BarChart3,
      label: t('analytics') || 'Analitik',
      path: '/analytics',
      active: location.pathname === '/analytics'
    },
    {
      icon: Users,
      label: t('users') || 'Kullanıcılar',
      path: '/users',
      active: location.pathname === '/users'
    },
    {
      icon: FileText,
      label: t('reports') || 'Raporlar',
      path: '/reports',
      active: location.pathname === '/reports'
    },
    {
      icon: Settings,
      label: t('settings') || 'Ayarlar',
      path: '/settings',
      active: location.pathname === '/settings'
    },
    {
      icon: HelpCircle,
      label: t('help') || 'Yardım',
      path: '/help',
      active: location.pathname === '/help'
    }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden "
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed top-16 left-0 z-50 w-64 bg-white shadow-lg transform transition-all duration-300 ease-in-out flex flex-col
        ${isOpen ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-full opacity-0 scale-95'}
        lg:translate-x-0 lg:static lg:z-auto lg:top-0 lg:opacity-100 lg:scale-100
        ${isOpen ? 'lg:block' : 'lg:hidden'}
        hover:shadow-xl
      `}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 lg:hidden">
          <div className="flex items-center space-x-2">
            <img src="./logo.png" alt="Logo" className="h-8 w-auto" />
            <span className="text-lg font-semibold text-gray-800">
              {t('appName') || 'Dashboard'}
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-md"
          >
            <X className="h-5 w-5 text-gray-600" />
          </Button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto ">
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 ">
              {t('navigation') || 'Navigasyon'}
            </h3>
            
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => {
                    // Mobile'da sidebar'ı kapat
                    if (window.innerWidth < 1024) {
                      onClose();
                    }
                  }}
                  className={`
                    group flex items-center space-x-3 px-3 py-2 mb-3 rounded-lg text-sm font-medium transition-all duration-200 ease-in-out transform
                    ${item.active 
                      ? 'bg-[#0B4F88] text-white shadow-md scale-105' 
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:scale-105 hover:shadow-sm hover:translate-x-1'
                    }
                  `}
                >
                  <Icon className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center justify-center">
            
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#0B4F88] transition-colors duration-200"
                    title={link.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;