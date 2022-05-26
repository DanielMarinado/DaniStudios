import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React, { useContext, useEffect } from 'react'
import {PeliculasContext} from '../../navigation/index'
import ghibliApi from '../../config/axiosGhibli'; // Configuración del endpoint
import FilmItem from '../FilmItem';

const ListFilms = () => {
    const {peliculas, setPeliculas}: any = useContext(PeliculasContext)

    const cargaPeliculas = async () => {
        try {
            const pelis = await ghibliApi.get('films')
            const res = await pelis.data;
            setPeliculas(res);
        } catch (error) {
            console.error(error);
        }
    }
    
    useEffect(() => {
        cargaPeliculas();
    }, [])

    if(peliculas.length<=0) return <ActivityIndicator size={'large'} style={{padding: 20}} />; 
    
    return (
        <View style={{alignItems: 'center'}}>
            <FlatList
                numColumns={2}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={peliculas}
                renderItem={({item, index})=><FilmItem key={index} film={item} /> }
                keyExtractor={item => item.id}
                ListFooterComponent={
                <View style={{
                    backgroundColor: 'black',
                    width: '100%',
                    minHeight: 180,
                    marginHorizontal: 2,
                }}>
                    <Text style={{color: 'white', textAlign: 'center', marginHorizontal: 2 ,marginVertical : 2}}>.::DaniSoft::. ||| 2022</Text>
                </View>}
            />
        </View>
    )
}

export default ListFilms