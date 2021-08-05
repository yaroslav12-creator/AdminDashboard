import { LineStyle, Timeline, TrendingUp, PersonOutline, Storefront, AttachMoney, Equalizer, MailOutline, AllInbox, ChatBubbleOutline, PermContactCalendar, Report } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './sidebar.css';


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem active">
                                <LineStyle classname="sidebarIcon"/>
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline classname="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp classname="sidebarIcon"/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                <PersonOutline classname="sidebarIcon"/>
                                Users
                            </li>
                        </Link>
                        <Link to="/products" className="link">
                        <li className="sidebarListItem">
                            <Storefront classname="sidebarIcon"/>
                            Products
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <AttachMoney classname="sidebarIcon"/>
                            Transaction
                        </li>
                        <li className="sidebarListItem">
                            <Equalizer classname="sidebarIcon"/>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notification</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <MailOutline classname="sidebarIcon"/>
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <AllInbox classname="sidebarIcon"/>
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline classname="sidebarIcon"/>
                            Message
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <PermContactCalendar classname="sidebarIcon"/>
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline classname="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report classname="sidebarIcon"/>
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}