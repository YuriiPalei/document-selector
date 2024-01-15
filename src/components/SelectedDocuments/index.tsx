import { FunctionComponent } from 'react';
import SearchField from 'components/SearchField';
import { Document } from 'types';

type Props = {
  documents: Document[];
  removeDocument: (document: Document) => void;
  setSelectedDocuments: (documents: Document[]) => void;
};

const SelectedDocuments: FunctionComponent<Props> = ({ documents, removeDocument, setSelectedDocuments }) => {
  const isEmpty = documents.length === 0;

  const filterDocuments = (value: string) => {
    const filteredDocuments = documents.filter((document) => document.title.includes(value));
    setSelectedDocuments(filteredDocuments);
  };

  return (
    <div className="w-full h-full flex flex-col gap-3">
      <SearchField onChange={filterDocuments} />
      {isEmpty ? (
        <div className="w-full h-full border border-gray-200 rounded-lg bg-gray-100 flex flex-col items-center pt-10 text-xs font-semibold text-gray-500 text-center">
          <img src="/assets/bigArrow.svg" alt="arrow" className="mb-6" />
          <span>
            Select documents from the left panel to have employees review them and provide a signature
            acknowledging review
          </span>
        </div>
      ) : (
        <div className="w-full p-2 flex flex-col gap-3 border border-green-500 rounded-lg">
          {documents.map((document) => (
            <div key={document.title} className="w-full flex items-center justify-between px-1.5 py-2">
              <div className="flex items-center gap-2 text-sm font-medium">
                <img src="/assets/check.svg" alt="check" />
                <span>{document.title}</span>
              </div>

              <div
                onClick={() => removeDocument(document)}
                className="flex justify-center items-center border border-gray-200 rounded p-1 cursor-pointer"
              >
                <img src="/assets/cross.svg" alt="remove" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectedDocuments;
