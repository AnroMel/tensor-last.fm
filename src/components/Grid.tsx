import React from 'react';

export interface GridProps {
  children: React.ReactNode;
}

/**
 * Компонент Grid — обёртка для сетки элементов.
 * @param props.children - дочерние элементы
 */
const Grid: React.FC<GridProps> = ({ children }) => {
  return <div className="grid-container">{children}</div>;
};

export default Grid;

