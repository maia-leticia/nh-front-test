import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Features from "./components/Features/Features.tsx";
import SubscriptionForm from "./components/SubscriptionForm/SubscriptionForm.tsx";
import NewsSection from "./components/NewsSection/NewsSection.tsx";
import Testimonials from "./components/Testimonials/Testimonials.tsx";
import CallToAction from "./components/CallToAction/CallToAction.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {
  return (
    <main className="app">
      <Header /> 
      <Hero />
      <Features />
      <SubscriptionForm variant="blue" />
      <NewsSection />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}

export default App;
