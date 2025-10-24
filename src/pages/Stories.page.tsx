import React, { useEffect, useState } from 'react';
import { getFeaturedStory, getRegularStories, type Story } from '../utils/loadStories';
import FeaturedStoryPanel from '../components/FeaturedStoryPanel.component';
import StoryCard from '../components/StoryCard.component';

const StoriesPage: React.FC = () => {
  const [featuredStory, setFeaturedStory] = useState<Story | null>(null);
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [featured, regular] = await Promise.all([
          getFeaturedStory(),
          getRegularStories(),
        ]);
        setFeaturedStory(featured);
        setStories(regular);
      } catch (error) {
        console.error('Error loading stories:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mb-4"></div>
          <p className="text-gray-600">Loading stories...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen max-w-full mx-auto mb-48">
      {/* Header */}
      <header className="pt-64 mx-auto text-center items-center justify-center">
        <div className="max-w-[1380px] mx-auto px-6 py-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Stories</h1>
          <p className="text-xl text-gray-600 max-w-2xl text-center mx-auto mb-12">
            Discover how teams are building the future with innovative technology and creative solutions.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1380px] mx-auto pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,3fr)_minmax(0,1fr)] gap-6 px-6">
          {/* Featured Story - Sticky Left Column */}
          {featuredStory && (
            <aside>
              <FeaturedStoryPanel story={featuredStory.metadata} />
            </aside>
          )}

          {/* Stories Grid - Right Column */}
          <div>
            {stories.length > 0 ? (
              <div className="grid grid-cols-1 gap-6">
                {stories.slice(0, 4).map((story) => (
                  <StoryCard key={story.metadata.slug} story={story.metadata} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No stories available yet.</p>
              </div>
            )}
          </div>
        </div>

        {/* Grid of story cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 mt-32 px-6">
          {stories.slice(4, 4 + visibleCount).map((story) => (
            <StoryCard key={story.metadata.slug} story={story.metadata} />
          ))}
        </div>

        {/* Load More Button */}
        {stories.length > 4 + visibleCount && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount(prev => prev + 8)}
              className="bg-gray-200 text-black rounded-full px-6 py-3 font-medium hover:bg-gray-300 transition-colors"
            >
              Load More
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default StoriesPage;
