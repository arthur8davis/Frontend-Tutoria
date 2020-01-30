import gql from 'graphql-tag'

export const añadir = gql`mutation addTeacher($teacher: TeacherInput!){
    addTeacher(teacher: $teacher) {
      id,
      code,
      name,
      fatherLastName,
      motherLastName,
      numberCellphone,
      isTutor
      }
  }`

export const actualizar = gql`mutation updateTeacher($teacher: TeacherUpdate!, $id: ID!){
    updateTeacher(id: $id, teacher: $teacher){
      code
      name
      fatherLastName
      motherLastName
      numberCellphone
    }
  }`

export const eliminar = gql`mutation removeTeacher($id: ID!){
    removeTeacher(id: $id)
  }`

// export const asignar = gql`mutation addStudentToTeacher($idTeacher: ID!, $idStudent: ID!){
//     addStudentToTeacher(idTeacher: $idTeacher, idStudent: $idStudent)  {
//       name
//     }
// }`

export const asignar = gql`mutation updateTeacher($teacher: TeacherUpdate!, $id: ID!){
  updateTeacher(id: $id, teacher: $teacher){
    code
    name
    fatherLastName
    motherLastName
    numberCellphone
    isTutor
  }
}`