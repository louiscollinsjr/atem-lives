import matter from 'gray-matter';

export interface StoryMetadata {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  heroImage: string;
  thumbnail: string;
  author: string;
  readingTime: string;
  tags: string[];
  featured: boolean;
  priority?: number;
  related?: string[];
}

export interface Story {
  metadata: StoryMetadata;
  content: string;
  filename: string;
}

/**
 * Load all story markdown files from the content/stories directory
 */
export async function loadStories(): Promise<Story[]> {
  const storyModules = import.meta.glob('/content/stories/*.md', { 
    as: 'raw',
    eager: true 
  });

  const stories: Story[] = [];

  for (const [path, content] of Object.entries(storyModules)) {
    const filename = path.split('/').pop()?.replace('.md', '') || '';
    const { data, content: markdownContent } = matter(content as string);

    // Ensure required fields exist
    const metadata: StoryMetadata = {
      title: data.title || 'Untitled',
      slug: data.slug || filename,
      excerpt: data.excerpt || '',
      publishedAt: data.publishedAt || new Date().toISOString().split('T')[0],
      heroImage: data.heroImage || '',
      thumbnail: data.thumbnail || data.heroImage || '',
      author: data.author || 'Anonymous',
      readingTime: data.readingTime || calculateReadingTime(markdownContent),
      tags: data.tags || [],
      featured: data.featured || false,
      priority: data.priority,
      related: data.related || [],
    };

    stories.push({
      metadata,
      content: markdownContent,
      filename,
    });
  }

  // Sort by publishedAt (newest first)
  stories.sort((a, b) => {
    const dateA = new Date(a.metadata.publishedAt).getTime();
    const dateB = new Date(b.metadata.publishedAt).getTime();
    return dateB - dateA;
  });

  return stories;
}

/**
 * Get a single story by slug
 */
export async function getStoryBySlug(slug: string): Promise<Story | null> {
  const stories = await loadStories();
  return stories.find(story => story.metadata.slug === slug) || null;
}

/**
 * Get the featured story (or most recent if none marked as featured)
 */
export async function getFeaturedStory(): Promise<Story | null> {
  const stories = await loadStories();
  
  // Find featured stories
  const featuredStories = stories.filter(s => s.metadata.featured);
  
  if (featuredStories.length === 0) {
    return stories[0] || null; // Return most recent
  }
  
  // If multiple featured, sort by priority then date
  featuredStories.sort((a, b) => {
    if (a.metadata.priority !== undefined && b.metadata.priority !== undefined) {
      return a.metadata.priority - b.metadata.priority;
    }
    const dateA = new Date(a.metadata.publishedAt).getTime();
    const dateB = new Date(b.metadata.publishedAt).getTime();
    return dateB - dateA;
  });
  
  return featuredStories[0];
}

/**
 * Get all stories except the featured one
 */
export async function getRegularStories(): Promise<Story[]> {
  const stories = await loadStories();
  const featured = await getFeaturedStory();
  
  if (!featured) return stories;
  
  return stories.filter(s => s.metadata.slug !== featured.metadata.slug);
}

/**
 * Calculate reading time based on word count
 */
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

/**
 * Get stories by tag
 */
export async function getStoriesByTag(tag: string): Promise<Story[]> {
  const stories = await loadStories();
  return stories.filter(story => 
    story.metadata.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Get all unique tags
 */
export async function getAllTags(): Promise<string[]> {
  const stories = await loadStories();
  const tagSet = new Set<string>();
  
  stories.forEach(story => {
    story.metadata.tags.forEach(tag => tagSet.add(tag));
  });
  
  return Array.from(tagSet).sort();
}
