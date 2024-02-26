'use client';

import { ReactElement } from 'react';

import {
  ChangeEventArgs,
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from '@syncfusion/ej2-react-richtexteditor';

interface IProps {
  id: string;
  value: string;
  change?: (e: ChangeEventArgs) => void;
  readOnly: boolean;
}

export default function MPRichTextEdit({
  id, value, change, readOnly,
}: IProps): ReactElement {
  return (
    <RichTextEditorComponent
      autoSaveOnIdle
      saveInterval={0}
      id={id}
      value={value}
      change={change}
      readonly={readOnly}
    >
      <Inject
        services={[
          Toolbar,
          Image,
          Link,
          HtmlEditor,
          QuickToolbar,
        ]}
      />
    </RichTextEditorComponent>
  );
}
