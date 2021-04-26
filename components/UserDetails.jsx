export function UserDetails({ user }) {
    return (
        <div className="card p-2 px-3">
            <div className="row">
                <div className="col-2">
                    <img
                        src="https://www.w3schools.com/w3images/avatar5.png"
                        className="_avatar"
                        alt="Avatar"
                    />
                </div>
                <div className="col-10 pl-4">
                    <div className="font-weight-bold text-primary text-sm">
                        {user.username}
                    </div>
                    <div className="text-secondary text-sm">
                        { user.profile.location || "No location" }
                    </div>
                    <div className="text-sm">{user.questionsDoc} Questions</div>
                </div>
            </div>
        </div>
    );
}
