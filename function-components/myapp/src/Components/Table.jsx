const Table = ({record}) => {
        return(
            <table border={1}>
            <thead>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>email</td>
                    <td>password</td>
                </tr>
            </thead>
                {
                    record.map((val)=>{
                        return(
                            <tbody>
                        <tr key={val.id}>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td>{val.password}</td>
                        </tr>
            </tbody>
                        )
                    })
                }
        </table>
        )
}

export default Table;