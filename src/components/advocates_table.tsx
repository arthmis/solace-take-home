function AdvocatesTable({ advocates }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>City</th>
                    <th>Degree</th>
                    <th>Specialties</th>
                    <th>Years of Experience</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {advocates.map((advocate) => {
                    return (
                        <tr key={advocate.id}>
                            <td>{advocate.firstName}</td>
                            <td>{advocate.lastName}</td>
                            <td>{advocate.city}</td>
                            <td>{advocate.degree}</td>
                            <td>
                                <ul>
                                    {advocate.specialties.map((s) => (
                                        <li key={s}>{s}</li>
                                    ))}
                                </ul>
                            </td>
                            <td>{advocate.yearsOfExperience}</td>
                            <td>{advocate.phoneNumber}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}

export default AdvocatesTable;