import * as React from 'react';
import {FlatList, GestureResponderEvent, StyleSheet, View, Text} from 'react-native';
import CalculatorCategoryWidget from "../components/calculator/CalculatorCategoryWidget";
import {CATEGORIES} from "../components/calculator/CalculatorCategories";


export default function MetricScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Choose metric</Text>
            <FlatList
                style={{width: "100%"}}
                data={CATEGORIES}
                renderItem={({item}) => {
                    item.onTouchHandler = (e: GestureResponderEvent) => {
                        navigation.navigate("Calculator",
                            {
                                id: item.id
                            })
                    }
                    return (<CalculatorCategoryWidget {...item}/>)
                }}
                keyExtractor={item => item.component.getName()}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
    }
});
