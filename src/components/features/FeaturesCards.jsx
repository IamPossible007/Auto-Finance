import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
} from "@mantine/core";
import {
  IconPigMoney,
  IconPremiumRights,
  Icon24Hours,
  IconZoomCheck,
  IconThumbUp,
  IconHeadset,
} from "@tabler/icons-react";

const featureList = [
  {
    title: "Comprehensive Course Catalog",
    description:
      "Explore a diverse catalog of courses covering a wide range of subjects and skill levels.",
    icon: IconPigMoney, // Replace with an icon representing video content
  },
  {
    title: "Interactive Learning Materials",
    description:
      "Engage with interactive content, including quizzes, assignments, and hands-on projects.",
    icon: IconPremiumRights, // Replace with an icon representing educational materials
  },
  {
    title: "Flexible Learning Schedule",
    description: "Learn at your own pace with 24/7 access to course materials.",
    icon: Icon24Hours, // Replace with an icon representing a clock or time
  },
  {
    title: "Engage in Collaborative Discussions",
    description:
      "Connect with fellow learners through discussion forums and collaborative learning communities.",
    icon: IconZoomCheck, // Replace with an icon representing discussions or community
  },
  {
    title: "Assessment and Progress Tracking",
    description:
      "Evaluate your knowledge with regular assessments and track your progress throughout the courses.",
    icon: IconThumbUp, // Replace with an icon representing quizzes or assessments
  },
  {
    title: "Responsive Customer Support",
    description:
      "Our dedicated support team is ready to assist you with any questions or concerns about your learning journey.",
    icon: IconHeadset, // Replace with an icon representing customer support
  },
];


const useStyles = createStyles((theme) => ({
  title: {
    color: theme.colorScheme === "dark" ? theme.colors.gray[3] : theme.black,
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(24),
    },
  },

  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  card: {
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
}));

export function FeaturesCards() {
  const { classes, theme } = useStyles();
  const features = featureList.map((feature) => (
    <Card
      key={feature.title}
      shadow='md'
      radius='md'
      className={classes.card}
      padding='xl'
    >
      <feature.icon
        size={rem(50)}
        stroke={2}
        color={theme.fn.primaryColor()}
      />
      <Text fz='lg' fw={500} className={classes.cardTitle} mt='md'>
        {feature.title}
      </Text>
      <Text fz='sm' c='dimmed' mt='sm'>
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size='md' py='lg'>
      <Group position='center'>
        <Badge variant='filled' size='lg'>
          Why Choose Us
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta='center' mt='sm'>
        Discover the Benefits of Working with Us
      </Title>

      <Text c='dimmed' className={classes.description} ta='center' mt='md'>
        Get the best auto finance solutions with our commitment to customer
        satisfaction. Enjoy flexible payments and outstanding service that
        sets us apart.
      </Text>

      <SimpleGrid
        cols={3}
        spacing='xl'
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
