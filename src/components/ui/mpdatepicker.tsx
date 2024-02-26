'use client';

import { ReactElement } from 'react';

import {
  ChangedEventArgs,
  DatePickerComponent,
} from '@syncfusion/ej2-react-calendars';

interface IProps {
  id: string;
  value: Date;
  change?: (e: ChangedEventArgs) => void;
  readOnly: boolean;
}

export default function MPDatePicker({
  id, value, change, readOnly,
}: IProps): ReactElement {
  return (
    <DatePickerComponent
      id={id}
      value={value}
      change={change}
      readonly={readOnly}
    />
  );
}
