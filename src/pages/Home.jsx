import React, { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LogOut, User, Home as HomeIcon, Settings, Bell, Edit } from 'lucide-react';
import LanguageSwitcher from '../components/LanguageSwitcher';

const Home = () => {
  const { user, logout } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  // Sayfa başlığını güncelle
  useEffect(() => {
    document.title = t('homePageTitle');
  }, [t]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <HomeIcon className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="ml-4">
                  <h1 className="text-xl font-semibold text-gray-900">{t('dashboard')}</h1>
                </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-indigo-600 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {user?.name} {user?.surname}
                </span>
              </div>
              
              <LanguageSwitcher />
              
              <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="flex items-center space-x-2"
              >
                <LogOut className="h-4 w-4" />
                <span>{t('logout')}</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Welcome Section */}
          <div className="bg-white overflow-hidden shadow rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="ml-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {t('welcome')}, {user?.name}!
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    {t('dashboardWelcome')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* User Info Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Profile Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <User className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {t('profileInfo')}
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        {user?.name} {user?.surname}
                      </dd>
                      <dd className="text-sm text-gray-500">
                        @{user?.username}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Status Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-6 w-6 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {t('accountStatus')}
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        {t('active')}
                      </dd>
                      <dd className="text-sm text-gray-500">
                        {t('loginSuccessful')}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* User ID Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Settings className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {t('userId')}
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        #{user?.id}
                      </dd>
                      <dd className="text-sm text-gray-500">
                        Benzersiz kimlik
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-6">
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  {t('quickActions')}
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <Button
                    variant="outline"
                    className="flex items-center justify-center space-x-2 h-12"
                  >
                    <User className="h-4 w-4" />
                    <span>{t('editProfile')}</span>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="flex items-center justify-center space-x-2 h-12"
                  >
                    <Settings className="h-4 w-4" />
                    <span>{t('settings')}</span>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="flex items-center justify-center space-x-2 h-12"
                  >
                    <Bell className="h-4 w-4" />
                    <span>{t('notifications')}</span>
                  </Button>
                  
                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    className="flex items-center justify-center space-x-2 h-12 text-red-600 border-red-200 hover:bg-red-50"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>{t('logout')}</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Demo Info */}
          <div className="mt-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="h-5 w-5 text-blue-400">
                    ℹ️
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">
                    {t('demoApp')}
                  </h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>
                      {t('demoAppDescription')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;