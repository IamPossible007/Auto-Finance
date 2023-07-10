import { SpotlightProvider } from "@mantine/spotlight";
import {
  IconHome,
  IconDashboard,
  IconFileText,
  IconSearch,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

function SearchSpotlight({ children }) {
  const navigate = useNavigate();
  const actions = [
    {
      title: "Home",
      description: "Get to home page",
      onTrigger: () => navigate("/"),
      icon: <IconHome size='1.2rem' />,
    },
    {
      title: "Get Loans",
      description: "Know full information about loans",
      onTrigger: () => navigate("/loans"),
      icon: <IconDashboard size='1.2rem' />,
    },
    {
      title: "About us",
      description: "Get to know about our journey",
      onTrigger: () => navigate("/about"),
      icon: <IconFileText size='1.2rem' />,
    },
  ];

  return (
    <SpotlightProvider
      actions={actions}
      searchIcon={<IconSearch size='1.2rem' />}
      searchPlaceholder='Search...'
      nothingFoundMessage='Nothing found...'
    >
      {children}
    </SpotlightProvider>
  );
}

export default SearchSpotlight;
