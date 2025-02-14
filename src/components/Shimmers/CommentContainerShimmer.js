import React from 'react'

const CommentContainerShimmer = () => {
  return (
    <div className="w-full flex items-start mt-6 animate-pulse">
        <div className="w-12 h-12 rounded-full mr-4 bg-gray-400 shimmer"></div>
        <div>
          <div className="h-4 w-32 bg-gray-400 shimmer rounded mb-2"></div>
          <div className="h-3 w-72 bg-gray-400 shimmer rounded mb-2"></div>
          <div className="h-3 w-64 bg-gray-400 shimmer rounded mb-2"></div>
          <div className="flex gap-2 mt-2">
            <div className="w-8 h-4 bg-gray-400 shimmer rounded"></div>
            <div className="w-8 h-4 bg-gray-400 shimmer rounded"></div>
            <div className="w-12 h-4 bg-gray-400 shimmer rounded"></div>
          </div>
        </div>
      </div>
  )
}

export default CommentContainerShimmer