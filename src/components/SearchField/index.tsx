import { ChangeEvent, FunctionComponent } from 'react';

type Props = {
  onChange: (value: string) => void;
};

const SearchField: FunctionComponent<Props> = ({ onChange }) => {
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="relative">
      <img src="/assets/searchIcon.svg" alt="search" className="absolute pl-4 pt-2.5" />
      <input
        onChange={onInputChange}
        onClick={(e) => e.stopPropagation()}
        type="text"
        placeholder="Search"
        className="w-full border border-gray-300 rounded-lg pr-4 pl-9 py-2 text-sm focus:outline-0"
      />
    </div>
  );
};

export default SearchField;
