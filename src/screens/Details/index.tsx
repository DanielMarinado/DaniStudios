import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { IFilmItem } from '../../interfaces/appInterfaces'

const width = Dimensions.get('window').width;

const Index = ({route}: any) => {
  const {film}: IFilmItem = route.params;

  return (
    <SafeAreaView>
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            {/* Title in Orange */}
            <View style={{...styles.sombras}}>
                <Text style={{...styles.titulo}}>
                    <Text style={styles.tituloBold}>{film.title.substring(0,1)}</Text>
                    <Text style={styles.tituloTwo}>{film.title.substring(1)}</Text>
                </Text>
            </View>

            {/* Image */}
            <View style={styles.imgContainer}>
                <Image
                    source={{uri: film?.image}}
                    style={styles.img}
                />
            </View>

            {/* Title & Description */}
            <View style={{...styles.textContainer}}>
                <Text style={styles.txtTitle}>{film.title}</Text>
                <Text style={styles.txtOriginalTitle}>{film.original_title}</Text>
                <Text style={styles.txtDescription}>{film.description}</Text>
            </View>

            {/* Director Producer */}
            <View style={styles.creditsContainer}>
                <View style={{...styles.textContainer, marginTop: 10, flex:1}}>
                    <Text style={styles.txtTitle}>Director</Text>
                    <Text style={styles.txtOriginalTitle}>{film.director}</Text>
                </View>

                <View style={{...styles.textContainer, marginTop: 10 ,flex: 1}}>
                    <Text style={styles.txtTitle}>Producer</Text>
                    <Text style={styles.txtOriginalTitle}>{film.producer}</Text>
                </View>
            </View>

            {/* Rating & Year */}
            <View style={styles.creditsContainer}>
                <View style={{...styles.textContainer, marginTop: 10, flex:1}}>
                    <Text style={styles.txtTitle}>Year</Text>
                    <Text style={styles.txtOriginalTitle}>{film.release_date}</Text>
                </View>

                <View style={{...styles.textContainer, marginTop: 10 ,flex: 1}}>
                    <Text style={styles.txtTitle}>Rating</Text>
                    <Text style={styles.txtOriginalTitle}>{film.rt_score}★</Text>
                </View>
            </View>

            <View style={{...styles.textContainer, marginVertical: 10}}>
                <Text style={styles.txtTitle}>Movie Banner</Text>
            </View>

            <View>
                <Image
                    source={{uri: film.movie_banner}}
                    style={styles.imgMovie}
                />
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    creditsContainer: {
        flexDirection: 'row', 
        flex: 1, 
        marginHorizontal: 30, 
        marginTop: 10
    },
    txtTitle: {
        fontWeight: 'bold',
    },
    txtOriginalTitle: {
        marginBottom: 10,
    },
    txtDescription: {
        marginHorizontal: 30, 
        textAlign: 'justify',
    },
    textContainer: {
        alignItems: 'center',
    },
    titulo: {
        textAlign: 'center',
        fontSize: 20,
        color: "black",
        padding: 10,
        borderRadius: 10,
        margin: 7,
        marginHorizontal: 20,
    },
    tituloBold: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    tituloTwo: {
        color: 'white',
    },
    sombras: {
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        backgroundColor: '#F6972A',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    img: {
        resizeMode: 'contain', 
        flex: 1,
        aspectRatio: 1,

    },
    imgMovie: {
        flex: 1,
        aspectRatio: 1,
        marginHorizontal: 30,
    },
    imgContainer: {
        marginVertical: 10,
        flexDirection: 'row',
    },
});

export default Index