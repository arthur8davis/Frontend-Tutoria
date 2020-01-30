import gql from 'graphql-tag'

export const consulta = gql`query {
    students {
      id,
      code,
      name,
      fatherLastName,
      motherLastName,
      numberCellphone,
      isTutorado
    }
  }`

export const alum = gql`query student($code: String){
  student(code: $code){
    id
    code
    name
    fatherLastName
    motherLastName
    numberCellphone
    isTutorado
  }
}`

export const consulta1 = gql`query{
  teachers{
    id
    name
    code
    fatherLastName
    motherLastName
    numberCellphone
    isTutor
    tutorados{
      id
      code
      name
      fatherLastName
      motherLastName
      numberCellphone
      isTutorado
    }
  }
}`