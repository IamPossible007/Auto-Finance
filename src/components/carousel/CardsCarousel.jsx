import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme, rem } from "@mantine/core";
import ImageCard from "../card/ImageCard";

const data = [
  {
    image: "cards/image-1.jpeg",
    title: "Introduction to Programming",
    category: "Computer Science",
  },
  {
    image: "cards/image-2.jpeg",
    title: "Web Development Fundamentals",
    category: "Web Development",
  },
  {
    image: "cards/image-5.png",
    title: "Data Science Essentials",
    category: "Data Science",
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
