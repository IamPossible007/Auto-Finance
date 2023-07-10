import {
  createStyles,
  Title,
  SimpleGrid,
  Text,
  Button,
  ThemeIcon,
  Grid,
  Col,
  rem,
} from "@mantine/core";
import {
  IconPuzzle,
  IconBook,
  IconHeadset,
  IconAdjustmentsAlt,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(36),
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
}));

const features = [
  {
    icon: IconPuzzle,
    title: "Empowerment",
    description:
      "We empower our customers with flexible and affordable auto financing solutions.",
  },
  {
    icon: IconHeadset,
    title: "Customer Service",
    description:
      "We are committed to delivering exceptional customer service to ensure our customers have the best experience.",
  },
  {
    icon: IconAdjustmentsAlt,
    title: "Unique Needs",
    description:
      "We understand that every customer has unique needs, and we provide customized solutions to meet those needs.",
  },
  {
    icon: IconBook,
    title: "Transparency",
    description:
      "We are transparent in everything we do, providing honest and straightforward information to our customers.",
  },
];

export function FeaturesIcons() {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius='md'
        variant='gradient'
        gradient={{ deg: 133, from: "blue", to: "#1864ab" }}
      >
        <feature.icon size={rem(26)} stroke={1.5} />
      </ThemeIcon>
      <Text fz='lg' mt='sm' fw={500}>
        {feature.title}
      </Text>
      <Text c='dimmed' fz='sm'>
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Col span={12} md={5}>
          <Title className={classes.title} order={2}>
            Driving Your Dreams Forward
          </Title>
          <Text c='dimmed'>
            Our mission is to empower our customers with flexible and
            affordable auto financing solutions that fit their unique
            needs, backed by exceptional customer service.
          </Text>

          <Button
            variant='gradient'
            gradient={{ deg: 133, from: "blue", to: "#1864ab" }}
            onClick={() => navigate("/loans")}
            size='lg'
            radius='md'
            mt='xl'
          >
            Get Loans
          </Button>
        </Col>
        <Col span={12} md={7}>
          <SimpleGrid
            cols={2}
            spacing={30}
            breakpoints={[{ maxWidth: "md", cols: 1 }]}
          >
            {items}
          </SimpleGrid>
        </Col>
      </Grid>
    </div>
  );
}
