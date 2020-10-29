import React from 'react';
import { randomScale, randomItem } from '../exercises/random';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'

import "./Instructions.css"

class Instructions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            exercise: this.props.exercise,

            color: "#F52D11",

            scaleColors: [
                "#F52D11",
                "#DF1B33",
                "#EB4C10",
                "#F511A4",
                "#D10B8E",
            ],

            arpeggioColors: [
                "#4689E0",
                "#40C0F7",
                "#3EE6ED",
                "#405FF7",
                "#4F3EED",
            ]

        }
    }


    handleUpdate() {
        this.setState({
            exercise: randomScale(this.state.data[0].exercises.scales),
            color: randomItem(this.state.scaleColors) + " !important",
        })
    }

    render() {
        let text, info, color

        if (this.state.exercise.hasOwnProperty("scale")) {
            // It's a scale!
            text = this.state.exercise.scale

            info = Object.keys(this.state.exercise).filter(key => key !== "scale").map(key => {
                return <Col key={this.state.exercise[key]} >
                    <h6>{key.toUpperCase()}</h6>
                    <p>{this.state.exercise[key]}</p>
                </Col >
            })

        }

        return (
            <div className="Instructions" tabIndex="0" onClick={() => this.handleUpdate()} onKeyDown={() => this.handleUpdate()}>
                <Jumbotron style={{ backgroundColor: this.state.color }} className="Instructions-jumbotron">
                    <div>
                        <h5>SCALE</h5>
                        <h1>{text}</h1>
                    </div>
                </Jumbotron>
                <Row className="Instructions-info">
                    {info}
                </Row>
            </div >
        )
    }
}

export default Instructions