import React,{useEffect} from 'react'

function useDocumentTitle(count) {
    useEffect(()=>{
        document.title="counting the title" + count;
    }, [count])
    
}

export default useDocumentTitle