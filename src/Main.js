import React, { Component } from 'react'
import { Button } from 'reactstrap';
import Fade from 'react-reveal/Fade'; // Importing Zoom effect
import { Container, Row, Col } from 'reactstrap'; //for row & column
import Iframe from 'react-iframe'   //for the map
import { FiFacebook, FiInstagram, FiLinkedin,FiGithub } from "react-icons/fi"; //icons

import { NavLink, Link } from 'react-router-dom'

import './styles/Main.scss'
import Axios from 'axios';
import moment from 'moment';


const Space = () => <div className="space"></div>



export default class Main extends Component {


        constructor(props){
            super();
            this.getAchievements()
            this.getNews()
            this.state= {
                Achivements:[{name:'loading'},{name:'loading'},{name:'loading'},{name:'loading'}], //initial loading for the achievements,,
                news:[]
            }
            
        }


    getAchievements = () => {
        Axios.get('http://localhost:5000/api/achievements/achievements').then(e => {
            console.log(e.data)
            this.setState({ Achivements: e.data })
            // this.setState({loading:false})

        })
    }
    
    getNews = () => {
        Axios.get('http://localhost:5000/api/newsapi/news').then(e => {
            console.log(e.data)
            this.setState({ news: e.data })
            // this.setState({loading:false})
        })
    }

    render() {
        return (
            <div className="main">

                <Space />

                <Fade>
                    <Container className="container fi" id="start">

                        <Row>
                            <Col className="title">01 OUR MISSION</Col>
                        </Row>
                        <Row>
                            <Col>We believe everyone has the capacity to be creative. Next Tech Lab is a
                            place where people use design to develop their own creative potential . Yes, we
                            need to come up with a better mission statement.
                        </Col>
                        </Row>
                    </Container>
                </Fade>


                <Container className="container">
                    <Fade>
                        <Row>
                            <Col className="title">02 RESEARCH GROUPS</Col>
                        </Row><Space />
                        <Row>
                            <Col xs="6">
                                <div className='imgg'>
                                    <img src={'./images/minsky.png'} width='100%' />
                                </div>
                            </Col>
                            <Col xs="5">
                                <h3>McCarthy Lab</h3>
                                <i><h6>Artificial Intelligence</h6></i>
                                Understanding and creating agents that exhibit “intelligence” to solve complex real-world problems in the realm of computational, cognitive and information science.
.<br /> <br />
                            </Col>
                        </Row>
                    </Fade>

                    <Space />
                    <Space />


                    <Fade>
                        <Row>
                            <Col xs="1"></Col>
                            <Col xs="5">
                                <h3>Pausch Lab</h3>
                                <i><h6>Extended Reality</h6></i>

                                Defining the interfaces of the future with the help of immersive technologies.<br /> <br />

                            </Col>

                            <Col xs="5">
                                <div className='imgg'>
                                    <img src={'./images/pausch.png'} width='120%' />
                                </div>
                            </Col>

                        </Row>
                    </Fade>

                    <Space />
                    <Space />
                    <Fade>
                        <Row>
                            <Col xs="6">
                                <div className='imgg'>
                                    <img src={'./images/satoshi.png'} width='100%' />
                                </div>
                            </Col>
                            <Col xs="5">
                                <h3>Satoshi Lab</h3>
                                <i><h6>Blockchain and Cryptography

</h6></i>

                                Focusing on blockchain protocol analysis, security and development of decentralized applications using frameworks like Ethereum and Hyperledger.
<br /> <br />

                            </Col>
                        </Row>
                    </Fade>


                    <Space />
                    <Space />


                    <Fade>
                        <Row>
                            <Col xs="1"></Col>
                            <Col xs="5">
                                <h3>Tesla Lab</h3>
                                <i><h6>Internet of Things, Electrical System

</h6></i>

Working on cutting edge technology, connecting multiple device, appliances, electronics and other ‘things’ to proliferate the standards of day-to-day life.Researching on Smart Grids and load forecasting to improve transmission system and decrease power losses.Working on cutting edge technology, connecting multiple device, appliances, electronics and other ‘things’ to proliferate the standards of day-to-day life.

                                <br /> <br />

                            </Col>

                            <Col xs="5">
                                <div className='imgg'>
                                    <img src={'./images/iot.png'} width='120%' />
                                </div>
                            </Col>

                        </Row>
                    </Fade>



                    <Space />
                    <Space />

                </Container>

                <Fade>
                    <Container className="container fi">

                        <Row>
                            <Col className="title">03 NEWS FLASH</Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className='news'>

                                    {this.state.news.slice(0, 6).map((v, k) => {
                                        return (
                                            <div className="items">
                                                <div className="t"> {v.description} </div>
                                                <div className="d">{moment(v.date).format('MMM DD YYYY')}</div>
                                            </div>
                                        )
                                    })}

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Fade>



                <Fade>
                    <Container className="container fi">

                        <Row>
                            <Col className="title">04 ACHIEVEMENTS</Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <div className='gallery'>

                                    <div class="column">

                                    
                                        <div className="imageContainer">
                                            <div className="t2">{this.state.Achivements[0].name}</div>
                                            <div className="t3">{this.state.Achivements[0].description}</div>
                                            <div className='_time'> {moment(this.state.Achivements[0].date).format('MMMM YY')}</div>
                                            <div className="imgFlex">
                                                <img src={this.state.Achivements[0].imageUrl} width={'100%'} /></div>
                                        </div>

           
                                        <div className="imageContainer">
                                            <div className="t2">{this.state.Achivements[2].name}</div>
                                            <div className="t3">{this.state.Achivements[2].description}</div>
                                            <div className='_time'> {moment(this.state.Achivements[2].date).format('MMMM YY')}</div>
                                            <div className="imgFlex">
                                                <img src={this.state.Achivements[2].imageUrl} width={'100%'} /></div>
                                        </div>

                                    </div>


                                    <div class="column">


                                        
                                    <div className="imageContainer">
                                            <div className="t2">{this.state.Achivements[1].name}</div>
                                            <div className="t3">{this.state.Achivements[1].description}</div>
                                            <div className='_time'> {moment(this.state.Achivements[1].date).format('MMMM YY')}</div>
                                            <div className="imgFlex">
                                                <img src={this.state.Achivements[1].imageUrl} width={'100%'} /></div>
                                        </div>


                                       
                                    
                                        <div className="imageContainer">
                                            <div className="t2">{this.state.Achivements[3].name}</div>
                                            <div className="t3">{this.state.Achivements[3].description}</div>
                                            <div className='_time'> {moment(this.state.Achivements[3].date).format('MMMM YY')}</div>
                                            <div className="imgFlex">
                                                <img src={this.state.Achivements[3].imageUrl} width={'100%'} /></div>
                                        </div>
           
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <NavLink to="/achievements">  <Button className="center" outline color="primary" >READ MORE</Button></NavLink>{' '}

                    </Container>
                </Fade>
                <Fade>
                    <Container id="reach" className="container">
                        <Row>
                            <Col className="title">06 Contact</Col>
                        </Row>
                        <Row>
                            <Col sm="6">
                                <Iframe url="https://maps.google.com/maps?q=next%20tech%20lab&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="450px"
                                    id="myId"
                                    frameBorder="0"
                                    className="myClassname"
                                    display="initial"
                                    position="relative" />

                            </Col>
                            <Col sm="1"></Col>
                            <Col sm="4" className="contact">
                                    <br></br>
                                    <div className="title">JOIN US</div>
                                    <div>We conduct recruitments every semester. Message our Facebook page to apply</div>
                                    <br/>
                                    <br/>
                                    <div className="title">ADDRESS</div>
                                    <div>UB-706, University Building, SRM Institute of Science and Technology, Kattankulathur - 603203</div>
                                    <br/>
                                    <br/>
                                    <div className="title">EMAIL</div>
                                    <div>info@nextech.io</div>
                                    <br/>
                                    <div className="contactIcon"> 
                                        <a style={{color:'#212529'}} href="https://www.facebook.com/NextTechSRM/" target="_blank"><FiFacebook size={30}/></a>
                                        <a style={{color:'#212529'}} href="https://www.instagram.com/nexttechlab/" target="_blank"><FiInstagram size={30}/></a>
                                        <a style={{color:'#212529'}} href="https://www.linkedin.com/company/next-tech-lab/about/" target="_blank"><FiLinkedin size={30}/></a>
                                        <a style={{color:'#212529'}} href="https://github.com/NextTechLab" target="_blank"><FiGithub size={30}/></a>
                                    </div>
                            </Col>
                        </Row>
                    </Container>
                </Fade>

<img src={'./next-tech-logo.png'} className="flogo"/>
<div className="copyright">© 2019 Next Tech Lab</div>

            </div>
        )
    }
}
