function AdvocatesTable({ advocates }) {
    return (
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">

        <table className="table">
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
                            <td className="align-top">{advocate.firstName}</td>
                            <td className="align-top">{advocate.lastName}</td>
                            <td className="align-top">{advocate.city}</td>
                            <td className="align-top">{advocate.degree}</td>
                            <td className="align-top">
                                <ul>
                                    {advocate.specialties.map((s) => (
                                        <li className="list-disc" key={s}>{s}</li>
                                    ))}
                                </ul>
                            </td>
                            <td className="align-top">{advocate.yearsOfExperience}</td>
                            <td className="align-top">{advocate.phoneNumber}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        </div>
    )
}

export default AdvocatesTable;