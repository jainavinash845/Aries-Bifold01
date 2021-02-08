import React from 'react'

import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
    mainView: {
        alignSelf: 'stretch',
        flex: 1,
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#fff',
    },
    viewFull: {
        height: '100%',
    },
    messageBox: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 25,
    },
    h1: {
        fontSize: 36,
    },
    h2: {
        fontSize: 28,
    },
    h3: {
        fontSize: 22,
        textAlign: 'center',
    },
    textUpper: {
        textTransform: 'uppercase',
    },
    textWhite: {
        color: '#fff',
    },
    textGrayDark: {
        color: '#111'
    },
    textGreen: {
        color: '#388e48',
    },
    textBlueDark: {
        color: '#0A1C40',
    },
    textRedDark: {
        color: '#5c0e0e'
    },
    textCenter: {
        textAlign: 'center',
    },
    textBold: {
        fontWeight: 'bold',
    },
    header: {
        height: '28%',
        justifyContent: 'center',
    },
    tab: {
        alignItems: 'center',
        flex: 1,
    },
    pinTab: {
        alignItems: 'center',
        backgroundColor: '#f4c257',
        height: '100%'
    },
    formLabel: {
        height: 46,
        width: 150,
        borderStyle: 'solid',
        borderWidth: 2,
        textAlign: 'center',
        borderColor: '#000',
        backgroundColor: '#fff',
        fontSize: 22,
        letterSpacing: 12,
        color: '#000',
    },
    formLabelFocused: {
        borderColor: '#388e48',
        borderWidth: 3,
    },
    button: {
        marginVertical: 7,
        minWidth: 150,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {height: 2, width: 2},
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonGreen: {
        backgroundColor: '#388e48',
    },
    buttonRed: {
        backgroundColor: '#5c0e0e',
    },
    buttonBlue: {
        backgroundColor: '#0A1C40',
    },
    whiteTab: {
        backgroundColor: '#fff',
        width: '100%',
        paddingVertical: 10,
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    tableItem: {
        borderBottomWidth: 1.2,
        borderColor: '#0A1C40',
        height: 80,
        width: '115%',
        padding: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    arrow: {
        height: 26,
        width: 48,
    },
    rotate90: {
        transform: [{ rotate: '90deg'}]
    }
})

export default Styles
