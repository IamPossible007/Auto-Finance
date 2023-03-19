import { FAQ } from "../components/faq/FAQ";
import { FeaturesCards } from "../components/features/FeaturesCards";
import { FooterSocial } from "../components/footer/FooterSocial";
import { HeroBullets } from "../components/hero/HeroBullets";

function Home() {
  return (
    <div>
      <HeroBullets />
      <FeaturesCards />
      <FAQ />
      <FooterSocial />
    </div>
  );
}

export default Home;
