import { View, TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native"
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useEffect, useState, useRef } from 'react';
import MapViewDirections from 'react-native-maps-directions';

import {
    requestForegroundPermissionsAsync,
    getCurrentPositionAsync,
    watchPositionAsync,
    LocationAccuracy
} from "expo-location";


import { mapskey } from "../../../utils/mapsKey";

import { Container } from "../../components/Container/Style"
import { InfoInput } from "../../components/Input/style"
import { Text } from "../../components/Text/style"
import { Title } from "../../components/Title/style"
import { DbLink } from "../../components/Link/style"

export function Local({ navigation }) {

    const mapReference = useRef()
    const [dark, setDark] = useState(false)
    const [initialPosition, setInitialPosition] = useState(null);
    const [finalPosition, setFinalPosition] = useState({
        latitude: -23.2447,
        longitude: -46.666
    })

    async function CapturarLocalizacao() {
        const { granted } = await requestForegroundPermissionsAsync();

        if (granted) {
            const currentPosition = await getCurrentPositionAsync()
            setInitialPosition(currentPosition)
            console.log(initialPosition)
        }
    }

    async function RecarregarVisualizacaoMapa() {
        if (mapReference.current && initialPosition) {
            await mapReference.current.fitToCoordinates(
                [
                    { latitude: initialPosition.coords.latitude, longitude: initialPosition.coords.longitude },
                    { latitude: finalPosition.latitude, longitude: finalPosition.longitude }
                ],
                {
                    edgePadding: { top: 60, right: 60, bottom: 60, left: 60 },
                    animated: true
                }
            );
        }
    }

    useEffect(() => {
        CapturarLocalizacao()

        watchPositionAsync({
            accuracy: LocationAccuracy.High,
            timeInterval: 1000,
            distanceInterval: 1
        }, async (response) => {
            await setInitialPosition(response)

            mapReference.current?.animateCamera({
                pitch: 60,
                center: response.coords
            })
        })
    }, [1000])

    useEffect(() => {
        RecarregarVisualizacaoMapa()
    }, [initialPosition])

    return (
        <>
            {
                initialPosition != null ?
                    (
                        <Container>
                            <MapView
                                ref={mapReference}
                                initialRegion={{
                                    latitude: initialPosition.coords.latitude,
                                    longitude: initialPosition.coords.longitude,
                                    latitudeDelta: 0.005,
                                    longitudeDelta: 0.005
                                }}
                                provider={PROVIDER_GOOGLE}
                                style={styles.map}
                                customMapStyle={grayMapStyle} >
                                <MapViewDirections
                                    origin={initialPosition.coords}
                                    destination={{
                                        latitude: finalPosition.latitude,
                                        longitude: finalPosition.longitude,
                                        latitudeDelta: 0.005,
                                        longitudeDelta: 0.005
                                    }}
                                    strokeWidth={10}
                                    strokeColor='#496BBA'

                                    apikey={mapskey} />
                                <Marker
                                    coordinate={{
                                        latitude: initialPosition.coords.latitude,
                                        longitude: initialPosition.coords.longitude,
                                    }}
                                    title='Exemplo de local'
                                    description='Qualquer lugar no meu mapa' />
                                <Marker
                                    pinColor="blue"
                                    coordinate={{
                                        latitude: finalPosition.latitude,
                                        longitude: finalPosition.longitude,
                                    }}
                                    title='Exemplo de local'
                                    description='Qualquer lugar no meu mapa' />
                            </MapView>
                            <Title>Clínica Natureh</Title>
                            <Text>São Paulo, SP</Text>
                            <Text fieldWidth="90%" textAlign="start" >Endereço</Text>
                            <InfoInput />
                            <View style={{ width: "90%", flexDirection: "row", gap: 32, marginTop: 20 }}>
                                <View style={{ flex: 1 }}>
                                    <Text textAlign="start" fieldWidth="100%">Número</Text>
                                    <InfoInput fieldWidth="100%*" />
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text textAlign="start" fieldWidth="100%">Bairro</Text>
                                    <InfoInput fieldWidth="100%" />
                                </View>
                            </View>
                            <View style={{ marginTop: 40 }}>
                                <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                                    <DbLink>Cancelar</DbLink>
                                </TouchableOpacity>
                            </View>
                        </Container >
                    )
                    :
                    (
                        <Container>
                            <Text>Localização não encontrada</Text>

                            <ActivityIndicator />
                        </Container>
                    )
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        flex: 1,
        width: "100%",
    },
});

const grayMapStyle = [
    {
        elementType: "geometry",
        stylers: [
            {
                color: "#E1E0E7",
            },
        ],
    },
    {
        elementType: "geometry.fill",
        stylers: [
            {
                saturation: -5,
            },
            {
                lightness: -5,
            },
        ],
    },
    {
        elementType: "labels.icon",
        stylers: [
            {
                visibility: "on",
            },
        ],
    },
    {
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#FBFBFB",
            },
        ],
    },
    {
        elementType: "labels.text.stroke",
        stylers: [
            {
                color: "#33303E",
            },
        ],
    },
    {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [
            {
                color: "#fbfbfb",
            },
        ],
    },
    {
        featureType: "administrative.country",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#fbfbfb",
            },
        ],
    },
    {
        featureType: "administrative.land_parcel",
        stylers: [
            {
                visibility: "on",
            },
        ],
    },
    {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#fbfbfb",
            },
        ],
    },
    {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#fbfbfb",
            },
        ],
    },
    {
        featureType: "poi.business",
        stylers: [
            {
                visibility: "on",
            },
        ],
    },
    {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
            {
                color: "#66DA9F",
            },
        ],
    },
    {
        featureType: "poi.park",
        elementType: "labels.text",
        stylers: [
            {
                visibility: "on",
            },
        ],
    },
    {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#fbfbfb",
            },
        ],
    },
    {
        featureType: "poi.park",
        elementType: "labels.text.stroke",
        stylers: [
            {
                color: "#1B1B1B",
            },
        ],
    },
    {
        featureType: "road",
        stylers: [
            {
                visibility: "on",
            },
        ],
    },
    {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#C6C5CE",
            },
        ],
    },
    {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#FBFBFB",
            },
        ],
    },
    {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
            {
                color: "#ACABB7",
            },
        ],
    },
    {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
            {
                color: "#8C8A97",
            },
        ],
    },
    {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [
            {
                color: "#8C8A97",
            },
        ],
    },
    {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#fbfbfb",
            },
        ],
    },
    {
        featureType: "transit",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#fbfbfb",
            },
        ],
    },
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [
            {
                color: "#8EA5D9",
            },
        ],
    },
    {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#fbfbfb",
            },
        ],
    },
];