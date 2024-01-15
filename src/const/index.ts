import { GroupedDocuments } from 'types';

export const DOCUMENT_GROUPS = {
  DRUG_POLICIES: 'Drug Policies',
  EMPLOYEE_HANDBOOKS: 'Employee Handbooks',
  EQUIPMENT_SELECTION: 'Equipment Selection',
  NON_COMPETE_AGREEMENTS: 'Non-Compete Agreements',
  PAYROLL_HANDBOOKS: 'Payroll Handbooks',
  PTO_POLICY: 'PTO Policy',
  SAFETY_MANUALS: 'Safety Manuals',
  SEXUAL_HARASSMENT: 'Sexual Harassment',
} as const;

export const DOCUMENTS = {
  [DOCUMENT_GROUPS.DRUG_POLICIES]: {
    isOpen: false,
    items: [
      {
        title: 'Alabama - Drug Policies',
        location: '',
        job: 'Heavy Equipment Operator',
        seniority: 'Entry-Level Position',
      },
      { title: 'California - Drug Policies', location: 'Los Angeles, CA', job: '', seniority: '' },
      {
        title: 'Colorado - Drug Policies',
        location: 'Track Laborer',
        job: 'Off Road Truck Driver',
        seniority: 'Office Staff',
      },
      {
        title: 'Florida - Drug Policies',
        location: 'Miami, FL',
        job: 'Heavy Equipment Operator',
        seniority: 'Manager',
      },
      {
        title: 'Illinois - Drug Policies',
        location: 'Chicago, IL',
        job: '',
        seniority: 'Individual Contributor',
      },
      { title: 'Kansas - Drug Policies', location: '', job: '', seniority: 'Manager' },
      {
        title: 'New York - Drug Policies',
        location: 'New York, NY',
        job: '',
        seniority: 'Leadership / Management',
      },
      {
        title: 'Utah - Drug Policies',
        location: '',
        job: 'Track Laborer',
        seniority: 'Individual Contributor',
      },
    ],
  },
  [DOCUMENT_GROUPS.EMPLOYEE_HANDBOOKS]: {
    isOpen: false,
    items: [
      {
        title: 'Alabama - Employee Handbooks',
        location: '',
        job: 'Off Road Truck Driver',
        seniority: 'Entry-Level Position',
      },
      {
        title: 'California - Employee Handbooks',
        location: 'San Francisco, CA',
        job: '',
        seniority: 'Manager',
      },
      { title: 'Colorado - Employee Handbooks', location: '', job: '', seniority: 'Entry-Level Position' },
      {
        title: 'Florida - Employee Handbooks',
        location: 'Miami, FL',
        job: 'Heavy Equipment Operator',
        seniority: 'Individual Contributor',
      },
      {
        title: 'Illinois - Employee Handbooks',
        location: 'Chicago, IL',
        job: 'Heavy Equipment Service Technician',
        seniority: 'Office Staff',
      },
      { title: 'Kansas - Employee Handbooks', location: '', job: '', seniority: 'Entry-Level Position' },
      {
        title: 'New York - Employee Handbooks',
        location: 'New York, NY',
        job: '',
        seniority: 'Leadership / Management',
      },
      { title: 'Utah - Employee Handbooks', location: '', job: '', seniority: 'Heavy Equipment Operator' },
    ],
  },
  [DOCUMENT_GROUPS.EQUIPMENT_SELECTION]: {
    isOpen: false,
    items: [
      {
        title: 'Alabama - Equipment Selection',
        location: '',
        job: 'Off Road Truck Driver',
        seniority: 'Entry-Level Position',
      },
      {
        title: 'California - Equipment Selection',
        location: 'Los Angeles, CA',
        job: '',
        seniority: 'Manager',
      },
      { title: 'Colorado - Equipment Selection', location: '', job: '', seniority: 'Entry-Level Position' },
      {
        title: 'Florida - Equipment Selection',
        location: 'Miami, FL',
        job: 'Track Machine Operator',
        seniority: 'Office Staff',
      },
      {
        title: 'Illinois - Equipment Selection',
        location: 'Chicago, IL',
        job: '',
        seniority: 'Individual Contributor',
      },
      {
        title: 'Kansas - Equipment Selection',
        location: '',
        job: 'Asphalt Paving Foreman',
        seniority: 'Office Staff',
      },
      {
        title: 'New York - Equipment Selection',
        location: 'New York, NY',
        job: '',
        seniority: 'Leadership / Management',
      },
      { title: 'Utah - Equipment Selection', location: '', job: '', seniority: 'Manager' },
    ],
  },
  [DOCUMENT_GROUPS.NON_COMPETE_AGREEMENTS]: {
    isOpen: false,
    items: [
      {
        title: 'Alabama - Non-Compete Agreements',
        location: '',
        job: 'Track Foreman',
        seniority: 'Individual Contributor',
      },
      {
        title: 'California - Non-Compete Agreements',
        location: 'Los Angeles, CA',
        job: 'Heavy Equipment Operator',
        seniority: '',
      },
      {
        title: 'Colorado - Non-Compete Agreements',
        location: '',
        job: 'Construction Quality Control Technician',
        seniority: 'Individual Contributor',
      },
      {
        title: 'Florida - Non-Compete Agreements',
        location: 'Miami, FL',
        job: 'Track Machine Operator',
        seniority: 'Entry-Level Position',
      },
      {
        title: 'Illinois - Non-Compete Agreements',
        location: 'Chicago, IL',
        job: 'Heavy Equipment Operator',
        seniority: 'Entry-Level Position',
      },
      {
        title: 'Kansas - Non-Compete Agreements',
        location: '',
        job: 'Loader Operator',
        seniority: 'Manager',
      },
      {
        title: 'New York - Non-Compete Agreements',
        location: 'New York, NY',
        job: 'Asphalt Paving Foreman',
        seniority: 'Office Staff',
      },
      {
        title: 'Utah - Non-Compete Agreements',
        location: '',
        job: 'Heavy Equipment Operator',
        seniority: 'Leadership / Management',
      },
    ],
  },
  [DOCUMENT_GROUPS.PAYROLL_HANDBOOKS]: {
    isOpen: false,
    items: [
      {
        title: 'Alabama - Payroll Handbooks',
        location: '',
        job: 'Construction Quality Control Technician',
        seniority: 'Entry-Level Position',
      },
      {
        title: 'California - Payroll Handbooks',
        location: 'San Francisco, CA',
        job: 'Track Machine Operator',
        seniority: 'Office Staff',
      },
      {
        title: 'Colorado - Payroll Handbooks',
        location: '',
        job: 'Heavy Equipment Service Technician',
        seniority: 'Leadership / Management',
      },
      {
        title: 'Florida - Payroll Handbooks',
        location: 'Miami, FL',
        job: 'Heavy Equipment Operator',
        seniority: 'Manager',
      },
      {
        title: 'Illinois - Payroll Handbooks',
        location: 'Chicago, IL',
        job: 'Equipment Operator',
        seniority: 'Entry-Level Position',
      },
      { title: 'Kansas - Payroll Handbooks', location: '', job: 'Loader Operator', seniority: 'Manager' },
      {
        title: 'New York - Payroll Handbooks',
        location: 'New York, NY',
        job: 'Asphalt Paving Foreman',
        seniority: 'Individual Contributor',
      },
      { title: 'Utah - Payroll Handbooks', location: '', job: 'Track Foreman', seniority: '' },
    ],
  },
  [DOCUMENT_GROUPS.PTO_POLICY]: {
    isOpen: false,
    items: [
      {
        title: 'Alabama - PTO Policy',
        location: '',
        job: 'Track Machine Operator',
        seniority: 'Individual Contributor',
      },
      {
        title: 'California - PTO Policy',
        location: 'Los Angeles, CA',
        job: 'Track Machine Operator',
        seniority: 'Office Staff',
      },
      {
        title: 'Colorado - PTO Policy',
        location: '',
        job: 'Construction Quality Control Technician',
        seniority: 'Individual Contributor',
      },
      {
        title: 'Florida - PTO Policy',
        location: 'Miami, FL',
        job: 'Asphalt Paving Foreman',
        seniority: 'Entry-Level Position',
      },
      {
        title: 'Illinois - PTO Policy',
        location: 'Chicago, IL',
        job: '',
        seniority: 'Leadership / Management',
      },
      { title: 'Kansas - PTO Policy', location: '', job: '', seniority: 'Office Staff' },
      {
        title: 'New York - PTO Policy',
        location: 'New York, NY',
        job: 'Heavy Equipment Service Technician',
        seniority: 'Office Staff',
      },
      { title: 'Utah - PTO Policy', location: '', job: '', seniority: 'Concrete Paving Foreman' },
    ],
  },
  [DOCUMENT_GROUPS.SAFETY_MANUALS]: {
    isOpen: false,
    items: [
      {
        title: 'Alabama - Safety Manuals',
        location: '',
        job: 'Concrete Paving Foreman',
        seniority: 'Entry-Level Position',
      },
      {
        title: 'California - Safety Manuals',
        location: 'San Francisco, CA',
        job: '',
        seniority: 'Office Staff',
      },
      {
        title: 'Colorado - Safety Manuals',
        location: '',
        job: 'Construction Quality Control Technician',
        seniority: 'Office Staff',
      },
      {
        title: 'Florida - Safety Manuals',
        location: 'Miami, FL',
        job: 'Track Machine Operator',
        seniority: 'Individual Contributor',
      },
      {
        title: 'Illinois - Safety Manuals',
        location: 'Chicago, IL',
        job: 'Equipment Operator',
        seniority: 'Entry-Level Position',
      },
      { title: 'Kansas - Safety Manuals', location: '', job: '', seniority: 'Asphalt Paving Foreman' },
      {
        title: 'New York - Safety Manuals',
        location: 'New York, NY',
        job: 'Heavy Equipment Service Technician',
        seniority: 'Office Staff',
      },
      {
        title: 'Utah - Safety Manuals',
        location: '',
        job: 'Track Machine Operator',
        seniority: 'Leadership / Management',
      },
    ],
  },
  [DOCUMENT_GROUPS.SEXUAL_HARASSMENT]: {
    isOpen: false,
    items: [
      {
        title: 'Alabama - Sexual Harassment',
        location: 'Track Foreman',
        job: 'Heavy Equipment Service Technician',
        seniority: 'Entry-Level Position',
      },
      {
        title: 'California - Sexual Harassment',
        location: 'Los Angeles, CA',
        job: 'Track Machine Operator',
        seniority: 'Individual Contributor',
      },
      {
        title: 'Colorado - Sexual Harassment',
        location: '',
        job: 'Heavy Equipment Service Technician',
        seniority: 'Individual Contributor',
      },
      {
        title: 'Florida - Sexual Harassment',
        location: 'Miami, FL',
        job: 'Loader Operator',
        seniority: 'Entry-Level Position',
      },
      {
        title: 'Illinois - Sexual Harassment',
        location: 'Chicago, IL',
        job: 'Concrete Paving Foreman',
        seniority: 'Office Staff',
      },
      { title: 'Kansas - Sexual Harassment', location: '', job: 'Grade Foreman', seniority: 'Office Staff' },
      {
        title: 'New York - Sexual Harassment',
        location: 'New York, NY',
        job: 'Asphalt Paving Foreman',
        seniority: 'Leadership / Management',
      },
      {
        title: 'Utah - Sexual Harassment',
        location: '',
        job: 'Equipment Operator',
        seniority: 'Entry-Level Position',
      },
    ],
  },
} as GroupedDocuments;

export const JOB_TEMPLATES = [
  'Heavy Equipment Operator',
  'Heavy Equipment Service Technician',
  'Equipment Operator',
  'Track Foreman',
  'Track Laborer',
  'Track Machine Operator',
  'Asphalt Paving Foreman',
  'Concrete Paving Foreman',
  'Construction Quality Control Technician',
  'Grade Foreman',
  'Grinding Operator',
  'Heavy Equipment Mechanic',
  'Loader Operator',
  'Off Road Truck Driver',
];

export const LOCATIONS = [
  'New York, NY',
  'Los Angeles, CA',
  'San Francisco, CA',
  'Miami, FL',
  'Chicago, IL',
  'Boston, MA',
  'Houston, TX',
  'Austin, TX',
];

export const SENIORITY = [
  'Entry-Level Position',
  'Individual Contributor',
  'Manager',
  'Office Staff',
  'Leadership / Management',
];
