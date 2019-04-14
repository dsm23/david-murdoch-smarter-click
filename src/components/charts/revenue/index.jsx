import React from 'react';
// import { generateDrinkStats } from '@nivo/generators';
import { ResponsiveLine } from '@nivo/line';

import { THEME } from '../../../constants';

// const data = generateDrinkStats(18);

// const curveOptions = ['linear', 'monotoneX', 'step', 'stepBefore', 'stepAfter'];

const CustomSymbol = ({ size, color, borderWidth, borderColor }) => (
  <g>
    <circle
      fill="#fff"
      r={size / 2}
      strokeWidth={borderWidth}
      stroke={borderColor}
    />
    <circle
      r={size / 5}
      strokeWidth={borderWidth}
      stroke={borderColor}
      fill={color}
      fillOpacity={0.35}
    />
  </g>
);

const Revenue = () => {
  return (
    <ResponsiveLine
      animate
      margin={{ top: 20, right: 20, bottom: 60, left: 80 }}
      colors={Object.values(THEME)}
      data={[
        {
          id: 'revenue/day',
          data: [
            { x: '2018-01-01', y: 7 },
            { x: '2018-01-02', y: 5 },
            { x: '2018-01-03', y: 11 },
            { x: '2018-01-04', y: 9 },
            { x: '2018-01-05', y: 12 },
            { x: '2018-01-06', y: 16 },
            { x: '2018-01-07', y: 13 },
            { x: '2018-01-08', y: 13 },
            { x: '2018-01-09', y: 14 },
            { x: '2018-01-10', y: 15 },
          ],
        },
      ]}
      xScale={{
        type: 'time',
        format: '%Y-%m-%d',
        precision: 'day',
      }}
      yScale={{
        type: 'linear',
        stacked: 'stacked',
      }}
      axisBottom={{
        format: '%b %d',
      }}
      axisLeft={{
        format: value =>
          `£${Number(value).toLocaleString('en-GB', {
            minimumFractionDigits: 2,
          })}`,
      }}
      enableDotLabel
      curve="step"
      dotSize={16}
      dotBorderWidth={1}
      dotBorderColor="inherit:darker(0.3)"
      dotLabel={({ y }) => `£${y}`}
      dotSymbol={CustomSymbol}
      tooltipFormat={value =>
        `£${Number(value).toLocaleString('en-GB', {
          minimumFractionDigits: 2,
        })}`
      }
    />
  );
};

//      curve="curve"
//       dotSymbol={CustomSymbol}

export { Revenue };
export default Revenue;
