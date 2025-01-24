import Notifications from "./Notifications";
import ProfileNavbar from "./ProfileNavbar";

const DashboardNavbar = () => {
  return (
    <div className="flex justify-between px-10 items-center py-4 mt-10 bg-white w-full shadow-sm">
      <p className="text-2xl font-bold">Nombre de la Empresa</p>

      <div className="flex items-center space-x-8">
        <Notifications />
        <ProfileNavbar />
      </div>
    </div>
  );
};

export default DashboardNavbar;
