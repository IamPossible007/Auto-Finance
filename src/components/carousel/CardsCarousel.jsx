import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme, rem } from "@mantine/core";
import ImageCard from "../card/ImageCard";

const data = [
  {
    image:
      "src/assets/images/image-1.jpeg",
    title: "Flexible financing options for your new car",
    category: "New Car Loans",
  },
  {
    image:
      "src/assets/images/image-2.jpeg",
    title: "Affordable financing for a reliable used car",
    category: "Used Car Loans",
  },
  {
    image:
      "src/assets/images/image-5.png",
    title: "Lower your monthly payments with our refinancing options",
    category: "Refinancing Loans",
  },
  {
    image:
      "src/assets/images/image-3.png",
    title: "Flexible financing options for lease buyouts",
    category: "Lease Buyout Loans",
  },
  {
    image:
      "src/assets/images/image-4.png",
    title: "Financing options for private car sales",
    category: "Private Party Loans",
  },
  {
    image:
      "src/assets/images/image-6.png",
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
