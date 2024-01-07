"use client";
import "./page.css";
import { httpClient } from "@/lib/http-client";
import { config } from "@/config/config";
import { Measurement } from "@/types/measurement";
import { Cabinet } from "@/components/cabinet/Cabinet";
import { Driver } from "@/components/driver/Driver";
import { Chart } from "@/components/chart/Chart";
import { useEffect, useRef, useState } from "react";

interface MeasurementParam {
  params: {
    cabinetUid: string;
  };
}

export default function MeasurementPage({ params }: MeasurementParam) {
  const endpoint =
    config.asbBaseUrl +
    config.endpoints.measurement.measurementPerCabinet +
    params.cabinetUid;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoint, {
      method: "get",
      headers: { Authorization: config.asbKeyUrl },
      cache: "no-store",
    })
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);

  if (!data) {
    return (
      <div>
        <h1>hello</h1>
      </div>
    );
  }

  const measurement: Measurement = data;
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
      <div className="frequency-container">
        <div className="frequency-title">
          <h2>Frequency Response</h2>
        </div>
        <div className="chart-container">{<Chart {...frequency} />}</div>
      </div>
    </div>
  );
}
