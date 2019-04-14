import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const data = [
  {
    id: 'very satisfied',
    label: 'very satisfied',
    value: 35,
  },
  {
    id: 'satisfied',
    label: 'satisfied',
    value: 30,
  },
  {
    id: 'indifferent',
    label: 'indifferent',
    value: 20,
  },
  {
    id: 'unsatisfied',
    label: 'unsatisfied',
    value: 10,
  },
  {
    id: 'very unsatisfied',
    label: 'very unsatisfied',
    value: 15,
  },
];

const UserImpressions = () => (
  <ResponsivePie
    margin={{ top: 80, right: 120, bottom: 80, left: 120 }}
    data={data}
    animate
    innerRadius={0.6}
    tooltipFormat={value => `${value}%`}
    sliceLabel={d => `${d.value}%`}
  />
);

export { UserImpressions };
export default UserImpressions;
