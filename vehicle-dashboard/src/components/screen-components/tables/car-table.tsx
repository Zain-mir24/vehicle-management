/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import CustomTable from "components/ui/Table";
import { DataTableColumnProps } from "components/ui/Table";
import { CustomMenu } from "styles/global.style";
import { Dialog } from "primereact/dialog";
import TextInput from "components/ui/Inputs/TextInput";
import Button from "components/ui/Button";
import Dropdown from "components/ui/Dropdown";
import { categories } from "utils/constants";
import Pagination from "../pagination";
import { usePaginationHook } from "hooks/usePagination.hook";
const CarTable = () => {
  const [visible, setVisible] = useState(false);
  const products: any[] = [
    {
      id: 1,
      make: "Toyota",
      model: "2024",
      registrationNo: "AWS-1010",
      color: "Green",
    },
  ];
  const [cardata, setcardata] = useState({
    make: "",
    model: "",
    registrationNo: "",
    color: "",
    id: "",
    category: { id: 0, name: "" },
  });
  const EditEvent = (id: any) => {
    console.log(id, "id");
    setVisible(true);
  };
  const deleteEvent = (id: any) => {
    console.log(id, "id");
  };
  const MenuBodyTemplate = (rowData: any) => {
    const menuLeftRef = useRef<any>(null);
    const MenuTemplate = ({ menuRef, id }: any) => {
      const items = [
        {
          label: "Add Car",

          template: () => {
            return (
              <div
                className="flex gap-1 items-center justify-center  text-[13px] font-[400] text-[#21212]"
                onClick={() => {
                  setVisible(true);
                }}
              >
                Add
              </div>
            );
          },
        },
        {
          label: "Edit Car",

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
          label: "Delete Car",

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
  const {
    pagination,
    setpagination,
    limit,
    offset,
    handleNextButton,
    handlePreviousButton,
    handlePageClick,
  } = usePaginationHook();
  const handleAddCar = (e: any) => {
    e.preventDefault();
    console.log(cardata, "cardata");
  };
  return (
    <div className="border rounded-lg m-4 border-[#EBF0ED]">
      <Dialog
        showHeader={false}
        visible={visible}
        style={{ width: "30vw" }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <div className="relative">
          <div className="flex justify-end w-full mt-3">
            <span
              onClick={() => setVisible(false)}
              className="text-right flex cursor-pointer justify-center items-center text-base text-black w-[50px] h-[50px] bg-grey-300 rounded-[50px]"
            >
              X
            </span>
          </div>
          <form
            onSubmit={handleAddCar}
            className="relative flex flex-col gap-8 mt-10"
          >
            <TextInput
              value={cardata.make}
              onChange={(e) => setcardata({ ...cardata, make: e.target.value })}
              id="make"
              label="Make"
              className="!w-full !h-[50px]"
              required
            />
            <TextInput
              value={cardata.model}
              onChange={(e) =>
                setcardata({ ...cardata, model: e.target.value })
              }
              id="model"
              label="Model"
              className="!w-full !h-[50px]"
              required
            />
            <TextInput
              value={cardata.registrationNo}
              onChange={(e) =>
                setcardata({ ...cardata, registrationNo: e.target.value })
              }
              id="registrationNo"
              label="Registeration No"
              className="!w-full !h-[50px]"
              required
            />
            <TextInput
              value={cardata.color}
              onChange={(e) =>
                setcardata({ ...cardata, color: e.target.value })
              }
              id="color"
              label="Color"
              className="!w-full !h-[50px]"
              required
            />
            <Dropdown
              value={cardata.category}
              onChange={(e) => {
                setcardata({ ...cardata, category: e.value });
              }}
              options={categories}
              optionLabel="name"
              placeholder="Select Category"
              className="w-full "
            />

            <Button
              type="submit"
              label="Create"
              className="w-full h-[50px] !bg-secondary-green"
            />
          </form>
        </div>
      </Dialog>
      <CustomTable
        classes="my-custom-class"
        products={products}
        columns={columns}
        rows={10}
      />
      <Pagination
        pagination={pagination}
        limit={limit}
        offset={offset}
        handleNextClick={handleNextButton}
        handlePreviousClick={handlePreviousButton}
        handlePageClick={handlePageClick}
      />
    </div>
  );
};

export default CarTable;
