import Landing from '../components/landing';
import { connect } from 'react-redux';
import { setPage } from '../store/actions/navActions';

export default connect(null, { setPage })(Landing);
