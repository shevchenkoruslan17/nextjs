import {getAllUsers} from "@/src/services/api.service";
import Link from "next/link";

export const UsersComponent = async () => {

    const users = await getAllUsers();


    return (
        <div>
            {
                users.map((user) => <div key={user.id}>
                    <Link href={'/users/' + user.id.toString()}>{user.id} {user.name}</Link>

                </div>)
            }
        </div>
    );
};