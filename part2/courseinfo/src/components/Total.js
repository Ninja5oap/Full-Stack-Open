const Total = ({parts}) => {
    return (
      <p><b>Total of {parts.reduce((previousSum, currentSum) => previousSum + currentSum.exercises, 0)} exercises</b></p>
    )
}

export default Total