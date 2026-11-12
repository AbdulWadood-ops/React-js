
function Table() {

    const data = [
        { name: "abdul wadood", id: 1, role: "developer" },
        { name: "abdur rehman", id: 2, role: "designer" },
        { name: "abdul kareem", id: 3, role: "teacher" },
        { name: "Dawood", id: 4, role: "student" },
        { name: "Muzammil", id: 5, role: "developer" },
        { name: "Fahim", id: 6, role: "developer" },

    ]

    return (
        <>
            {/*  key is must when we are using the map . we have to provide the key to the top level element that is directly returned by map */}

            <table border={1} cellPadding={14} cellSpacing={25} style={{ padding: "auto", width: "50%", height: "50%", backgroundColor: "white", margin: "auto", paddingTop: "20px", borderRadius: "20px", boxShadow: "0 0 10px rgba(0,0,0,0.1)", color: "black" }} >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}> 
                            <td>{item.name}</td>
                            <td>{item.id}</td>
                            <td>{item.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>



        </>
    )
}



export default Table