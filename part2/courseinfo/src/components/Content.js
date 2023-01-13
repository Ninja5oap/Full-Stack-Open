import Part from '../components/Part'

const Content = ({parts}) => {
    return (
      <>
        {parts.map((item) => <Part part={item} key={item.id}/>)}
      </>
    )
}

export default Content