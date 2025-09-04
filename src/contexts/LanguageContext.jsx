import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Çeviri verileri
const translations = {
  az: {
    // Login sayfası
    send: 'Göndər',
    welcome: 'Xoş Gəlmişsiniz',
    loginToAccount: 'Hesabınıza daxil olun',
    demoUsers: 'Demo İstifadəçilər:',
    username: 'İstifadəçi Adı',
    enterUsername: 'İstifadəçi adınızı daxil edin',
    password: 'Şifrə',
    enterPassword: 'Şifrənizi daxil edin',
    login: 'Daxil Ol',
    loggingIn: 'Daxil olunur...',
    fillAllFields: 'Lütfən bütün sahələri doldurun!',
    invalidCredentials: 'İstifadəçi adı və ya şifrə səhvdir!',
    demoAppNote: 'Bu demo tətbiqdir. Yuxarıdakı demo istifadəçiləri istifadə edin.',
    
    // Home sayfası
    dashboard: 'İdarə Paneli',
    logout: 'Çıxış',
    welcomeUser: 'Xoş gəldin',
    dashboardWelcome: 'İdarə panelinə uğurla daxil oldunuz. Burada hesab məlumatlarınızı görə bilərsiniz.',
    profileInfo: 'Profil Məlumatları',
    accountStatus: 'Hesab Vəziyyəti',
    active: 'Aktiv',
    loginSuccessful: 'Giriş uğurlu',
    userId: 'İstifadəçi ID',
    uniqueId: 'Unikal identifikator',
    quickActions: 'Sürətli Əməliyyatlar',
    editProfile: 'Profili Redaktə Et',
    settings: 'Tənzimləmələr',
    notifications: 'Bildirişlər',
    demoApp: 'Demo Tətbiqi',
    demoAppDescription: 'Bu demo tətbiqdir. Bütün məlumatlar müvəqqətidir və həqiqi verilənlər bazasında saxlanılmır. Context API istifadə edilərək istifadəçi vəziyyəti idarə olunur.',
    
    // Genel
    loading: 'Yüklənir...',
    pageNotFound: 'Səhifə tapılmadı',
    backToHome: 'Ana səhifəyə qayıt',
    language: 'Dil',
    
    // Sayfa başlıkları
    loginPageTitle: 'Daxil ol',
    homePageTitle: 'İdarə Paneli - Demo Tətbiqi',
    notFoundPageTitle: '404 - Səhifə Tapılmadı'
  },
  en: {
    // Login page
    send: 'Send',
    welcome: 'Welcome',
    loginToAccount: 'Sign in to your account',
    demoUsers: 'Demo Users:',
    username: 'Username',
    enterUsername: 'Enter your username',
    password: 'Password',
    enterPassword: 'Enter your password',
    login: 'Sign In',
    loggingIn: 'Signing in...',
    fillAllFields: 'Please fill in all fields!',
    invalidCredentials: 'Username or password is incorrect!',
    demoAppNote: 'This is a demo application. Use the demo users above.',
    
    // Home page
    dashboard: 'Dashboard',
    logout: 'Logout',
    welcomeUser: 'Welcome',
    dashboardWelcome: 'You have successfully logged into the dashboard. Here you can view your account information.',
    profileInfo: 'Profile Information',
    accountStatus: 'Account Status',
    active: 'Active',
    loginSuccessful: 'Login successful',
    userId: 'User ID',
    uniqueId: 'Unique identifier',
    quickActions: 'Quick Actions',
    editProfile: 'Edit Profile',
    settings: 'Settings',
    notifications: 'Notifications',
    demoApp: 'Demo Application',
    demoAppDescription: 'This is a demo application. All data is temporary and not stored in a real database. User state is managed using Context API.',
    
    // General
    loading: 'Loading...',
    pageNotFound: 'Page not found',
    backToHome: 'Back to home',
    language: 'Language',
    
    // Page titles
    loginPageTitle: 'Login',
    homePageTitle: 'Dashboard - Demo Application',
    notFoundPageTitle: '404 - Page Not Found'
  }
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('az');

  useEffect(() => {
    // Sayfa yüklendiğinde localStorage'dan dil tercihini kontrol et
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'az' || savedLanguage === 'en')) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (language) => {
    if (language === 'az' || language === 'en') {
      setCurrentLanguage(language);
      localStorage.setItem('language', language);
    }
  };

  const t = (key) => {
    return translations[currentLanguage][key] || key;
  };

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    availableLanguages: [
      { code: 'az', name: 'Azərbaycan' },
      { code: 'en', name: 'English' }
    ]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};