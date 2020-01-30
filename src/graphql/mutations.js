import gql from 'graphql-tag'

export const agregar = gql`mutation addStudent($student: StudentInput!){
    addStudent(student: $student) {
      id,
      code,
      name,
      fatherLastName,
      motherLastName,
      numberCellphone
      isTutorado
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

export const eliminar = gql`mutation removeStudent($id: ID!){
    removeStudent(id: $id)
  }`

export const asignar = gql`mutation addStudentToTeacher($idTeacher: ID!, $idStudent: ID!){
    addStudentToTeacher(idTeacher: $idTeacher, idStudent: $idStudent){
      name
    }  
}`

export const subirPlan = gql`mutation addMentorPlanToCoordinator($idCoordinator: ID!, $mentoringPlan: MentoringPlanInput!){
    addMentorPlanToCoordinator(idCoordinator: $idCoordinator, mentoringPlan: $mentoringPlan){
      description
      url
    }
}`
export const cambioTutor= gql`mutation addChangeRequestToStudent($idStudent: ID!, $changeRequest: ChangeRequestInput!){
  addChangeRequestToStudent(idStudent: $idStudent, changeRequest: $changeRequest){
    reason
  }
}`