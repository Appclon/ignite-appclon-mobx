// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  row: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rightContainer:{
    flexDirection: 'column',
    padding: Metrics.baseSpace,
    alignItems: 'stretch',
    justifyContent: 'center',
    flex: 1,
  },
  imgContainer:{
    width: 60,
    paddingVertical: Metrics.baseSpace,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  image:{
    width: 50,
    height: 50,
    borderRadius: Metrics.baseRadius,
    borderWidth: Metrics.smallLine,
  },
  boldLabel: {
    fontWeight: 'bold',
    color: Colors.coal,
    textAlign: 'left',
    marginBottom: Metrics.smallMargin
  },
  label: {
    textAlign: 'left',
    color: Colors.fire
  }
})
