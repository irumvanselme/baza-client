export function Search({ search, count }) {
    return (
        <div className="pb-4 pt-2 text-secondary font-weight-bolder">
            <h2>Showing result of "{search}"</h2>
            <div>{count} results found</div>
        </div>
    );
}
