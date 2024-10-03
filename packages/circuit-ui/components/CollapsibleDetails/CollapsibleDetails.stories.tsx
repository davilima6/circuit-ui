/**
 * Copyright 2023, SumUp Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { CollapsibleDetails, type CollapsibleDetailsProps } from './CollapsibleDetails.js';

export default {
  title: 'Components/CollapsibleDetails',
  component: CollapsibleDetails,
  argTypes: {
    summary: { control: 'text' },
    children: { control: 'text' },
    initialOpen: { control: 'boolean' },
    duration: { control: 'number' },
  },
};

export const Default = (args: CollapsibleDetailsProps) => <CollapsibleDetails {...args} />;

Default.args = {
  summary: 'Click to expand',
  children: 'This is the collapsible content.',
  initialOpen: false,
  duration: 200,
};

export const InitiallyOpen = (args: CollapsibleDetailsProps) => <CollapsibleDetails {...args} />;

InitiallyOpen.args = {
  summary: 'Click to collapse',
  children: 'This content is initially open.',
  initialOpen: true,
  duration: 200,
};
