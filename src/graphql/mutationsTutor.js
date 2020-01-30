import gql from 'graphql-tag'

export const horario = gql`query{
  getSheduleOfTutorByTutor(idTutor:"5e2e4cf32d44584a08522d13"){
    teacher{
      id
    }
    id
    hours{
      id
      state
    }
  }
}`

export const actualizar = gql`mutation updateStudent($student: StudentUpdate!, $id: ID!){
  updateStudent(id: $id, student: $student){
    code
    name
    fatherLastName
    motherLastName
    numberCellphone
    # isTutorado
  }
}`

export const activar = gql`mutation($idTutor: ID!, $idHour: ID!, $hour: HourUpdate) {
  activateHourOfTeacher(idTutor: $idTutor, idHour: $idHour, hour: $hour)
}
`