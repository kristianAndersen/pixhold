import Status from 'http-status-codes';

// GET -> http://localhost:3000/api/hello?name=Geoffrey

export default (request, response) => {
  if (request.method !== 'GET') {
    return response.status(Status.BAD_REQUEST).send('');
  }
  const name = request?.query?.name ?? 'world';
  return response.json({
    data: `hello ${name}`,
  });
};
