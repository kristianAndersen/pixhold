
// /api/hello?ph=250,340,333333

export default (req, res) => {

  res.setHeader("Content-Type", "image/svg+xml");
  
  const { ph = 'pix' } = req.query
  let ary = ph.split(",");

  let width=ary[0];
  let height=ary[1];
  let color=ary[2];
  let text=width+'X'+height;
 

let svg=`<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'>
<rect fill='#${color}' width='${width}' height='${height}'/>
<text fill='rgba(0,0,0,0.5)' font-family='sans-serif' font-size='10' dy='10.5' font-weight='bold' x='50%' y='50%' text-anchor='middle'>https://pixhold.vercel.app/
</text>
</svg>`

res.status(200).send(svg)

};
