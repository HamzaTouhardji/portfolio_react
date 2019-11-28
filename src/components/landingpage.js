import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import avatar from './avatar.jpg';

class Landing extends Component{
    render(){
        return(
            <div style= {{width:'100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src={avatar}
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>TOUHARDJI Hamza</h1>
                        <hr/> 
                        <p>HTML/CSS | JavaScript | React | PHP | Java | Python</p>
                        <div className="social-links">

                            {/* Linkedin*/}
                            <a href="https://www.linkedin.com/in/hamza-touhardji-8a6b83174/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                            </a>

                            {/* Github*/}
                            <a href="https://github.com/HamzaTouhardji" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"/>
                            </a>

                            {/* instagram*/}
                            <a href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-instagram" aria-hidden="true"/>
                            </a>
                        </div>
                        </div>
                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;