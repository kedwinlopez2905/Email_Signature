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
//             <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
//                 {
//                     statsData.map((d, k) => {
//                         return (
//                             <DashboardStats key={k} {...d} colorIndex={k}/>
//                         )
//                     })
//                 }
//             </div>



//         {/** ---------------------- Different charts ------------------------- */}
//             <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
//                 <LineChart />
//                 <BarChart />
//             </div>
            
//         {/** ---------------------- Different stats content 2 ------------------------- */}
        
//             <div className="grid lg:grid-cols-2 mt-10 grid-cols-1 gap-6">
//                 <AmountStats />
//                 <PageStats />
//             </div>

//         {/** ---------------------- User source channels table  ------------------------- */}
        
//             <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
//                 <UserChannels />
//                 <DoughnutChart />
//             </div>
//         </>
//     )
// }

// export default Dashboard

import moment from "moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { showNotification } from "../common/headerSlice"
import TitleCard from "../../components/Cards/TitleCard"
import { RECENT_TRANSACTIONS } from "../../utils/dummyData"
import FunnelIcon from '@heroicons/react/24/outline/FunnelIcon'
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'
import SearchBar from "../../components/Input/SearchBar"

const TopSideButtons = ({removeFilter, applyFilter, applySearch}) => {

    const [filterParam, setFilterParam] = useState("")
    const [searchText, setSearchText] = useState("")
    const locationFilters = ["Paris", "London", "Canada", "Peru", "Tokyo"]

    const showFiltersAndApply = (params) => {
        applyFilter(params)
        setFilterParam(params)
    }

    const removeAppliedFilter = () => {
        removeFilter()
        setFilterParam("")
        setSearchText("")
    }

    useEffect(() => {
        if(searchText == ""){
            removeAppliedFilter()
        }else{
            applySearch(searchText)
        }
    }, [searchText])
    return(
        <div className="inline-block float-right">
            <SearchBar searchText={searchText} styleClass="mr-4" setSearchText={setSearchText}/>
            <div className="dropdown dropdown-bottom dropdown-end">
                <label tabIndex={0} className="btn btn-sm btn-outline rounded-full">New Signature</label>
                <ul tabIndex={0} className="flex menu menu-compact dropdown-content mt-2 p-2 w-56 shadow bg-base-100 rounded-box">
                    <div className="text-sm mb-2">info</div>
                    <div className="text-sm">Do you need more signature?</div>
                    <div className="divider mt-0 mb-0"></div>
                    <label tabIndex={0} className="btn btn-sm btn-outline normal-case bg-primary rounded-full">Upgrade</label>
                </ul>
            </div>
        </div>
    )
}


function Transactions(){


    const [trans, setTrans] = useState(RECENT_TRANSACTIONS)

    const removeFilter = () => {
        setTrans(RECENT_TRANSACTIONS)
    }

    const applyFilter = (params) => {
        let filteredTransactions = RECENT_TRANSACTIONS.filter((t) => {return t.location == params})
        setTrans(filteredTransactions)
    }

    // Search according to name
    const applySearch = (value) => {
        let filteredTransactions = RECENT_TRANSACTIONS.filter((t) => {return t.email.toLowerCase().includes(value.toLowerCase()) ||  t.email.toLowerCase().includes(value.toLowerCase())})
        setTrans(filteredTransactions)
    }

    return(
        <>
            
            <TitleCard title="Signatures used(1/1)        Analytics"  topMargin="mt-2" TopSideButtons={<TopSideButtons applySearch={applySearch} applyFilter={applyFilter} removeFilter={removeFilter}/>}>
            </TitleCard>
        </>
    )
}


export default Transactions