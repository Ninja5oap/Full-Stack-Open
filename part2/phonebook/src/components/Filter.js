const Filter = ({newFilter, handleFilterChange}) => {
    return (
        <>Filter shown with <input value={newFilter} onChange={handleFilterChange}/></>
    )
}

export default Filter