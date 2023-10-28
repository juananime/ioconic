import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  movieListCell: {
    marginTop: 1,
    marginHorizontal: 20,
    backgroundColor: '#ececec',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  titleCell: {
    backgroundColor: '#b6ae86',
    flex: 0.5,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  synopsysCell: {
    backgroundColor: '#86b6a5',
    flex: 0.5,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  rateCell: {
    backgroundColor: '#a686b6',
    flex: 0.5,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});

const addNewMoviewStyles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#ececec',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
});
export {styles, addNewMoviewStyles};
