import { Link, Head } from "@inertiajs/react";
import bg1 from "../../assets/bg1.jpg";
import bg2 from "../../assets/bg2.jpg";
import bg3 from "../../assets/bg3.jpg";
import Guest from "@/Layouts/GuestLayout";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import { useState } from "react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const [switchToLogin, setSwitchToLogin] = useState(false);
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Welcome" />
            <div className=" relative  h-screen w-full justify-center items-center overflow-x-hidden   ">
                <img
                    src={bg3}
                    alt="background"
                    className=" absolute -z-0 bg-no-repeat w-full h-screen object-cover  opacity-50 "
                />
                <img
                    src={bg2}
                    alt="background"
                    className=" absolute -z-10 bg-no-repeat w-full h-screen object-cover  opacity-50 "
                />

                <nav className=" absolute z-0  w-full h-screen  bg-blue-400 bg-opacity-10   ">
                    {auth.user ? (
                        <>
                            <Link
                                href={route("dashboard")}
                                className=" opacity-100 bg-opacity-100 text-black"
                            >
                                Dashboard
                            </Link>
                        </>
                    ) : (
                        <>
                            <div className=" absolute z-0 flex w-full  justify-center">
                                {switchToLogin && <Login />}
                                {!switchToLogin && (
                                    <Register
                                        switchToLogin={switchToLogin}
                                        setSwitchToLogin={setSwitchToLogin}
                                    />
                                )}
                            </div>
                        </>
                    )}
                </nav>
            </div>
        </>
    );
}
