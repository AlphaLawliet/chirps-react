import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen  justify-center flex flex-col sm:justify-center items-center pt-6 sm:pt-0   ">
            <div className=" bg-blue-100 bg-opacity-50  pt-5 pb-10  w-fit h-fit px-6 rounded-xl  ">
                <div className="  ">
                    <Link href="/">
                        <h1 className=" text-3xl font-bold  w-full  text-center">
                            <span className=" text-gray-700"> Welcome to</span>
                            <span className=" ml-2 text-4xl text-blue-500 hover:text-blue-600">
                                Chirp
                            </span>
                        </h1>
                        {/* <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" /> */}
                    </Link>
                </div>

                <div className=" min-w-[350px]   mt-6 px-6 py-4 bg-gray-100 rounded-lg   shadow-md overflow-hidden sm:rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    );
}
