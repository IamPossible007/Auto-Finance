import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme, rem } from "@mantine/core";
import ImageCard from "../card/ImageCard";

const data = [
  {
    image:
      "https://media.istockphoto.com/id/1190927959/vector/side-view-of-a-sport-universal-car-with-a-big-red-bow-and-confetti-a-present.jpg?s=612x612&w=0&k=20&c=06SEbbfoIehhEinzXhTHvLfV8-kPUhdhNuzOeWRdyFs=",
    title: "Flexible financing options for your new car",
    category: "New Car Loans",
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/014/200/330/original/buying-a-car-dealer-buyer-hand-car-showroom-flat-illustration-vector.jpg",
    title: "Affordable financing for a reliable used car",
    category: "Used Car Loans",
  },
  {
    image:
      "https://pas-wordpress-media.s3.amazonaws.com/content/uploads/2015/12/loan-e1450497559334.jpg",
    title: "Lower your monthly payments with our refinancing options",
    category: "Refinancing Loans",
  },
  {
    image:
      "https://media.istockphoto.com/id/1301933699/vector/hand-holds-a-car-and-a-car-key.jpg?s=612x612&w=0&k=20&c=hNwn3d01ZWumRKf8gz3LV_ycc8TVCMV2JO31VNPlF84=",
    title: "Flexible financing options for lease buyouts",
    category: "Lease Buyout Loans",
  },
  {
    image:
      "https://www.thesimpledollar.com/wp-content/uploads/2020/07/GettyImages-1217424041-1.jpg",
    title: "Financing options for private car sales",
    category: "Private Party Loans",
  },
  {
    image:
      "https://media.istockphoto.com/id/1265612130/vector/businessman-check-a-car.jpg?s=612x612&w=0&k=20&c=myweo11F1OA3jzP3E4KfdLf6zgzymLmEZZ4Dx3RIYyk=",
    title: "We believe everyone deserves a chance to finance a car",
    category: "Bad Credit Loans",
  },
];

export function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <ImageCard {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize='50%'
      breakpoints={[
        { maxWidth: "sm", slideSize: "100%", slideGap: rem(2) },
      ]}
      slideGap='xl'
      align='start'
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}
