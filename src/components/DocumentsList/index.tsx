import { FunctionComponent, useEffect, useState } from 'react';
import Expand from 'react-expand-animated';
import { Document, GroupedDocuments } from 'types';

type Props = {
  selectDocument: (document: Document) => void;
  documents?: GroupedDocuments;
};

const DocumentsList: FunctionComponent<Props> = ({ documents, selectDocument }) => {
  const [activeDocuments, setActiveDocuments] = useState<GroupedDocuments | undefined>();

  const toggleDocumentGroup = (key: string) => {
    setActiveDocuments((prevState) => {
      if (!prevState) return prevState;

      return {
        ...prevState,
        [key]: {
          ...prevState[key],
          isOpen: !prevState[key].isOpen,
        },
      };
    });
  };

  useEffect(() => {
    setActiveDocuments(documents);
  }, [documents]);

  return (
    <div className="w-full border border-orange-500 rounded-lg">
      {activeDocuments &&
        Object.keys(activeDocuments).map((key, index) => {
          return (
            <div key={key} className="w-full">
              <div
                onClick={() => toggleDocumentGroup(key)}
                className={`${index === 0 && 'rounded-t-lg rounded-tl-lg'} ${index === Object.keys(activeDocuments).length - 1 && 'rounded-b-lg rounded-bl-lg'} w-full flex justify-between border-b border-gray-200 ${activeDocuments[key].isOpen ? 'bg-gray-100 text-gray-900' : 'bg-gray-50 text-gray-600'} p-5 text-base relative cursor-pointer font-medium`}
              >
                {key}
                <img
                  src="/assets/down.svg"
                  className={`${activeDocuments[key].isOpen && 'rotate-180'}`}
                  alt="down"
                />
              </div>
              <Expand duration={200} open={activeDocuments[key].isOpen}>
                <div className="p-2 w-full flex flex-col gap-2.5">
                  {activeDocuments[key].items.map((document: Document) => (
                    <div
                      key={document.title}
                      className="flex justify-between text-sm font-medium px-1.5 py-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => selectDocument(document)}
                    >
                      {document.title}
                      <div className="flex justify-center items-center border border-gray-200 rounded p-1">
                        <img src="/assets/arriw-right.svg" alt="arrow" />
                      </div>
                    </div>
                  ))}
                </div>
              </Expand>
            </div>
          );
        })}
    </div>
  );
};

export default DocumentsList;
