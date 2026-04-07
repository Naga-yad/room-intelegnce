import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Bed, 
  BarChart3, 
  Settings, 
  LogOut, 
  Search, 
  Sun, 
  Moon, 
  Bell, 
  CheckCircle2, 
  Users, 
  Wrench, 
  Plus, 
  Calendar, 
  ClipboardList,
  Thermometer,
  Lightbulb,
  Activity,
  Wind,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  Cell,
  PieChart, 
  Pie
} from 'recharts';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';
import { ROOMS_DATA, OCCUPANCY_TREND, GUEST_FEEDBACK, EFFICIENCY_DATA, Room } from './constants';

type Tab = 'dashboard' | 'rooms' | 'analysis' | 'settings';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const [darkMode, setDarkMode] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex overflow-hidden">
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-[280px] bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-transform duration-300 ease-in-out lg:translate-x-0",
          !isSidebarOpen && "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-6">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="text-white font-bold text-xl">RI</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-800 dark:text-white uppercase">
              Room Intelligence
            </h1>
          </div>

          {/* Greeting */}
          <div className="mb-8 px-2">
            <p className="text-slate-500 dark:text-slate-400 text-sm">Welcome back,</p>
            <h2 className="text-lg font-semibold">Admin</h2>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            <NavItem 
              icon={<LayoutDashboard size={20} />} 
              label="Dashboard" 
              active={activeTab === 'dashboard'} 
              onClick={() => setActiveTab('dashboard')} 
            />
            <NavItem 
              icon={<Bed size={20} />} 
              label="Rooms" 
              active={activeTab === 'rooms'} 
              onClick={() => setActiveTab('rooms')} 
            />
            <NavItem 
              icon={<BarChart3 size={20} />} 
              label="Analysis" 
              active={activeTab === 'analysis'} 
              onClick={() => setActiveTab('analysis')} 
            />
            <NavItem 
              icon={<Settings size={20} />} 
              label="Settings" 
              active={activeTab === 'settings'} 
              onClick={() => setActiveTab('settings')} 
            />
          </nav>

          {/* Logout */}
          <button className="mt-auto flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-red-500 transition-colors rounded-xl hover:bg-red-50 dark:hover:bg-red-950/30">
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={cn(
        "flex-1 flex flex-col min-w-0 transition-all duration-300",
        isSidebarOpen ? "lg:ml-[280px]" : "ml-0"
      )}>
        {/* Header */}
        <header className="h-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-40 px-6 flex items-center justify-between gap-6">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="flex-1 max-w-2xl relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Ask intelligence anything..."
              className="w-full pl-12 pr-4 py-2.5 bg-slate-100 dark:bg-slate-800 border-none rounded-full focus:ring-2 focus:ring-primary/50 transition-all outline-none text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-600 dark:text-slate-300"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <div className="relative">
              <button className="p-2.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-600 dark:text-slate-300">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-4 h-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white dark:border-slate-900">
                  3
                </span>
              </button>
            </div>

            <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-800">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold">Admin</p>
                <p className="text-xs text-slate-500">Super User</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-blue-400 border-2 border-white dark:border-slate-800 shadow-sm" />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="max-w-7xl mx-auto space-y-8"
            >
              {activeTab === 'dashboard' && <DashboardTab />}
              {activeTab === 'rooms' && <RoomsTab />}
              {activeTab === 'analysis' && <AnalysisTab />}
              {activeTab === 'settings' && <SettingsTab darkMode={darkMode} setDarkMode={setDarkMode} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
        active 
          ? "bg-primary text-white shadow-lg shadow-primary/25" 
          : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
      )}
    >
      <span className={cn("transition-transform duration-200", active ? "scale-110" : "group-hover:scale-110")}>
        {icon}
      </span>
      <span className="font-medium">{label}</span>
    </button>
  );
}

function DashboardTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard 
            title="Available" 
            value="28" 
            icon={<CheckCircle2 className="text-green-500" />} 
            color="green" 
          />
          <StatCard 
            title="Occupied" 
            value="87" 
            icon={<Users className="text-primary" />} 
            color="blue" 
          />
          <StatCard 
            title="Maintenance" 
            value="5" 
            icon={<Wrench className="text-orange-500" />} 
            color="orange" 
          />
        </div>

        {/* Trend Chart */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 card-shadow">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold">Occupancy Trend (Last 30 Days)</h3>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-primary rounded-full" />
              <span className="text-xs text-slate-500">Occupancy %</span>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={OCCUPANCY_TREND}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" opacity={0.1} />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#94a3b8' }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#94a3b8' }} 
                  domain={[0, 100]}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: 'none', 
                    borderRadius: '12px', 
                    color: '#fff',
                    fontSize: '12px'
                  }}
                  itemStyle={{ color: '#fff' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#2563eb" 
                  strokeWidth={4} 
                  dot={{ r: 4, fill: '#2563eb', strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* System Status & Feedback */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 card-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">System Status</h3>
              <div className="flex items-center gap-2 bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-xs font-bold">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                LIVE
              </div>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">All systems operational. No critical issues detected.</p>
            <div className="space-y-4">
              <StatusItem label="Network Connectivity" status="Optimal" />
              <StatusItem label="Device Sensors" status="Optimal" />
              <StatusItem label="HVAC Control" status="Optimal" />
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 card-shadow">
            <h3 className="text-lg font-bold mb-6">Guest Feedback (Last 7 Days)</h3>
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={GUEST_FEEDBACK}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                  <Tooltip cursor={{ fill: 'transparent' }} />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                    {GUEST_FEEDBACK.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="space-y-8">
        <div className="bg-primary p-8 rounded-[2rem] text-white shadow-xl shadow-primary/30 relative overflow-hidden group">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700" />
          <h3 className="text-xl font-bold mb-6 relative z-10">Quick Actions</h3>
          <div className="space-y-4 relative z-10">
            <ActionButton icon={<Bed size={18} />} label="View All Rooms" />
            <ActionButton icon={<Plus size={18} />} label="New Booking" />
            <ActionButton icon={<ClipboardList size={18} />} label="Housekeeping Schedule" />
            <ActionButton icon={<Calendar size={18} />} label="Maintenance Logs" />
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 card-shadow">
          <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
          <div className="space-y-6">
            <ActivityItem time="2m ago" text="Room 401: AC set to 21°C" />
            <ActivityItem time="15m ago" text="Check-in: Alexander Wright (401)" />
            <ActivityItem time="1h ago" text="Maintenance: Room 305 marked" />
            <ActivityItem time="3h ago" text="System: Backup completed" />
          </div>
        </div>
      </div>
    </div>
  );
}

function RoomsTab() {
  const [filterType, setFilterType] = useState('All');
  
  const filteredRooms = filterType === 'All' 
    ? ROOMS_DATA 
    : ROOMS_DATA.filter(r => r.type === filterType);

  return (
    <div className="space-y-8">
      {/* Filter Bar */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-4 card-shadow">
        <div className="flex-1 min-w-[200px]">
          <label className="text-[10px] uppercase font-bold text-slate-400 mb-1 block">Asset Type</label>
          <div className="relative">
            <select 
              className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg py-2 px-3 text-sm appearance-none outline-none focus:ring-2 focus:ring-primary/50"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option>All</option>
              <option>Suite</option>
              <option>Deluxe</option>
              <option>Standard</option>
              <option>Executive</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
          </div>
        </div>
        <div className="flex-1 min-w-[150px]">
          <label className="text-[10px] uppercase font-bold text-slate-400 mb-1 block">Floor Number</label>
          <div className="relative">
            <select className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg py-2 px-3 text-sm appearance-none outline-none focus:ring-2 focus:ring-primary/50">
              <option>All Floors</option>
              <option>Floor 1</option>
              <option>Floor 2</option>
              <option>Floor 3</option>
              <option>Floor 4</option>
              <option>Floor 5</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
          </div>
        </div>
        <div className="flex-1 min-w-[150px]">
          <label className="text-[10px] uppercase font-bold text-slate-400 mb-1 block">Asset Number</label>
          <input 
            type="text" 
            placeholder="Search room..."
            className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg py-2 px-3 text-sm outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-primary-hover transition-colors mt-4 sm:mt-0">
          Search
        </button>
      </div>

      {/* Room Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredRooms.map(room => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>

      {/* Data Table */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden card-shadow">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800">
          <h3 className="text-lg font-bold">Asset Intelligence Table</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs uppercase font-bold">
                <th className="px-6 py-4">Asset Name</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Occupancy</th>
                <th className="px-6 py-4">Guest</th>
                <th className="px-6 py-4">Connectivity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {ROOMS_DATA.map(room => (
                <tr key={room.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                        {room.number}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{room.type}</p>
                        <p className="text-xs text-slate-500">Floor {room.floor}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                      room.status === 'Available' && "bg-green-500/10 text-green-500",
                      room.status === 'Occupied' && "bg-primary/10 text-primary",
                      room.status === 'Maintenance' && "bg-orange-500/10 text-orange-500"
                    )}>
                      {room.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                    {room.status === 'Occupied' ? '100%' : '0%'}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">
                    {room.guestName || '-'}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        room.connectivity === 'online' && "bg-green-500",
                        room.connectivity === 'offline' && "bg-red-500",
                        room.connectivity === 'warning' && "bg-orange-500"
                      )} />
                      <span className="text-xs capitalize">{room.connectivity}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function AnalysisTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 card-shadow">
        <h3 className="text-xl font-bold mb-8">System Efficiency Over Time</h3>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={EFFICIENCY_DATA}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" opacity={0.1} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px', color: '#fff' }}
              />
              <Line 
                type="stepAfter" 
                dataKey="value" 
                stroke="#2563eb" 
                strokeWidth={3} 
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 card-shadow flex flex-col items-center justify-center">
        <h3 className="text-xl font-bold mb-8 self-start">Occupancy Distribution</h3>
        <div className="h-[300px] w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={[
                  { name: 'Occupied', value: 87, color: '#2563eb' },
                  { name: 'Available', value: 28, color: '#e2e8f0' }
                ]}
                innerRadius={80}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
              >
                <Cell fill="#2563eb" />
                <Cell fill="#94a3b8" opacity={0.2} />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-4xl font-black text-primary">76%</span>
            <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Occupied</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-8">
          <div className="text-center">
            <p className="text-3xl font-bold">87</p>
            <p className="text-xs text-slate-500 uppercase font-bold">Occupied</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-slate-400">28</p>
            <p className="text-xs text-slate-500 uppercase font-bold">Available</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingsTab({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: (v: boolean) => void }) {
  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 card-shadow overflow-hidden">
      <div className="p-8 border-b border-slate-200 dark:border-slate-800">
        <h3 className="text-xl font-bold">System Settings</h3>
        <p className="text-slate-500 text-sm">Manage your dashboard preferences and account.</p>
      </div>
      <div className="p-8 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold">Dark Mode</p>
            <p className="text-xs text-slate-500">Enable high-contrast dark interface</p>
          </div>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={cn(
              "w-12 h-6 rounded-full transition-colors relative",
              darkMode ? "bg-primary" : "bg-slate-200 dark:bg-slate-700"
            )}
          >
            <div className={cn(
              "absolute top-1 w-4 h-4 bg-white rounded-full transition-all",
              darkMode ? "left-7" : "left-1"
            )} />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold">Email Notifications</p>
            <p className="text-xs text-slate-500">Receive daily summary reports</p>
          </div>
          <button className="w-12 h-6 bg-primary rounded-full relative">
            <div className="absolute top-1 left-7 w-4 h-4 bg-white rounded-full" />
          </button>
        </div>

        <div className="space-y-2">
          <p className="font-semibold">System Language</p>
          <div className="relative">
            <select className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl py-3 px-4 text-sm appearance-none outline-none focus:ring-2 focus:ring-primary/50">
              <option>English (US)</option>
              <option>Spanish (ES)</option>
              <option>French (FR)</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
          </div>
        </div>

        <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold hover:bg-primary-hover transition-all shadow-lg shadow-primary/20">
          Save Changes
        </button>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, color }: { title: string, value: string, icon: React.ReactNode, color: 'green' | 'blue' | 'orange' }) {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 card-shadow flex items-center gap-6 group hover:border-primary/50 transition-colors">
      <div className={cn(
        "w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-transform group-hover:scale-110",
        color === 'green' && "bg-green-500/10",
        color === 'blue' && "bg-primary/10",
        color === 'orange' && "bg-orange-500/10"
      )}>
        {icon}
      </div>
      <div>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{title}</p>
        <p className="text-3xl font-bold">{value}</p>
      </div>
    </div>
  );
}

function StatusItem({ label, status }: { label: string, status: string }) {
  return (
    <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
      <span className="text-sm font-medium">{label}</span>
      <span className="text-xs font-bold text-green-500">{status}</span>
    </div>
  );
}

function ActionButton({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <button className="w-full flex items-center gap-3 px-4 py-3 bg-white/10 hover:bg-white/20 transition-colors rounded-xl text-sm font-semibold">
      {icon}
      {label}
    </button>
  );
}

function ActivityItem({ time, text }: { time: string, text: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-2 h-2 bg-primary rounded-full mt-1.5 shrink-0" />
      <div>
        <p className="text-sm font-medium">{text}</p>
        <p className="text-xs text-slate-400">{time}</p>
      </div>
    </div>
  );
}

function RoomCard({ room }: { room: Room }) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 card-shadow overflow-hidden group hover:border-primary/50 transition-all">
      <div className="p-6 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold">
              {room.number}
            </div>
            <div>
              <h4 className="font-bold">{room.type}</h4>
              <p className="text-xs text-slate-500">Floor {room.floor}</p>
            </div>
          </div>
          <span className={cn(
            "px-3 py-1 rounded-full text-[10px] font-bold uppercase",
            room.status === 'Available' && "bg-green-500/10 text-green-500",
            room.status === 'Occupied' && "bg-primary/10 text-primary",
            room.status === 'Maintenance' && "bg-orange-500/10 text-orange-500"
          )}>
            {room.status}
          </span>
        </div>
        {room.status === 'Occupied' && (
          <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl">
            <p className="text-xs text-slate-400 font-bold uppercase mb-1">Current Guest</p>
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">{room.guestName}</p>
              <p className="text-xs text-primary font-bold">{room.duration}</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6 grid grid-cols-2 gap-4">
        <DeviceStatus 
          icon={<Thermometer size={16} />} 
          label="Temperature" 
          value={`${room.devices.temperature}°C`} 
          status={room.devices.temperature > 24 ? 'Warm' : 'Optimal'} 
        />
        <DeviceStatus 
          icon={<Lightbulb size={16} />} 
          label="Main Light" 
          value={room.devices.lights ? 'On' : 'Off'} 
          toggle 
          active={room.devices.lights}
        />
        <DeviceStatus 
          icon={<Activity size={16} />} 
          label="Motion" 
          value={room.devices.motion} 
          status={room.devices.motion === 'Active' ? 'Detected' : 'Idle'} 
        />
        <DeviceStatus 
          icon={<Wind size={16} />} 
          label="Air Cond." 
          value={`${room.devices.ac.temp}°C`} 
          status={room.devices.ac.status} 
        />
      </div>
    </div>
  );
}

function DeviceStatus({ icon, label, value, status, toggle, active }: { icon: React.ReactNode, label: string, value: string, status?: string, toggle?: boolean, active?: boolean }) {
  return (
    <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
      <div className="flex items-center gap-2 text-slate-400 mb-2">
        {icon}
        <span className="text-[10px] font-bold uppercase">{label}</span>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold">{value}</p>
        {toggle ? (
          <div className={cn(
            "w-8 h-4 rounded-full transition-colors relative",
            active ? "bg-primary" : "bg-slate-300 dark:bg-slate-600"
          )}>
            <div className={cn(
              "absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all",
              active ? "left-4.5" : "left-0.5"
            )} />
          </div>
        ) : (
          <span className={cn(
            "text-[9px] font-black uppercase px-1.5 py-0.5 rounded",
            status === 'Optimal' || status === 'Cooling' || status === 'Detected' ? "text-green-500 bg-green-500/10" : "text-slate-400 bg-slate-400/10"
          )}>
            {status}
          </span>
        )}
      </div>
    </div>
  );
}
