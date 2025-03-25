import { Outlet } from "react-router-dom";
// import { BellIcon } from "lucide-react";
// import { Button } from "@nextui-org/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/navbars/AppSidebar";
// import SearchModal from "@/components/SearchModal";
import { useNavigate } from "react-router-dom";

const DashboardLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full text-[7vw] md:text-[4vw] lg:text-[3vw]">
          <div className="flex w-full shadow-sm  items-center gap-4 p-2 py-4">
            <SidebarTrigger className="p-0 " />
            <div className="flex items-center justify-between w-full">
              <h2 className="text-[0.5em] font-bold hidden md:block text-gray-800">
                Dashboard
              </h2>
              <div className="flex items-center gap-3 ml-auto">
                {/* <SearchModal /> */}
                {/* <Button
                  isIconOnly
                  className="bg-slate-100 hover:bg-slate-200 rounded-full size-10"
                >
                  <BellIcon color="black" />
                </Button> */}
                {/* <Button
                  asChild
                  className="flex items-center justify-center bg-blue-700 hover:bg-blue-400 font-bold"
                > */}
                {/* <NavLink to={"/select"}>
                    <PlusCircle />
                    Create New
                  </NavLink> */}
                {/* </Button> */}
                <div
                  onClick={() => navigate("/select")}
                  className="text-[0.4em] text-gray-700 bg-platformGreen/30 border border-platformGreen p-[0.5em] rounded-[1em] sm:rounded-[0.5em] hover:shadow-lg hover:shadow-platformGreen/40 hover:scale-105 transition-all duration-200 cursor-pointer"
                >
                  Create Now
                </div>
              </div>
            </div>
          </div>
          <div className="p-2">
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
