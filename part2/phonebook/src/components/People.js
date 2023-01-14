const People = ({people}) => people.map(person => <div key = {person.id} >{person.name} {person.number}</div>)

export default People