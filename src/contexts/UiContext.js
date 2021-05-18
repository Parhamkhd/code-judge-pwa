import {createContext, useState, useEffect,useLayoutEffect} from 'react';


export const UiContext = createContext({});


export const UiProvider = (props)=>{
  
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setisMobile] = useState(window.innerWidth < 992);

  useLayoutEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

useEffect(() => {
    if(width < 1200){
        setisMobile(true)
    }else{
        setisMobile(false)
    }
}, [width]);
    return(
        <UiContext.Provider value={{isMobile}}>
            {props.children}
        </UiContext.Provider>
    )
}