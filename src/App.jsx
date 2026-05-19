import Header from "./components/Header";
import Hero from "./sections/Hero";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhatsAppButton />
    </div>
  );
}
