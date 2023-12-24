import { Logo } from "@/components/logo/Logo";
import { MeasurementButton } from "@/components/buttons/MeasurementButton";
import "./globals.css";

export default function Home() {
  return (
    <body>
      <div className="container">
        <header></header>
        <div className="main">
          <div className="section">
            <div className="sub-section">
              <Logo></Logo>
            </div>
            <div className="sub-section"></div>
          </div>
          <div className="section"></div>
          <div className="section"></div>
          <div className="section info">
            <div className="sub-section">
              <MeasurementButton></MeasurementButton>
            </div>
            <div className="sub-section"></div>
          </div>
        </div>
        <footer></footer>
      </div>
    </body>
  );
}
