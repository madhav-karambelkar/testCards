import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TestRND from './TestCards/TestRND';
import CardDND from './TestCards/TestDND';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
function App() {
  let [state,setState] = useState({data : {}});
  console.log("APP X & Y",state);
  const onStop = (data) =>
  {
    setState({data:data});
  }
  console.log("Inner h W", window.innerHeight,window.innerWidth);
  return (
  <>
  <div className="App" ref={el => {
        if (!el) return;
//        console.log("CONDITION",((state.data.y+state.data.height)>window.innerHeight || (state.data.x+state.data.width)>window.innerWidth))
        if(state!= null && ((state.data.y+state.data.height)>window.innerHeight || (state.data.x+state.data.width)>window.innerWidth))
        {
          window.innerHeight = window.innerHeight + state.data.height;
          el.style.height = `${window.innerHeight}px`
          window.innerWidth = window.innerWidth + state.data.width;
          el.style.width = `${window.innerWidth}px`
          //-------- Scroll on CO-ordinate -----
          //window.scroll(state.data.x,state.data.y);          
        }
        
        if(window.innerHeight >801 && window.innerWidth >1053 && (state.data.old_y >= state.data.y && state.data.old_x >= state.data.x) )
        { 
          window.innerHeight = window.innerHeight - state.data.height;
          el.style.height = `${window.innerHeight}px`
          window.innerWidth = window.innerWidth - state.data.width;
          el.style.width = `${window.innerWidth}px`      
        }
        else 
        {
          el.style.height = `${window.innerHeight}px`;
          el.style.width = `${window.innerWidth}px`
        }
      }}
  >
    sew
    <TestRND coordinate={onStop.bind(this)} />
    <TestRND coordinate={onStop.bind(this)} />
        </div>
  </>
  );
}

export default App;
/**
 *         //console.log("Inner h W", window.innerHeight,window.innerWidth);
        //console.log("Outer h w", window.outerHeight,window.outerWidth)

 * <TransformWrapper 
    defaultScale={1}
    defaultPositionX={200}
    defaultPositionY={100} 
    >
       {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
         <React.Fragment>
         <div className="tools">
           <button onClick={zoomIn}>+</button>
           <button onClick={zoomOut}>-</button>
           <button onClick={resetTransform}>x</button>
         </div>
         <TransformComponent >
           jjksa
    <TestRND />
    
    </TransformComponent>
       </React.Fragment>
       )}
      </TransformWrapper>
 */