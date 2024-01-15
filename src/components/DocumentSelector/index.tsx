import { FunctionComponent } from 'react';
import { useDocuments } from 'hooks/useDocuments';
import DocumentColumn from 'components/DocumentColumn';
import AvailableDocuments from 'components/AvailableDocuments';
import SelectedDocuments from 'components/SelectedDocuments';

const DocumentSelector: FunctionComponent = () => {
  const {
    documents,
    size,
    setFilteredDocuments,
    setSelectedDocuments,
    filteredDocuments,
    selectedDocuments,
    isAllDocumentsSelected,
    selectDocument,
    removeDocument,
    selectAll,
  } = useDocuments();

  return (
    <div className="w-2/3 flex gap-6">
      <DocumentColumn title="Available Documents">
        <AvailableDocuments
          setFilteredDocuments={setFilteredDocuments}
          selectDocument={selectDocument}
          documentsCount={size}
          documents={filteredDocuments}
          allDocuments={documents}
          isAllDocumentsSelected={isAllDocumentsSelected}
          selectAll={selectAll}
        />
      </DocumentColumn>
      <DocumentColumn title="Selected Documents">
        <SelectedDocuments
          documents={selectedDocuments}
          removeDocument={removeDocument}
          setSelectedDocuments={setSelectedDocuments}
        />
      </DocumentColumn>
    </div>
  );
};

export default DocumentSelector;
