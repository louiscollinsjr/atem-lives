import React from 'react';
import { Link } from 'react-router-dom';
import type { StoryMetadata } from '../utils/loadStories';

interface FeaturedStoryPanelProps {
  story: StoryMetadata;
}

const FeaturedStoryPanel: React.FC<FeaturedStoryPanelProps> = ({ story }) => {
  return (
    <div className="sticky top-24 h-fit">
      <Link 
        to={`/stories/${story.slug}`}
        className="group block"
      >
        <article className="relative overflow-hidden rounded-lg transition-all duration-300">
          {/* Hero Image */}
          <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
            {story.heroImage ? (
              <img
                src={story.heroImage}
                alt={story.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
            
            {/* Featured Badge */}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium rounded-full">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Featured
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Tags */}
            {story.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {story.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h2 className="text-3xl font-bold text-black mb-4">
              {story.title}
            </h2>

            {/* Excerpt */}
            {/* <p className="text-gray-600 text-base mb-6 leading-relaxed">
              {story.excerpt}
            </p> */}

            {/* Meta */}
            {/* <div className="flex items-center justify-between text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">
              <span className="font-medium">{story.author}</span>
              <span>{story.readingTime}</span>
            </div> */}

            {/* CTA */}
            <div className="flex items-center text-black font-normal font-roboto group-hover:gap-3 gap-2 transition-all">
              <span>atem team</span>
              {/* <svg className="w-5 h-5 transition-transform group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg> */}
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default FeaturedStoryPanel;
