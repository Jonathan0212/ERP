function Actions({setComponent,component}) {
    const handleClick=(e)=>{
     if (component==="landing"){
         setComponent("login")
         return
     }
    }
      const navLinks = [{label:"About Me",name:"aboutMe"},{label:"Portfolio",name:"portfolio"},{label:"Contact",name:"contact"},{label:"Resume",name:"resume"}]
      return (
        <div className="navigation" >
       {component==="landing"&& <button type="button" class="btn btn-primary" onClick={handleClick}>Login</button>}
        </div>
      );
    }
    
    export default Actions;