import { InputText, InputTextProps } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { twMerge } from "tailwind-merge";
import { CustomInputText } from "styles/global.style";
type TextInputProps = InputTextProps & {
  labelclass?: string;
  label: string;
  id: string;
  floatLabelClasses?: string;
};
const TextInput = ({
  labelclass = "",
  label = "",
  id = "",

  floatLabelClasses,
  ...props
}: TextInputProps) => {
  return (
    <CustomInputText className={floatLabelClasses}>
      <FloatLabel>
        <InputText id={id} {...props} />
        <label htmlFor={id} className={twMerge("font-inter", labelclass)}>
          {label}
        </label>
      </FloatLabel>
    </CustomInputText>
  );
};

export default TextInput;
