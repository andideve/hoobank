import React from 'react';

export interface ButtonOptions {
  as?: 'button' | 'a';
}

export type ButtonProps = ButtonOptions &
  (React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement>);
