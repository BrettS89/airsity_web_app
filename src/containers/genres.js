import { connect } from 'react-redux';
import Genres from '../components/genres';
import { setGenre } from '../store/actions/songActions';
import { setPage } from '../store/actions/navActions';

export default connect(null, { setGenre, setPage })(Genres);
