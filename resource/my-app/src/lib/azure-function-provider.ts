const fetchGET = async (url: string, method: string, body: any) => {
  const response = fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return response;//response.json();
}

export {fetchGET};