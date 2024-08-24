import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function CardDefault({src,title,para}) {
    return (
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src={src}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography>
            {para}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
    );
  }