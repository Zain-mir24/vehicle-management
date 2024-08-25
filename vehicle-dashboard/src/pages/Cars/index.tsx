import CarTable from "components/screen-components/tables/car-table";
const Cars = () => {
  return (
    <div>
      <h1 className="h1-bold">Cars</h1>
      <div className="flex flex-col gap-2 mt-6">
        <CarTable />
      </div>
    </div>
  );
};

export default Cars;
