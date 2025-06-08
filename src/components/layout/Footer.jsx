import {
  GraduationCap,
  MapPin
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">ISM Connect</h3>
                <p className="text-sm text-gray-500">
                  IIT Dhanbad Social Network
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Connecting the brilliant minds of IIT Dhanbad. Share knowledge,
              build friendships, and create memories that last a lifetime.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <MapPin className="h-4 w-4" />
              <span>IIT Dhanbad, Jharkhand 826004</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Academic Calendar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Campus Facilities
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Student Portal
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Alumni Network
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Community Guidelines
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2025 ISM Connect. Made with ❤️ for IIT Dhanbad students.
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <span className="text-sm text-gray-500">
              Built by students, for students
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
