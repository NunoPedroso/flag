import { useContext } from 'react';
import { ToastContext } from '../../contexts/toast-context';
import { WeatherContext } from '../../contexts/weather-context';

import './sidebar.scss';

function ListItem(props) {
    return (
        <li className="sidebar__item">
            <a className="sidebar__link" href={props.data.link}>
                <span className="material-icons">{props.data.icon}</span>
                {props.data.label}
            </a>
        </li>
    );
}

function Sidebar() {
    console.log('Sidebar');
    const {toasts} = useContext(ToastContext);
    const {weather} = useContext(WeatherContext);

    const mainOptions = [
        {
            label: 'Time tracker',
            icon: 'schedule',
            link: '/'
        },
        {
            label: 'Calendar',
            icon: 'calendar_today',
            link: '/'
        }
    ];

    const analyzeOptions = [
        {
            label: 'Dashboard',
            icon: 'grid_view',
            link: '/'
        },
        {
            label: 'Reports',
            icon: 'bar_chart',
            link: '/'
        },
    ];

    const manageOptions = [
        {
            label: 'Projects',
            icon: 'article',
            link: '/'
        },
        {
            label: 'Team',
            icon: 'groups',
            link: '/team'
        },
        {
            label: 'Clients',
            icon: 'person',
            link: '/clients'
        },
        {
            label: 'Tags',
            icon: 'local_offer',
            link: '/'
        },
        {
            label: 'Settings',
            icon: 'settings',
            link: '/'
        },
        {
            label: 'Weather',
            icon: 'light_mode',
            link: '/weather'
        },
        {
            label: 'Contacts',
            icon: 'contact_support',
            link: '/contacts'
        }
    ];

    return (
        <div className="sidebar">
            <p>Existem {toasts.length} notificações.</p>
            <p>Temperatura atual: {weather.temperature}</p>
            <ul className="sidebar__list">

                {mainOptions.map(option => (
                    <ListItem key={option.label} data={option} />
                ))}

            </ul>
            <p className="sidebar__title">Analyze</p>
            <ul className="sidebar__list">

                {analyzeOptions.map(option => (
                    <ListItem key={option.label} data={option} />
                ))}

            </ul>
            <p className="sidebar__title">Manage</p>
            <ul className="sidebar__list">

                {manageOptions.map(option => (
                    <ListItem key={option.label} data={option} />
                ))};

            </ul>
        </div>
    );
}

export default Sidebar;
