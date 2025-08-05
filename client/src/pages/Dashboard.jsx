import { Protect, useAuth } from "@clerk/clerk-react"
import axios from "axios"
import { Gem, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import CreationItem from "../components/CreationItem"

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const Dashboard = () => {

  const [creations, setcreations] = useState([])
  const [loading, setLoading] = useState(true);

  const {getToken} =useAuth()

  const getDashboardData = async () => {
  
    try {
      const { data } = await axios.get("/api/user/get-user-creations", {headers: {Authorization: `Bearer ${await getToken()}`}});

      if(data.success) {
        setcreations(data.creations);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  }

  useEffect(()=>{
    getDashboardData() }, [])

  return (
    <div className="h-full overflow-y-scroll p-6">
      <div className="flex justify-start gap-4 flex-wrap">
        <div className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200">
              <div className="text-slate-600">
                <p className="text-sm">Total Creations</p>
                <h2 className="text-xl font-semibold">{creations.length}</h2>
              </div>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3588F2] to-[#0BB0D7] text-white flex justify-center items-center">
                <Sparkles className="w-5 text-white"/>
              </div>
        </div>

        <div className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200">
              <div className="text-slate-600">
                <p className="text-sm">Active Plan</p>
                <h2 className="text-xl font-semibold"><Protect plan='premium' fallback='Free'>Premium</Protect></h2>
              </div>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF61C5] to-[#9E53EE] text-white flex justify-center items-center">
                <Gem className="w-5 text-white"/>
              </div>
        </div>
      </div>

{
        loading? (
          <div className="flex justify-center items-center h-3/4">
            <div className="w-11 h-11 rounded-full border-3 border-purple-500 border-t-transparent animate-spin"></div>
          </div>
        ) : (
          <div className="space-y-3">
        <p className="mt-6 mb-4">Recent Creations</p>
        {
          creations.map((item) =><CreationItem key={item.id} item={item}/>)
        }
      </div>
        )
      }
      
    </div>
  )
}

export default Dashboard
