import {
  Container,
  Title,
  Accordion,
  createStyles,
  rem,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    minHeight: 300,
  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark"
        ? theme.colors.dark[4]
        : theme.colors.gray[3]
    }`,
  },
}));

export function FAQ() {
  const { classes } = useStyles();
  return (
    <Container size='md' className={classes.wrapper}>
      <Title align='center' className={classes.title}>
        Frequently Asked Questions
      </Title>

      <Accordion variant='separated'>
        <Accordion.Item className={classes.item} value='reset-password'>
          <Accordion.Control>How do I apply for a loan?</Accordion.Control>
          <Accordion.Panel>
            You can apply for a loan online or visit one of our branches to
            complete your application. Our application process is simple
            and easy to follow.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value='another-account'>
          <Accordion.Control>
            How long does it take to get approved for a loan?
          </Accordion.Control>
          <Accordion.Panel>
            Our fast approval process means that you can get approved for a
            loan in as little as 24 hours. We understand that our customers
            need quick access to funds, and we work hard to make that
            happen.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value='newsletter'>
          <Accordion.Control>
            What happens if I can't make my payments?
          </Accordion.Control>
          <Accordion.Panel>
            We understand that unexpected circumstances can arise, and
            we're here to help. If you're having trouble making your
            payments, please contact our customer service team as soon as
            possible. We may be able to work out a payment plan or offer
            other solutions to help you get back on track.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
