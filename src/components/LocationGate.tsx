import React, { useState } from 'react';

interface Props {
  onGranted: () => void;
}

export default function LocationGate({ onGranted }: Props) {
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState('');
  const [manualMode, setManualMode] = useState(false);
  const [selectedState, setSelectedState] = useState('');

  const requestLocation = () => {
    setChecking(true);
    setError('');

    if (!navigator.geolocation) {
      setManualMode(true);
      setChecking(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Abia State approximate coordinates
        const { latitude, longitude } = position.coords;
        const isInAbia = (
          latitude >= 4.8 && latitude <= 5.9 &&
          longitude >= 7.0 && longitude <= 8.0
        );

        if (isInAbia) {
          onGranted();
        } else {
          setError('Sorry! Evma currently delivers only within Abia State. Please check back when we expand to your area.');
          setChecking(false);
        }
      },
      () => {
        setManualMode(true);
        setChecking(false);
      },
      { timeout: 10000 }
    );
  };

  const handleManualCheck = () => {
    if (selectedState.toLowerCase() === 'abia') {
      onGranted();
    } else {
      setError('Sorry! Evma currently delivers only within Abia State. Please check back when we expand to your area.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-yellow-400 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-orange-400 blur-3xl"></div>
      </div>

      <div className="relative z-10 bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 max-w-md mx-4 text-center">
        {/* Logo */}
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-3xl font-bold text-white">E</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mt-4">Evma</h1>
          <p className="text-gray-500 mt-1">Authentic Nigerian Cuisine</p>
        </div>

        <div className="mb-6">
          <div className="w-16 h-16 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Location Access Required</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            We currently serve only within <strong>Abia State</strong>. Please allow us to access your location to confirm you're in our delivery area.
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
            {error}
          </div>
        )}

        {!manualMode ? (
          <button
            onClick={requestLocation}
            disabled={checking}
            className="w-full py-3 px-6 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50"
          >
            {checking ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Checking location...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Allow Location Access
              </span>
            )}
          </button>
        ) : (
          <div className="space-y-3">
            <p className="text-sm text-gray-600">Please select your state:</p>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
            >
              <option value="">Select your state</option>
              <option value="abia">Abia State</option>
              <option value="lagos">Lagos State</option>
              <option value="rivers">Rivers State</option>
              <option value="enugu">Enugu State</option>
              <option value="anambra">Anambra State</option>
              <option value="imo">Imo State</option>
              <option value="other">Other State</option>
            </select>
            <button
              onClick={handleManualCheck}
              className="w-full py-3 px-6 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Confirm Location
            </button>
          </div>
        )}

        <button
          onClick={() => setManualMode(true)}
          className="mt-4 text-sm text-gray-500 hover:text-amber-600 transition-colors"
        >
          Can't access location? Select manually
        </button>
      </div>
    </div>
  );
}
