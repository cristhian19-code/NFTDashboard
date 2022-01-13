import { useSelector } from "react-redux"
import { Profiles } from "./Profiles/Profiles"
import { Header } from "./Header"
import { Sidebar } from "./Sidebar"
import { Trending } from "./Trending/Trending"
import { FeaturedCreators } from "./Featured/FeaturedCreators"

export const DashboardScreen = () => { 
    const { darkmode } = useSelector(state => state.darkmode)

    return (
        <div className={`transition-colors flex ${darkmode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
            <Sidebar/>
            <main className="w-full md:w-4/6 xl:w-3/4 h-screen px-4 py-6 overflow-y-auto">
                <Header />
                <Trending />
                <div className="flex flex-col md:flex-row w-full mt-10">

                    <FeaturedCreators />

                    <Profiles />
                </div>
            </main>
        </div>
    )
}