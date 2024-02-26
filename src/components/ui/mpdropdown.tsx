'use client';

import { ReactElement } from 'react';

import {
  ChangeEventArgs,
  DropDownListComponent,
  FieldSettingsModel,
} from '@syncfusion/ej2-react-dropdowns';

interface IProps {
  dataSource: string[];
  fields: FieldSettingsModel;
  id: string;
  value: string;
  change?: (e: ChangeEventArgs) => void;
  readOnly: boolean;
}

export default function MPDropDown(
  {
    dataSource, fields, id, value, change, readOnly,
  }: IProps,
): ReactElement {
  return (
    <DropDownListComponent
      dataSource={dataSource}
      fields={fields}
      id={id}
      value={value}
      onChange={change}
      readonly={readOnly}
    />
  );
}
