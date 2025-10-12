import matter from 'gray-matter';
import { Buffer } from 'buffer';

if (typeof window !== 'undefined' && !(window as unknown as { Buffer?: typeof Buffer }).Buffer) {
  (window as unknown as { Buffer: typeof Buffer }).Buffer = Buffer;
}

export interface CaseStudyMeta {
  slug: string;
  title: string;
  summary: string;
  summaryImage?: string;
  mainText: string;
  highlights?: string[];
  backgroundMedia?: {
    src: string;
    type?: 'image' | 'video';
  };
  cta?: {
    label: string;
    href: string;
  };
  theme?: CaseStudyTheme;
}

export interface CaseStudyDocument extends CaseStudyMeta {
  body: string;
}

export interface CaseStudyTheme {
  variant?: 'light' | 'dark';
  backgroundColor?: string;
  overlayColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  accentColor?: string;
}

const parseTheme = (input: unknown): CaseStudyTheme | undefined => {
  if (!input || typeof input !== 'object') {
    return undefined;
  }

  const themeData = input as Record<string, unknown>;
  const theme: CaseStudyTheme = {};

  if (themeData.variant === 'light' || themeData.variant === 'dark') {
    theme.variant = themeData.variant;
  }

  if (typeof themeData.backgroundColor === 'string') {
    theme.backgroundColor = themeData.backgroundColor;
  }

  if (typeof themeData.overlayColor === 'string') {
    theme.overlayColor = themeData.overlayColor;
  }

  if (typeof themeData.textColor === 'string') {
    theme.textColor = themeData.textColor;
  }

  if (typeof themeData.mutedTextColor === 'string') {
    theme.mutedTextColor = themeData.mutedTextColor;
  }

  if (typeof themeData.accentColor === 'string') {
    theme.accentColor = themeData.accentColor;
  }

  return Object.keys(theme).length > 0 ? theme : undefined;
};

const caseStudyModules = import.meta.glob('../../content/case-studies/**/*.md', {
  as: 'raw',
  eager: true,
});

export const getCaseStudies = (): CaseStudyMeta[] => {
  return Object.entries(caseStudyModules).map(([path, content]) => {
    const { data } = matter(content as string);
    const slug = path.split('/case-studies/')[1].replace(/\.md$/, '');

    return {
      slug,
      title: data.title ?? 'Untitled Case Study',
      summary: data.summary ?? '',
      summaryImage: data.summaryImage,
      mainText: data.mainText ?? '',
      highlights: data.highlights ?? [],
      backgroundMedia: data.backgroundMedia,
      cta: data.cta,
      theme: parseTheme(data.theme),
    } satisfies CaseStudyMeta;
  });
};

export const getCaseStudyBySlug = (slug: string): CaseStudyDocument | null => {
  const entry = Object.entries(caseStudyModules).find(([path]) => path.endsWith(`${slug}.md`));
  if (!entry) {
    return null;
  }

  const [, content] = entry;
  const { data, content: body } = matter(content as string);

  return {
    slug,
    title: data.title ?? 'Untitled Case Study',
    summary: data.summary ?? '',
    summaryImage: data.summaryImage,
    mainText: data.mainText ?? '',
    highlights: data.highlights ?? [],
    backgroundMedia: data.backgroundMedia,
    cta: data.cta,
    theme: parseTheme(data.theme),
    body,
  } satisfies CaseStudyDocument;
};
