import { GetServerSideProps } from "next";

import Layout from "@/components/common/Layout";
import HomePage, { HomePageProps } from "@/components/HomePage";
import { Review } from "@/components/ReviewSection";
import reviewsJson from "@/static/data/reviews.json";

export default function Home(props: HomePageProps) {
  return (
    <Layout>
      <HomePage {...props} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<
  HomePageProps
> = async () => {
  const reviews: Review[] = reviewsJson;
  const startingIndex = Math.floor(Math.random() * reviews.length);
  const randomizedReviews = [
    ...reviews.slice(startingIndex),
    ...reviews.slice(0, startingIndex),
  ];

  return {
    props: {
      reviews: randomizedReviews,
    },
  };
};
