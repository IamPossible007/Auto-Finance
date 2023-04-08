import { GetInTouch } from "../components/contact/GetInTouch";
import { FAQ } from "../components/faq/FAQ";
import { FeaturesCards } from "../components/features/FeaturesCards";
import { HeroBullets } from "../components/hero/HeroBullets";

function Home() {
  return (
    <div>
      <HeroBullets />
      <FeaturesCards />
      <FAQ />
      <GetInTouch />
    </div>
  );
}

export default Home;
