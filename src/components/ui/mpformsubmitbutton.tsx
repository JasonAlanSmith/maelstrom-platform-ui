'use client';

import { ReactElement } from 'react';

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

interface IProps {
  caption: string;
  css?: string;
  block?: boolean;
}

export default function MPFormSubmitButton(
  {
    css = '', block = true, caption,
  }:IProps,
): ReactElement {
  let tempCss = block ? 'e-block m-2 e-primary' : 'm-2 e-primary';
  tempCss = css ? `${tempCss} ${css}` : tempCss;

  return (
    <ButtonComponent
      cssClass={tempCss}
      type="submit"
    >
      {caption}
    </ButtonComponent>
  );
}
