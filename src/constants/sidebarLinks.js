import Calendar from "../assets/Calendar.svg"
import Category from "../assets/Category.svg"
import Document from "../assets/Document.svg"
import Notification from "../assets/Notification.svg"
import Setting from "../assets/Setting.svg"
import Ticket from "../assets/Ticket.svg"
import Chart from "../assets/Chart.svg"
export const sidebarLinks = [
    {
        id: 1,
        name: "Dashboard",
        path: "/dashboard/dashboard",
        icon: Category,
    },
    {
        id: 2,
        name: "Upload",
        path: "/dashboard/upload",
        icon: Chart,
    },
    {
        id: 3,
        name: "Invoice",
        path: "/dashboard/invoice",
        icon: Ticket,
    },
    {
        id: 4,
        name: "Schedule",
        path: "/dashboard/schedule",
        icon: Document,
    },
    {
        id: 5,
        name: "Calendar",
        path: "/dashboard/calendar",
        icon: Calendar,
    },
    {
        id: 6,
        name: "Notification",
        path: "/dashboard/notifications",
        icon: Notification,
    },
    {
        id: 7,
        name: "Settings",
        path: "/dashboard/settings",
        icon: Setting,
    },
];