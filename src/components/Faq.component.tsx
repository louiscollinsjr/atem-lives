import React, { useState } from 'react';

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  name: string;
  isTrending?: boolean;
  items: FaqItem[];
}

export interface FaqProps {
  className?: string;
  categories?: FaqCategory[];
  title?: string;
  description?: string;
  cta?: {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
}

const Faq: React.FC<FaqProps> = ({
  className = "",
  categories = defaultCategories,
  title = "Questions?",
  description = "Everything you need to know about working with Launch by Atem"
}) => {
  const [activeCategory, setActiveCategory] = useState('trending');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(['trending-1']));
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setOpenItems(new Set());
  };

  const handleCarouselPrev = () => {
    setCarouselIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  const handleCarouselNext = () => {
    setCarouselIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  };

  const handleCategoryClick = (categoryId: string, index: number) => {
    handleCategoryChange(categoryId);
    setCarouselIndex(index);
  };

  const toggleItem = (itemId: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(itemId)) {
      newOpenItems.delete(itemId);
    } else {
      newOpenItems.clear();
      newOpenItems.add(itemId);
    }
    setOpenItems(newOpenItems);
  };

  const activeCategoryData = categories.find(cat => cat.id === activeCategory);

  return (
    <section className={`max-w-7xl mx-auto px-6 md:px-10 py-24 ${className}`}>
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-7xl font-bold font-roboto text-gray-900 mb-6 tracking-tight">
          {title}
        </h2>
        <p className="text-lg md:text-2xl text-black font-roboto leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>
      </div>

      {/* Category Tabs - Carousel on mobile, normal layout on desktop */}
      <div className="relative mb-12">
        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handleCarouselPrev}
              className="p-2 rounded-full border border-[#e0e0e0] bg-white hover:border-black transition-colors"
              aria-label="Previous category"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M20 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 4L4 12L12 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className="flex-1 max-w-[200px]">
              <button
                onClick={() => handleCategoryClick(categories[carouselIndex].id, carouselIndex)}
                className={`w-full px-6 py-3 rounded-full text-sm font-roboto tracking-wide transition-all duration-300 border ${
                  activeCategory === categories[carouselIndex].id
                    ? categories[carouselIndex].isTrending
                      ? 'bg-gradient-to-r from-[#ff395c] to-[#ff395c] text-white border-transparent'
                      : 'bg-black text-white border-black'
                    : 'bg-white text-black border-[#e0e0e0] hover:border-black hover:text-black'
                }`}
              >
                {categories[carouselIndex].name}
              </button>
            </div>
            
            <button
              onClick={handleCarouselNext}
              className="p-2 rounded-full border border-[#e0e0e0] bg-white hover:border-black transition-colors"
              aria-label="Next category"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 4L20 12L12 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          {/* Carousel dots */}
          <div className="flex justify-center gap-2 mt-4">
            {categories.map((_, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(categories[index].id, index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === carouselIndex ? 'bg-black' : 'bg-[#e0e0e0]'
                }`}
                aria-label={`Go to category ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id, categories.indexOf(category))}
              className={`px-6 py-3 rounded-full text-sm font-roboto tracking-wide transition-all duration-300 border ${
                activeCategory === category.id
                  ? category.isTrending
                    ? 'bg-gradient-to-r from-[#ff395c] to-[#ff395c] text-white border-transparent'
                    : 'bg-black text-white border-black'
                  : 'bg-white text-black border-[#e0e0e0] hover:border-black hover:text-black'
              }`}
            >
              {category.isTrending && ''}
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Items */}
      <div className="space-y-1 mb-20">
        {activeCategoryData?.items.map((item, index) => {
          const itemId = `${activeCategory}-${index}`;
          const isOpen = openItems.has(itemId);
          
          return (
            <div
              key={item.id}
              className="border-b border-[#e0e0e0] last:border-b-0"
            >
              <button
                onClick={() => toggleItem(itemId)}
                className="w-full text-left py-6 flex justify-between items-center group transition-colors duration-200 hover:text-black"
              >
                <span className={`text-lg md:text-xl font-medium font-roboto pr-8 ${
                  isOpen ? 'text-black' : 'text-[#86868b]'
                }`}>
                  {item.question}
                </span>
                <span className={`flex-shrink-0 text-2xl transition-transform duration-300 ${
                  isOpen ? 'rotate-45' : 'rotate-0'
                } text-[#999] group-hover:text-black`}>
                  +
                </span>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="pb-6">
                  <p className="text-base md:text-lg text-[#86868b] font-roboto leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Box */}
      {/* <div className="bg-gray-100 rounded-2xl p-8 md:p-12 text-center">
        <h3 className="text-2xl md:text-3xl font-bold font-roboto text-gray-900 mb-4">
          {cta.title}
        </h3>
        <p className="text-lg text-[#86868b] font-roboto mb-8 max-w-2xl mx-auto">
          {cta.description}
        </p>
        <a
          href={cta.buttonHref}
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-black text-white text-sm font-roboto tracking-wide transition-colors duration-300 hover:bg-gray-800"
        >
          {cta.buttonText}
        </a>
      </div> */}
    </section>
  );
};

// Default FAQ categories based on the template
const defaultCategories: FaqCategory[] = [
  {
    id: 'trending',
    name: 'Trending',
    isTrending: true,
    items: [
      {
        id: 't1',
        question: 'How do you ship MVPs in 8 weeks when others take 6 months?',
        answer: 'Focus. We build 2-3 core features that solve your main problem, not 20 nice-to-haves. No committee meetings, no handoffs—just direct collaboration with a senior developer who makes fast decisions.'
      },
      {
        id: 't2',
        question: 'Why are your prices lower than other agencies?',
        answer: 'I\'m based in Romania with lower operating costs, but I work directly with US founders. You get senior-level quality without the agency markup—no account managers, no layers of bureaucracy, no inflated overhead.'
      },
      {
        id: 't3',
        question: 'What if my project doesn\'t fit these tiers?',
        answer: 'Book a free consultation. We\'ll scope your specific needs and provide a custom quote within 24 hours. Most projects fit, but we\'re flexible when they don\'t.'
      },
      {
        id: 't4',
        question: 'How does payment work?',
        answer: '50% upfront to start, 50% at delivery. For projects over $10,000, we can discuss milestone-based payments that match your cash flow.'
      },
      {
        id: 't5',
        question: 'Can I see examples of your work?',
        answer: 'Yes. We showcase anonymized case studies on this page. During your consultation, we can share relevant examples based on your industry and specific needs.'
      },
      {
        id: 't6',
        question: 'What happens after launch?',
        answer: 'Every package includes 1-2 weeks of post-launch support for bugs. After that, you can book hourly support ($150/hour) or sign up for a monthly retainer ($500/month) for ongoing development.'
      }
    ]
  },
  {
    id: 'scope',
    name: 'Scope & Process',
    items: [
      {
        id: 's1',
        question: 'What exactly is included in an MVP package?',
        answer: 'Each tier includes a fixed number of core features, responsive design, authentication (if needed), database setup, clean documented code, and post-launch support. We scope everything upfront so there are no surprises.'
      },
      {
        id: 's2',
        question: 'How do we decide what features to include?',
        answer: 'On our kickoff call, we\'ll prioritize features based on your core user need. We focus on 2-4 features that solve the main problem—nothing extra. You can always add more after launch.'
      },
      {
        id: 's3',
        question: 'Can I change features mid-project?',
        answer: 'Minor adjustments are fine. Major scope changes require a change order with transparent pricing. We protect both of us with clear agreements upfront.'
      }
    ]
  },
  {
    id: 'timeline',
    name: 'Timeline & Delivery',
    items: [
      {
        id: 'ti1',
        question: 'What if you miss the deadline?',
        answer: 'We haven\'t missed a deadline yet. But if we do, you get 10% off your final payment. We take timelines seriously.'
      },
      {
        id: 'ti2',
        question: 'When can we start?',
        answer: 'We currently have 2 project slots available for Q4 2025. Book a consultation to reserve your spot.'
      },
      {
        id: 'ti3',
        question: 'How involved do I need to be during development?',
        answer: 'We\'ll have a kickoff call, weekly check-ins (30 min), and need your feedback at key milestones. Expect 2-3 hours per week from you.'
      }
    ]
  },
  {
    id: 'technical',
    name: 'Technical',
    items: [
      {
        id: 'te1',
        question: 'What technologies do you use?',
        answer: 'We choose the best stack for your needs—typically modern, proven tools like React, Node.js, PostgreSQL, or similar. We\'ll recommend the right fit during scoping and explain why.'
      },
      {
        id: 'te2',
        question: 'Will I own the code?',
        answer: 'Yes. You get full ownership of all code, designs, and documentation. No strings attached.'
      },
      {
        id: 'te3',
        question: 'Can another developer take over after launch?',
        answer: 'Absolutely. We write clean, documented code with that in mind. You\'re never locked in.'
      },
      {
        id: 'te4',
        question: 'Do you build mobile apps or just web?',
        answer: 'Both. We build responsive web apps (work on any device) and native mobile apps depending on your needs.'
      }
    ]
  },
  {
    id: 'payment',
    name: 'Payment & Pricing',
    items: [
      {
        id: 'p1',
        question: 'Do you offer payment plans?',
        answer: 'Yes, for projects over $10,000. We\'ll work out a structure that fits your cash flow.'
      },
      {
        id: 'p2',
        question: 'Is the introductory pricing real or a gimmick?',
        answer: 'It\'s real. We\'re building our portfolio and case studies for 2025-2026. After December 2025, prices return to standard rates (30% higher).'
      },
      {
        id: 'p3',
        question: 'What\'s included in "no surprises"?',
        answer: 'Fixed scope agreed upfront. If you request changes, we discuss cost before doing the work. No hidden fees, no scope creep, no surprise invoices.'
      }
    ]
  },
  {
    id: 'trust',
    name: 'Trust & Credibility',
    items: [
      {
        id: 'tr1',
        question: 'What if I\'m not happy with the result?',
        answer: 'We work collaboratively with regular check-ins, so you\'re never surprised. If there\'s a technical issue we can\'t resolve, you get a full refund. This has never happened.'
      },
      {
        id: 'tr2',
        question: 'Do you sign NDAs?',
        answer: 'Yes, we\'re happy to sign your NDA before discussing your idea.'
      },
      {
        id: 'tr3',
        question: 'How do I know you won\'t disappear mid-project?',
        answer: 'You only pay 50% upfront, and we stay in regular contact throughout. Plus, you can check our LinkedIn, GitHub, and past client testimonials.'
      }
    ]
  },
  {
    id: 'strategy',
    name: 'Strategy & Planning',
    items: [
      {
        id: 'st1',
        question: 'What if I\'m not sure my idea is ready to build?',
        answer: 'Book a $500 Strategy Session. We\'ll analyze feasibility, prioritize features, recommend tech, and give you a roadmap. If you build with us within 30 days, the $500 is credited toward your project.'
      },
      {
        id: 'st2',
        question: 'I don\'t have wireframes or designs. Can you still help?',
        answer: 'Yes. We can start from scratch or work with whatever you have. Part of our process is helping you clarify what to build.'
      },
      {
        id: 'st3',
        question: 'What if I need help after the support period ends?',
        answer: 'You can book additional support hours ($150/hour) or sign up for a monthly retainer ($500/month for ongoing help).'
      }
    ]
  }
];


export default Faq;
