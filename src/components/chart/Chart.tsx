"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LogarithmicScale,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LogarithmicScale
);

import { Line } from "react-chartjs-2";

interface FrequencyGraph {
  frequencies: number[];
  spls: number[];
  phases: number[];
}

export function Chart(measurement: FrequencyGraph) {
  const options = {
    scales: {
      xAxes: {
        display: true,
        type: "logarithmic",
      },
    },
  };
  return (
    <Line
      data={{
        labels: measurement.frequencies,
        datasets: [
          {
            label: "SPL",
            data: measurement.spls,
            borderColor: "orange",
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            bounds: "ticks",
            display: true,
            type: "logarithmic",
            min: 20,
            max: 20000,
            ticks: {
              color: "orange",
              callback: (val) => {
                if (val === 1000) return val / 1000 + " KHz";
                if (val === 5000) return val / 1000 + " KHz";
                if (val === 10000) return val / 1000 + " KHz";
                return val + " Hz";
              },
              autoSkip: true,
              maxTicksLimit: 8,
            },
            grid: {
              color: "#343235",
            },
          },
          y: {
            display: true,
            type: "linear",
            min: 50,
            max: 90,
            ticks: {
              color: "orange",
              callback: (val) => val,
            },
            grid: {
              color: "#343235",
            },
          },
        },
        animation: false,
      }}
    />
  );
}
