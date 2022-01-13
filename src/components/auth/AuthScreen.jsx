import { Link } from "react-router-dom"

export const AuthScreen = () => { 
    return (
        <>
            <main className="bg-indigo-700/90 h-full flex items-center justify-center">
                <div className="bg-white w-96 py-16 shadow-lg rounded-md">
                    <h1 className="text-5xl text-center text-gray-600 font-medium mb-5">Login</h1>
                    <form className="flex flex-col justify-center px-5" action="">
                        <input className="outline-none my-2 py-2 px-2 rounded-md border-2 outlin focus:border-blue-500/30" type="text" placeholder="Email"/>
                        <input className="outline-none my-2 py-2 px-2 rounded-md border-2 focus:border-blue-500/30" type="text" placeholder="Password"/>
                        <Link to="/dashboard" className="mt-5 transition-colors text-center bg-indigo-600 hover:bg-indigo-500 text-white rounded-sm py-2">Ingresar</Link>
                        <p className="mt-5 text-center">Aun no tienes una cuenta? <a href="#" className=" text-blue-700 hover:underline font-normal">click aqui</a></p>
                    </form>
                </div>
            </main>
        </>
    )
}