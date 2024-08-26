// import DashboardStats from './components/DashboardStats'
// import AmountStats from './components/AmountStats'
// import PageStats from './components/PageStats'

// import UserGroupIcon  from '@heroicons/react/24/outline/UserGroupIcon'
// import UsersIcon  from '@heroicons/react/24/outline/UsersIcon'
// import CircleStackIcon  from '@heroicons/react/24/outline/CircleStackIcon'
// import CreditCardIcon  from '@heroicons/react/24/outline/CreditCardIcon'
// import UserChannels from './components/UserChannels'
// import LineChart from './components/LineChart'
// import BarChart from './components/BarChart'
// import DashboardTopBar from './components/DashboardTopBar'
// import { useDispatch } from 'react-redux'
// import {showNotification} from '../common/headerSlice'
// import DoughnutChart from './components/DoughnutChart'
// import { useState } from 'react'

// const statsData = [
//     {title : "New Users", value : "34.7k", icon : <UserGroupIcon className='w-8 h-8'/>, description : "↗︎ 2300 (22%)"},
//     {title : "Total Sales", value : "$34,545", icon : <CreditCardIcon className='w-8 h-8'/>, description : "Current month"},
//     {title : "Pending Leads", value : "450", icon : <CircleStackIcon className='w-8 h-8'/>, description : "50 in hot leads"},
//     {title : "Active Users", value : "5.6k", icon : <UsersIcon className='w-8 h-8'/>, description : "↙ 300 (18%)"},
// ]

// function Dashboard(){

//     const dispatch = useDispatch()

//     const updateDashboardPeriod = (newRange) => {
//         // Dashboard range changed, write code to refresh your values
//         dispatch(showNotification({message : `Period updated to ${newRange.startDate} to ${newRange.endDate}`, status : 1}))
//     }

//     return(
//         <>
//         {/** ---------------------- Select Period Content ------------------------- */}
//             <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod}/>

//         {/** ---------------------- Different stats content 1 ------------------------- */}
//             <div className="grid grid-cols-1 gap-6 mt-2 lg:grid-cols-4 md:grid-cols-2">
//                 {
//                     statsData.map((d, k) => {
//                         return (
//                             <DashboardStats key={k} {...d} colorIndex={k}/>
//                         )
//                     })
//                 }
//             </div>

//         {/** ---------------------- Different charts ------------------------- */}
//             <div className="grid grid-cols-1 gap-6 mt-4 lg:grid-cols-2">
//                 <LineChart />
//                 <BarChart />
//             </div>

//         {/** ---------------------- Different stats content 2 ------------------------- */}

//             <div className="grid grid-cols-1 gap-6 mt-10 lg:grid-cols-2">
//                 <AmountStats />
//                 <PageStats />
//             </div>

//         {/** ---------------------- User source channels table  ------------------------- */}

//             <div className="grid grid-cols-1 gap-6 mt-4 lg:grid-cols-2">
//                 <UserChannels />
//                 <DoughnutChart />
//             </div>
//         </>
//     )
// }

// export default Dashboard

import { useEffect, useState } from "react";
import TitleCard from "../../components/Cards/TitleCard";
import { RECENT_TRANSACTIONS } from "../../utils/dummyData";
import SearchBar from "../../components/Input/SearchBar";
import TableCellsIcon from "@heroicons/react/24/outline/TableCellsIcon";
const TopSideButtons = ({ removeFilter, applyFilter, applySearch }) => {
  const [filterParam, setFilterParam] = useState("");
  const [searchText, setSearchText] = useState("");
  const locationFilters = ["Paris", "London", "Canada", "Peru", "Tokyo"];

  const showFiltersAndApply = (params) => {
    applyFilter(params);
    setFilterParam(params);
  };

  const removeAppliedFilter = () => {
    removeFilter();
    setFilterParam("");
    setSearchText("");
  };

  useEffect(() => {
    if (searchText == "") {
      removeAppliedFilter();
    } else {
      applySearch(searchText);
    }
  }, [searchText]);
  return (
    <div className="inline-block float-right">
      <SearchBar
        searchText={searchText}
        styleClass="mr-4"
        setSearchText={setSearchText}
      />
      <div className="dropdown dropdown-bottom dropdown-end">
        <label tabIndex={0} className="rounded-full btn btn-sm btn-outline">
          New Signature
        </label>
        <ul
          tabIndex={0}
          className="flex w-56 p-2 mt-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box"
        >
          <div className="mb-2 text-sm">info</div>
          <div className="text-sm">Do you need more signature?</div>
          <div className="mt-0 mb-0 divider"></div>
          <label
            tabIndex={0}
            className="normal-case rounded-full btn btn-sm btn-outline bg-primary"
          >
            Upgrade
          </label>
        </ul>
      </div>
    </div>
  );
};

function Transactions() {
  const [trans, setTrans] = useState(RECENT_TRANSACTIONS);
  const submenuIconClasses = `h-12 w-12`;

  const removeFilter = () => {
    setTrans(RECENT_TRANSACTIONS);
  };

  const applyFilter = (params) => {
    let filteredTransactions = RECENT_TRANSACTIONS.filter((t) => {
      return t.location == params;
    });
    setTrans(filteredTransactions);
  };

  // Search according to name
  const applySearch = (value) => {
    let filteredTransactions = RECENT_TRANSACTIONS.filter((t) => {
      return (
        t.email.toLowerCase().includes(value.toLowerCase()) ||
        t.email.toLowerCase().includes(value.toLowerCase())
      );
    });
    setTrans(filteredTransactions);
  };

  return (
    <>
      <TitleCard
        title="MyPages used (1 / 1)"
        topMargin="mt-2"
        TopSideButtons={
          <TopSideButtons
            applySearch={applySearch}
            applyFilter={applyFilter}
            removeFilter={removeFilter}
          />
        }
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <TitleCard title={"Add User"}>
            <div className="flex justify-center ">
              <TableCellsIcon className={submenuIconClasses} />
            </div>
            <div className="flex justify-center my-8">
              <h1 className="text-[12px]">
                Need more signatures for yourself or your team?
              </h1>
            </div>
            <div className="flex justify-center">
              <label className="px-4 py-1 font-bold text-white bg-pink-500 rounded-full">
                Add users
              </label>
            </div>
          </TitleCard>
          <TitleCard title={"1234@1234.com"}>
            <div>
              <p className="">
                <h1 className="flex">
                  <h2 className="text-[#8505fa]">name</h2> &nbsp;&nbsp;1234
                </h1>
                <h1 className="flex">
                  <h2 className="text-[#8505fa]">address</h2> &nbsp;&nbsp;canada
                </h1>
                <h1 className="flex">
                  <h2 className="text-[#8505fa]">website</h2>{" "}
                  &nbsp;&nbsp;mysignature.io
                </h1>
                <h1 className="flex">
                  <h2 className="text-[#8505fa]">phone</h2> &nbsp;&nbsp;+1 234 567
                  8901
                </h1>
              </p>
              <div className="mt-2 divider"></div>
              <div className="flex justify-between">
                <div className="flex">
                  <img
                    alt=""
                    src="https://cdn-icons-png.flaticon.com/128/17561/17561949.png"
                    className="w-5 h-6 mr-20"
                  />
                </div>
                <div className="flex">
                  <img
                    alt=""
                    src="https://cdn-icons-png.flaticon.com/128/17497/17497466.png"
                    className="w-5 h-6"
                  />
                  <img
                    alt=""
                    src="https://cdn-icons-png.flaticon.com/128/17632/17632489.png"
                    className="w-5 h-6 mx-4"
                  />
                  <img
                    alt=""
                    src="https://cdn-icons-png.flaticon.com/128/17570/17570077.png"
                    className="w-5 h-6"
                  />
                </div>
              </div>
            </div>
          </TitleCard>
        </div>
      </TitleCard>
    </>
  );
}

export default Transactions;
