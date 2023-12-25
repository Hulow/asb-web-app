import { Logo } from "@/components/logo/Logo";
import { MeasurementButton } from "@/components/buttons/measurement/MeasurementButton";
import "./globals.css";
import { StationButton } from "@/components/buttons/station/StationButton";
import { config } from "@/config/config";

export default function Home() {
  const logoConfig = config.logo;
  return (
    <div className="container">
      <div className="sub-container">
        <Logo />
      </div>
      <div className="sub-container">
        <div className="container-component">
          <StationButton />
        </div>
        <div className="container-component">
          <MeasurementButton />
        </div>
      </div>
    </div>
  );
}
