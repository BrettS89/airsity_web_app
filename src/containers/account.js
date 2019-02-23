import { connect } from 'react-redux';
import Account from '../components/account';
import { setPage } from '../store/actions/navActions';

export default connect(null, { setPage })(Account);
