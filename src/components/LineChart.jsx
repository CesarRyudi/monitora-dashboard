import { ResponsiveLine } from "@nivo/line";
import React, { useCallback } from "react";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { dados as data } from '../data/MockData';
import { useNavigate as navigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const LineChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleOnClick = useCallback(
    () => navigate("/line", { replace: true }),
    []
  );

  const CustomTooltip = ({ point }) => {
    return (
      <div
        style={{
          background: colors.primary[300],
          color: colors.grey[100],
          fontSize: 16,
          padding: "2px 10px",
          border: "1px solid #ccc",
          borderRadius: 4,
          // position: "absolute",
          top: `${point.y + 1}px`,
          left: `${point.x + 1}px`,
          zIndex: 1,
        }}
      >
        {point.data.legend && <strong>{point.data.legend}</strong>}
        <div>
          <span
            style={{
              display: "inline-block",
              width: "11px",
              height: "11px",
              backgroundColor: point.serieColor,
              marginRight: "5px",
              marginLeft: "-3px",
              border: "1px solid white",
              borderRadius: 2,
            }}
          />
          <strong>
            {point.data.xFormatted.slice(0, 7)}: {point.data.yFormatted}
          </strong>
        </div>
      </div>
    );
  };
  // const [data, setData] = useState();

  // useEffect(() => {
  //   axios
  //     .get("https://sheet.best/api/sheets/edf54132-8e64-4312-a5de-236a3368aafb")
  //     .then((response) => {
  //       const apiData = response.data;
  //       console.log(apiData);

  //       const formattedData = [
  //         {
  //           id: "Impressions",
  //           data: apiData.map((item) => ({
  //             x: item["Ad Name"],
  //             y: parseInt(item["Impressions"], 10),
  //           })),
  //         },
  //         {
  //           id: "Reach",
  //           data: apiData.map((item) => ({
  //             x: item["Ad Name"],
  //             y: parseInt(item["Reach (Estimated)"], 10),
  //           })),
  //         },
  //       ];

  //       console.log(formattedData);
  //       setData(formattedData);
  //     });
  // }, []);

  if (!data) {
    return <div>Carregando...</div>;
  } else {
    return (
      <ResponsiveLine
        data={data}
        tooltip={CustomTooltip}
        innerPadding={1}
        theme={{
          tooltip: {
            container: {
              background: colors.primary[300],
              color: "#fff",
              fontSize: 14,
            },

            // crosshair: {
            //   stroke: "red !important",
            //   color: "#fff",
            //   strokeWidth: 10,
            // },
          },

          axis: {
            domain: {
              line: {
                stroke: colors.grey[100],
              },
            },
            legend: {
              text: {
                fill: colors.grey[100],
              },
            },
            ticks: {
              line: {
                stroke: colors.grey[100],
                strokeWdith: 1,
              },
              text: {
                fill: colors.grey[100],
              },
            },
          },
          legends: {
            text: {
              fill: colors.grey[100],
            },
          },
        }}
        margin={{ top: 10, right: 180, bottom: 100, left: 100 }}
        xScale={{ type: "point", accessor: "Dia" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false,
          accessor: "Pressao",
        }}
        yFormat=" >-.2f"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 0,
          tickPadding: 5,
          tickRotation: -28,
          legend: "",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        colors={{ scheme: "nivo" }}
        pointSize={8}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        pointLabel="y"
        areaOpacity={0.05}
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
    );
  }
};

export default LineChart;
