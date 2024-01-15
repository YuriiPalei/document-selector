import { Dispatch, FunctionComponent, SetStateAction, useEffect, useState } from 'react';
import Dropdown from 'components/Dropdown';
import { JOB_TEMPLATES, LOCATIONS, SENIORITY } from 'const';
import { FilterTypes, GroupedDocuments } from 'types';

type Props = {
  setFilteredDocuments: Dispatch<SetStateAction<GroupedDocuments>>;
  allDocuments: GroupedDocuments;
};

const Filters: FunctionComponent<Props> = ({ setFilteredDocuments, allDocuments }) => {
  const [filters, setFilters] = useState<{ name: FilterTypes; value: string }[]>([]);

  const addFilter = (name: FilterTypes, value: string) => {
    setFilters((prev) => [...prev, { name, value }]);
  };

  const removeFilter = (name: FilterTypes) => {
    setFilters((prev) => prev.filter((item) => item.name !== name));
  };

  useEffect(() => {
    if (filters.length === 0) {
      setFilteredDocuments(allDocuments);
      return;
    }

    const filteredDocuments = Object.keys(allDocuments).reduce((acc, key) => {
      const filtered = allDocuments[key].items.filter((document: Document) => {
        return filters.every((filter) => document[filter.name] === filter.value);
      });
      if (filtered.length) {
        acc[key] = { isOpen: allDocuments[key].isOpen, items: filtered };
      }
      return acc;
    }, {}) as GroupedDocuments;

    setFilteredDocuments(filteredDocuments);
  }, [filters, setFilteredDocuments, allDocuments]);

  const filterStyles: Record<FilterTypes, string> = {
    job: 'bg-purple-100 text-purple-500',
    location: 'bg-blue-100 text-blue-500',
    seniority: 'bg-green-100 text-green-500',
  };

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="text-sm">Filter by:</div>
      <div className="w-full flex gap-3">
        <Dropdown
          placeholder="Job Templates"
          items={JOB_TEMPLATES}
          onSelect={(item) => addFilter('job', item)}
        />
        <Dropdown
          placeholder="Locations"
          items={LOCATIONS}
          onSelect={(item) => addFilter('location', item)}
        />
      </div>
      <div className="w-full flex gap-3">
        {/*not specified in requrements*/}
        {/*<Dropdown placeholder="Subsidiary" items={[]} />*/}
        <Dropdown
          placeholder="Seniority"
          items={SENIORITY}
          onSelect={(item) => addFilter('seniority', item)}
        />
      </div>
      {filters.length > 0 && (
        <div className="p-2 gap-2 flex flex-wrap border border-gray-200 rounded-lg">
          {filters.map((filter) => (
            <div
              key={filter.value}
              className={`cursor-pointer flex items-center justify-center gap-1 px-3 py-0.5 rounded-md text-sm font-medium ${filterStyles[filter.name]}`}
              onClick={() => removeFilter(filter.name)}
            >
              {filter.value}
              <img src="/assets/cross.svg" alt="cancel" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filters;
