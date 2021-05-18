
function swDev(){
    if("serviceWorker" in navigator){
        window.addEventListener("load",()=>{
            navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/sw.js`).then(swReg=>{
                console.log("worker registered")
            }).catch(error =>{
                console.log("errrror")
            })
        })
    }
}

export default swDev
