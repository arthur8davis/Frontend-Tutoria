import gql from 'graphql-tag'

export const consulta = gql`query{
  user(dni:"12345678"){
    roles{
      name
    }
  }
}`

export const connect = gql`mutation updateUser($user: UserInput!, $id: ID!){
  updateUser(id: $id, user: $user){
    dni,
    photo,
    nick,
    email,
    names,
    ln,
    mln,
    connect
  }
}`

export const usuarios = gql`query{
  users{
    connect
    dni
    email
    ln
    mln
    names
    nick
    photo
    roles{
      name
    }
  }
}
`