import { View, Text, ActivityIndicator } from 'react-native'
import React, { useContext, useEffect } from 'react'
import {PeliculasContext} from '../../navigation/index'
import ghibliApi from '../../config/axiosGhibli'; // Configuración del endpoint

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
        <View>
            {peliculas.map((item: any, i: any) => {
                return <Text key={i}>Item </Text>
            })}
        </View>
    )
}

export default ListFilms