import { useState, useEffect, useContext } from 'react';
import { ToastContext } from '../../contexts/toast-context';

import './toast.scss';

function Toast() {
    const [isActive, setIsActive] = useState(true);
    const {toasts, setToasts} = useContext(ToastContext);

    useEffect(() => {
        console.log('Toast is rendered.');
    }, []);

    const handleClick = (event) => {
        console.log('click na toast', event);
    }

    const addToast = () => {
        const info = [...toasts];

        info.push({
            id: new Date().getTime(),
            message: `Nova Toast`,
            type: 'success'
        });

        setToasts(info);

        setIsActive(!isActive);
    }

    return (
        <div className="toast">
            <button onClick={addToast}>Add toast</button>
            {toasts.map(element => (
                <div key={element.id} className="toast__item" data-status={element.type}>
                    <p className="toast__message">{element.message}</p>
                    <button className="toast__close" onClick={handleClick}>
                        <span className="material-icons">close</span>
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Toast;
