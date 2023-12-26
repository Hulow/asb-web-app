import "./page.css";
import { httpClient } from "@/lib/http-client";
import { config } from "@/config/config";
import { Measurement } from "@/types/measurement";
import { Cabinet } from "@/components/cabinet/Cabinet";
import { Driver } from "@/components/driver/Driver";

interface MeasurementParam {
  params: {
    cabinetUid: string;
  };
}

export default async function MeasurementPage({ params }: MeasurementParam) {
  const endpoint =
    config.endpoints.measurement.measurementPerCabinet + params.cabinetUid;
  const measurement: Measurement = await httpClient("get", endpoint);
  const { cabinet, drivers, frequency, impedance } = measurement;
  return (
    <div className="measurement-container">
      <div className="measurement-ttle">
        <h1>MEASUREMENTS</h1>
      </div>
      <div className="speaker-description-container">
        <div className="image-container">IMAGE</div>
        <Cabinet {...cabinet} />
        <div className="drivers-container">
          {drivers.map((driver) => {
            return <Driver key={driver.uid} {...driver}></Driver>;
          })}
        </div>
      </div>
    </div>
  );
}
