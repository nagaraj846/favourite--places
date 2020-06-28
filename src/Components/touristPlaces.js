import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { Row, Col, CardBody, Card } from 'reactstrap';

import placesAction from '../Actions/placesAction';

class TouristPlaces extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            places: []
         }
    }
    componentDidMount() {
        const { getPlaces } = this.props;
        getPlaces({}, (resp) => {
            this.setState({
                places: resp.data.places
            })
        })
    }
    render() { 
        const { places } = this.state;
        return ( 
            <React.Fragment>
                <h1 className="text-center p-3 bg-dark text-white">
                    Tourist Places
                </h1>
                {!places.length && <div className="text-center">
                    <h2 className="font-weight-bold m-4">
                        Loading ...
                    </h2>
                </div>}
                <div className="container">
                    <Row >
                        {places.map(place =>(
                            <Col lg="4" md="4" sm="12">
                                <Card className="m-2 bg-light">
                                    <CardBody>
                                        <h3 className="card-title">
                                            {place.name}
                                        </h3>
                                        <p>
                                            Location: {place.location}
                                        </p>
                                        <p>
                                        PIN Code: {place.pincode}
                                        </p>
                                        <p>
                                        <Link type="button" className="btn btn-primary btn-md" to={`/places/${place.id}`}>Know More</Link>
                                        </p>
                                        
                                    </CardBody>
                                </Card>
                            </Col>
                            
                        ))}
                    </Row>
                </div>
                 
            </React.Fragment>
           
         );
    }
}

export const mapDispatchToProps = dispatch => ({
    getPlaces: (payload, cb) => {
      dispatch(placesAction(payload, cb));
    }
  });
 
export default connect(null, mapDispatchToProps)(TouristPlaces);