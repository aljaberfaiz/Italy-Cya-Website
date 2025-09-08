const Contact = () => {
  const teamMembers = [
    {
      name: 'Maria Rossi',
      role: 'Project Coordinator',
      email: 'maria.rossi@creativeyouthacademy.eu',
      country: 'Italy',
      flag: '🇮🇹'
    },
    {
      name: 'Anna Kovács',
      role: 'Lead Organizer',
      email: 'anna.kovacs@creativeyouthacademy.eu',
      country: 'Hungary',
      flag: '🇭🇺'
    },
    {
      name: 'Pierre Dubois',
      role: 'Youth Worker',
      email: 'pierre.dubois@creativeyouthacademy.eu',
      country: 'France',
      flag: '🇫🇷'
    }
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: '📷',
      url: '#',
      color: 'from-pink-500 to-purple-500'
    },
    {
      name: 'Facebook',
      icon: '📘',
      url: '#',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'YouTube',
      icon: '📺',
      url: '#',
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: '#',
      color: 'from-blue-600 to-blue-700'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Have questions about the Creative Youth Academy? We're here to help! 
            Reach out to our team for more information.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Project Team</h3>
              <div className="space-y-6">
                {teamMembers.map((member, index) => (
                  <div key={index} className="bg-white/20 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold">{member.name}</h4>
                      <span className="text-2xl">{member.flag}</span>
                    </div>
                    <p className="text-white/90 mb-2">{member.role}</p>
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-white/80 hover:text-white text-sm underline transition-colors"
                    >
                      {member.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">General Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a 
                      href="mailto:info@creativeyouthacademy.eu"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      info@creativeyouthacademy.eu
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Prea, Piedmont, Italy</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-orange-100 rounded-full p-3">
                    <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Dates</h4>
                    <p className="text-gray-600">11–14 August 2025</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 rounded-full p-3">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Emergency</h4>
                    <p className="text-gray-600">+39 123 456 7890</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Additional Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Follow Our Journey</h3>
              <p className="text-gray-600 mb-6">
                Stay updated with the latest news, behind-the-scenes content, and connect 
                with other participants through our social media channels.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`bg-gradient-to-r ${social.color} text-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center`}
                  >
                    <div className="text-2xl mb-2">{social.icon}</div>
                    <div className="font-semibold">{social.name}</div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Application Process</h3>
              <p className="text-white/90 mb-6">
                Ready to join us in Prea? The application process is simple and straightforward. 
                Contact your local partner organization or reach out to us directly.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <span className="text-white/90">Contact your national partner</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <span className="text-white/90">Complete application form</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <span className="text-white/90">Attend selection interview</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <span className="text-white/90">Prepare for your adventure!</span>
                </div>
              </div>

              <button className="mt-6 bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Application
              </button>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 rounded-full p-2 mr-3">
                  <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-yellow-800">Application Deadline</h4>
              </div>
              <p className="text-yellow-700">
                Applications close on <strong>29 June 2025</strong>. Don't miss out on this 
                amazing opportunity to connect with young people from across Europe!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;