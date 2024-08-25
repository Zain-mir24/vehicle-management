/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import CustomTable from "components/ui/Table";
import { DataTableColumnProps } from "components/ui/Table";
import { CustomMenu } from "styles/global.style";
const CategoryTable = () => {
  const products: any[] = [
    {
      id: 1,
      make: "Toyota",
      model: "2024",
      registrationNo: "AWS-1010",
      color: "Green",
    },
  ];
  const EditEvent = (id: any) => {
    console.log(id, "id");
  };
  const deleteEvent = (id: any) => {
    console.log(id, "id");
  };
  const MenuBodyTemplate = (rowData: any) => {
    const menuLeftRef = useRef<any>(null);
    const MenuTemplate = ({ menuRef, id }: any) => {
      const items = [
        {
          label: "Edit Event",

          template: () => {
            return (
              <div
                className="flex gap-1 items-center justify-center  text-[13px] font-[400] text-[#21212]"
                onClick={() => {
                  EditEvent(rowData.id);
                }}
              >
                Edit
              </div>
            );
          },
        },
        {
          label: "Delete Event",

          template: () => {
            return (
              <div
                className="flex gap-1 items-center justify-center  text-[13px] font-[400] text-[#21212]"
                onClick={() => {
                  deleteEvent(rowData.id);
                }}
              >
                Delete
              </div>
            );
          },
        },
      ];

      return (
        <>
          <CustomMenu
            popupAlignment="left"
            height={"80px"}
            model={items}
            popup
            ref={menuRef}
            id="popup_menu_left"
          />
        </>
      );
    };
    const handleClick = (event: any) => {
      event.preventDefault();
      menuLeftRef.current?.toggle(event);
    };
    return (
      <div
        className={`px-[14px] py-[4px]   relative  flex justify-center items-center rounded-[5px] text-[12px]`}
      >
        <div
          onClick={handleClick}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-[5px] h-[5px] rounded-[50%] bg-secondary-green"></div>
          <div className="w-[5px] h-[5px] rounded-[50%] bg-secondary-green"></div>
          <div className="w-[5px] h-[5px] rounded-[50%] bg-secondary-green"></div>
        </div>

        <MenuTemplate id={rowData.id} menuRef={menuLeftRef} />
      </div>
    );
  };
  const columns: DataTableColumnProps[] = [
    {
      field: "make",
      header: "Make",
      sortable: true,
      columnclasses: "text-left",
    },
    {
      field: "model",
      header: "Model",
      sortable: true,
      columnclasses: "text-left",
    },
    {
      field: "registrationNo",
      header: "Registeration No",
      sortable: true,
      columnclasses: "text-left",
    },
    {
      field: "color",
      header: "Color",
      sortable: true,
      columnclasses: "text-left",
    },
    {
      field: "menu",
      header: "",

      columnclasses: "text-left",
      body: MenuBodyTemplate,
    },
    // More columns...
  ];
  return (
    <div className="border rounded-lg m-4 border-[#EBF0ED]">
      <CustomTable
        classes="my-custom-class"
        products={products}
        columns={columns}
        rows={10}
      />
    </div>
  );
};

export default CategoryTable;
