import React from 'react';

export interface ContainerOptions {
  centered?: boolean;
}

export type ContainerProps = ContainerOptions & React.HTMLAttributes<HTMLDivElement>;
