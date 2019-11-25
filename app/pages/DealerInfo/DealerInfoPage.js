import { fetchInsurances } from './actions';
import { connect } from 'react-redux';
import DealerInfo from 'containers/DealerInfo';

const mapStateToProps = state => ({
     insurances: state
})

const mapDispatchToProps = {
    fetchInsurances,
} 

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(DealerInfo)