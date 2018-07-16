import {connect } from 'react-redux';
import { changeSelected } from '../actions';
import EntryList from '../components/EntryList';

const mapStateToProps = state => {
    return {
      entries: state.journal.entries.map(e => {
        return {
          title: e.title,
          key: e.key
      }}),
      selected: state.journal.selected
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickAction : key => {
      dispatch(changeSelected(key))
    }
  }
};

const Journal = connect(
  mapStateToProps,
  mapDispatchToProps
)(EntryList)

export default Journal;
