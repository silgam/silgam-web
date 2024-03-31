import { GetServerSideProps } from "next";

import Layout from "@/components/common/Layout";
import SilgampassPage, {
  SilgampassPageProps,
} from "@/components/products/Silgampass";
import { Review } from "@/components/ReviewSection";
import reviewsJson from "@/static/data/reviews.json";

export default function Page(props: SilgampassPageProps) {
  return (
    <Layout title="실감 | 2024학년도 실감패스" hideHeader hideFooter>
      <SilgampassPage {...props} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<
  SilgampassPageProps
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
