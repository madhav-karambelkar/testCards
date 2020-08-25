import React,{useState} from 'react';
import { Card } from 'react-bootstrap';
import { Rnd } from 'react-rnd';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
const  TestRND =(props)=>
{
    let [state,setState] = useState(
      {
        width:'300px',
        height:'300px',
        x:0,
        y:0,
        innerX: window.innerHeight/2,
        innerY: window.innerWidth/2  
      }
    )
    //console.log("Card State",state)
    var innerCenter = 
    {
      innerX: window.innerHeight/2,
      innerY: window.innerWidth/2
    }
    //console.log("Inner CARD center h W", innerCenter.innerX , innerCenter.innerY,window.pageXOffset,window.pageYOffset);
    const onStop = (d_x,d_y) =>
    {
      var xDiff = d_x - innerCenter.innerX; 
	    var yDiff = d_y - innerCenter.innerY;
      var distance = Math.sqrt(xDiff*xDiff + yDiff*yDiff);
      setState({ x:  Math.abs(xDiff)  , y: Math.abs(yDiff), width: state.width,  height: state.height ,innerY:state.innerY,innerX:state.innerX})
      var heightInPX = state.height.match(/\d+/g);
      var widthInPX = state.width.match(/\d+/g);
      props.coordinate({
        x:d_x,
        y:d_y , 
        width: state.width,
        height:  parseInt(heightInPX[0]) ,
        width : parseInt(widthInPX[0]),
        old_y:state.y , 
        old_x:state.x,
        distance:distance,
        innerY:state.innerY,innerX:state.innerX
      })
      
    }
    return(
    <>
      
        
      <Rnd
        
        onDrag={(e,d)=>{onStop(d.x,d.y)}}
        onResize={(e, direction, ref, delta, position) => {
          setState({
            width: ref.style.width,
            height: ref.style.height,
            x: state.x, y: state.y,
            ...position,
            innerY:state.innerY,innerX:state.innerX
          });
        }}
        size={{ width: state.width,  height: state.height }}
        position={{ x: state.x, y: state.y }}
        onDragStop={(e, d) => { onStop(d.x,d.y) }}
        onResizeStop={(e, direction, ref, delta, position) => {
          setState({
            width: ref.style.width,
            height: ref.style.height,
            x: state.x, y: state.y,
            ...position,
            innerY:state.innerY,innerX:state.innerX
          });
        }}
      > 
         <Card border='dark' style={{width:state.width,height:state.height}} >
         
        <Card.Title >Title</Card.Title>
        sdsds
        <Card.Text>Text</Card.Text>
        <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
            erat a ante.{' '}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
        </Card>
        </Rnd>
         
        
     
    </>
    )
}
export default TestRND;
