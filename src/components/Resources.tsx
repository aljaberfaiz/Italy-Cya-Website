const Resources = () => {
  const resources = [
    {
      title: 'Digital Storytelling Toolkit',
      description: 'Complete guide with templates and examples for creating compelling digital narratives.',
      type: 'Toolkit',
      format: 'PDF + Templates',
      icon: '📱',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Sustainable Design Workshop Materials',
      description: 'Hands-on activities and frameworks for eco-friendly creative projects.',
      type: 'Workshop Materials',
      format: 'Interactive PDF',
      icon: '🌱',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Creative Problem-Solving Handbook',
      description: 'Methods and techniques for innovative thinking and collaborative solutions.',
      type: 'Handbook',
      format: 'Digital Guide',
      icon: '💡',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Youth Participation Best Practices',
      description: 'Research-based strategies for meaningful youth engagement in projects.',
      type: 'Research Paper',
      format: 'Academic PDF',
      icon: '👥',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Intercultural Communication Guide',
      description: 'Tips and exercises for effective cross-cultural collaboration.',
      type: 'Guide',
      format: 'Interactive Workbook',
      icon: '🌍',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Project Evaluation Templates',
      description: 'Ready-to-use forms and frameworks for assessing project impact.',
      type: 'Templates',
      format: 'Editable Documents',
      icon: '📊',
      color: 'from-red-500 to-rose-500'
    }
  ];

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Educational Resources</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Open educational resources developed through our project, freely available for youth workers and educators.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className={`bg-gradient-to-r ${resource.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{resource.icon}</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                <p className="text-white/90 text-sm">{resource.format}</p>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-medium transition-colors">
                    Preview
                  </button>
                  <button className={`bg-gradient-to-r ${resource.color} text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all`}>
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Creative Commons Section */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Open Educational Resources</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              All our educational materials are released under Creative Commons licenses, 
              promoting open access to quality youth education resources.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2v.01h12V6H4zm0 2v6h12V8H4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">CC BY-SA 4.0</h4>
              <p className="text-sm text-gray-300">Share and adapt with attribution</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Quality Assured</h4>
              <p className="text-sm text-gray-300">Peer-reviewed and tested materials</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Multiple Formats</h4>
              <p className="text-sm text-gray-300">PDF, interactive, and editable versions</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/20 text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="bg-white rounded-lg p-2">
                <span className="text-gray-800 font-bold text-sm">CC</span>
              </div>
              <div className="bg-white rounded-lg p-2">
                <span className="text-gray-800 font-bold text-sm">BY</span>
              </div>
              <div className="bg-white rounded-lg p-2">
                <span className="text-gray-800 font-bold text-sm">SA</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Creative Commons Attribution-ShareAlike 4.0 International License
            </p>
          </div>
        </div>

        {/* Usage Statistics */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">12</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900">Resources</h4>
            <p className="text-gray-600">Available for download</p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">8</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900">Languages</h4>
            <p className="text-gray-600">Translation available</p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">500+</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900">Downloads</h4>
            <p className="text-gray-600">Since project launch</p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">25</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900">Organizations</h4>
            <p className="text-gray-600">Using our materials</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;