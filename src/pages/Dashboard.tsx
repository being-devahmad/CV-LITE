import DashBoardTabs from "@/components/tabs/DashBoardTabs";
// import TrendingJobs from "@/components/TrendingJobs";
import { useAuth } from "@/hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  // console.log("currentUser-->", user)

  return (
    <div className="p-[0.5em] pb-[1em] text-[7vw] md:text-[4vw] lg:text-[3vw]">
      <div className=" text-gray-800 flex mt-3 md:flex-row flex-col items-start gap-2 w-full justify-between ">
        <div>
          <h2 className="text-[0.7em] font-bold ">Hey, {user?.email}!</h2>
          <p className="text-[0.5em] text-gray-500">
            What do you want to create.
          </p>
        </div>
      </div>
      <DashBoardTabs />
      {/* <div className="flex md:flex-row flex-col gap-4">
        <TrendingJobs />
        <CreateJobApplicationCard />
      </div> */}
    </div>
  );
};

export default Dashboard;
