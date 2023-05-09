import { GetStaticProps } from "next";

import Layout from "@/components/common/Layout";
import HomePage, { HomePageProps } from "@/components/HomePage";
import reviewsJson from "@/static/data/reviews.json";

export default function Home(props: HomePageProps) {
  return (
    <Layout>
      <HomePage {...props} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  return {
    props: {
      reviews: reviewsJson.sort(() => Math.random() - 0.5),
    },
  };
};
