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
    <div className="min-h-screen bg-brand-dark font-sans w-full relative overflow-hidden">
      <div className="w-full max-w-2xl mx-auto min-h-screen flex flex-col">
        {/* Always render HomeScreen but manage its visibility/interaction */}
        <div className={`flex-1 flex flex-col ${currentScreen === 'onboarding' ? 'opacity-40 pointer-events-none scale-[0.98] blur-[2px]' : 'opacity-100'} transition-all duration-700`}>
          <HomeScreen
            key={userCategory || 'default'}
            onServiceSelect={handleServiceSelect}
            onConsultationClick={() => setCurrentScreen('consultation')}
            initialCategory={userCategory || undefined}
          />
        </div>

        {/* Onboarding Overlay */}
        {currentScreen === 'onboarding' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-500 p-4">
            <div className="w-full max-w-2xl h-[92vh] bg-[#0F0F0F] shadow-2xl overflow-hidden relative rounded-[40px] border border-white/10">
              <Onboarding onComplete={handleOnboardingComplete} />
            </div>
          </div>
        )}

        {/* Other screens (Service, Consultation) */}
        {currentScreen === 'service' && selectedService && (
          <div className="fixed inset-0 z-[60] bg-brand-dark overflow-y-auto">
            <div className="w-full max-w-2xl mx-auto">
              {(selectedService.activityType === 'restaurant' || selectedService.activityType === 'bakery' || selectedService.activityType === 'gelateria' || selectedService.activityType === 'optical' || selectedService.activityType === 'realestate' || selectedService.activityType === 'jewelry' || selectedService.activityType === 'kids') ? (
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
              )}
            </div>
          </div>
        )}

        {currentScreen === 'consultation' && (
          <div className="fixed inset-0 z-[60] bg-brand-dark overflow-y-auto">
            <div className="w-full max-w-2xl mx-auto">
              <ConsultationForm
                onBack={() => setCurrentScreen('home')}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;