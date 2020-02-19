import React,{Component} from 'react';


class Sushil extends  Component{
    sangamClick=()=>{
        console.log("hey");
        alert('hey there!');
    }

    render(){
        return(
            <div style={{display:'flex',flexDirection:'column',background:'black',justifyContent:'space-between',maxWidth:'500px',padding:'20px'}}>
                <div style={{background:'red',width:'100%'}} onClick={this.sangamClick}>
                    box1</div>
                <div style={{background:'yellow',width:'100%'}}>box2</div>
                <div style={{background:'green',width:'100%'}}>box3</div>                

            </div>
        )
    }
}
export default Sushil;