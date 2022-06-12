import { H1, DEV, IMG, ITEM } from "./styles";
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const Component = ({ data }) => (
  <ITEM>
    <H1>Person List</H1>
    {data.title.map((item, index) => (
      <DEV key={index}>
        <IMG src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="Avatar" />
          <h4><b>{item.name}</b></h4> 
          <p>{item.jobTitle}</p>
          <p><span>Email:</span>&nbsp;{item.email}</p>
          <p><span>Phone:</span>&nbsp;{item.phone}</p>
       </DEV>
    ))}
  </ITEM>
)

const query = gql`
query name {
  title {
    name
    email
    phone
    jobTitle
    image
  }
}
`

export default graphql(query)(Component)
