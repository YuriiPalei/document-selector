import { FunctionComponent, PropsWithChildren } from 'react';

type Props = {
  title: string;
};

const DocumentColumn: FunctionComponent<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <div className="flex flex-col bg-white p-4 w-1/2 rounded-lg border border-gray-300">
      <div className="text-base mb-3">{title}</div>
      {children}
    </div>
  );
};

export default DocumentColumn;
