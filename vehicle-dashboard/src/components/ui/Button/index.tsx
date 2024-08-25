import { CustomButton } from "styles/global.style";
import { Button as PrimeButton, ButtonProps } from "primereact/button";
type CustomButtonProps = ButtonProps & {
  classes?: string;
};
const Button = ({ classes, ...props }: CustomButtonProps) => {
  return (
    <CustomButton Outerclasses={classes}>
      <PrimeButton {...props} />
    </CustomButton>
  );
};

export default Button;
