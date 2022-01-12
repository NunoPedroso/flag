import './team.scss';

function Team() {
    return (
        <section className="team">
            <header className="team__header">
                <h2 className="team__headline">Members</h2>
            </header>
            <table className="team__table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Billable rate</th>
                    <th>Role</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Pereira Flag (you)</td>
                    <td>nuno.pereira.flag@gmail.com</td>
                    <td className="team__rate">
                        <input type="text" name="team_member_1" value="0" />
                        <span>€</span>
                    </td>
                    <td>
                        <span className="team__role">Owner</span>
                    </td>
                </tr>
                </tbody>
            </table>
        </section>
    );
}

export default Team;
