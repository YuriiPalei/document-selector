import { FunctionComponent, useCallback, useEffect, useRef, useState } from 'react';
import SearchField from 'components/SearchField';

type Props = {
  placeholder: string;
  items: string[];
  onSelect: (item: string) => void;
};

const Dropdown: FunctionComponent<Props> = ({ placeholder, items, onSelect }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState(items);

  const handleSelect = (item: string) => {
    onSelect(item);
    setIsOpen(false);
  };

  const handleSearch = useCallback(
    (value: string) => {
      const filteredOptions = items.filter((item) => item.toLowerCase().includes(value.toLowerCase()));
      setOptions(filteredOptions);
    },
    [items],
  );

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      ref={ref}
      onClick={() => setIsOpen(!isOpen)}
      className="w-full relative text-sm border border-gray-300 rounded-lg px-2.5 py-2 cursor-pointer"
    >
      <img src="/assets/down.svg" alt="down" className="absolute right-2.5 top-3" />
      {isOpen && (
        <div className="absolute top-10 left-0 w-full border border-gray-200 rounded-lg bg-white z-10 p-4 flex flex-col gap-1">
          <SearchField onChange={handleSearch} />
          {options.map((item) => (
            <div
              key={item}
              onClick={() => handleSelect(item)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      )}
      {placeholder}
    </div>
  );
};

export default Dropdown;
