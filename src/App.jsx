
import "./App.scss";
import TopBar from "./components/TopBar/TopBar";
import Header from "./components/Header/Header";
import Business from "./components/Business/Business";
import Features from "./components/Features/Features";
import PricingPlan from "./PricingPlan/PricingPlan";

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <Business/>
      <Features/>
      <PricingPlan/>
    </>
  );
}

export default App;
