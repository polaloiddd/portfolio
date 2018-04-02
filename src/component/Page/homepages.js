import React , {Component} from 'react';
import {Carousel,footer} from 'react-bootstrap'
import image from '../../images/img33.jpg'
import image1 from '../../images/img44.jpg'
import image2 from '../../images/img55.jpg'

export default class homepages extends Component{
    render(){
        return(
            <div>
                <div className="jumbotron text-center">
                    <font color="#48d1cc"><h1>My Portfolio</h1></font>
                    <font size="4">Hi! Nice to meet you</font>
                </div>

                <div className={"col-md-3"}></div>
                <div className={"col-md-6"}>
                    <Carousel>
                        <Carousel.Item>
                            <img width={"100%"} src={image} />
                            <Carousel.Caption>
                                <h3>Call me ploy</h3>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={"100%"} src={image1} />
                            <Carousel.Caption>
                                <h3>Nice to meet you</h3>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={"100%"} src={image2} />
                            <Carousel.Caption>
                                <h3>Thank you</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <br/>

                    <div className="col-md-4">
                        <font color="#00BFFF"><h1>About Me</h1></font>
                        <h2>Name : Nawaporn Bunyawanit</h2>
                        <h2>Nickname : Ploy</h2>
                        <h2>Age : 22 years</h2>
                        <h2>Birthday : 22 July 1996</h2>
                        <br/><br/><br/><br/><br/><br/><br/><br/>

                    </div>
                    <div className="col-md-4">
                        <font color="#00BFFF"><h1>Education</h1></font>
                        <h2>University : </h2>
                        <h2>King Mongkut's Institute of Technology Ladkrabang</h2>

                    </div>
                    <div className="col-md-4">
                        <font color="#00BFFF"><h1>Contact</h1></font>
                        <h2>FB : <a href={"https://www.facebook.com/n.plutonian"} target={'_blank'}>fb.com/n.plutonion</a></h2>
                        <h2>Line : <a href={"http://line.me/ti/p/gG9UgoB2ys"} target={'_blank'}>ploynwp22</a></h2>
                        <h2>IG : <a href={"https://www.instagram.com/nawaployy/?hl=th"} target={'_blank'}>nawaployy</a></h2>
                        <h2>Email : 58050305@kmitl.ac.th</h2>
                        <h2>Tel : 0971562499</h2>
                    </div>
                </div>
                <div className={"col-md-3"}></div>
            </div>
        )

    }

}
