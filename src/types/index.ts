import { DOCUMENT_GROUPS } from 'const';
import { $Values } from 'utility-types';

export type Document = {
  title: string;
  location: string;
  job: string;
  seniority: string;
};

export type DocumentGroup = $Values<typeof DOCUMENT_GROUPS>;

export type DocumentGroupValue = {
  items: Document[];
  isOpen: boolean;
};

export type GroupedDocuments = Record<DocumentGroup, DocumentGroupValue>;

export type FilterTypes = 'location' | 'job' | 'seniority';
