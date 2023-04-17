import React from 'react'

function TerminalMock({children}) {
  return (
    <div class=" w-96 h-content p-4 rounded-lg">
    <div class="flex items-center justify-between bg-gray-700 rounded-t-lg px-2 py-1">
        <div class="flex items-center">
            <div class="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div class="flex items-center">
            <div class="bg-gray-600 w-3 h-3 rounded-full mr-2"></div>
            <div class="bg-gray-600 w-3 h-3 rounded-full mr-2"></div>
            <div class="bg-gray-600 w-3 h-3 rounded-full"></div>
        </div>
    </div>
    <div class="bg-black p-2 h-full rounded-b-lg">
        {children}
    </div>
</div>
  )
}

export default TerminalMock