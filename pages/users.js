import React, { useState, useEffect, useRef } from "react";
import { DefaultLayout } from "../layouts/Default";
import { UserDetails } from "../components/UserDetails";
import UsersService from "../services/user.service";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [allUsers, setAllUsers] = useState([])
    const filterContainer = useRef(null)

    useEffect(() => {
        (async () => {
            let { data } = await UsersService.get_all();
            setUsers(data);
            setAllUsers(data)
        })();
    }, []);

    const filterUsers = () => {
        setUsers(allUsers.filter(user => {
            return (
                user.full_name.toLocaleLowerCase().indexOf(filterContainer.current.value) !== -1 ||
                user.username.toLocaleLowerCase().indexOf(filterContainer.current.value) !== -1
            )
        }))
    }

    return (
        <DefaultLayout meta={{ title: "All Users" }}>
            <h2>Users</h2>
            <div>
                <input
                    type="search"
                    className="form-control w-25 my-4"
                    placeholder="Filter by user"
                    ref={filterContainer}
                    onChange={filterUsers}
                />
            </div>
            <div className="row">
                {users.map((user, i) => (
                    <div key={i} className="col-3 pb-4">
                        <UserDetails user={user} />
                    </div>
                ))}
            </div>
        </DefaultLayout>
    );
}
