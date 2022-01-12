import './client.scss';

function Client({info}) {

    return (
        <div className="client">
            <input className="client__title" type="text" value={info.name} name={`client_${info.id}`} readOnly />
            <button className="client__edit">
                <span className="material-icons">create</span>
            </button>
            <button className="client__delete">
                <span className="material-icons">delete</span>
            </button>
            <button className="client__restore">
                <span className="material-icons">restore_from_trash</span>
            </button>
        </div>
    );
}

export default Client;
