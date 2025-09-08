const Partners = () => {
  const partners = [
    {
      name: 'Creative Youth Academy Hungary',
      role: 'Lead Organization',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Lp0JW32j_HP8s4s2nAOKHsWrrkjjxb2Xsw&s'
    },
    {
      name: 'Italian Youth Council',
      role: 'Host Partner',
      logo: 'https://www.youthforum.org/files/MO-logos/18_CNJ.png'
    }
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Collaborating with organizations across Europe to create meaningful youth exchanges.
          </p>
        </div>

        {/* Partner Organizations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6">
              <div className="text-center">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-full h-24 object-contain bg-gray-50 rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full inline-block">
                  {partner.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Erasmus+ Funding Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-2/3 mb-6 lg:mb-0">
              <div className="flex items-center mb-4">
                <div className="bg-white rounded-lg p-3 mr-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Erasmus+ Programme</h3>
                  <p className="text-lg opacity-90">Key Action 1: Youth Exchanges</p>
                </div>
              </div>
              <p className="text-white/90 leading-relaxed">
                This project is co-funded by the European Union through the Erasmus+ programme.
                Erasmus+ supports education, training, youth and sport in Europe, promoting
                European cooperation and mobility.
              </p>
            </div>

            <div className="lg:w-1/3 text-center">
              <div className="bg-white rounded-xl p-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Erasmus%2B_Logo.svg/1598px-Erasmus%2B_Logo.svg.png?20191015130210"
                  alt="Erasmus+ Logo"
                  className="mx-auto h-16 object-contain"
                />
                <p className="text-blue-600 font-semibold text-sm mt-4">
                  Erasmus+ Programme
                </p>
              </div>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-center text-white/80 text-sm">
              <strong>Co-funded by the European Union.</strong> Views and opinions expressed are however
              those of the author(s) only and do not necessarily reflect those of the European Union or
              the European Education and Culture Executive Agency (EACEA). Neither the European Union
              nor EACEA can be held responsible for them.
            </p>
          </div>
        </div>

        {/* Project Statistics */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">6</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900">Countries</h4>
            <p className="text-gray-600">Participating nations</p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">36</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900">Participants</h4>
            <p className="text-gray-600">Young people involved</p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">4</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900">Days</h4>
            <p className="text-gray-600">Of intensive activities</p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">∞</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900">Impact</h4>
            <p className="text-gray-600">Lasting connections</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;