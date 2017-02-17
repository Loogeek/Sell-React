import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'app/actions/index';

function mapStateToProps(state) {
    return state;
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

export default () => target => connect(mapStateToProps, mapDispatchToProps)(target);
