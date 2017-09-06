import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { adventureActions } from '../ducks/adventure';
import Main from '../components/Main'

export default connect(
  (state, props) => {
    return {
      adventure: state.adventure,
    }
  },
  dispatch => bindActionCreators({
    adventureActions
  }, dispatch)
)(Main)
