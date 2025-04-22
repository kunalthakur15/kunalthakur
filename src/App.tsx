import { useState, useEffect } from 'react';
import kunalPic from './kunal-pic.png';
import { BookOpen, Camera, Globe, Trophy, Bike, MapPin, Phone, Mail } from 'lucide-react';

// Type definitions
type PageType = 'home' | 'about' | 'resume' | 'portfolio' | 'blog' | 'contact' | 'extra' | 'get-it-now' | 'interests';
type TransitionType = 'page-exit' | 'page-enter' | '';

// Component definitions
const InterestsSection = () => {
  const interests = [
    {
      icon: <Trophy size={40} />,
      title: "Cricket"
    },
    {
      icon: <BookOpen size={40} />,
      title: "Reading"
    },
    {
      icon: <Globe size={40} />,
      title: "Travelling"
    },
    {
      icon: <Bike size={40} />,
      title: "Motorbiking"
    },
    {
      icon: <Camera size={40} />,
      title: "Photography"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto bg-white p-6 shadow-sm rounded">
      <h2 className="text-2xl font-semibold mb-6 border-b-2 border-blue-500 pb-2 inline-block">
        Interests
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
        {interests.map((interest, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center text-center p-4 hover:bg-gray-50 rounded transition-colors duration-200 group"
          >
            <div className="mb-4 p-4 bg-gray-50 rounded-full flex items-center justify-center transition-colors duration-200">
              <div className="text-gray-500 group-hover:text-blue-500 transition-colors duration-200">
                {interest.icon}
              </div>
            </div>
            <h3 className="text-lg font-medium uppercase tracking-wide text-gray-700">
              {interest.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

function InterestsPage({ isMobile }: { isMobile?: boolean }) {
  const interests = [
    {
      icon: <a href="https://sillypointers.com/" target="_blank" rel="noopener noreferrer"><Trophy size={40} /></a>,
      title: "Cricket"
    },
    {
      icon: <a href="https://www.goodreads.com/review/list/5933376-kunal-thakur?ref=nav_mybooks&shelf=read" target="_blank" rel="noopener noreferrer"><BookOpen size={40} /></a>,
      title: "Reading"
    },
    {
      icon: <Globe size={40} />,
      title: "Travelling"
    },
    {
      icon: <Bike size={40} />,
      title: "Motorbiking"
    },
    {
      icon: <Camera size={40} />,
      title: "Photography"
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800">Interests</h1>
      </div>
      
      <div className="flex justify-center">
        <div className="flex-1 max-w-4xl">
          <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-12 mt-8`}>
            {interests.slice(0, 4).map((interest, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center text-center p-4 hover:bg-gray-50 rounded transition-colors duration-200 group"
              >
                <div className="mb-4 p-4 bg-gray-50 rounded-full flex items-center justify-center transition-colors duration-200">
                  <div className="text-gray-500 group-hover:text-blue-500 transition-colors duration-200">
                    {interest.icon}
                  </div>
                </div>
                <h3 className="text-lg font-medium uppercase tracking-wide text-gray-700">
                  {interest.title}
                </h3>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <div className="flex flex-col items-center justify-center text-center p-4 hover:bg-gray-50 rounded transition-colors duration-200 group">
              <div className="mb-4 p-4 bg-gray-50 rounded-full flex items-center justify-center transition-colors duration-200">
                <div className="text-gray-500 group-hover:text-blue-500 transition-colors duration-200">
                  {interests[4].icon}
                </div>
              </div>
              <h3 className="text-lg font-medium uppercase tracking-wide text-gray-700">
                {interests[4].title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactPage({ isMobile }: { isMobile?: boolean }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">Get In Touch</h1>
      </div>
      
      <div className="flex flex-col justify-center min-h-[calc(100vh-12rem)]">
        <div className={`max-w-4xl mx-auto ${!isMobile ? 'grid grid-cols-3 gap-6' : 'grid grid-cols-1 gap-4 w-full px-4'}`}>
          <div className={`${!isMobile ? 'bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out' : 'bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out w-full'}`}>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-4 bg-gray-50 rounded-full">
                <Phone size={28} className="text-gray-500" />
              </div>
              <h3 className="text-base font-medium text-gray-900">Phone</h3>
              <p className="text-sm text-gray-600 mt-2">+919686532842</p>
            </div>
          </div>
          
          <div className={`${!isMobile ? 'bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out' : 'bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out w-full'}`}>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-4 bg-gray-50 rounded-full">
                <MapPin size={28} className="text-gray-500" />
              </div>
              <h3 className="text-base font-medium text-gray-900">Location</h3>
              <p className="text-sm text-gray-600 mt-2">Noida, India</p>
            </div>
          </div>
          
          <div className={`${!isMobile ? 'bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out' : 'bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out w-full'}`}>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-4 bg-gray-50 rounded-full">
                <Mail size={28} className="text-gray-500" />
              </div>
              <h3 className="text-base font-medium text-gray-900">Email</h3>
              <p className="text-sm text-gray-600 mt-2">kunalthakur15@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main App Component
export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('about');
  const [transition, setTransition] = useState<TransitionType>('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const changePage = (page: PageType) => {
    setTransition('page-exit');
    setTimeout(() => {
      setCurrentPage(page);
      setTransition('page-enter');
      window.scrollTo(0, 0);
    }, 500);
  };
  
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Mobile header */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm z-40 md:hidden flex items-center justify-between px-4">
        <div className="flex items-center">
          <img src={kunalPic} alt="Profile" className="h-10 w-10 rounded-full" />
          <span className="ml-3 text-lg font-medium text-gray-800">Kunal Thakur</span>
        </div>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-gray-800 p-2 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        </div>
        
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-64 md:w-40 bg-white md:bg-gray-50 transform transition-transform duration-300 ease-in-out z-30
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:transform-none
        md:top-0 top-16 flex flex-col items-center pt-6 md:border-r md:border-r-gray-200/30 md:border-r-[6px]`}>
        {/* Profile section */}
        <div className="flex flex-col items-center mb-6 md:mb-8">
          <img src={kunalPic} alt="Profile" className="w-16 h-16 rounded-full border-2 border-[#0099e5] mx-auto mb-3" />
          <h2 className="text-lg font-medium text-gray-900 text-center md:leading-snug">
            <span className="md:block">Kunal</span>
            <span className="md:block">Thakur</span>
          </h2>
        </div>
        
        {/* Navigation */}
        <nav className="w-full flex flex-col items-center">
          <div className="w-[252px] md:w-full">
            <div className="h-px bg-gray-100 md:bg-gray-100/20"></div>
            <button
              onClick={() => {
                changePage('about');
                if (window.innerWidth < 768) setIsSidebarOpen(false);
              }}
              className={`w-full text-center py-4 md:py-3 md:text-base text-sm transition-colors duration-200 relative group ${
                (currentPage === 'about' || currentPage === 'home')
                  ? 'text-[#0099e5] font-medium md:bg-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              About Me
              {(currentPage === 'about' || currentPage === 'home') && (
                <div className="absolute right-0 md:right-0 top-0 h-full w-0.5 md:w-[2px] bg-[#0099e5]/30 md:bg-[#0099e5]"></div>
              )}
            </button>
            <div className="h-px bg-gray-100 md:bg-gray-100/20"></div>
            <button
              onClick={() => {
                changePage('resume');
                if (window.innerWidth < 768) setIsSidebarOpen(false);
              }}
              className={`w-full text-center py-4 md:py-3 md:text-base text-sm transition-colors duration-200 relative group ${
                currentPage === 'resume'
                  ? 'text-[#0099e5] font-medium md:bg-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Resume
              {currentPage === 'resume' && (
                <div className="absolute right-0 md:right-0 top-0 h-full w-0.5 md:w-[2px] bg-[#0099e5]/30 md:bg-[#0099e5]"></div>
              )}
            </button>
            <div className="h-px bg-gray-100 md:bg-gray-100/20"></div>
            <button
              onClick={() => {
                changePage('interests');
                if (window.innerWidth < 768) setIsSidebarOpen(false);
              }}
              className={`w-full text-center py-4 md:py-3 md:text-base text-sm transition-colors duration-200 relative group ${
                currentPage === 'interests'
                  ? 'text-[#0099e5] font-medium md:bg-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Interests
              {currentPage === 'interests' && (
                <div className="absolute right-0 md:right-0 top-0 h-full w-0.5 md:w-[2px] bg-[#0099e5]/30 md:bg-[#0099e5]"></div>
              )}
            </button>
            <div className="h-px bg-gray-100 md:bg-gray-100/20"></div>
            <button
              onClick={() => {
                changePage('contact');
                if (window.innerWidth < 768) setIsSidebarOpen(false);
              }}
              className={`w-full text-center py-4 md:py-3 md:text-base text-sm transition-colors duration-200 relative group ${
                currentPage === 'contact'
                  ? 'text-[#0099e5] font-medium md:bg-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Contact
              {currentPage === 'contact' && (
                <div className="absolute right-0 md:right-0 top-0 h-full w-0.5 md:w-[2px] bg-[#0099e5]/30 md:bg-[#0099e5]"></div>
              )}
            </button>
            <div className="h-px bg-gray-100 md:bg-gray-100/20"></div>
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="py-6 px-4 sm:px-6 lg:px-8 mt-16 md:mt-0 md:pl-12">
          <div className={`transition-all duration-500 transform-gpu ${getTransitionClass(transition, currentPage)}`}>
            {(currentPage === 'about' || currentPage === 'home') && (
              <div>
                {window.innerWidth >= 768 && (
                  <div className="mb-8">
                    <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 pb-4 border-b border-gray-200">About Me</h1>
        </div>
                )}
                <HomePage changePage={changePage} isMobile={window.innerWidth < 768} />
        </div>
            )}
            {currentPage === 'resume' && (
              <div>
                <div className="mb-8">
                  <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 pb-4 border-b border-gray-200">Resume</h1>
                  <p className="text-right text-gray-500 mt-4">17+ Years of Experience</p>
      </div>
                <ResumePage isMobile={window.innerWidth < 768} />
        </div>
            )}
            {currentPage === 'interests' && <InterestsPage isMobile={window.innerWidth < 768} />}
            {currentPage === 'contact' && <ContactPage isMobile={window.innerWidth < 768} />}
      </div>
    </div>
      </main>

      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-20"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}

// Home Page Component
function HomePage({ changePage, isMobile }: { changePage: (page: PageType) => void; isMobile?: boolean }) {
  return (
    <div>
      <div className={`flex ${isMobile ? 'flex-col' : 'mb-12'}`}>
        <div className={`flex-1 flex justify-center ${isMobile ? 'mb-8' : ''}`}>
          <img src={kunalPic} alt="Profile" className={`${isMobile ? 'w-[300px] h-[300px]' : 'w-[400px] h-[400px]'} object-cover rounded-lg`} />
        </div>
        <div className={`flex-1 ${isMobile ? 'px-4' : 'pl-8'}`}>
          <p className={`${isMobile ? 'text-sm' : ''} text-gray-500 mb-2`}>Product Management</p>
          <h1 className={`${isMobile ? 'text-3xl' : 'text-5xl'} font-bold text-gray-800 mb-6`}>Kunal Thakur</h1>
          
          <p className={`${isMobile ? 'text-sm' : ''} text-gray-600 mb-4`}>
            A seasoned AI-driven product leader with 17 years of experience, including 13 years in product
            management. My passion lies in driving digital transformation in B2B and B2C sectors through
            innovation and cross-functional team leadership. 
          </p>
          
          <p className={`${isMobile ? 'text-sm' : ''} text-gray-600 mb-8`}>
            I have a proven track record in scaling products and optimizing operations for significant efficiency
            gains, and I thrive in dynamic environments where strategic execution can lead to impactful business outcomes
          </p>
          
          <div className={`flex ${isMobile ? 'flex-row space-x-2 justify-center mb-12' : 'space-x-4'} items-center`}>
            <a 
              href="/Kunal Thakur Resume 4.pdf" 
              download="Kunal Thakur Resume.pdf"
              className="border-2 border-blue-500 text-blue-500 px-4 py-2 font-medium hover:bg-blue-50 w-auto text-center"
            >
              Download CV
            </a>
            <button 
              className="border-2 border-gray-300 text-gray-700 px-4 py-2 font-medium hover:bg-gray-50 w-auto text-center"
              onClick={() => changePage('contact')}
            >
              Contact
            </button>
            <a 
              href="https://www.linkedin.com/in/kunalthakur15/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-blue-500 flex items-center justify-center w-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-semibold text-gray-800 mb-4 border-b-2 border-[#0099e5] pb-1 inline-block`}>
          What I Do
        </h2>
        
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-8 mt-8`}>
          <div className="flex">
            <div className="mr-4 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div>
              <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-gray-800 mb-2`}>B2C & B2B Product Management</h3>
              <p className={`${isMobile ? 'text-sm' : ''} text-gray-600`}>
                With over 13 years of driving product success across both B2C and B2B domains, I specialize in crafting scalable, high-impact products that deliver real value. From early-stage startups to enterprise ecosystems, I bring a track record of launching and growing products that users love and businesses depend on.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="mr-4 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <div>
              <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-gray-800 mb-2`}>AI/ML Product Strategy</h3>
              <p className={`${isMobile ? 'text-sm' : ''} text-gray-600`}>
                I bridge the gap between cutting-edge AI/ML technology and market-ready products. My experience lies in turning complex algorithms into intuitive, impactful features that solve real-world problems—grounded in customer insights, built for scale.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="mr-4 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-gray-800 mb-2`}>User Experience</h3>
              <p className={`${isMobile ? 'text-sm' : ''} text-gray-600`}>
                Great products begin and end with the user. I champion design thinking and user-centric innovation, ensuring every interaction is purposeful, frictionless, and delightful—because a stellar user experience isn't optional, it's a competitive edge.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="mr-4 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <div>
              <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-gray-800 mb-2`}>Consulting</h3>
              <p className={`${isMobile ? 'text-sm' : ''} text-gray-600`}>
                I partner with teams to accelerate product vision, strategy, and execution. Whether you're refining product-market fit, scaling operations, or exploring a new vertical, I bring seasoned, hands-on insight to help you move faster and smarter be it product, user expereince or getting something implemented and tracking it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Resume Page Component
function ResumePage({ isMobile }: { isMobile?: boolean }) {
  return (
    <div>
      <div className={`flex ${isMobile ? 'flex-col' : ''}`}>
        {/* Main content - Education and Experience */}
        <div className={`flex-1 ${isMobile ? '' : 'pr-6'}`}>
          {/* Education Section */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-xl md:text-lg font-semibold text-gray-800 mb-8 md:mb-12">
              <span className="border-b-2 border-[#0099e5] pb-1">Education</span>
            </h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[140px] md:left-[184px] top-[9px] md:top-[2.5px] bottom-0 w-[1px] md:w-[1.5px] bg-gray-200 md:bg-[#e5e5e5]"></div>
              
              {/* Education Items */}
              <div className="space-y-12 md:space-y-16">
                <div className="relative flex">
                  {/* Date */}
                  <div className="flex-none w-[140px] md:w-[180px] text-right pr-8 md:pr-12 flex items-center md:items-start justify-end h-8 md:h-auto">
                    <span className="md:text-sm text-xs md:text-gray-900 text-gray-900 md:font-semibold font-semibold">2010 - 2012</span>
                </div>
                  
                  {/* Timeline dot */}
                  <div className="flex-none relative">
                    <div className="absolute left-0 md:left-[-1px] w-3 md:w-3 h-3 md:h-3 rounded-full border-2 border-[#0099e5] bg-white transform -translate-x-1/2 md:transform-none mt-2.5 md:mt-0"></div>
                </div>
                  
                  {/* Content */}
                  <div className="flex-grow pl-8 md:pl-12">
                    <h3 className="md:text-base text-base font-semibold text-gray-800 mb-2 md:mb-2 mt-1 md:-mt-1">PGDM</h3>
                    <p className="md:text-sm text-sm text-gray-500 mb-2 md:mb-3">Indian Institute of Management, Indore</p>
                    <p className="md:text-sm text-xs text-gray-600">
                      IIM Indore is a Tier 1 B School in India. Completed my 2 years full time program in 2012 with a specific focus on Information Systems and Strategy.
                    </p>
              </div>
            </div>
            
                <div className="relative flex">
                  <div className="flex-none w-[140px] md:w-[180px] text-right pr-8 md:pr-12 flex items-center md:items-start justify-end h-8 md:h-auto">
                    <span className="md:text-sm text-xs md:text-gray-900 text-gray-900 md:font-semibold font-semibold">2002 - 2006</span>
                </div>
                  <div className="flex-none relative">
                    <div className="absolute left-0 md:left-[-1px] w-3 md:w-3 h-3 md:h-3 rounded-full border-2 border-[#0099e5] bg-white transform -translate-x-1/2 md:transform-none mt-2.5 md:mt-0"></div>
                </div>
                  <div className="flex-grow pl-8 md:pl-12">
                    <h3 className="md:text-base text-base font-semibold text-gray-800 mb-2 md:mb-2 mt-1 md:-mt-1">B.Tech, Computer Science</h3>
                    <p className="md:text-sm text-sm text-gray-500 mb-2 md:mb-3">College of Engineering, Roorkee</p>
                    <p className="md:text-sm text-xs text-gray-600">
                      Rated No.1 private college in India from 2003 to 2007. Completed Computer Science and Engineering and was among the top 1% of the class.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Experience Section */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-xl md:text-lg font-semibold text-gray-800 mb-8 md:mb-12">
              <span className="border-b-2 border-[#0099e5] pb-1">Experience</span>
            </h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[140px] md:left-[184px] top-[9px] md:top-[2.5px] bottom-0 w-[1px] md:w-[1.5px] bg-gray-200 md:bg-[#e5e5e5]"></div>
              
              {/* Experience Items */}
              <div className="space-y-12 md:space-y-16">
                <div className="relative flex">
                  <div className="flex-none w-[140px] md:w-[180px] text-right pr-8 md:pr-12 flex items-center md:items-start justify-end h-8 md:h-auto">
                    <span className="md:text-sm text-xs md:text-gray-900 text-gray-900 md:font-semibold font-semibold">May '24 - Feb '25</span>
                  </div>
                  <div className="flex-none relative">
                    <div className="absolute left-0 md:left-[-1px] w-3 md:w-3 h-3 md:h-3 rounded-full border-2 border-[#0099e5] bg-white transform -translate-x-1/2 md:transform-none mt-2.5 md:mt-0"></div>
                  </div>
                  <div className="flex-grow pl-8 md:pl-12">
                    <h3 className="md:text-base text-base font-semibold text-gray-800 mb-2 md:mb-2 mt-1 md:-mt-1">Group Product Manager</h3>
                    <p className="md:text-sm text-sm text-gray-500 mb-2 md:mb-3">R1 RCM [US Healthcare Domain]</p>
                    <ul className="text-gray-600 list-disc pl-5 space-y-2 md:text-sm text-xs">
                      <li>Defined and drove the AI/ML roadmap for US Healthcare B2B SaaS solutions</li>
                      <li>Identified and implemented key performance metrics to measure AI/ML and product success</li>
                      <li>Achieved over $1M in annual cost savings by optimizing manpower allocation and streamlining operations</li>
                      <li>Reduced physician's EMR summary time by 66%, saving $1800/day</li>
                    </ul>
                  </div>
                </div>

                <div className="relative flex">
                  <div className="flex-none w-[140px] md:w-[180px] text-right pr-8 md:pr-12 flex items-center md:items-start justify-end h-8 md:h-auto">
                    <span className="md:text-sm text-xs md:text-gray-900 text-gray-900 md:font-semibold font-semibold">Apr '22 - May '24</span>
                  </div>
                  <div className="flex-none relative">
                    <div className="absolute left-0 md:left-[-1px] w-3 md:w-3 h-3 md:h-3 rounded-full border-2 border-[#0099e5] bg-white transform -translate-x-1/2 md:transform-none mt-2.5 md:mt-0"></div>
                  </div>
                  <div className="flex-grow pl-8 md:pl-12">
                    <h3 className="md:text-base text-base font-semibold text-gray-800 mb-2 md:mb-2 mt-1 md:-mt-1">Senior Product Manager AI</h3>
                    <p className="md:text-sm text-sm text-gray-500 mb-2 md:mb-3">RAFT.AI [Shipping, Logistics, Supply Chain Domain]</p>
                    <ul className="text-gray-600 list-disc pl-5 space-y-2 md:text-sm text-xs">
                      <li>Drove adoption by 4 major BFSI players by executing a roadmap for the Document AI product</li>
                      <li>Reduced manual effort by over 90% by implementing Document AI</li>
                      <li>Reduced manual effort by over 80% through personalization and automation of processes</li>
                    </ul>
                  </div>
                </div>

                <div className="relative flex">
                  <div className="flex-none w-[140px] md:w-[180px] text-right pr-8 md:pr-12 flex items-center md:items-start justify-end h-8 md:h-auto">
                    <span className="md:text-sm text-xs md:text-gray-900 text-gray-900 md:font-semibold font-semibold">Jan '21 - Apr '22</span>
                  </div>
                  <div className="flex-none relative">
                    <div className="absolute left-0 md:left-[-1px] w-3 md:w-3 h-3 md:h-3 rounded-full border-2 border-[#0099e5] bg-white transform -translate-x-1/2 md:transform-none mt-2.5 md:mt-0"></div>
                  </div>
                  <div className="flex-grow pl-8 md:pl-12">
                    <h3 className="md:text-base text-base font-semibold text-gray-800 mb-2 md:mb-2 mt-1 md:-mt-1">Senior Product Manager AI</h3>
                    <p className="md:text-sm text-sm text-gray-500 mb-2 md:mb-3">LUMIQ.AI [BFSI Domain]</p>
                    <ul className="text-gray-600 list-disc pl-5 space-y-2 md:text-sm text-xs">
                      <li>Drove adoption by 4 major BFSI players by executing a roadmap for the Document AI product</li>
                      <li>Reduced manual effort by over 90% by implementing Document AI</li>
                    </ul>
                  </div>
                </div>

                <div className="relative flex">
                  <div className="flex-none w-[140px] md:w-[180px] text-right pr-8 md:pr-12 flex items-center md:items-start justify-end h-8 md:h-auto">
                    <span className="md:text-sm text-xs md:text-gray-900 text-gray-900 md:font-semibold font-semibold">Apr '18 - Jan '21</span>
                  </div>
                  <div className="flex-none relative">
                    <div className="absolute left-0 md:left-[-1px] w-3 md:w-3 h-3 md:h-3 rounded-full border-2 border-[#0099e5] bg-white transform -translate-x-1/2 md:transform-none mt-2.5 md:mt-0"></div>
                  </div>
                  <div className="flex-grow pl-8 md:pl-12">
                    <h3 className="md:text-base text-base font-semibold text-gray-800 mb-2 md:mb-2 mt-1 md:-mt-1">AVP Products</h3>
                    <p className="md:text-sm text-sm text-gray-500 mb-2 md:mb-3">EASYPOLICY [Insurance Domain]</p>
                    <ul className="text-gray-600 list-disc pl-5 space-y-2 md:text-sm text-xs">
                      <li>Generated a 366% increase in DIY insurance purchases through improved UX</li>
                      <li>Revitalized user journey and payment process resulting in a 76% increase in conversions</li>
                    </ul>
                  </div>
                </div>

                <div className="relative flex">
                  <div className="flex-none w-[140px] md:w-[180px] text-right pr-8 md:pr-12 flex items-center md:items-start justify-end h-8 md:h-auto">
                    <span className="md:text-sm text-xs md:text-gray-900 text-gray-900 md:font-semibold font-semibold">Jul '16 - Mar '18</span>
                  </div>
                  <div className="flex-none relative">
                    <div className="absolute left-0 md:left-[-1px] w-3 md:w-3 h-3 md:h-3 rounded-full border-2 border-[#0099e5] bg-white transform -translate-x-1/2 md:transform-none mt-2.5 md:mt-0"></div>
                  </div>
                  <div className="flex-grow pl-8 md:pl-12">
                    <h3 className="md:text-base text-base font-semibold text-gray-800 mb-2 md:mb-2 mt-1 md:-mt-1">Head - Product</h3>
                    <p className="md:text-sm text-sm text-gray-500 mb-2 md:mb-3">BYKUP [Ride Sharing/Consumer App Domain]</p>
                    <ul className="text-gray-600 list-disc pl-5 space-y-2 md:text-sm text-xs">
                      <li>Overhauled UX/UI, resulting in a 200% increase in DAU within 3 months</li>
                      <li>Conceptualized and launched impactful new features driving a 6x increase in completed rides</li>
                    </ul>
                  </div>
                </div>

                <div className="relative flex">
                  <div className="flex-none w-[140px] md:w-[180px] text-right pr-8 md:pr-12 flex items-center md:items-start justify-end h-8 md:h-auto">
                    <span className="md:text-sm text-xs md:text-gray-900 text-gray-900 md:font-semibold font-semibold">May '15 - Jul '16</span>
                  </div>
                  <div className="flex-none relative">
                    <div className="absolute left-0 md:left-[-1px] w-3 md:w-3 h-3 md:h-3 rounded-full border-2 border-[#0099e5] bg-white transform -translate-x-1/2 md:transform-none mt-2.5 md:mt-0"></div>
                  </div>
                  <div className="flex-grow pl-8 md:pl-12">
                    <h3 className="md:text-base text-base font-semibold text-gray-800 mb-2 md:mb-2 mt-1 md:-mt-1">Senior Product Manager</h3>
                    <p className="md:text-sm text-sm text-gray-500 mb-2 md:mb-3">MATRIMONY.COM [Consumer App Domain]</p>
                    <ul className="text-gray-600 list-disc pl-5 space-y-2 md:text-sm text-xs">
                      <li>Reduced photo and profile validation effort by over 60%</li>
                    </ul>
              </div>
            </div>
            
                <div className="relative flex">
                  <div className="flex-none w-[140px] md:w-[180px] text-right pr-8 md:pr-12 flex items-center md:items-start justify-end h-8 md:h-auto">
                    <span className="md:text-sm text-xs md:text-gray-900 text-gray-900 md:font-semibold font-semibold">Oct '13 - Jan '15</span>
                  </div>
                  <div className="flex-none relative">
                    <div className="absolute left-0 md:left-[-1px] w-3 md:w-3 h-3 md:h-3 rounded-full border-2 border-[#0099e5] bg-white transform -translate-x-1/2 md:transform-none mt-2.5 md:mt-0"></div>
                  </div>
                  <div className="flex-grow pl-8 md:pl-12">
                    <h3 className="md:text-base text-base font-semibold text-gray-800 mb-2 md:mb-2 mt-1 md:-mt-1">Product Practice Manager</h3>
                    <p className="md:text-sm text-sm text-gray-500 mb-2 md:mb-3">ALTISOURCE [Consumer App Domain]</p>
                  </div>
                </div>

                <div className="relative flex">
                  <div className="flex-none w-[140px] md:w-[180px] text-right pr-8 md:pr-12 flex items-center md:items-start justify-end h-8 md:h-auto">
                    <span className="md:text-sm text-xs md:text-gray-900 text-gray-900 md:font-semibold font-semibold">May '12 - Jun '13</span>
                  </div>
                  <div className="flex-none relative">
                    <div className="absolute left-0 md:left-[-1px] w-3 md:w-3 h-3 md:h-3 rounded-full border-2 border-[#0099e5] bg-white transform -translate-x-1/2 md:transform-none mt-2.5 md:mt-0"></div>
                  </div>
                  <div className="flex-grow pl-8 md:pl-12">
                    <h3 className="md:text-base text-base font-semibold text-gray-800 mb-2 md:mb-2 mt-1 md:-mt-1">Product Consultant</h3>
                    <p className="md:text-sm text-sm text-gray-500 mb-2 md:mb-3">NEUDESIC [Consulting Domain]</p>
                  </div>
                </div>

                <div className="relative flex">
                  <div className="flex-none w-[140px] md:w-[180px] text-right pr-8 md:pr-12 flex items-center md:items-start justify-end h-8 md:h-auto">
                    <span className="md:text-sm text-xs md:text-gray-900 text-gray-900 md:font-semibold font-semibold">Jun '06 - Jan '10</span>
                  </div>
                  <div className="flex-none relative">
                    <div className="absolute left-0 md:left-[-1px] w-3 md:w-3 h-3 md:h-3 rounded-full border-2 border-[#0099e5] bg-white transform -translate-x-1/2 md:transform-none mt-2.5 md:mt-0"></div>
                  </div>
                  <div className="flex-grow pl-8 md:pl-12">
                    <h3 className="md:text-base text-base font-semibold text-gray-800 mb-2 md:mb-2 mt-1 md:-mt-1">Software Engineer</h3>
                    <p className="md:text-sm text-sm text-gray-500 mb-2 md:mb-3">CGI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills and Certifications for Desktop */}
        {!isMobile && (
        <div className="w-80">
          <div className="mb-10">
              <h2 className="text-xl md:text-lg font-semibold text-gray-800 mb-6 border-b-2 border-[#0099e5] pb-1 inline-block">
                Core Skills
            </h2>
            
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">B2B and B2C Product</span>
                  <span className="text-sm text-gray-500">100%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#0099e5] h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">AI/ML Products & Strategy</span>
                  <span className="text-sm text-gray-500">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#0099e5] h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">User Experience</span>
                  <span className="text-sm text-gray-500">90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#0099e5] h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">Agile</span>
                  <span className="text-sm text-gray-500">100%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#0099e5] h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">Product Vision & Roadmap</span>
                  <span className="text-sm text-gray-500">90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#0099e5] h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
            </div>
          </div>
          
            <div className="mb-10">
              <h2 className="text-xl md:text-lg font-semibold text-gray-800 mb-6 border-b-2 border-[#0099e5] pb-1 inline-block">
                Other Skills
            </h2>
            
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">Team Leadership</span>
                  <span className="text-sm text-gray-500">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#0099e5] h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">Stakeholder Management</span>
                  <span className="text-sm text-gray-500">100%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#0099e5] h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">Mentoring</span>
                  <span className="text-sm text-gray-500">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#0099e5] h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">Recruitement & Reviews</span>
                  <span className="text-sm text-gray-500">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#0099e5] h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl md:text-lg font-semibold text-gray-800 mb-6 border-b-2 border-[#0099e5] pb-1 inline-block">
                Certifications
              </h2>
            
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">AWS Cloud Practitioner</span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">PMP</span>
                </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">PSM 1</span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">SCJP</span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Skills and Certifications for Mobile */}
        {isMobile && (
          <div className="mt-12">
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b-2 border-[#0099e5] pb-1 inline-block">
                Core Skills
              </h2>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">B2B and B2C Product</span>
                  <span className="text-sm text-gray-500">100%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#0099e5] h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">AI/ML Products & Strategy</span>
                  <span className="text-sm text-gray-500">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#0099e5] h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">User Experience</span>
                  <span className="text-sm text-gray-500">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#0099e5] h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">Agile</span>
                  <span className="text-sm text-gray-500">100%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#0099e5] h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">Product Vision & Roadmap</span>
                  <span className="text-sm text-gray-500">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#0099e5] h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b-2 border-[#0099e5] pb-1 inline-block">
                Other Skills
              </h2>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">Team Leadership</span>
                  <span className="text-sm text-gray-500">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#0099e5] h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">Stakeholder Management</span>
                  <span className="text-sm text-gray-500">100%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#0099e5] h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">Mentoring</span>
                  <span className="text-sm text-gray-500">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#0099e5] h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">Recruitement & Reviews</span>
                  <span className="text-sm text-gray-500">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#0099e5] h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b-2 border-[#0099e5] pb-1 inline-block">
                Certifications
              </h2>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">AWS Cloud Practitioner</span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">PMP</span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">PSM 1</span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">SCJP</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Helper function for transitions
function getTransitionClass(transition: TransitionType, currentPage: PageType): string {
  if (window.innerWidth < 768) {
    // Keep mobile transitions simple
    switch(transition) {
      case 'page-exit':
        return 'opacity-0 transform -translate-x-full';
      case 'page-enter':
        return 'opacity-100 transform translate-x-0';
      default:
        return 'opacity-100';
    }
  }

  // Desktop transitions with true randomization
  const animations = [
    {
      exit: 'opacity-0 transform -translate-x-full scale-95',
      enter: 'opacity-100 transform translate-x-0 scale-100'
    },
    {
      exit: 'opacity-0 transform translate-y-full rotate-12',
      enter: 'opacity-100 transform translate-y-0 rotate-0'
    },
    {
      exit: 'opacity-0 transform -translate-y-full -rotate-12',
      enter: 'opacity-100 transform translate-y-0 rotate-0'
    },
    {
      exit: 'opacity-0 transform scale-95 -rotate-6',
      enter: 'opacity-100 transform scale-100 rotate-0'
    },
    {
      exit: 'opacity-0 transform scale-95 rotate-6',
      enter: 'opacity-100 transform scale-100 rotate-0'
    },
    {
      exit: 'opacity-0 transform translate-x-full scale-95',
      enter: 'opacity-100 transform -translate-x-0 scale-100'
    },
    {
      exit: 'opacity-0 transform -translate-x-full -translate-y-full',
      enter: 'opacity-100 transform translate-x-0 translate-y-0'
    },
    {
      exit: 'opacity-0 transform translate-x-full translate-y-full',
      enter: 'opacity-100 transform -translate-x-0 -translate-y-0'
    }
  ];

  // Get a truly random animation based on timestamp
  const randomIndex = Math.floor(Math.random() * animations.length);
  const selectedAnimation = animations[randomIndex];

  switch(transition) {
    case 'page-exit':
      return selectedAnimation.exit;
    case 'page-enter':
      return selectedAnimation.enter;
    default:
      return 'opacity-100';
  }
}
