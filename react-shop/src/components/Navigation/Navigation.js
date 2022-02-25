function Navigation ({/*props*/}) {
    return (
        <nav class="bg-gray-800">
             <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div class="relative flex items-center justify-between h-16">
                    <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="hidden sm:block sm:ml-6">
                        <div class="flex space-x-4">

                        <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">About Me</a>

                        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Portfolio</a>

                        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Resume</a>

                        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>

                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </nav>
    );
  }
  
  export default Navigation;

  //About Me, Portfolio, Contact, and Resume