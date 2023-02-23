

const learners = ['ray', 'ingrid', 'woryeneh', 'veronica', 'jayda', 'soha', 'cheyenne']

function List() {
    return (
        <>
            {learners.map((student, index) =>
                <h2>
                    {student}
                </h2>
            )}
        </>
    )
}

export default List;