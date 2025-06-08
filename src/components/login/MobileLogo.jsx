
const MobileLogo = () => {
  return (
    <div className="lg:hidden text-center mb-8">
      <div className="flex items-center justify-center space-x-2 mb-4">
        <div className="p-2 rounded-lg">
          <img src="/logo.png" className="h-20 w-20 text-white" alt="" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">ISM Connect</h1>
          <p className="text-sm text-gray-500">IIT Dhanbad</p>
        </div>
      </div>
    </div>
  );
};

export default MobileLogo;
