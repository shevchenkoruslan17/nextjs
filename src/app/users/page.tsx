const UsersPage = async () => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());


    return (
        <div>

            {users.map((user: { id: number, name: string }) => (<div key={user.id}>
                {user.name}
            </div>))}

        </div>
    )
}
export default UsersPage;