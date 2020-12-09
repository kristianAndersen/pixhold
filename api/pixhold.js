const  fabric = require('fabric').fabric;

let fcanvas = new fabric.StaticCanvas(null, {width:200,height:200});




module.exports = async (req, res) => {

    const { name = 'World' } = req.query
    res.status(200).send(`Hello ${name}!`)
    
  /*  

    var placeholder = new fabric.Rect({
        name:placeholder,
        hasControls: false,
        selectable : false,
        left: 0,
        top: 0,
        fill: '#a0d323',
        width: 590,
        height: 222
    });
    
    fcanvas.add(placeholder);


    let svgoutput = fcanvas.toSVG();

   
    
   res.send(`Hello ${req.body}, you just parsed the request body!`)
*/
};