import SearchReservation from "./SearchReservation.jsx";
import mainPic from "/assets/front.png";
import TodaysReservations from "./TodaysReservations.jsx";
import CancelRequest from "./CancelRequest.jsx";
import {Link, NavLink} from "react-router-dom";
import { useLocation } from "react-router-dom";
import EditReservation from "./EditReservation.jsx";
import NotificationBar from "../templates/NotificationBar.jsx";
import {useState} from "react";


export default function AdminPanel({setType, setNotificationMessage, setNavBarOpen}){

    const options = [
        { name: 'Dzisiejsze rezerwacje', link: '/admin/todays'},
        { name: 'Wyszukaj rezerwacji', link: '/admin/search'},
        { name: 'Prośby o anulowanie', link: '/admin/cancel'},

    ]

    const location = useLocation();
    const path = location.pathname;
    const option = path.substring(path.lastIndexOf("/") + 1);

    const notificationProps = {
        setType: setType,
        setNotificationMessage: setNotificationMessage,
        setNavBarOpen: setNavBarOpen
    };

    return(
        <>
            <div className="flex w-full min-h-screen">

                <div
                    className="sticky top-0 left-0 h-screen flex flex-col justify-center text-left space-y-5 bg-gray-200 px-14 w-1/5">
                    {options.map((option, index) => (
                        <NavLink
                            to={{pathname: option.link}}
                            className={({ isActive}) =>
                                `text-2xl font-serif w-fit hover:cursor-pointer hover:text-gray-500 hover:border-b-2 hover:border-gray-500
                                } ${isActive ? 'text-gray-500 border-b-2 border-gray-500' : ''}`
                            }
                            key={index}
                        >
                            {option.name}
                        </NavLink>
                    ))}
                </div>

                <div className="flex justify-center items-center w-4/5 ml-1/5 "
                     style={{
                         backgroundImage: `url(${mainPic})`,
                         backgroundSize: 'cover',
                         backgroundPosition: 'left',
                         transformOrigin: "top",
                         backgroundAttachment: 'fixed'
                     }}>

                    {!(option === "search" || option === "todays" || option === "cancel" || option === "edit") && (
                        <h1 className="text-white text-center font-serif drop-shadow-2xl p-10 w-full text-6xl md:text-8xl" style={{ backdropFilter: "brightness(60%)" }}>
                            CORNELIA STREET HOTEL
                        </h1>
                    )}

                    {option === "search" && <SearchReservation {...notificationProps} />}

                    {option === "todays" && <TodaysReservations {...notificationProps}/>}

                    {option === "cancel" && <CancelRequest {...notificationProps}/>}

                    {option === "edit" && <EditReservation {...notificationProps}/>}

                </div>
            </div>
        </>
    )

}