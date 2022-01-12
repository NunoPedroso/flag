import Client from '../client/client';

import './clients.scss';

function Clients() {
    const data = [
        {
            id: 1,
            name: 'Others',
            isActive: true
        },
        {
            id: 2,
            name: 'Farfetch',
            isActive: true
        },
        {
            id: 3,
            name: 'Worten',
            isActive: true
        },
        {
            id: 4,
            name: 'Moey',
            isActive: true
        }
    ];

    return (
        <section className="clients">
            <header className="clients__header">
                <h2 className="clients__headline">Clients</h2>
                <div className="clients__filters">
                    <select className="clients__select" name="clients_filter">
                        <option value="active">Show active</option>
                        <option value="archived">Show archived</option>
                        <option value="">Show all</option>
                    </select>
                    <input className="clients__input" type="search" name="clients_search" placeholder="Search by name" />
                </div>
                <form action="#nowhere" className="clients__create">
                    <input className="clients__input" type="text" name="create_client" placeholder="Add new client" />
                    <button className="button clients__add" type="submit" disabled>Add</button>
                </form>
            </header>
            <div className="clients__container" data-status="active">
                <p className="clients__label">Name</p>
                {data.map(client => (
                    <Client key={client.id} info={client} />
                ))}

            </div>
        </section>
    );
}

export default Clients;
