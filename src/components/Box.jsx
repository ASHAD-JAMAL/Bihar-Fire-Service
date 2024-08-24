import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function Box({ src, title, para }) {
  return (
    <Card className="mt-6 w-80 mx-auto">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={src}
          alt="card-image"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>{para}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
}

export default Box;
