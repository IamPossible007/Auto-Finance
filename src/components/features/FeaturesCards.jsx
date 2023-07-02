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
    title: "Flexible Payment Options",
    description:
      "Customers can choose a repayment plan that suits their budget and lifestyle. ",
    icon: IconPigMoney,
  },
  {
    title: "Low Interest Rates",
    description:
      "Our competitive interest rates help customers save money on their loans.",
    icon: IconPremiumRights,
  },
  {
    title: "Fast Approval Process",
    description: "Get approved for a loan in as little as 24 hours.",
    icon: Icon24Hours,
  },
  {
    title: "No Hidden Fees",
    description:
      "We believe in transparency and honesty, so there are no hidden fees or charges.",
    icon: IconZoomCheck,
  },
  {
    title: "No Prepayment Penalty",
    description:
      "Customers can pay off their loans early without any penalty fees.",
    icon: IconThumbUp,
  },
  {
    title: "Excellent Customer Service",
    description:
      "Our friendly and knowledgeable team is always ready to help customers with any questions or concerns.",
    icon: IconHeadset,
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
