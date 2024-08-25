import styled from "styled-components";
import { twMerge } from "tailwind-merge";
import { Menu } from "primereact/menu";
interface InputTextProps {
  width?: string;
  height?: string;
  className?: string;
}
interface ButtonProps {
  Outerclasses?: string;
}
interface DataTableProps {
  Outerclasses?: string;
}
interface MenuProps {
  width?: string;
  height?: string;
}
interface DropdownProps {
  classes?: string;
}
export const CustomDropdown = styled.div<DropdownProps>`
  ${({ classes }) => classes && twMerge(classes)};
  .p-dropdown {
    font-size: 14px !important;
    border-radius: 12px !important;
    outline: none !important;
    box-shadow: none !important;
    ${twMerge("border !border-grey-600")}
    &:hover {
      ${twMerge("!border !border-grey-600")}
    }
  }
`;
export const CustomMenu = styled(Menu)<MenuProps>`
  width: ${({ width }) => (width ? width : "110px")};
  height: ${({ height }) => (height ? height : "108px")};
  padding: 10px;
  .p-menu-list {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 5px;
  }
  .p-submenu-header {
    display: none !important;
  }

  .p-menuitem {
    border-radius: 5px;
    width: 90px;
    cursor: pointer;
    overflow-y: hidden;
    /* height: 27px; */
    div {
      line-height: 14px;
      padding-top: 3px;
      padding-left: 5px;
      padding-bottom: 3px;
    }
  }
`;
export const CustomInputText = styled.span<InputTextProps>`
  border: 1px solid #dcdbdd !important;
  border-radius: 12px !important;
  padding-right: 10px;
  .p-float-label {
    width: ${({ width }) => (width ? width : "100%")} !important;
    height: ${({ height }) => (height ? height : "100%")} !important;
    ${({ className }) => className && twMerge(className)};
    .p-inputtext {
      width: 100%;
      border: none;
      font-family: "Inter" !important;
      border-radius: 12px !important;
    }
    .p-inputtext:enabled:focus {
      box-shadow: none !important;
    }
    .p-inputtext:enabled:hover {
      border-color: #dcdbdd !important;
    }

    .p-float-label:has(input:focus) label,
    .p-float-label:has(input.p-filled) label {
      top: 0.1rem !important;
      font-size: 12px;
      z-index: 5 !important;
      background-color: white !important;
    }
  }
`;
export const CustomButton = styled.div<ButtonProps>`
  ${({ Outerclasses }) => Outerclasses && twMerge(Outerclasses)};
  .p-button {
    outline: none !important;
    box-shadow: none !important;
    border: none !important;
    border-radius: 12px !important;
    font-family: "Inter" !important;
  }
`;
export const CustomDataTable = styled.div<DataTableProps>`
  ${({ Outerclasses }) => Outerclasses && twMerge(Outerclasses)};
`;
