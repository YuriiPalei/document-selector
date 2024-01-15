import { useMemo, useState } from 'react';
import { DOCUMENTS } from 'const';
import { Document, GroupedDocuments } from 'types';

export const useDocuments = () => {
  const [documents, setDocuments] = useState<GroupedDocuments>(DOCUMENTS);
  const [filteredDocuments, setFilteredDocuments] = useState<GroupedDocuments>(documents);
  const [selectedDocuments, setSelectedDocuments] = useState<Document[]>([]);

  const totalSize = useMemo(() => {
    return Object.values(documents || {}).reduce((acc, curr) => {
      return acc + curr.items.length;
    }, 0);
  }, [documents]);

  const actualSize = useMemo(() => {
    return Object.values(filteredDocuments || {}).reduce((acc, curr) => {
      return acc + curr.items.length;
    }, 0);
  }, [filteredDocuments]);

  const isAllDocumentsSelected = totalSize === selectedDocuments.length;

  const selectDocument = (document: Document) => {
    if (selectedDocuments.find((item) => item.title === document.title)) return;

    setSelectedDocuments((prev) => [...prev, document]);
  };

  const removeDocument = (document: Document) => {
    setSelectedDocuments((prev) => prev.filter((item) => item.title !== document.title));
  };

  const selectAll = () => {
    if (isAllDocumentsSelected) {
      setSelectedDocuments([]);
      return;
    }

    const documentsList: Document[] = [];
    Object.keys(filteredDocuments).forEach((key) => {
      documentsList.push(...filteredDocuments[key].items);
    });

    setSelectedDocuments(documentsList);
  };

  return {
    documents,
    size: actualSize,
    filteredDocuments,
    setFilteredDocuments,
    selectedDocuments,
    setSelectedDocuments,
    isAllDocumentsSelected,
    selectDocument,
    removeDocument,
    selectAll,
  };
};
