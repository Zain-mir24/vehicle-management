/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState,useEffect } from "react";
import CustomTable from "components/ui/Table";
import { DataTableColumnProps } from "components/ui/Table";
import { CustomMenu } from "styles/global.style";
import TextInput from "components/ui/Inputs/TextInput";
import { Dialog } from "primereact/dialog";
import Button from "components/ui/Button";
import { getAllCategory , addCategory } from "Store/Slices/CategorySlice";
const CategoryTable = () => {
  const [visible, setVisible] = useState(false);
  const [addingCategory, setAddingCategory] = useState(false);
  const [categoryData, setCategoryData] = useState({
    name:""
  })
  const [categoryList,setCategoryList] = useState([]);
  const EditEvent = (id?: any) => {
    console.log(id, "id");
    if(!id){
      setAddingCategory(true)
    }
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

  useEffect(()=>{

    const getCategory = async () => {
      const category = await getAllCategory();
      
      console.log(category.data);

      setCategoryList(category.data)
    }
    getCategory();

  },[])

  const columns: DataTableColumnProps[] = [
    {
      field: "_id",
      header: "id",
      sortable: true,
      columnclasses: "text-left",
    },
    {
      field: "name",
      header: "name",
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
  const handleAddCategory = async (e: any) => {
    e.preventDefault();
    
    if(addingCategory){
      const createCategory = await addCategory(categoryData);

      console.log(createCategory)

      if(createCategory.status === 200){
        const category = await getAllCategory();
      
  
        setCategoryList(category.data)
      }
     
    }
    setVisible(false);
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
            onSubmit={handleAddCategory}
            className="relative flex flex-col gap-8 mt-10"
          >
            <TextInput
              value={categoryData.name}
              onChange={(e: any) => setCategoryData({ name:e.target.value  })}
              id="name"
              label="category name"
              className="!w-full !h-[50px]"
              required
            />



            <Button
              type="submit"
              label="Create"
              className="w-full h-[50px] !bg-secondary-green"
            />
          </form>
        </div>
      </Dialog>
      <div className="w-full flex justify-end">
        <Button label="Create"
          className="  w-100 h-[50px] !bg-secondary-green" 
          onClick={()=> EditEvent() }
        />
      </div>

      <CustomTable
        classes="my-custom-class"
        products={categoryList}
        columns={columns}
        rows={10}
      />
    </div>
  );
};

export default CategoryTable;
