import gql from 'graphql-tag'

export const horario = gql`query{
  getSheduleOfTutorByStudent(
    idStudent: "5e2e53cd2d44584a085230b4"
  ){
    id
    hours{
      id
      state
      time
    }
  }
}`