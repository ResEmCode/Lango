import type { Meta, StoryObj } from '@storybook/react';

import * as allIcons from './index';

export default {
  title: 'Assets/Icons',
} satisfies Meta;

export const Icons = {
  render: () => (
    <div>
      <h2 className="title">All Icons:</h2>
      <div className="icons_wrapper">
        {Object.values(allIcons).map((Icon, index) => (
          <div key={index} className="icon_block">
            <span>{Icon.name}</span>
            <Icon className="icon" />
          </div>
        ))}
      </div>
    </div>
  ),
} satisfies StoryObj;
