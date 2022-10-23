import React from 'react';
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.text());

function useBackend (name) {
  const { data, error } = useSWR(`/api/HttpTrigger1?name=${name}`, fetcher)

  return {
    message: data,
    isLoading: !error && !data,
    isError: error
  }
}

function App() {
  const value = 'World';
  const data = useBackend('iwate');

  if (data.isLoading)
    return <div>Now Loading...</div>;
  
  if (data.isError)
    return <div>An error occurred.</div>
  
  return <div>Hello {data.message}</div>;
}

export default App;
