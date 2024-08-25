import { Dropdown as PrimeDropDown, DropdownProps } from "primereact/dropdown";
import { CustomDropdown } from "styles/global.style";
type Props = DropdownProps & {
  classes?: string;
};
const Dropdown = ({ classes, ...props }: Props) => {
  return (
    <CustomDropdown classes={classes}>
      <PrimeDropDown {...props} />
    </CustomDropdown>
  );
};

export default Dropdown;
