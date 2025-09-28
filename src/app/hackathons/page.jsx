export const dynamic = "force-static";
import Sidebar from "@/components/Sidebar";

const FeaturedProjects = [
  { 
    title: "AI for Good Challenge", 
    date: "Oct 2023", 
    role: "Team Lead", 
    icon: "📋",
    badge: "Winner",
    badgeColor: "bg-orange-400"
  },
  { 
    title: "AI for Good Challenge", 
    date: "Oct 2023", 
    role: "Meam Lead", 
    icon: "📋",
    additional: "Iambirvest"
  },
  { 
    title: "Future of Web Summit", 
    date: "Oct 2023", 
    role: "It Dngress", 
    icon: "📋",
    additional: "Eančained"
  }
];

const Participations = [
  { 
    title: "JacipsJancarion", 
    organization: "Magwct Less", 
    date: "May 2012 - Nov 2022", 
    icon: "📋",
    badge: "Soo N"
  },
  { 
    title: "Recipe Finder Summit", 
    organization: "Mable fcup Der.", 
    date: "May 2013 - Nov 2022", 
    icon: "💻",
    badge: "Soo all"
  },
  { 
    title: "Recipe Finder App", 
    organization: "Juclen Etre Dev. Jualslicript Mainiteance Iahackeet la mes of the Subject", 
    date: "May 2012 - Nov 2022", 
    icon: "📋",
    badge: "Soo sl"
  }
];

const StatusBadge = ({ text, color = "bg-red-500" }) => (
  <span className={`px-2 py-1 rounded text-xs font-medium text-white ${color}`}>
    {text}
  </span>
);

const FeaturedCard = ({ project }) => (
  <div className="bg-yellow-100 border border-gray-300 rounded-lg p-4 mb-4 hover:shadow-md transition-shadow">
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 bg-yellow-200 rounded flex items-center justify-center text-sm font-bold text-gray-700 flex-shrink-0">
        {project.icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-black text-sm mb-1">{project.title}</h3>
        <p className="text-xs text-gray-600 mb-1">{project.date}</p>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-gray-600">⭐ {project.role}</span>
          {project.additional && <span className="text-xs text-gray-500">{project.additional}</span>}
        </div>
        {project.badge && <StatusBadge text={project.badge} color={project.badgeColor} />}
      </div>
    </div>
  </div>
);

const ParticipationCard = ({ participation }) => (
  <div className="bg-white border border-gray-300 rounded-lg p-4 mb-4 hover:shadow-md transition-shadow">
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-sm font-bold text-gray-600 flex-shrink-0">
        {participation.icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-black text-sm mb-1">{participation.title}</h3>
        <p className="text-xs text-gray-600 mb-1">{participation.organization}</p>
        <p className="text-xs text-gray-500 mb-2">{participation.date}</p>
        <StatusBadge text={participation.badge} />
      </div>
    </div>
  </div>
);

export default function HackathonsPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      <Sidebar />
      <main className="pl-60 p-6">
        {/* Main Hackathons Container */}
        <div className="bg-[#fafaf8] rounded-xl shadow-xl border border-gray-200 p-8 max-w-7xl mx-auto">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <button className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300 transition-colors">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h1 className="text-4xl font-bold text-black">Hackathons</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Find courses, partners, etc." 
                  className="pl-4 pr-10 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <svg className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 00-15 0v5h5l-5 5-5-5h5v-5a7.5 7.5 0 0115 0v5z" />
                </svg>
              </button>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 xl:grid-cols-[1.4fr_1fr] gap-8">
            {/* Featured Projectss Column */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-black">Featured Projectss</h2>
              <div className="space-y-4">
                {FeaturedProjects.map((project, index) => (
                  <FeaturedCard key={`${project.title}-${index}`} project={project} />
                ))}
              </div>
              
              {/* Stats Box */}
              <div className="bg-pink-200 rounded-lg p-4 mt-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-pink-300 rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
                    </svg>
                  </div>
                  <span className="font-bold text-pink-800">15+ hackatatations attended</span>
                </div>
              </div>
            </div>

            {/* Participations Column */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-black">Participations</h2>
                <button className="px-3 py-1 bg-white border border-gray-300 rounded text-sm font-medium hover:bg-gray-50 transition-colors">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {Participations.map((participation, index) => (
                  <ParticipationCard key={`${participation.title}-${index}`} participation={participation} />
                ))}
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
            <span className="text-sm text-gray-600 font-medium">35+ hackathons attended</span>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded text-sm font-medium hover:bg-gray-50 transition-colors">
              See Slate
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}


