type ListPersonName = {
    personName: {
        first: string
        last: string
    }
}

export const ListPerson = (name: ListPersonName) => {
    return (
        <>
            <h1 className="text-center">{name.personName.first} {name.personName.last}</h1>
        </>
    )
}