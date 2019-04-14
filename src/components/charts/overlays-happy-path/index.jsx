import React from 'react';
import { ResponsiveSankey } from '@nivo/sankey';

const data = {
  nodes: [
    {
      id: 'Home Page',
      color: 'hsl(16, 70%, 50%)',
    },
    {
      id: 'Contacts Page',
      color: 'hsl(27, 70%, 50%)',
    },
    {
      id: 'About Page',
      color: 'hsl(89, 70%, 50%)',
    },
    {
      id: 'Second Page',
      color: 'hsl(218, 70%, 50%)',
    },
    {
      id: 'Third Page',
      color: 'hsl(314, 70%, 50%)',
    },
    {
      id: 'Fourth Page',
      color: 'hsl(327, 70%, 50%)',
    },
  ],
  links: [
    {
      source: 'Home Page',
      target: 'Fourth Page',
      value: 76,
    },
    {
      source: 'Home Page',
      target: 'Third Page',
      value: 190,
    },
    {
      source: 'Third Page',
      target: 'Contacts Page',
      value: 32,
    },
    {
      source: 'Third Page',
      target: 'Fourth Page',
      value: 19,
    },
    {
      source: 'Third Page',
      target: 'About Page',
      value: 180,
    },
    {
      source: 'About Page',
      target: 'Contacts Page',
      value: 200,
    },
    {
      source: 'About Page',
      target: 'Second Page',
      value: 136,
    },
    {
      source: 'Contacts Page',
      target: 'Second Page',
      value: 15,
    },
    {
      source: 'Contacts Page',
      target: 'Fourth Page',
      value: 11,
    },
    {
      source: 'Second Page',
      target: 'Fourth Page',
      value: 70,
    },
  ],
};

const OverlaysHappyPath = () => (
  <ResponsiveSankey
    margin={{ top: 0, right: 80, bottom: 0, left: 80 }}
    data={data}
  />
);

export { OverlaysHappyPath };
export default OverlaysHappyPath;
