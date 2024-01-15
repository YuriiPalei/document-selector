import { FunctionComponent } from 'react';
import Switch from 'react-switch';

type Props = {
  label: string;
  onChange: () => void;
  checked: boolean;
};

const ButtonSwitch: FunctionComponent<Props> = ({ label, onChange, checked }) => {
  return (
    <div className="flex items-center gap-2 text-base">
      <Switch onChange={onChange} checked={checked} checkedIcon={false} uncheckedIcon={false} />
      <span>{label}</span>
    </div>
  );
};

export default ButtonSwitch;
