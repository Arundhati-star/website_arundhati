import React from 'react'
import Typography from '@material-ui/core/Typography';

function Partner() {
    return (
        <>
           <div style={{display:'flex',flexDirection:'column',backgroundColor:'#063970',height:'48vh'}}>
                 <Typography style={{color:'white',justifyContent:'center',marginLeft:'41vw',fontFamily:'sans-serif',marginTop:'8vh',fontWeight:'bold',fontSize:'1.5rem'}}>Partner & Associates</Typography>
               <div style={{display:'flex',}}>
                    <div style={{display:'flex',backgroundColor:'white',width:'4vw',height:'20vh',marginTop:'6vh',marginLeft:'2vw',marginRight:'15vw',marginBottom:'2vh'}}>
                        <img src="https://hicoder.in/assets/images/partner/1.jpg"/>
                        </div>
                          <div style={{display:'flex',backgroundColor:'white',width:'4vw',height:'20vh',marginTop:'6vh',marginLeft:'5vw',marginBottom:'2vh',marginRight:'15vw'}}>
                         <img src="https://hicoder.in/assets/images/partner/2.jpg"/>
                         </div>
                           <div style={{display:'flex',backgroundColor:'white',width:'4vw',height:'20vh',marginTop:'6vh',marginLeft:'5vw',marginBottom:'2vh',marginRight:'15vw'}}>

                          <img src="https://hicoder.in/assets/images/partner/3.jpg"/>
                          </div>
                            <div style={{display:'flex',backgroundColor:'white',width:'4vw',height:'20vh',marginTop:'6vh',marginLeft:'5vw',marginBottom:'2vh'}}>
                           <img src="https://hicoder.in/assets/images/partner/4.jpg"/>
                           </div>
                    </div>
               </div>
           
        </>
    )
}

export default Partner
