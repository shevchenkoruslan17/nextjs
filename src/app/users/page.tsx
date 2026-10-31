const UsersPage = async () => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users',{cache: 'no-cache'})
        .then(value => value.json());


    return (
        <div>

            <h2>{Date.now()}</h2>

            {users.map((user: { id: number, name: string }) => (<div key={user.id}>
                {user.name}
            </div>))}

        </div>
    )
}
export default UsersPage;