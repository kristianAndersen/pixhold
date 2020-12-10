
// /api/hello?ph=250,340,333333,wasup

export default (req, res) => {

  const { ph = 'pix' } = req.query
  let ary = ph.split(",");

  let width=ary[0];
  let height=ary[1];
  let color=ary[2];
  let text=width+'X'+height;
 
  let tx=width/2;
  let ty=height/2;


let svg=`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect fill="${color}" width="${width}" height="${height}"/>
  <text fill="rgba(0,0,0,0.5)" font-family="sans-serif" font-size="10" dy="10.5" font-weight="bold" x="50%" y="50%" text-anchor="middle">${text}</text>
</svg>`


const cleaned = svg
  .replace(/[\t\n\r]/gim, '') // Strip newlines and tabs
  .replace(/\s\s+/g, ' ') // Condense multiple spaces
  .replace(/'/gim, '\\i'); // Normalize quotes

const encoded = encodeURIComponent(cleaned)
  .replace(/\(/g, '%28') // Encode brackets
  .replace(/\)/g, '%29');

let cleansvg=`data:image/svg+xml;charset=UTF-8,${encoded}`;

  
res.status(200, {'content-type':'text/html'}).send(cleansvg)


};
