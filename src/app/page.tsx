import { Logo } from "@/components/logo/Logo";
import { MeasurementButton } from "@/components/buttons/measurement/MeasurementButton";
import "./globals.css";
import { StationButton } from "@/components/buttons/station/StationButton";
import Link from "next/link";

export default function Home() {
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
          <Link href="/owners" style={{ textDecoration: "none" }}>
            <MeasurementButton />
          </Link>
        </div>
      </div>
    </div>
  );
}
