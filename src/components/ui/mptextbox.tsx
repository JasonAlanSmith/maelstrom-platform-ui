'use client';

import {
  FocusEvent,
  ReactElement,
} from 'react';

import {
  ChangedEventArgs,
  TextBoxComponent,
} from '@syncfusion/ej2-react-inputs';

interface IProps {
  id: string;
  value?: string;
  change: (e: ChangedEventArgs) => void;
  readOnly: boolean;
  name?: string
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

export default function MPTextBox(
  {
    id, value = '', change, readOnly, name = '', onBlur = () => { },
  }: IProps,
): ReactElement {
  return (
    <TextBoxComponent
      id={id}
      value={value}
      change={change}
      readonly={readOnly}
      name={name}
      onBlur={onBlur}
    />
  );
}
