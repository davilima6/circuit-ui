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

import { forwardRef, type HTMLAttributes, type PropsWithChildren, type ReactNode, useLayoutEffect, useState } from 'react';
import { useCollapsible } from '../../hooks/useCollapsible/index.js';
import { clsx } from '../../styles/clsx.js';

import classes from './CollapsibleDetails.module.css';

export interface CollapsibleDetailsProps extends HTMLAttributes<HTMLDivElement> {
  summary: ReactNode;
  initialOpen?: boolean;
  duration?: number;
}

export const CollapsibleDetails = forwardRef<HTMLDivElement, PropsWithChildren<CollapsibleDetailsProps>>(
  ({ children, summary, initialOpen = false, duration = 200, className, ...props }, ref) => {
    const [isJsEnabled, setJsEnabled] = useState(false);
    const { isOpen, getButtonProps, getContentProps } = useCollapsible<HTMLDivElement>({
      initialOpen,
      duration,
    });

    useLayoutEffect(() => {
      setJsEnabled(true);
    }, []);

    return (
      <details {...props} ref={ref} className={clsx(classes.base, className)} open={isJsEnabled ? isOpen : undefined}>
        <summary {...(isJsEnabled ? getButtonProps() : {})} className={classes.summary}>
          {summary}
        </summary>
        <div {...(isJsEnabled ? getContentProps() : {})} className={classes.content}>
          {children}
        </div>
      </details>
    );
  },
);
