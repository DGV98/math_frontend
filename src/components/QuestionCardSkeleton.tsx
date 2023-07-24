import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import QuestionCardContainer from "./QuestionCardContainer";

const QuestionCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default QuestionCardSkeleton;
