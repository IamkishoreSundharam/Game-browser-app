import { Card, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react";

const LoaderSkeletons = () => {
  return (
    <Card>
      <Skeleton height={"150px"}></Skeleton>

      <CardBody>
        <SkeletonText height={"150px"}></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default LoaderSkeletons;
