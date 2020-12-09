
//api/hello?name=Geoffrey

export default (req, res) => {
  const { name = 'World' } = req.query
  res.status(200).send(`Hello ${name}!`)
};
