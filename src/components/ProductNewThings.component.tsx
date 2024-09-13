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
      <div className="max-w-7xl mx-auto md:px-4 py-28 text-left px-12">
        {/* <div className="container mx-auto max-w-screen-7xl py-6 bg-blue-500"> */}
        <p className="~text-base/lg font-bold tracking-wide text-black uppercase py-6">
          {t("Coders at Heart")}
        </p>

        <div className="grid grid-cols-1 gap-6 content-center ~mx-0/0 ">
          <div className="lg:pb-12 lg:pr-24 mb-1">
            <div className="max-w-screen-xl pb-0">
              <h2 className="~text-4xl/6xl col-span-2 text-left font-semibold text-black tracking-tight pb-8 max-w-5xl">
                {t("We are seriously in the business of starting new things.")}
              </h2>
              <p className="text-left ~text-lg/2xl  tracking-wide text-gray-700">
                At Atem,
                <span className="text-black"> {t("innovation is at our core.")}</span>
                {t("Alongside our commitment to starting new ventures, we're thrilled to introduce atem.Labs, our incubator for groundbreaking initiatives like")}
                <span className="text-black"> {t("Satchel")}</span>{t(", our AR Advertising platform.")}
                {t("Furthermore, we're excited to expand our expertise in AI, design, and e-commerce, driving forward our pursuit of excellence in every domain.")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-0">
            {data.posts.map((post: Post) => (
              <div key={post.slug} className="py-4">
                <div
                  className="w-full h-[630px] rounded-3xl bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${post.coverImage.url})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-700/40 to-transparent rounded-3xl"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h2 className="~text-base/2xl font-bold tracking-wide text-white uppercase py-1 max-w-3xl">
                      {post.title}
                    </h2>
                    <p className="~text-sm/base text-white">
                      {truncateText(post.content.text, 110)}
                    </p>
                    <p className="text-blue-400 text-xs pt-3">
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
