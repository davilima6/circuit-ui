/**
 * Copyright 2019, SumUp Ltd.
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

import { ArrowRight, ArrowLeft } from '@sumup/icons';
import { DayPickerRangeController } from 'react-dates';
import type { DayPickerRangeControllerShape } from 'react-dates';
import 'react-dates/initialize.js';

import { CalendarWrapper } from './components/index.js';

export type RangePickerControllerProps = DayPickerRangeControllerShape;

export const RangePickerController = (props: RangePickerControllerProps) => (
  <CalendarWrapper>
    <DayPickerRangeController
      navNext={<ArrowRight size="16" />}
      navPrev={<ArrowLeft size="16" />}
      numberOfMonths={1}
      hideKeyboardShortcutsPanel
      {...props}
    />
  </CalendarWrapper>
);
