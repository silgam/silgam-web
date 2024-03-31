import { createRef, useEffect, useState } from "react";

import * as Styled from "./index.styled";

const reviewCardBackgroundColors = ["#E5EAFB", "#F0E7EB"];

export interface Review {
  title: string;
  content: string;
  width: number;
}

interface ReviewSectionProps {
  reviews: Review[];
}

export default function ReviewSection({
  reviews: reviewsJson,
}: ReviewSectionProps) {
  const [reviews, setReviews] = useState<Review[]>([]);

  const reviewSectionContentRef = createRef<HTMLDivElement>();

  useEffect(() => {
    setReviews(reviewsJson);
  }, [reviewsJson]);

  useEffect(() => {
    const interval = setInterval(() => {
      const current = reviewSectionContentRef.current;
      if (!current) return;

      current.scrollBy({ left: 1 });
      if (current.scrollLeft >= current.scrollWidth - current.offsetWidth - 1) {
        current.scrollTo({ left: 0 });
      }
    }, 20);
    return () => {
      clearInterval(interval);
    };
  }, [reviewSectionContentRef]);

  return (
    <Styled.ReviewSection>
      <Styled.ReviewSectionTitle>
        <span>실감을 써본 수험생들의</span>
        <span>REAL 후기</span>
      </Styled.ReviewSectionTitle>
      <Styled.ReviewSectionContent ref={reviewSectionContentRef}>
        {reviews.map((review, index) => (
          <Styled.ReviewContainer key={index}>
            <Styled.ReviewCard
              width={review.width}
              backgroundColor={
                reviewCardBackgroundColors[
                  index % reviewCardBackgroundColors.length
                ]
              }
              dangerouslySetInnerHTML={{ __html: review.content }}
            />
            <Styled.ReviewTitle>{`< ${review.title} >`}</Styled.ReviewTitle>
          </Styled.ReviewContainer>
        ))}
      </Styled.ReviewSectionContent>
      <Styled.ReviewSectionOverlayLeft />
      <Styled.ReviewSectionOverlayRight />
    </Styled.ReviewSection>
  );
}
