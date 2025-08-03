import React, { useState } from 'react';

import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { TrendingUp, AlertTriangle, Shield, Target, Activity, Calendar, Clock, Zap } from 'lucide-react';
import './App.css'



const App = () => {
  const [activeTab, setActiveTab] = useState('performance');
  
 
  // Sample player data for an IPL player
  const playerData = {
    name: "Suryakumar Yadav",
    jerseyNumber: "63",
    team: "Mumbai Indians",
    role: "Batsman",
    age: 34,
    ipl_runs: "2620",
    matches: "139",
    average: "31.2",
    highScore: "103*",
    strikeRate: "144.12",
    profileImg: "/api/placeholder/300/600"
  };
  
  // Dismissal pattern data
  const dismissalData = [
    { name: 'Outside Off', value: 38, color: '#FF4560' },
    { name: 'Yorker', value: 22, color: '#00E396' },
    { name: 'Slower Ball', value: 18, color: '#FEB019' },
    { name: 'Short Ball', value: 15, color: '#775DD0' },
    { name: 'Straight Delivery', value: 7, color: '#008FFB' }
  ];
  
  // Strength zones data
  const strengthData = [
    { name: 'Sweep Shot', value: 35, color: '#008FFB' },
    { name: 'Square Cut', value: 24, color: '#00E396' },
    { name: 'Pull Shot', value: 18, color: '#FEB019' },
    { name: 'Cover Drive', value: 15, color: '#FF4560' },
    { name: 'Straight Drive', value: 8, color: '#775DD0' }
  ];
  
  // Runs against IPL teams
  const runsVsTeams = [
    { name: 'CSK', runs: 420 },
    { name: 'RCB', runs: 380 },
    { name: 'KKR', runs: 340 },
    { name: 'PBKS', runs: 295 },
    { name: 'RR', runs: 325 },
    { name: 'DC', runs: 270 },
    { name: 'SRH', runs: 310 },
    { name: 'GT', runs: 280 },
  ];
  
  // Runs by IPL season
  const runsBySeason = [
    { year: '2018', runs: 320 },
    { year: '2019', runs: 424 },
    { year: '2020', runs: 480 },
    { year: '2021', runs: 512 },
    { year: '2022', runs: 444 },
    { year: '2023', runs: 362 },
    { year: '2024', runs: 78 }
  ];
  
  // Injury history data
  const injuryHistory = [
    { type: 'Hamstring Strain', date: 'May 2022', duration: '3 weeks', recurrence: false },
    { type: 'Lower Back Pain', date: 'April 2023', duration: '2 weeks', recurrence: true },
    { type: 'Ankle Sprain', date: 'March 2021', duration: '2 weeks', recurrence: false },
    { type: 'Groin Strain', date: 'May 2020', duration: '4 weeks', recurrence: false }
  ];
  
  // Workload data (balls faced in matches)
  const workloadData = [
    { date: 'Apr 12', balls: 24 },
    { date: 'Apr 16', balls: 32 },
    { date: 'Apr 20', balls: 18 },
    { date: 'Apr 25', balls: 42 },
    { date: 'Apr 29', balls: 35 },
    { date: 'May 4', balls: 28 },
    { date: 'May 8', balls: 46 }
  ];

  // Injury risk factors radar chart
  const riskFactors = [
    { subject: 'Workload', A: 80, fullMark: 100 },
    { subject: 'Recovery', A: 65, fullMark: 100 },
    { subject: 'Sleep Quality', A: 70, fullMark: 100 },
    { subject: 'Nutrition', A: 85, fullMark: 100 },
    { subject: 'Biomechanics', A: 60, fullMark: 100 },
    { subject: 'Prev. Injuries', A: 75, fullMark: 100 },
  ];
  
  // Improvement suggestions - performance
  const performanceSuggestions = [
    "Work on technique against deliveries outside off stump - 38% of dismissals",
    "Develop more scoring options against slower balls in death overs",
    "Improve footwork against short-pitched deliveries from pace bowlers",
    "Practice yorker defense with specific drills during practice sessions"
  ];
  
  // Injury prevention suggestions
  const injurySuggestions = [
    "Implement targeted lower back strengthening exercises based on recurrence pattern",
    "Increase hamstring flexibility and strength to prevent future strains",
    "Monitor workload closely during busy match schedules - current workload trend shows risk",
    "Add ankle stabilization exercises to pre-match routine"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-green-500 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Player360°</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm bg-blue-900 px-3 py-1 rounded-full">IPL 2024</span>
            <span className="text-sm">Mumbai Indians</span>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow p-4">
        <div className="container mx-auto">
        
          {/* Player Profile Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 bg-gradient-to-br from-amber-400 to-amber-600 text-white p-6 flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold mb-2">SKY</h2>
                <p className="text-sm mb-4">Suryakumar Yadav</p>
                <div className="mt-2 w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 bg-white">
                  <img src="https://i.pinimg.com/originals/06/a2/5a/06a25a5ccea49b929a093f447376bf53.png" alt="Player" className="w-full h-full object-cover" />
                </div>
                <div className="mt-6 text-center">
                  <p className="text-xl font-semibold">#{playerData.jerseyNumber}</p>
                  <p className="text-sm mt-1">{playerData.team}</p>
                  <div className="mt-4 bg-blue-700 rounded-full px-4 py-1 inline-block">
                    <p className="text-sm">{playerData.role}</p>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-2/3 p-6">
                <div className="border-b pb-4 mb-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">IPL Career Stats</h3>
                    <p className="text-sm text-gray-500">2018 - Present</p>
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => setActiveTab('performance')}
                      className={`px-4 py-2 rounded-lg text-sm font-medium ${
                        activeTab === 'performance' 
                          ? 'bg-blue-900 text-white' 
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      Performance
                    </button>
                    <button 
                      onClick={() => setActiveTab('wellness')}
                      className={`px-4 py-2 rounded-lg text-sm font-medium ${
                        activeTab === 'wellness' 
                          ? 'bg-blue-900 text-white' 
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      Injury & Workload
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-violet-200 rounded-lg p-3 text-center">
                    <p className="text-sm text-gray-500">Runs</p>
                    <p className="text-xl font-bold">{playerData.ipl_runs}</p>
                  </div>
                  <div className="bg-violet-200 rounded-lg p-3 text-center">      
                    <p className="text-sm text-gray-500">Matches</p>
                    <p className="text-xl font-bold">{playerData.matches}</p>
                  </div>
                  <div className="bg-violet-200 rounded-lg p-3 text-center">
                    <p className="text-sm text-gray-500">Average</p>
                    <p className="text-xl font-bold">{playerData.average}</p>
                  </div>
                  <div className="bg-violet-200 rounded-lg p-3 text-center">
                    <p className="text-sm text-gray-500">Highest</p>
                    <p className="text-xl font-bold">{playerData.highScore}</p>
                  </div>
                  <div className="bg-violet-200 rounded-lg p-3 text-center">
                    <p className="text-sm text-gray-500">Strike Rate</p>
                    <p className="text-xl font-bold">{playerData.strikeRate}</p>
                  </div>
                  <div className="bg-violet-200 rounded-lg p-3 text-center">
                    <p className="text-sm text-gray-500">Age</p>
                    <p className="text-xl font-bold">{playerData.age}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {activeTab === 'performance' ? (
            /* Performance Analytics Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Dismissal Patterns */}
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <AlertTriangle size={20} className="mr-2 text-red-500" />
                  Dismissal Patterns
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={dismissalData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                        label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {dismissalData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-2 text-sm text-red-600">
                  <p>38% of dismissals occur on deliveries outside off stump</p>
                </div>
              </div>
              
              {/* Strength Zones */}
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Shield size={20} className="mr-2 text-green-500" />
                  Strength Zones
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={strengthData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                        label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {strengthData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-2 text-sm text-green-600">
                  <p>Sweep shot is the most productive (35% of boundary runs)</p>
                </div>
              </div>
              
              {/* Runs against IPL Teams */}
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <TrendingUp size={20} className="mr-2 text-blue-500" />
                  Runs vs IPL Teams
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart 
                      data={runsVsTeams}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="runs" fill="#3B82F6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              {/* Runs by Season */}
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <TrendingUp size={20} className="mr-2 text-blue-500" />
                  Runs by IPL Season
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={runsBySeason}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="runs" stroke="#3B82F6" activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              {/* Performance Improvement Suggestions */}
              <div className="bg-white rounded-lg shadow-md p-4 md:col-span-2">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Target size={20} className="mr-2 text-orange-500" />
                  Performance Improvement Suggestions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {performanceSuggestions.map((suggestion, index) => (
                    <div key={index} className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                      <div className="flex items-start">
                        <span className="bg-orange-100 text-orange-700 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{suggestion}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Injury & Workload Analytics Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Injury History */}
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <AlertTriangle size={20} className="mr-2 text-red-500" />
                  Injury History
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recurrence</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {injuryHistory.map((injury, index) => (
                        <tr key={index}>
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{injury.type}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{injury.date}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{injury.duration}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">
                            <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${injury.recurrence ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                              {injury.recurrence ? 'Yes' : 'No'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 text-sm text-red-600">
                  <p>Lower back issues show recurrence pattern - requires focused intervention</p>
                </div>
              </div>
              
              {/* Current Workload Tracking */}
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Activity size={20} className="mr-2 text-blue-500" />
                  Current Workload (Last 7 Matches)
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={workloadData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="balls" stroke="#3B82F6" activeDot={{ r: 8 }} />
                      <Line type="monotone" dataKey="threshold" stroke="#FF4560" strokeDasharray="5 5" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                    <span className="text-sm text-gray-600">Acute workload: High</span>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    <span className="text-sm text-gray-600">Chronic workload: Moderate</span>
                  </div>
                </div>
              </div>
              
              {/* Risk Assessment */}
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <AlertTriangle size={20} className="mr-2 text-orange-500" />
                  Injury Risk Assessment
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart outerRadius={90} width={730} height={250} data={riskFactors}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} />
                      <Radar name="Risk Factors" dataKey="A" stroke="#FF4560" fill="#FF4560" fillOpacity={0.6} />
                      <Legend />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 bg-yellow-50 border border-yellow-100 rounded-lg p-3 flex items-center">
                  <Zap size={20} className="text-yellow-600 mr-2 flex-shrink-0" />
                  <p className="text-sm text-gray-700">Current injury risk: <span className="font-semibold text-yellow-600">Moderate (65%)</span> - Biomechanics and recovery metrics need attention</p>
                </div>
              </div>
              
              {/* Recovery Metrics */}
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Clock size={20} className="mr-2 text-green-500" />
                  Recovery Metrics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-500">Sleep Quality</span>
                      <span className="text-sm font-semibold">7.2 hrs/night</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '72%' }}></div>
                    </div>
                    <p className="mt-2 text-xs text-gray-500">Recommended: 8+ hours</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-500">Hydration</span>
                      <span className="text-sm font-semibold">Good</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-500">Muscle Recovery</span>
                      <span className="text-sm font-semibold">Moderate</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <p className="mt-2 text-xs text-gray-500">Lower back area needs attention</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-500">Stress Levels</span>
                      <span className="text-sm font-semibold">Elevated</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Injury Prevention Suggestions */}
              <div className="bg-white rounded-lg shadow-md p-4 md:col-span-2">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Target size={20} className="mr-2 text-green-500" />
                  Injury Prevention Recommendations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {injurySuggestions.map((suggestion, index) => (
                    <div key={index} className="bg-green-50 p-3 rounded-lg border border-green-200">
                      <div className="flex items-start">
                        <span className="bg-green-100 text-green-700 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{suggestion}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="flex items-center">
                    <Calendar size={20} className="text-blue-600 mr-2" />
                    <h4 className="font-medium text-blue-800">Upcoming Schedule Recommendation</h4>
                  </div>
                  <p className="mt-2 text-sm text-gray-700">Consider light training load for next 3 days with focus on recovery protocols to manage acute:chronic workload ratio before the upcoming match against CSK.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-stone-700 text-white p-4">
        <div className="container mx-auto text-center text-sm">
          <p>© 2025 Player360° - Comprehensive Performance & Wellness Platform</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
