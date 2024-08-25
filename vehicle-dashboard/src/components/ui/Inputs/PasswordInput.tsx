import { useState } from "react";
import { InputIcon } from "primereact/inputicon";
import { FloatLabel } from "primereact/floatlabel";
import { twMerge } from "tailwind-merge";
import { InputText, InputTextProps } from "primereact/inputtext";
import { CustomInputText } from "styles/global.style";
type TextInputProps = InputTextProps & {
  labelclass?: string;
  label: string;
  id: string;
  floatLabelClasses?: string;
};
const PasswordInput = ({
  labelclass = "",
  label = "",
  id = "",
  floatLabelClasses,
  ...props
}: TextInputProps) => {
  const [showPassword, setshowPassword] = useState(false);
  return (
    <>
      <CustomInputText className={floatLabelClasses}>
        <FloatLabel>
          <InputText
            id={id}
            {...props}
            type={showPassword ? "text" : "password"}
          />
          <label
            htmlFor={id}
            className={twMerge("font-poppins label-base", labelclass)}
          >
            {label}
          </label>
          {showPassword ? (
            <InputIcon
              onClick={() => setshowPassword(!showPassword)}
              className="transform cursor-pointer  pi pi-eye right-5"
            >
              {" "}
            </InputIcon>
          ) : (
            <InputIcon
              onClick={() => setshowPassword(!showPassword)}
              className="transform cursor-pointer  pi pi-eye-slash right-5"
            >
              {" "}
            </InputIcon>
          )}
        </FloatLabel>
      </CustomInputText>
    </>
  );
};

export default PasswordInput;
