export const SAMPLE_ENDPOINT = ({ id }) => ({
  url: `https://jsonplaceholder.typicode.com/todos/${id}`,
  method: 'GET'
})
