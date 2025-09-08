const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-gray-50 py-6 mt-auto animate-pulse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Column skeleton */}
        <div className="grid grid-cols-4 gap-6">
          {/* Column 1 */}
          <div className="space-y-3">
            <div className="h-5 bg-gray-200 rounded-md w-24"></div>
            <div className="h-4 bg-gray-200 rounded-md w-20"></div>
            <div className="h-4 bg-gray-200 rounded-md w-16"></div>
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            <div className="h-5 bg-gray-200 rounded-md w-20"></div>
            <div className="h-4 bg-gray-200 rounded-md w-16"></div>
            <div className="h-4 bg-gray-200 rounded-md w-24"></div>
          </div>

          {/* Additional columns visible only on larger screens */}
          <div className="space-y-3">
            <div className="h-5 bg-gray-200 rounded-md w-20"></div>
            <div className="h-4 bg-gray-200 rounded-md w-24"></div>
          </div>

          <div className="space-y-3">
            <div className="h-5 bg-gray-200 rounded-md w-24"></div>
            <div className="h-4 bg-gray-200 rounded-md w-16"></div>
          </div>
        </div>

        {/* Bottom copyright area with subtle separator */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex justify-center sm:justify-between items-center flex-wrap gap-4">
            <div className="h-4 bg-gray-200 rounded-md w-48"></div>
            <div className="h-4 bg-gray-200 rounded-md w-36"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;