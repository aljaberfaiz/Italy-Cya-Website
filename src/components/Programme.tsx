import { useState } from 'react';

const Programme = () => {
  const [activeDay, setActiveDay] = useState(0);

  const programme = [
    {
      date: '11 August',
      title: 'Arrival & Icebreakers',
      activities: [
        'Welcome reception and registration',
        'Icebreaker activities and team building',
        'Introduction to the project and objectives',
        'Cultural evening with local traditions',
        'Accommodation check-in and orientation'
      ],
      color: 'from-green-400 to-green-600'
    },
    {
      date: '12 August',
      title: 'Creative Workshops',
      activities: [
        'Digital storytelling workshop',
        'Sustainable design thinking session',
        'Creative problem-solving activities',
        'Collaborative art project initiation',
        'Reflection and peer learning circles'
      ],
      color: 'from-blue-400 to-blue-600'
    },
    {
      date: '13 August',
      title: 'Outdoor Activities',
      activities: [
        'Nature photography expedition',
        'Environmental awareness hike',
        'Outdoor team challenges',
        'Local community visit and exchange',
        'Evening cultural performances'
      ],
      color: 'from-orange-400 to-orange-600'
    },
    {
      date: '14 August',
      title: 'Closing & Departures',
      activities: [
        'Project presentations and showcase',
        'Youthpass certificate ceremony',
        'Evaluation and feedback session',
        'Farewell lunch and networking',
        'Departure arrangements'
      ],
      color: 'from-purple-400 to-purple-600'
    }
  ];

  return (
    <section id="programme" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Programme</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Four days of inspiring activities, workshops, and cultural exchange in the heart of the Italian Alps.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="flex justify-center mb-8">
            {programme.map((day, index) => (
              <button
                key={index}
                onClick={() => setActiveDay(index)}
                className={`mx-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeDay === index
                    ? 'bg-gradient-to-r text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } ${activeDay === index ? day.color : ''}`}
              >
                {day.date}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <div className={`bg-gradient-to-r ${programme[activeDay].color} rounded-xl p-6 text-white mb-6`}>
              <h3 className="text-2xl font-bold mb-2">{programme[activeDay].date}</h3>
              <h4 className="text-xl opacity-90">{programme[activeDay].title}</h4>
            </div>
            
            <div className="grid gap-4">
              {programme[activeDay].activities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${programme[activeDay].color}`}></div>
                  <span className="text-gray-800">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden space-y-4">
          {programme.map((day, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                onClick={() => setActiveDay(activeDay === index ? -1 : index)}
                className={`w-full p-6 text-left bg-gradient-to-r ${day.color} text-white`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold">{day.date}</h3>
                    <h4 className="text-lg opacity-90">{day.title}</h4>
                  </div>
                  <svg
                    className={`w-6 h-6 transform transition-transform ${
                      activeDay === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {activeDay === index && (
                <div className="p-6 space-y-3">
                  {day.activities.map((activity, actIndex) => (
                    <div key={actIndex} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${day.color}`}></div>
                      <span className="text-gray-800">{activity}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programme;