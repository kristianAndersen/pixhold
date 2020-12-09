import Status from 'http-status-codes';

// POST -> `http://localhost:3000/api/hello-world`
// with JSON payload {"name": "Geoffrey"}

export default (request, response) => {
  if (request.method !== 'POST') {
    return response.status(Status.BAD_REQUEST).send('');
  }
  const name = request?.body?.name ?? 'world';
  return response.json({
    data: `hello ${name}`,
  });
};