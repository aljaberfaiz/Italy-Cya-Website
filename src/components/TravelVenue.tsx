const TravelVenue = () => {
  return (
    <section id="travel-venue" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Travel & Venue</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Location: Prea, Italy</h3>
              <p className="opacity-90">Beautiful alpine village in the Piedmont region</p>
            </div>
            <div className="p-6">
              <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <img
                  src="https://i.nona.net/locmap_PREA_14.1153333X41.08X14.4513333X41.32.png"
                  alt="Map of Prea, Italy"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="text-sm text-gray-600">
                <p><strong>Address:</strong> Via Roma 123, 12010 Prea (CN), Italy</p>
                <p><strong>Nearest Airport:</strong> Turin Airport (TRN) - 2 hours by bus</p>
                <p><strong>Nearest Train Station:</strong> Cuneo - 45 minutes by local bus</p>
              </div>
            </div>
          </div>

          {/* Practical Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                Accommodation
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Shared rooms in a mountain lodge (2-4 people per room)</li>
                <li>• All bedding and towels provided</li>
                <li>• Common areas for socializing and activities</li>
                <li>• WiFi available throughout the facility</li>
                <li>• Step-free access and accessible facilities</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clipRule="evenodd" />
                </svg>
                Meals
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• All meals included (breakfast, lunch, dinner)</li>
                <li>• Vegetarian and vegan options available</li>
                <li>• Local Italian cuisine and international dishes</li>
                <li>• Special dietary requirements accommodated</li>
                <li>• Cooking workshops with local ingredients</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                Packing List
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Comfortable walking shoes and hiking boots</li>
                <li>• Weather-appropriate clothing (layers recommended)</li>
                <li>• Rain jacket and warm sweater</li>
                <li>• Personal toiletries and medications</li>
                <li>• Camera for capturing memories</li>
                <li>• Reusable water bottle and eco-friendly items</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Green Travel Section */}
        <div className="mt-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-4">Green Travel Initiative</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              We encourage all participants to choose low-emission transport options to reduce our environmental impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Train & Bus</h4>
              <p className="text-sm opacity-90">Preferred option with travel reimbursement up to €275</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H8zm0 2h8v12H8V4zm2 2a1 1 0 000 2h4a1 1 0 100-2h-4zm0 4a1 1 0 100 2h4a1 1 0 100-2h-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Carpooling</h4>
              <p className="text-sm opacity-90">Share rides with other participants</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Carbon Offset</h4>
              <p className="text-sm opacity-90">We offset remaining emissions through local projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelVenue;
