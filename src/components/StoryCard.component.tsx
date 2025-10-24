import React from 'react';
import { Link } from 'react-router-dom';
import type { StoryMetadata } from '../utils/loadStories';

interface StoryCardProps {
  story: StoryMetadata;
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  return (
    <Link 
      to={`/stories/${story.slug}`}
      className="group block"
    >
      <article className="flex flex-col bg-white rounded-lg  overflow-hidden transition-all duration-300 hover:scale-[1.02] w-[331px] mx-auto">
        {/* Thumbnail */}
        <div className="relative h-[331px] w-full overflow-hidden bg-gray-100 rounded-lg">
          {story.thumbnail ? (
            <img
              src={story.thumbnail}
              alt={story.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col p-4">
          {/* Tags */}
          {story.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {story.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h3 className="text-lg font-normal text-black mb-2 transition-colors line-clamp-2">
            {story.title}
          </h3>

          {/* Excerpt */}
          {/* <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
            {story.excerpt}
          </p> */}

          {/* Meta */}
          {/* <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
            <span>{story.author}</span>
            <span>{story.readingTime}</span>
          </div> */}
        </div>
      </article>
    </Link>
  );
};

export default StoryCard;
