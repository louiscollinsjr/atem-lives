import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { truncateText } from '../utils/utils';
import { useTranslation } from 'react-i18next';
// Define the Post type based on the structure of the posts
interface Post {
  title: string;
  subtitle?: string; // Optional subtitle
  content: {
    text: string;
  };
  slug: string;
  coverImage: {
    url: string;
    fileName: string;
  };
}

const GET_ATEMPROJECTS_ITEMS = gql`
  query GetAtemProjectsItems {
    posts(where: { tags_value_recursive: "atem-projects" }) {
      tags
      title
      subtitle
      slug
      content {
        text
      }
      coverImage {
        fileName
        id
        url
      }
    }
  }
`;

const ProductNewThings: React.FC = () => {
  const { t } = useTranslation();
  const { loading, error, data } = useQuery(GET_ATEMPROJECTS_ITEMS);

  if (loading) return <p>{t("Loading...")}</p>;
  if (error) return <p>{t("Error:")} {error.message}</p>;

  return (
    <section className="bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
        <p className="text-base font-bold tracking-wide text-black uppercase mb-6">
          {t("Coders at Heart")}
        </p>

        <div className="space-y-8 lg:space-y-12">
          <div className="lg:pr-0 xl:pr-24">
            <div className="max-w-screen-xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black tracking-tight mb-4 sm:mb-6 lg:mb-8 max-w-5xl">
                {t("We are seriously in the business of starting new things.")}
              </h2>
              <p className="text-base sm:text-lg tracking-wide text-gray-700">
                At Atem,
                <span className="text-black"> {t("innovation is at our core.")}</span>
                {t("Alongside our commitment to starting new ventures, we're thrilled to introduce atem.Labs, our incubator for groundbreaking initiatives like")}
                <span className="text-black"> {t("Satchel")}</span>{t(", our AR Advertising platform.")}
                {t("Furthermore, we're excited to expand our expertise in AI, design, and e-commerce, driving forward our pursuit of excellence in every domain.")}
              </p>
            </div>
          </div>

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {data.posts.map((post: Post) => (
              <div key={post.slug}>
                <div
                  className="h-[450px] sm:h-96 md:h-96 lg:h-[630px] rounded-3xl bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${post.coverImage.url})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-700/40 to-transparent rounded-3xl"></div>
                  <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                    <h2 className="text-base sm:text-lg font-bold tracking-wide text-white uppercase mb-2 max-w-3xl">
                      {post.title}
                    </h2>
                    <p className="text-sm sm:text-base text-white mb-2">
                      {truncateText(post.content.text, 110)}
                    </p>
                    <p className="text-blue-400 text-xs">
                      {t("Case Study Coming Soon...")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductNewThings;
