import { Profiler, useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const navigationStateHandling = () => {
        return setShowingNavigationDropdown(!showingNavigationDropdown);
    };

    return (
        <div className=" px-10 pt-5">
            <section className=" flex gap-x-5 items-center">
                <Link
                    href="/"
                    className=" text-2xl font-extrabold text-blue-500 "
                >
                    Chirp
                </Link>
                <Link
                    href={route("chirps.index")}
                    className=" flex gap-x-2 items-center hover:ring-2 ring-gray-200 px-3 py-1  rounded-lg"
                >
                    <svg
                        width="800px"
                        height="800px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className=" relative inline-block object-cover object-center shadow-md w-9 h-9 px-1 ring-2 ring-blue-100 rounded-full cursor-pointer"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM5 4C4.44772 4 4 4.44772 4 5V10H20V5C20 4.44772 19.5523 4 19 4H5ZM4 12V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V12H4ZM14 13C14.2652 13 14.5196 13.1054 14.7071 13.2929L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L14 15.4142L11.7071 17.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L9.58579 17L9 16.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L8.29289 14.2929C8.48043 14.1054 8.73478 14 9 14C9.26522 14 9.51957 14.1054 9.70711 14.2929L11 15.5858L13.2929 13.2929C13.4804 13.1054 13.7348 13 14 13ZM11 7C11 6.44772 11.4477 6 12 6H17C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8H12C11.4477 8 11 7.55228 11 7ZM7 8.75C7.9665 8.75 8.75 7.9665 8.75 7C8.75 6.0335 7.9665 5.25 7 5.25C6.0335 5.25 5.25 6.0335 5.25 7C5.25 7.9665 6.0335 8.75 7 8.75Z"
                            fill="#000000"
                        />
                    </svg>
                    New Feed
                </Link>
            </section>

            <section className=" fixed right-10 top-5 w-fit  text-end">
                <div className=" flex gap-x-3 w-full  justify-end">
                    <svg
                        width="800px"
                        height="800px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className=" relative inline-block object-cover object-center shadow-md w-9 h-9 ring-2 ring-blue-100 rounded-full cursor-pointer"
                    >
                        <path
                            d="M10.0247 4.75C9.61049 4.75 9.2747 5.08579 9.2747 5.5C9.2747 5.91421 9.61049 6.25 10.0247 6.25V4.75ZM13.3397 6.25C13.7539 6.25 14.0897 5.91421 14.0897 5.5C14.0897 5.08579 13.7539 4.75 13.3397 4.75V6.25ZM10.4822 17.5C10.4822 17.0858 10.1464 16.75 9.7322 16.75C9.31799 16.75 8.9822 17.0858 8.9822 17.5H10.4822ZM14.3822 17.5C14.3822 17.0858 14.0464 16.75 13.6322 16.75C13.218 16.75 12.8822 17.0858 12.8822 17.5H14.3822ZM11.6822 7.326L11.7043 6.57633C11.6898 6.5759 11.6754 6.57589 11.6609 6.5763L11.6822 7.326ZM16.5514 11.758L17.2986 11.6935C17.2973 11.679 17.2957 11.6646 17.2936 11.6502L16.5514 11.758ZM17.1364 14.758L16.4197 14.9791C16.4441 15.0581 16.4813 15.1326 16.53 15.1994L17.1364 14.758ZM17.3635 16.67L18.0154 17.041C18.0311 17.0132 18.0451 16.9845 18.0573 16.955L17.3635 16.67ZM15.979 17.497L15.979 18.2471L15.9885 18.2469L15.979 17.497ZM7.38343 17.497L7.37395 18.247H7.38343V17.497ZM5.99893 16.67L5.30543 16.9556C5.3175 16.9849 5.33142 17.0134 5.3471 17.041L5.99893 16.67ZM6.2222 14.761L6.82983 15.2006C6.87787 15.1343 6.9147 15.0604 6.93886 14.9821L6.2222 14.761ZM6.8072 11.761L6.06492 11.6536C6.06287 11.6679 6.06122 11.6822 6.05998 11.6965L6.8072 11.761ZM10.0247 6.25H13.3397V4.75H10.0247V6.25ZM8.9822 17.5C8.9822 19.0008 10.1732 20.25 11.6822 20.25V18.75C11.0372 18.75 10.4822 18.2084 10.4822 17.5H8.9822ZM11.6822 20.25C13.1912 20.25 14.3822 19.0008 14.3822 17.5H12.8822C12.8822 18.2084 12.3272 18.75 11.6822 18.75V20.25ZM11.6601 8.07567C13.7382 8.13689 15.4977 9.72056 15.8091 11.8658L17.2936 11.6502C16.8814 8.81119 14.5374 6.65979 11.7043 6.57633L11.6601 8.07567ZM15.8041 11.8225C15.8967 12.8944 16.103 13.9529 16.4197 14.9791L17.853 14.5369C17.5679 13.6128 17.3819 12.6593 17.2986 11.6935L15.8041 11.8225ZM16.53 15.1994C16.7768 15.5384 16.8317 15.9908 16.6698 16.385L18.0573 16.955C18.4159 16.0821 18.298 15.0794 17.7427 14.3166L16.53 15.1994ZM16.7117 16.299C16.5524 16.579 16.2682 16.7433 15.9696 16.7471L15.9885 18.2469C16.832 18.2363 17.5989 17.7727 18.0154 17.041L16.7117 16.299ZM15.979 16.747H7.38343V18.247H15.979V16.747ZM7.3929 16.7471C7.09428 16.7433 6.8101 16.579 6.65075 16.299L5.3471 17.041C5.76357 17.7727 6.53044 18.2363 7.37395 18.2469L7.3929 16.7471ZM6.69242 16.3844C6.53048 15.9912 6.58448 15.5397 6.82983 15.2006L5.61458 14.3214C5.06265 15.0842 4.94681 16.0848 5.30543 16.9556L6.69242 16.3844ZM6.93886 14.9821C7.25551 13.9559 7.4619 12.8974 7.55442 11.8255L6.05998 11.6965C5.97661 12.6623 5.79067 13.6158 5.50554 14.5399L6.93886 14.9821ZM7.54948 11.8684C7.86016 9.72025 9.62274 8.1347 11.7035 8.0757L11.6609 6.5763C8.82409 6.65675 6.47609 8.81078 6.06492 11.6536L7.54948 11.8684Z"
                            fill="#000000"
                        />
                    </svg>
                    <button onClick={navigationStateHandling}>
                        <img
                            alt="tania andrew"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                            class=" relative inline-block object-cover object-center shadow-md w-9 h-9 ring-2 ring-blue-100 rounded-full cursor-pointer"
                            data-popover-target="profile-menu"
                        />
                    </button>
                </div>

                <ul
                    className={` relative pt-3 mt-2 flex flex-col py-3  px-4 rounded-xl shadow-md gap-y-2 text-start bg-gray-100   ${
                        showingNavigationDropdown ? "flex-auto" : "hidden"
                    }`}
                >
                    <Link
                        href={route("profile.edit")}
                        className=" hover:bg-blue-300 px-5 rounded-md py-2 flex gap-x-3 items-center"
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM10 5C10 5.53043 9.78929 6.03914 9.41421 6.41421C9.03914 6.78929 8.53043 7 8 7C7.46957 7 6.96086 6.78929 6.58579 6.41421C6.21071 6.03914 6 5.53043 6 5C6 4.46957 6.21071 3.96086 6.58579 3.58579C6.96086 3.21071 7.46957 3 8 3C8.53043 3 9.03914 3.21071 9.41421 3.58579C9.78929 3.96086 10 4.46957 10 5ZM8 9C7.0426 8.99981 6.10528 9.27449 5.29942 9.7914C4.49356 10.3083 3.85304 11.0457 3.454 11.916C4.01668 12.5706 4.71427 13.0958 5.49894 13.4555C6.28362 13.8152 7.13681 14.0009 8 14C8.86319 14.0009 9.71638 13.8152 10.5011 13.4555C11.2857 13.0958 11.9833 12.5706 12.546 11.916C12.147 11.0457 11.5064 10.3083 10.7006 9.7914C9.89472 9.27449 8.9574 8.99981 8 9Z"
                                fill="#90A4AE"
                            ></path>
                        </svg>
                        My Profile
                    </Link>
                    <Link
                        href={route("logout")}
                        method="post"
                        className="hover:bg-blue-300 px-5 rounded-md py-2 flex items-center gap-x-3 "
                    >
                        <svg
                            width="16"
                            height="14"
                            viewBox="0 0 16 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14C1.26522 14 1.51957 13.8946 1.70711 13.7071C1.89464 13.5196 2 13.2652 2 13V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0ZM11.293 9.293C11.1108 9.4816 11.01 9.7342 11.0123 9.9964C11.0146 10.2586 11.1198 10.5094 11.3052 10.6948C11.4906 10.8802 11.7414 10.9854 12.0036 10.9877C12.2658 10.99 12.5184 10.8892 12.707 10.707L15.707 7.707C15.8945 7.51947 15.9998 7.26516 15.9998 7C15.9998 6.73484 15.8945 6.48053 15.707 6.293L12.707 3.293C12.6148 3.19749 12.5044 3.12131 12.3824 3.0689C12.2604 3.01649 12.1292 2.9889 11.9964 2.98775C11.8636 2.9866 11.7319 3.0119 11.609 3.06218C11.4861 3.11246 11.3745 3.18671 11.2806 3.2806C11.1867 3.3745 11.1125 3.48615 11.0622 3.60905C11.0119 3.73194 10.9866 3.86362 10.9877 3.9964C10.9889 4.12918 11.0165 4.2604 11.0689 4.3824C11.1213 4.50441 11.1975 4.61475 11.293 4.707L12.586 6H5C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8H12.586L11.293 9.293Z"
                                fill="#90A4AE"
                            ></path>
                        </svg>
                        Sing Out
                    </Link>
                </ul>
            </section>
            <main className="  bg-red-100 ">{children}</main>
        </div>

        // <div className="min-h-screen bg-gray-100">
        //     <nav className="bg-white border-b border-gray-100">
        //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        //             <div className="flex justify-between h-16">
        //                 <div className="flex">
        //                     <div className="shrink-0 flex items-center">
        //                         <Link href="/">
        //                             <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
        //                         </Link>
        //                     </div>

        //                     <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
        //                         <NavLink
        //                             href={route("dashboard")}
        //                             active={route().current("dashboard")}
        //                         >
        //                             Dashboarddddd
        //                         </NavLink>

        //                         <NavLink
        //                             href={route("chirps.index")}
        //                             active={route().current("chirps.index")}
        //                         >
        //                             Chirpsssssss
        //                         </NavLink>
        //                     </div>
        //                 </div>

        //                 <div className="hidden sm:flex sm:items-center sm:ms-6">
        //                     <div className="ms-3 relative">
        //                         <section>
        //                             <div>
        //                                 <svg
        //                                     width="800px"
        //                                     height="800px"
        //                                     viewBox="0 0 24 24"
        //                                     fill="none"
        //                                     xmlns="http://www.w3.org/2000/svg"
        //                                     className=" relative inline-block object-cover object-center shadow-md w-9 h-9 ring-2 ring-blue-100 rounded-full cursor-pointer"
        //                                 >
        //                                     <path
        //                                         d="M10.0247 4.75C9.61049 4.75 9.2747 5.08579 9.2747 5.5C9.2747 5.91421 9.61049 6.25 10.0247 6.25V4.75ZM13.3397 6.25C13.7539 6.25 14.0897 5.91421 14.0897 5.5C14.0897 5.08579 13.7539 4.75 13.3397 4.75V6.25ZM10.4822 17.5C10.4822 17.0858 10.1464 16.75 9.7322 16.75C9.31799 16.75 8.9822 17.0858 8.9822 17.5H10.4822ZM14.3822 17.5C14.3822 17.0858 14.0464 16.75 13.6322 16.75C13.218 16.75 12.8822 17.0858 12.8822 17.5H14.3822ZM11.6822 7.326L11.7043 6.57633C11.6898 6.5759 11.6754 6.57589 11.6609 6.5763L11.6822 7.326ZM16.5514 11.758L17.2986 11.6935C17.2973 11.679 17.2957 11.6646 17.2936 11.6502L16.5514 11.758ZM17.1364 14.758L16.4197 14.9791C16.4441 15.0581 16.4813 15.1326 16.53 15.1994L17.1364 14.758ZM17.3635 16.67L18.0154 17.041C18.0311 17.0132 18.0451 16.9845 18.0573 16.955L17.3635 16.67ZM15.979 17.497L15.979 18.2471L15.9885 18.2469L15.979 17.497ZM7.38343 17.497L7.37395 18.247H7.38343V17.497ZM5.99893 16.67L5.30543 16.9556C5.3175 16.9849 5.33142 17.0134 5.3471 17.041L5.99893 16.67ZM6.2222 14.761L6.82983 15.2006C6.87787 15.1343 6.9147 15.0604 6.93886 14.9821L6.2222 14.761ZM6.8072 11.761L6.06492 11.6536C6.06287 11.6679 6.06122 11.6822 6.05998 11.6965L6.8072 11.761ZM10.0247 6.25H13.3397V4.75H10.0247V6.25ZM8.9822 17.5C8.9822 19.0008 10.1732 20.25 11.6822 20.25V18.75C11.0372 18.75 10.4822 18.2084 10.4822 17.5H8.9822ZM11.6822 20.25C13.1912 20.25 14.3822 19.0008 14.3822 17.5H12.8822C12.8822 18.2084 12.3272 18.75 11.6822 18.75V20.25ZM11.6601 8.07567C13.7382 8.13689 15.4977 9.72056 15.8091 11.8658L17.2936 11.6502C16.8814 8.81119 14.5374 6.65979 11.7043 6.57633L11.6601 8.07567ZM15.8041 11.8225C15.8967 12.8944 16.103 13.9529 16.4197 14.9791L17.853 14.5369C17.5679 13.6128 17.3819 12.6593 17.2986 11.6935L15.8041 11.8225ZM16.53 15.1994C16.7768 15.5384 16.8317 15.9908 16.6698 16.385L18.0573 16.955C18.4159 16.0821 18.298 15.0794 17.7427 14.3166L16.53 15.1994ZM16.7117 16.299C16.5524 16.579 16.2682 16.7433 15.9696 16.7471L15.9885 18.2469C16.832 18.2363 17.5989 17.7727 18.0154 17.041L16.7117 16.299ZM15.979 16.747H7.38343V18.247H15.979V16.747ZM7.3929 16.7471C7.09428 16.7433 6.8101 16.579 6.65075 16.299L5.3471 17.041C5.76357 17.7727 6.53044 18.2363 7.37395 18.2469L7.3929 16.7471ZM6.69242 16.3844C6.53048 15.9912 6.58448 15.5397 6.82983 15.2006L5.61458 14.3214C5.06265 15.0842 4.94681 16.0848 5.30543 16.9556L6.69242 16.3844ZM6.93886 14.9821C7.25551 13.9559 7.4619 12.8974 7.55442 11.8255L6.05998 11.6965C5.97661 12.6623 5.79067 13.6158 5.50554 14.5399L6.93886 14.9821ZM7.54948 11.8684C7.86016 9.72025 9.62274 8.1347 11.7035 8.0757L11.6609 6.5763C8.82409 6.65675 6.47609 8.81078 6.06492 11.6536L7.54948 11.8684Z"
        //                                         fill="#000000"
        //                                     />
        //                                 </svg>

        //                                 <button
        //                                     onClick={navigationStateHandling}
        //                                 >
        //                                     <img
        //                                         alt="tania andrew"
        //                                         src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
        //                                         class=" relative inline-block object-cover object-center shadow-md w-9 h-9 ring-2 ring-blue-100 rounded-full cursor-pointer"
        //                                         data-popover-target="profile-menu"
        //                                     />
        //                                 </button>
        //                             </div>

        //                             <div>
        //                                 <Link href={route("profile.edit")}>
        //                                     Profile
        //                                 </Link>
        //                                 <Link
        //                                     href={route("logout")}
        //                                     method="post"
        //                                     as="button"
        //                                 >
        //                                     Log Out
        //                                 </Link>
        //                             </div>
        //                         </section>
        //                     </div>
        //                 </div>

        //                 <div className="-me-2 flex items-center sm:hidden">
        //                     <button
        //                         onClick={() =>
        //                             setShowingNavigationDropdown(
        //                                 (previousState) => !previousState
        //                             )
        //                         }
        //                         className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
        //                     >
        //                         <svg
        //                             className="h-6 w-6"
        //                             stroke="currentColor"
        //                             fill="none"
        //                             viewBox="0 0 24 24"
        //                         >
        //                             <path
        //                                 className={
        //                                     !showingNavigationDropdown
        //                                         ? "inline-flex"
        //                                         : "hidden"
        //                                 }
        //                                 strokeLinecap="round"
        //                                 strokeLinejoin="round"
        //                                 strokeWidth="2"
        //                                 d="M4 6h16M4 12h16M4 18h16"
        //                             />
        //                             <path
        //                                 className={
        //                                     showingNavigationDropdown
        //                                         ? "inline-flex"
        //                                         : "hidden"
        //                                 }
        //                                 strokeLinecap="round"
        //                                 strokeLinejoin="round"
        //                                 strokeWidth="2"
        //                                 d="M6 18L18 6M6 6l12 12"
        //                             />
        //                         </svg>
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>

        //         <div
        //             className={
        //                 (showingNavigationDropdown ? "block" : "hidden") +
        //                 " sm:hidden"
        //             }
        //         >
        //             <div className="pt-2 pb-3 space-y-1">
        //                 <ResponsiveNavLink
        //                     href={route("dashboard")}
        //                     active={route().current("dashboard")}
        //                 >
        //                     Dashboard
        //                 </ResponsiveNavLink>

        //                 <ResponsiveNavLink
        //                     href={route("chirps.index")}
        //                     active={route().current("chirps.index")}
        //                 >
        //                     Chirps
        //                 </ResponsiveNavLink>
        //             </div>

        //             {/* <div className="pt-4 pb-1 border-t border-gray-200">
        //                 <div className="px-4">
        //                     <div className="font-medium text-base text-gray-800">
        //                         {user.name}
        //                     </div>
        //                     <div className="font-medium text-sm text-gray-500">
        //                         {user.email}
        //                     </div>
        //                 </div>

        //                 <div className="mt-3 space-y-1">
        //                     <ResponsiveNavLink href={route("profile.edit")}>
        //                         Profile
        //                     </ResponsiveNavLink>
        //                     <ResponsiveNavLink
        //                         method="post"
        //                         href={route("logout")}
        //                         as="button"
        //                     >
        //                         Log Out
        //                     </ResponsiveNavLink>
        //                 </div>
        //             </div> */}
        //         </div>
        //     </nav>

        //     {header && (
        //         <header className="bg-white shadow">
        //             <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        //                 {header}
        //             </div>
        //         </header>
        //     )}

        //     <main>{children}</main>
        // </div>
    );
}
