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

function InterestsPage() {
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
          <div className="grid grid-cols-2 gap-12 mt-8">
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

function ContactPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800">Get In Touch</h1>
      </div>
      
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-sm rounded">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 hover:bg-gray-50 rounded transition-colors duration-200">
            <div className="mb-4 p-4 bg-gray-50 rounded-full">
              <MapPin size={40} className="text-gray-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-700">Location</h3>
            <p className="text-gray-600 mt-2">Noida, India</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 hover:bg-gray-50 rounded transition-colors duration-200">
            <div className="mb-4 p-4 bg-gray-50 rounded-full">
              <Phone size={40} className="text-gray-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-700">Phone</h3>
            <p className="text-gray-600 mt-2">+919686532842</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 hover:bg-gray-50 rounded transition-colors duration-200">
            <div className="mb-4 p-4 bg-gray-50 rounded-full">
              <Mail size={40} className="text-gray-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-700">Email</h3>
            <p className="text-gray-600 mt-2">kunalthakur15@gmail.com</p>
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
  
  const changePage = (page: PageType) => {
    setTransition('page-exit');
    setTimeout(() => {
      setCurrentPage(page);
      setTransition('page-enter');
      window.scrollTo(0, 0);
    }, 500);
  };
  
  useEffect(() => {
    if (transition === 'page-enter') {
      const timer = setTimeout(() => {
        setTransition('');
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [transition]);
  
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Sidebar */}
      <div className="w-48 min-h-screen bg-white shadow-md border-r-4 border-gray-200 flex flex-col fixed h-screen">
        <div className="p-4 flex flex-col items-center">
          <img src={kunalPic} alt="Profile" className="rounded-md mb-2 w-10 h-10 object-cover" />
          <h2 className="text-xl font-bold text-gray-800">Kunal Thakur</h2>
        </div>
        
        <div className="mt-4 flex-1">
          <NavItem
            label="About Me"
            active={currentPage === 'about'}
            onClick={() => changePage('about')}
          />
          <NavItem
            label="Resume"
            active={currentPage === 'resume'}
            onClick={() => changePage('resume')}
          />
          <NavItem
            label="Interests"
            active={currentPage === 'interests'}
            onClick={() => changePage('interests')}
          />
          {/* <NavItem
            label="Blogs"
            active={currentPage === 'blog'}
            onClick={() => changePage('blog')}
          /> */}
          <NavItem
            label="Contact"
            active={currentPage === 'contact'}
            onClick={() => changePage('contact')}
          />
        </div>
        
        <div className="mt-auto p-4">
          <div className="text-xs text-gray-400 text-center">
            © 2024 All rights reserved
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-8 bg-white ml-48">
        <div className={`transition-all duration-500 transform-gpu ${getTransitionClass(transition, currentPage)}`}>
          {currentPage === 'about' && <HomePage changePage={changePage} />}
          {currentPage === 'home' && <HomePage changePage={changePage} />}
          {currentPage === 'resume' && <ResumePage />}
          {currentPage === 'interests' && <InterestsPage />}
          {currentPage === 'contact' && <ContactPage />}
        </div>
      </div>
    </div>
  );
}

// Navigation Item Component
function NavItem({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <div 
      className={`py-3 px-6 cursor-pointer hover:bg-gray-100 ${active ? 'border-l-4 border-blue-500' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onClick()}
    >
      <span className={`${active ? 'text-blue-500' : 'text-gray-700'}`}>{label}</span>
    </div>
  );
}

// Home Page Component
function HomePage({ changePage }: { changePage: (page: PageType) => void }) {
  return (
    <div>
      <div className="flex mb-12">
        <div className="flex-1 flex justify-center">
          <img src={kunalPic} alt="Profile" className="w-[450px] h-[450px] object-cover rounded-lg" />
        </div>
        <div className="flex-1 pl-8">
          <p className="text-gray-500 mb-2">Product Management</p>
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Kunal Thakur</h1>
          
          <p className="text-gray-600 mb-4">
            A seasoned AI-driven product leader with 17 years of experience, including 13 years in product
            management. My passion lies in driving digital transformation in B2B and B2C sectors through
            innovation and cross-functional team leadership. 

          </p>
          
          <p className="text-gray-600 mb-8">
            I have a proven track record in scaling products and optimizing operations for significant efficiency
          gains, and I thrive in dynamic environments where strategic execution can lead to impactful business outcomes
          </p>
          
          <div className="flex space-x-4 items-center">
            <a 
              href="/Kunal Thakur Resume 4.pdf" 
              download="Kunal Thakur Resume.pdf"
              className="border-2 border-blue-500 text-blue-500 px-6 py-2 font-medium hover:bg-blue-50"
            >
              Download CV
            </a>
            <button 
              className="border-2 border-gray-300 text-gray-700 px-6 py-2 font-medium hover:bg-gray-50"
              onClick={() => changePage('contact')}
            >
              Contact
            </button>
            <a 
              href="https://www.linkedin.com/in/kunalthakur15/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-blue-500 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2 inline-block">
          What I Do
        </h2>
        
        <div className="grid grid-cols-2 gap-8 mt-8">
          <div className="flex">
            <div className="mr-4 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Ecommerce</h3>
              <p className="text-gray-600">
                Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.
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
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Copywriter</h3>
              <p className="text-gray-600">
                Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.
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
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Web Design</h3>
              <p className="text-gray-600">
                Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.
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
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Management</h3>
              <p className="text-gray-600">
                Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Resume Page Component
function ResumePage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800">Resume</h1>
        <p className="text-gray-600">17+ Years of Experience</p>
      </div>
      
      <div className="flex">
        {/* Main content - Education and Experience */}
        <div className="flex-1 pr-6">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8 border-b-2 border-blue-500 pb-2 inline-block">
              Education
            </h2>
            
            <div className="mb-8 relative">
              <div className="flex items-start">
                <div className="text-left pr-4 w-[148px]">
                  <div className="text-gray-600 text-sm mt-1">2010 - 2012</div>
                </div>
                <div className="flex-shrink-0 mt-1 relative w-4 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full border-2 border-blue-500 bg-white z-10"></div>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[1px] h-[120px] bg-blue-500"></div>
                </div>
                <div className="pl-6 -mt-1">
                  <h3 className="text-lg font-semibold text-gray-800">PGDM</h3>
                  <p className="text-sm text-gray-500 mb-2">Indian Institute of Management, Indore</p>
                  <p className="text-gray-600">
                    IIM Indore is a Tier 1 B School in India. Completed my 2 years full time program in 2012 with a specific focus on Information Systems and Strategy.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-8 relative">
              <div className="flex items-start">
                <div className="text-left pr-4 w-[148px]">
                  <div className="text-gray-600 text-sm mt-1">2002 - 2006</div>
                </div>
                <div className="flex-shrink-0 mt-1 relative w-4 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full border-2 border-blue-500 bg-white z-10"></div>
                </div>
                <div className="pl-6 -mt-1">
                  <h3 className="text-lg font-semibold text-gray-800">B.Tech, Computer Science</h3>
                  <p className="text-sm text-gray-500 mb-2">College of Engineering, Roorkee</p>
                  <p className="text-gray-600">
                    Rated No.1 private college in India from 2003 to 2007. Completed Computer Science and Engineering and was among the top 1% of the class.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8 border-b-2 border-blue-500 pb-2 inline-block">
              Experience
            </h2>
            
            <div className="mb-8 relative">
              <div className="flex items-start">
                <div className="text-left pr-4 w-[120px]">
                  <div className="text-gray-600 text-sm mt-1">May '24 -<br />Feb '25</div>
                </div>
                <div className="flex-shrink-0 mt-1 relative w-4 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full border-2 border-blue-500 bg-white z-10"></div>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[1px] h-[200px] bg-blue-500"></div>
                </div>
                <div className="pl-6 -mt-1">
                  <h3 className="text-lg font-semibold text-gray-800">Group Product Manager</h3>
                  <p className="text-sm text-gray-500 mb-2">R1 RCM [US Healthcare Domain]</p>
                  <ul className="text-gray-600 list-disc pl-5 space-y-1">
                    <li>Defined and drove the AI/ML roadmap for US Healthcare B2B SaaS solutions</li>
                    <li>Identified and implemented key performance metrics to measure AI/ML and product success</li>
                    <li>Achieved over $1M in annual cost savings by optimizing manpower allocation and streamlining operations</li>
                    <li>Reduced physician's EMR summary time by 66%, saving $1800/day</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mb-8 relative">
              <div className="flex items-start">
                <div className="text-left pr-4 w-[108px]">
                  <div className="text-gray-600 text-sm mt-1">Apr '22' -<br />May '24</div>
                </div>
                <div className="flex-shrink-0 mt-1 relative w-4 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full border-2 border-blue-500 bg-white z-10"></div>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[1px] h-[200px] bg-blue-500"></div>
                </div>
                <div className="pl-6 -mt-1">
                  <h3 className="text-lg font-semibold text-gray-800">Senior Product Manager AI</h3>
                  <p className="text-sm text-gray-500 mb-2">RAFT.AI [Shipping, Logistics, Supply Chain Domain]</p>
                  <ul className="text-gray-600 list-disc pl-5 space-y-1">
                    <li>Drove adoption by 4 major BFSI players by executing a roadmap for the Document AI product</li>
                    <li>Reduced manual effort by over 90% by implementing Document AI</li>
                    <li>Reduced manual effort by over 80% through personalization and automation of processes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8 relative">
              <div className="flex items-start">
                <div className="text-left pr-4 w-[108px]">
                  <div className="text-gray-600 text-sm mt-1">Jan '21 -<br />Apr '22</div>
                </div>
                <div className="flex-shrink-0 mt-1 relative w-4 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full border-2 border-blue-500 bg-white z-10"></div>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[1px] h-[200px] bg-blue-500"></div>
                </div>
                <div className="pl-6 -mt-1">
                  <h3 className="text-lg font-semibold text-gray-800">Senior Product Manager AI</h3>
                  <p className="text-sm text-gray-500 mb-2">LUMIQ.AI [BFSI Domain]</p>
                  <ul className="text-gray-600 list-disc pl-5 space-y-1">
                    <li>Drove adoption by 4 major BFSI players by executing a roadmap for the Document AI product</li>
                    <li>Reduced manual effort by over 90% by implementing Document AI</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8 relative">
              <div className="flex items-start">
                <div className="text-left pr-4 w-[108px]">
                  <div className="text-gray-600 text-sm mt-1">Apr '18 -<br />Jan '21</div>
                </div>
                <div className="flex-shrink-0 mt-1 relative w-4 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full border-2 border-blue-500 bg-white z-10"></div>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[1px] h-[200px] bg-blue-500"></div>
                </div>
                <div className="pl-6 -mt-1">
                  <h3 className="text-lg font-semibold text-gray-800">AVP Products</h3>
                  <p className="text-sm text-gray-500 mb-2">EASYPOLICY [Insurance Domain]</p>
                  <ul className="text-gray-600 list-disc pl-5 space-y-1">
                    <li>Generated a 366% increase in DIY insurance purchases through improved UX</li>
                    <li>Revitalized user journey and payment process resulting in a 76% increase in conversions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8 relative">
              <div className="flex items-start">
                <div className="text-left pr-4 w-[108px]">
                  <div className="text-gray-600 text-sm mt-1">Jul '16 -<br />Mar '18</div>
                </div>
                <div className="flex-shrink-0 mt-1 relative w-4 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full border-2 border-blue-500 bg-white z-10"></div>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[1px] h-[200px] bg-blue-500"></div>
                </div>
                <div className="pl-6 -mt-1">
                  <h3 className="text-lg font-semibold text-gray-800">Head - Product</h3>
                  <p className="text-sm text-gray-500 mb-2">BYKUP [Ride Sharing/Consumer App Domain]</p>
                  <ul className="text-gray-600 list-disc pl-5 space-y-1">
                    <li>Overhauled UX/UI, resulting in a 200% increase in DAU within 3 months</li>
                    <li>Conceptualized and launched impactful new features driving a 6x increase in completed rides</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8 relative">
              <div className="flex items-start">
                <div className="text-left pr-4 w-[108px]">
                  <div className="text-gray-600 text-sm mt-1">May '15 -<br />Jul '16</div>
                </div>
                <div className="flex-shrink-0 mt-1 relative w-4 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full border-2 border-blue-500 bg-white z-10"></div>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[1px] h-[200px] bg-blue-500"></div>
                </div>
                <div className="pl-6 -mt-1">
                  <h3 className="text-lg font-semibold text-gray-800">Senior Product Manager</h3>
                  <p className="text-sm text-gray-500 mb-2">MATRIMONY.COM [Consumer App Domain]</p>
                  <ul className="text-gray-600 list-disc pl-5 space-y-1">
                    <li>Reduced photo and profile validation effort by over 60%</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8 relative">
              <div className="flex items-start">
                <div className="text-left pr-4 w-[108px]">
                  <div className="text-gray-600 text-sm mt-1">Oct '13 -<br />Jan '15</div>
                </div>
                <div className="flex-shrink-0 mt-1 relative w-4 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full border-2 border-blue-500 bg-white z-10"></div>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[1px] h-[200px] bg-blue-500"></div>
                </div>
                <div className="pl-6 -mt-1">
                  <h3 className="text-lg font-semibold text-gray-800">Product Practice Manager</h3>
                  <p className="text-sm text-gray-500 mb-2">ALTISOURCE [Consumer App Domain]</p>
                </div>
              </div>
            </div>

            <div className="mb-8 relative">
              <div className="flex items-start">
                <div className="text-left pr-4 w-[108px]">
                  <div className="text-gray-600 text-sm mt-1">May '12 -<br />Jun '13</div>
                </div>
                <div className="flex-shrink-0 mt-1 relative w-4 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full border-2 border-blue-500 bg-white z-10"></div>
                </div>
                <div className="pl-6 -mt-1">
                  <h3 className="text-lg font-semibold text-gray-800">Product Consultant</h3>
                  <p className="text-sm text-gray-500 mb-2">NEUDESIC [Consulting Domain]</p>
                </div>
              </div>
            </div>

            <div className="mb-8 relative">
              <div className="flex items-start">
                <div className="text-left pr-4 w-[108px]">
                  <div className="text-gray-600 text-sm mt-1">Jun '06 -<br />Jan '10</div>
                </div>
                <div className="flex-shrink-0 mt-1 relative w-4 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full border-2 border-blue-500 bg-white z-10"></div>
                </div>
                <div className="pl-6 -mt-1">
                  <h3 className="text-lg font-semibold text-gray-800">Software Engineer</h3>
                  <p className="text-sm text-gray-500 mb-2">CGI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right sidebar - Skills */}
        <div className="w-80">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2 inline-block">
              Core Skills
            </h2>
            
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">B2B and B2C Product</span>
                <span className="text-gray-500">100%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">AI/ML Products & Strategy</span>
                <span className="text-gray-500">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">User Experience</span>
                <span className="text-gray-500">90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">Agile</span>
                <span className="text-gray-500">100%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">Product Vision & Roadmap</span>
                <span className="text-gray-500">90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2 inline-block">
              Other Skills
            </h2>
            
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">Team Leadership</span>
                <span className="text-gray-500">90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">Stakeholder Management</span>
                <span className="text-gray-500">100%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">Mentoring</span>
                <span className="text-gray-500">90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">Recruitement & Reviews</span>
                <span className="text-gray-500">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2 inline-block">
              Certifications
            </h2>
            
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">AWS Cloud Practitioner</span>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">PMP</span>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">PSM 1</span>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">SCJP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function for transitions
function getTransitionClass(transition: TransitionType, currentPage: PageType): string {
  switch(transition) {
    case 'page-exit':
      if (currentPage === 'resume') {
        return 'opacity-0 transform -rotate-y-90';
      }
      return 'opacity-0 transform -translate-x-full';
    case 'page-enter':
      if (currentPage === 'resume') {
        return 'opacity-100 transform rotate-y-0';
      }
      return 'opacity-100 transform translate-x-0';
    default:
      return 'opacity-100';
  }
}
