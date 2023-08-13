import React from "react";
import { ResponsiveLine } from "@nivo/line";
const LineChart = () => {
  const data = [
    {
      id: "japan",
      color: "hsl(1, 70%, 50%)",
      data: [
        {
          x: "train",
          y: 19,
        },
        {
          x: "subway",
          y: 143,
        },
        {
          x: "bus",
          y: 27,
        },
        {
          x: "car",
          y: 137,
        },
        {
          x: "moto",
          y: 156,
        },
        {
          x: "bicycle",
          y: 167,
        },
        {
          x: "others",
          y: 300,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(253, 70%, 50%)",
      data: [
        {
          x: "train",
          y: 251,
        },
        {
          x: "subway",
          y: 8,
        },
        {
          x: "bus",
          y: 117,
        },
        {
          x: "car",
          y: 212,
        },
        {
          x: "moto",
          y: 7,
        },
        {
          x: "bicycle",
          y: 166,
        },

        {
          x: "others",
          y: 252,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(3, 70%, 50%)",
      data: [
        {
          x: "train",
          y: 247,
        },
        {
          x: "subway",
          y: 63,
        },
        {
          x: "bus",
          y: 140,
        },
        {
          x: "car",
          y: 0,
        },
        {
          x: "moto",
          y: 77,
        },
        {
          x: "bicycle",
          y: 41,
        },
        {
          x: "others",
          y: 249,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(350, 70%, 50%)",
      data: [
        {
          x: "train",
          y: 92,
        },
        {
          x: "subway",
          y: 135,
        },
        {
          x: "bus",
          y: 290,
        },
        {
          x: "car",
          y: 121,
        },
        {
          x: "moto",
          y: 203,
        },
        {
          x: "bicycle",
          y: 200,
        },

        {
          x: "others",
          y: 146,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(58, 70%, 50%)",
      data: [
        {
          x: "train",
          y: 149,
        },
        {
          x: "subway",
          y: 79,
        },
        {
          x: "bus",
          y: 267,
        },
        {
          x: "car",
          y: 110,
        },
        {
          x: "moto",
          y: 100,
        },
        {
          x: "bicycle",
          y: 159,
        },

        {
          x: "others",
          y: 239,
        },
      ],
    },
  ];
  return (
    <div className="bg-main h-60 lg:px-10 py-3 rounded-xl lg:w-1/2">
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default LineChart;
