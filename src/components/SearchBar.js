import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle} />
      <TextInput 
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder='Search'
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10,
    },
    inputStyle: {
        borderColor: 'black',
        flex: 1,
    },
    iconStyle: {
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 10,
    },
});

export default SearchBar