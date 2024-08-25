import CarTable from "components/screen-components/tables/car-table";
const Dashboard = () => {
  return (
    <div>
      <h1 className="h1-bold">Overview</h1>
      <div className="flex gap-10 mt-6">
        <div className="h-[250px] w-[50%] rounded-2xl bg-secondary-green flex flex-col justify-center items-center">
          <h2 className="text-white h2-bold ">Total Cars</h2>
          <h3 className="text-white h3-bold ">12</h3>
        </div>
        <div className="h-[250px] w-[50%] rounded-2xl bg-secondary-red flex flex-col justify-center items-center">
          <h2 className="text-white h2-bold ">Total Categories</h2>
          <h3 className="text-white h3-bold ">12</h3>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-6">
        <h4 className="h3-bold"> Cars</h4>
        <CarTable />
      </div>
    </div>
  );
};

export default Dashboard;
