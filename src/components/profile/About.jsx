import { Calendar, Camera, GraduationCap, Mail, MapPin, Settings, Users } from 'lucide-react'

const About = ({profileData}) => {
  return (
     <div className="px-6 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:space-x-6 -mt-16 relative z-10">
              <div className="relative">
                <img 
                  src={profileData.profileImage}
                  alt={profileData.name}
                  className="min-w-32 shrink-0 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                />
                <button className="absolute bottom-2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors shadow-lg">
                  <Camera className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex-1 mt-4">
                <div className="flex">
                  <div className='flex-auto'>
                    <h1 className="text-3xl font-bold text-gray-900">{profileData.name}</h1>
                    <p className="text-gray-600 text-lg">{profileData.username}</p>
                  </div>
                  
                  <div className="flex-auto text-right space-x-3 mt-4">
                    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <Settings className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bio & Info */}
            <div className="mt-6 space-y-4">
              <p className="text-gray-800 leading-relaxed whitespace-pre-line">
                {profileData.bio}
              </p>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>{profileData.branch}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{profileData.year}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>{profileData.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{profileData.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Joined {profileData.joinedDate}</span>
                </div>
              </div>
            </div>
          </div>
  )
}

export default About
