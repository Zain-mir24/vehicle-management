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
import { useDispatch } from "react-redux";
import { getAllCategory , addCategory, editCategory, setCategories, deleteCategory } from "Store/Slices/CategorySlice";
const CategoryTable = () => {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [addingCategory, setAddingCategory] = useState(false);
  const [categoryData, setCategoryData] = useState({
    name:"",
    id:""
  })
  const [categoryList,setCategoryList] = useState([]);

  const EditEvent = (data?: any) => {
    console.log(data, "data");
    if(!data){
      setAddingCategory(true);
    }else{
      setAddingCategory(false);
      setCategoryData({id:data._id,name:data.name  });
    }
    setVisible(true);
  };

  const deleteEvent = async (id: any) => {
    console.log(id, "id");
    try {
      const removeCategory = await deleteCategory(id);

      console.log(removeCategory)

      getCategory();
    } catch (e) {
      console.log(e)
    }
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
                  EditEvent(rowData);
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
                  deleteEvent(rowData._id);
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

  const getCategory = async () => {
    const category = await getAllCategory();
    
    setCategoryList(category.data);

    dispatch(setCategories(category.data));
  }

  useEffect(()=>{
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

    if (addingCategory) {
      await addCategory(categoryData);


    } else {
      const updateCategory = await editCategory(categoryData);

      console.log(updateCategory);
    }
    const category = await getAllCategory();
    dispatch(setCategories(category.data));

    setCategoryList(category.data)
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
              onChange={(e: any) => setCategoryData({...categoryData, name:e.target.value  })}
              id="name"
              label="category name"
              className="!w-full !h-[50px]"
              required
            />



            <Button
              type="submit"
              label={addingCategory ? "Create" : "Update"}
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
