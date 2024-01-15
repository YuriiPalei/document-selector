import { Dispatch, FunctionComponent, SetStateAction, useCallback } from 'react';
import SearchField from 'components/SearchField';
import Filters from 'components/Filters';
import ButtonSwitch from 'components/ButtonSwitch';
import DocumentsList from 'components/DocumentsList';
import { GroupedDocuments, Document, DocumentGroupValue } from 'types';

type Props = {
  documentsCount: number;
  selectDocument: (document: Document) => void;
  setFilteredDocuments: Dispatch<SetStateAction<GroupedDocuments>>;
  documents: GroupedDocuments;
  allDocuments: GroupedDocuments;
  isAllDocumentsSelected: boolean;
  selectAll: () => void;
};

const AvailableDocuments: FunctionComponent<Props> = ({
  documentsCount,
  documents,
  allDocuments,
  selectDocument,
  setFilteredDocuments,
  isAllDocumentsSelected,
  selectAll,
}) => {
  const handleSearch = useCallback(
    (value: string) => {
      const filteredDocuments = Object.keys(allDocuments).reduce((acc, key) => {
        const filtered = allDocuments[key].items.filter((document: Document) =>
          document.title.includes(value),
        );

        if (filtered.length) {
          acc[key] = { isOpen: allDocuments[key].isOpen, items: filtered } as DocumentGroupValue;
        }

        return acc;
      }, {}) as GroupedDocuments;

      setFilteredDocuments(filteredDocuments);
    },
    [allDocuments, setFilteredDocuments],
  );

  return (
    <div className="w-full flex flex-col gap-3">
      <SearchField onChange={handleSearch} />
      <Filters setFilteredDocuments={setFilteredDocuments} allDocuments={allDocuments} />
      <div className="w-full flex items-center justify-between text-sm">
        <span>{`${documentsCount} Available Documents`}</span>
        <ButtonSwitch onChange={selectAll} checked={isAllDocumentsSelected} label="Select All" />
      </div>
      <DocumentsList documents={documents} selectDocument={selectDocument} />
    </div>
  );
};

export default AvailableDocuments;
