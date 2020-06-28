import React, { Component } from 'react'
import { connect } from 'react-redux';
import { CardBody, Card } from 'reactstrap';
import placeInfoAction from '../Actions/placeInfoAction';

class TouristPlaceDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            placeInfo: []
         }
    }

    componentDidMount() {
        const { getPlaceInfo, match: { params: { id } } } = this.props;
        getPlaceInfo({id}, (resp) => {
            console.log(resp.data)
            this.setState({
                placeInfo: resp.data
            })
        })
    }

    render() {
        const {placeInfo} = this.state;
        return (
            <div>
                {placeInfo.map(placeInfo=>(
                    <Card className="m-2">
                        <CardBody>
                            <h1 className="mb-2">
                                {placeInfo.name}
                            </h1>
                            <div>
                                <img className="img-fluid" src={placeInfo.cover} alt={placeInfo.name} />
                                <p className="text-md-left text-center text-secondary mt-4">
                                    {placeInfo.official_description}
                                </p>
                            </div>
                            <p>
                                Location: {placeInfo.location}
                            </p>
                            <p>
                            PIN Code: {placeInfo.pincode}
                            </p>
                            
                        </CardBody>
                    </Card>
                ))}
            </div>
        )
    }
}

export const mapDispatchToProps = dispatch => ({
    getPlaceInfo: (payload, cb) => {
      dispatch(placeInfoAction(payload, cb));
    }
  });
 
export default connect(null, mapDispatchToProps)(TouristPlaceDetails);
