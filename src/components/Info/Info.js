import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import "./Info.css"

class Info extends Component {

    render() {
        return (
            <ReactBootStrap.Container className="top-space">
            
            
            <ReactBootStrap.Row className="justify-content-md-center" >
                <ReactBootStrap.Col><h1 class="info">Practical Information</h1>
                </ReactBootStrap.Col>
                </ReactBootStrap.Row>

           
                <ReactBootStrap.Container>
                <ReactBootStrap.Row>

                
                <ReactBootStrap.Col className="col-xs-10" style={{backgroundColor:"rgb(93, 188, 210)", marginLeft:'30px',
                padding: '10px', borderRadius:'15px', color:'white',textAlign:'center' }}><h5>About In The Garden</h5>
                <p>The platform  in the Garden  was created by Klangbox <br></br> on May 1, 2020 with the aim of brightening up <br></br> the daily lives of people ...</p>
                
               
                <ReactBootStrap.Button variant="primary" size="md">
                Learn More
                </ReactBootStrap.Button>{' '}
              
                </ReactBootStrap.Col>
             
                

          
                <ReactBootStrap.Col className="col-xs-10" style={{backgroundColor:"rgb(93, 188, 210)",
                padding: '10px',marginLeft:'30px',marginRight:'30px', borderRadius:'15px',color:'white',textAlign:'center' }}><h5>The Games Rules</h5>
                    <p>Some little information so that everything goes well during a musical performance in the Garden. .</p>
               
                    <ReactBootStrap.Button variant="primary" size="md">
                        Learn More
                        </ReactBootStrap.Button>{' '}

                </ReactBootStrap.Col>
                


                </ReactBootStrap.Row>
                </ReactBootStrap.Container>

                <ReactBootStrap.Row style={{marginTop:'50px' }}>
                
                <ReactBootStrap.Col className="col-xs-10" style={{backgroundColor:"	rgb(215, 11, 82)",
                padding: '5px',marginLeft:'30px',marginRight:'30px', borderRadius:'15px', color:'white' ,textAlign:'center' }}>
                    <h5>Our Musicians</h5>
                    <p>100% musiquality!</p>
               
                    <ReactBootStrap.Button variant="primary" size="md">
                        Learn More
                        </ReactBootStrap.Button>{' '}

                </ReactBootStrap.Col>

                <ReactBootStrap.Col className="col-xs-10" style={{backgroundColor:"	rgb(215, 11, 82)", 
                padding: '10px',marginLeft:'30px',marginRight:'30px', borderRadius:'15px', color:'white' ,textAlign:'center' }}>
                    <h5>FAQ</h5>
                    <p>Looking for useful information? Find out what our clients ask us most frequently</p>
               
                    <ReactBootStrap.Button variant="primary" size="md">
                        Learn More
                        </ReactBootStrap.Button>{' '}

                </ReactBootStrap.Col>
                </ReactBootStrap.Row>


                <ReactBootStrap.Row style={{marginTop:'50px', marginBottom:'100px' }}>
                <ReactBootStrap.Col className="col-xs-10" style={{backgroundColor:"	rgb(186, 218, 85)",
                padding: '10px',marginLeft:'30px',marginRight:'30px', borderRadius:'15px', color:'white' ,textAlign:'center' }}>
                    <h5>"Green" concerts</h5>
                    <p>After the "slow food" , <br></br>here is the "slow music" !</p>
               
                    <ReactBootStrap.Button variant="primary" size="md">
                        Learn More
                        </ReactBootStrap.Button>{' '}

                </ReactBootStrap.Col>

                <ReactBootStrap.Col className="col-xs-10" style={{backgroundColor:"	rgb(186, 218, 85)",
                padding: '10px',marginLeft:'30px',marginRight:'30px', borderRadius:'15px', color:'white' ,textAlign:'center' }}>
                    <h5>we are talking about it !</h5>
                    <p>TVs, radios, newspapers ... <br></br>Our interventions on traditional media </p>
               
                    <ReactBootStrap.Button variant="primary" size="md">
                        Learn More
                        </ReactBootStrap.Button>{' '}

                </ReactBootStrap.Col>
                </ReactBootStrap.Row>


            </ReactBootStrap.Container>

        )
    };
};

export default Info