import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import {
  getStoryBySlug,
  getRegularStories,
  type Story,
} from "../utils/loadStories";
import StoryCard from "../components/StoryCard.component";

const StoryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [story, setStory] = useState<Story | null>(null);
  const [relatedStories, setRelatedStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      if (!slug) {
        setLoading(false);
        navigate("/stories");
        return;
      }

      try {
        const storyData = await getStoryBySlug(slug);

        if (!storyData) {
          navigate("/stories");
          return;
        }

        setStory(storyData);

        // Load related stories (exclude current story)
        const allStories = await getRegularStories();
        const related = allStories
          .filter((s) => s.metadata.slug !== slug)
          .slice(0, 3);
        setRelatedStories(related);
      } catch (error) {
        console.error("Error loading story:", error);
        navigate("/stories");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mb-4"></div>
          <p className="text-gray-600">Loading story...</p>
        </div>
      </div>
    );
  }

  if (!story) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white pt-40 mb-48">
      {/* Title Section */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Meta */}
        <div className="flex items-center justify-center text-sm text-gray-500 pt-6">
          <div className="flex items-center gap-4">
            {/* <span className="font-medium text-gray-900">{story.metadata.author}</span> */}

            <time>
              {new Date(story.metadata.publishedAt).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
            </time>
            <span>•</span>
            {story.metadata.tags.map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 text-gray-400">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 md:p-10">
          {/* Tags */}

          {/* Title */}
          <h1 className="text-6xl md:text-5xl font-normal text-gray-900 mb-4 leading-tight">
            {story.metadata.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {story.metadata.excerpt}
          </p>
        </div>
      </div>

      {/* Hero Section */}
      {story.metadata.heroImage && (
        <div className="max-w-6xl mx-auto mb-8 h-[600px] bg-red-300 rounded-lg">
          <img
            src={story.metadata.heroImage}
            alt={story.metadata.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )}

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 py-8">
        <div className="prose prose-lg prose-gray max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-4xl font-semibold text-gray-900 mt-14 mb-24">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-3xl font-normal text-gray-900 mt-20 mb-12">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-2xl font-normal text-gray-900 mt-10 mb-4">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-gray-700 leading-relaxed mb-6">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700">
                  {children}
                </ol>
              ),
              li: ({ children }) => <li className="ml-4">{children}</li>,
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-blue-500 pl-6 py-2 my-8 italic text-gray-600 bg-gray-50 rounded-r">
                  {children}
                </blockquote>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-blue-600 hover:text-blue-700 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
              code: ({ children }) => (
                <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">
                  {children}
                </code>
              ),
            }}
          >
            {story.content}
          </ReactMarkdown>
        </div>
      </article>

      {/* Related Stories */}
      {relatedStories.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              More Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedStories.map((relatedStory) => (
                <StoryCard
                  key={relatedStory.metadata.slug}
                  story={relatedStory.metadata}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default StoryDetailPage;
