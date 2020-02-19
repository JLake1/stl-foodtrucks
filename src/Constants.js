export const API_URL = 'http://localhost:8080'
export const JPA_API_URL = process.env.NODE_ENV == "PROD" ? 'https://stl-foodtrucks.herokuapp.com' : 'http://localhost:8080/jpa'