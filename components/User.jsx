export const User = ({ names }) => (
    <div className="card p-2 px-4 shadow _bg-light-gray">
        <div className="d-flex align-items-center">
            <img
                src="https://www.w3schools.com/w3images/avatar5.png"
                className="_avatar mr-3"
                alt="Avatar"
            />
            <span className="font-weight-bolder">{names}</span>
        </div>
    </div>
);
