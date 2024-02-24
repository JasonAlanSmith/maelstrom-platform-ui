'use client';

import {
  MouseEvent,
  ReactElement,
} from 'react';

import { useNavigate } from 'react-router-dom';

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

interface IProps {
  caption: string;
  route?: string;
  css?: string;
  block?: boolean;
  type?: string;
  click?: (e: MouseEvent<HTMLElement>) => void;
}

export default function MPButton(
  {
    route = '', click, css = '', block = true, type = '', caption,
  }:IProps,
): ReactElement {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  let tempCss = block ? 'e-block m-2 e-primary' : 'm-2 e-primary';
  tempCss = css ? `${tempCss} ${css}` : tempCss;

  return (
    <ButtonComponent
      cssClass={tempCss}
      onClick={click || handleClick}
      type={type}
    >
      {caption}
    </ButtonComponent>
  );
}
