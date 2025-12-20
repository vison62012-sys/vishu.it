import React, { useState, useEffect } from 'react';
import HomeScreen from './components/HomeScreen';
import ServiceDetail from './components/ServiceDetail';
import RestaurantServiceDetail from './components/RestaurantServiceDetail';
import ConsultationForm from './components/ConsultationForm';
import Onboarding from './components/Onboarding';
import { CONSULTING_SERVICES } from './constants';

type Screen = 'onboarding' | 'home' | 'service' | 'consultation';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('onboarding');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [userCategory, setUserCategory] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentScreen, selectedServiceId]);

  const handleOnboardingComplete = (categoryId: string) => {
    setUserCategory(categoryId);
    setCurrentScreen('home');
  };

  const handleServiceSelect = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setCurrentScreen('service');
  };

  const selectedService = CONSULTING_SERVICES.find(s => s.id === selectedServiceId);

  return (
    <div className="min-h-screen bg-brand-dark font-sans w-full">
      <div className="w-full max-w-2xl mx-auto">
        {/* Screen Routing */}
        {currentScreen === 'onboarding' ? (
          <Onboarding onComplete={handleOnboardingComplete} />
        ) : currentScreen === 'home' ? (
          <HomeScreen
            onServiceSelect={handleServiceSelect}
            onConsultationClick={() => setCurrentScreen('consultation')}
            initialCategory={userCategory || undefined}
          />
        ) : currentScreen === 'service' && selectedService ? (
          (selectedService.activityType === 'restaurant' || selectedService.activityType === 'bakery' || selectedService.activityType === 'gelateria' || selectedService.activityType === 'optical' || selectedService.activityType === 'realestate' || selectedService.activityType === 'jewelry' || selectedService.activityType === 'kids') ? (
            <RestaurantServiceDetail
              service={selectedService}
              onBack={() => {
                setCurrentScreen('home');
                setSelectedServiceId('');
              }}
              onConsultationClick={() => setCurrentScreen('consultation')}
            />
          ) : (
            <ServiceDetail
              service={selectedService}
              onBack={() => {
                setCurrentScreen('home');
                setSelectedServiceId('');
              }}
              onConsultationClick={() => setCurrentScreen('consultation')}
            />
          )
        ) : currentScreen === 'consultation' ? (
          <ConsultationForm
            onBack={() => setCurrentScreen('home')}
          />
        ) : null}
      </div>
    </div>
  );
};

export default App;