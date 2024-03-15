import { StatusBar } from 'expo-status-bar';
import { Image, Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Camera } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import * as MediaLibrary from "expo-media-library"
import { AntDesign } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';


export function CameraModal({ visible, setUriCameraCapture, setShowCameraModal }) {

    /*
      1 - Quando salvar a foto e clicar na lixeira - remover a galeria
      4 - Capturar e salvar video 
    */
    const [tipoCamera, setTipoCamera] = useState(true)
    const [openModal, setOpenModal] = useState(false)
    const [photo, setPhoto] = useState(null)
    const [flashMode, setFlashMode] = useState(true)

    useEffect(() => {
        (async () => {
            const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync()

            const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync()
        })();
    }, [])

    const cameraRef = useRef(null)

    async function CapturePhoto() {
        if (cameraRef) {
            const photo = await cameraRef.current.takePictureAsync()
            setPhoto(photo.uri)

            setOpenModal(true)
        }
    }

    function FlashPhoto() {
        setFlashMode(!flashMode)
        console.log(flashMode)
    }

    async function UploadPhoto() {
        await MediaLibrary.createAssetAsync(photo)
            .then(() => {
                alert("Foto salva com sucesso")
            }).catch(error => {
                alert("Não foi possivel processar a foto")
            })

        setOpenModal(false)
    }

    function ClearPhoto() {
        MediaLibrary.deleteAssetsAsync(photo)

        setPhoto(null)

        setOpenModal(false)
    }

    return (
        <Modal visible={visible} transparent>
            <View style={styles.container}>
                <View style={styles.cameraContainer}>
                    <Camera
                        ref={cameraRef}
                        style={styles.camera}
                        ratio='16:9'
                        type={tipoCamera ? "back" : "front"}
                        flashMode={flashMode ? "on" : "off"}
                    >
                        <TouchableOpacity style={{ margin: 40 }} onPress={() => setShowCameraModal(false)}>
                            <Icon
                                color="white"
                                size={30}
                                name='arrowleft'
                                type="antdesign"
                            />
                        </TouchableOpacity>
                        <View style={styles.viewFlip}></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <TouchableOpacity style={styles.btnFlash} onPress={FlashPhoto}>
                                <FontAwesome name="bolt" size={24} color={flashMode ? "yellow" : "#FFF"} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={CapturePhoto} style={styles.btnCapture}>
                                <FontAwesome name='camera' size={23} color="#fff" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setTipoCamera(!tipoCamera)} style={styles.btnCapture}>
                                <Ionicons name='camera-reverse' size={23} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    </Camera >
                </View>
            </View>
            <StatusBar style="auto" />

            <Modal animationType='slide' transparent={false} visible={openModal} >
                <TouchableOpacity style={{ margin: 30 }} onPress={() => setOpenModal(false)}>
                    <AntDesign name="close" size={24} color="black" />
                </TouchableOpacity>
                <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', margin: 20 }}>
                    <View style={{ margin: 10, flexDirection: 'row', gap: 20, justifyContent: 'center' }}>
                        <TouchableOpacity style={styles.btnClear} onPress={ClearPhoto}>
                            <FontAwesome name="trash" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnUpload} onPress={UploadPhoto}>
                            <FontAwesome name="upload" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <Image
                        style={{ width: "100%", height: 500, borderRadius: 10 }}
                        source={{ uri: photo }} />
                </View>
            </Modal>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.30)",
        alignItems: 'center',
        justifyContent: 'center',
    },
    cameraContainer: {
        width: "85%",
        height: "75%",
    },
    camera: {
        width: "100%",
        height: "100%",
    },
    viewFlip: {
        flex: 1,
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center"
    },
    btnFlip: {
        padding: 20,
    },
    txtFlip: {
        fontSize: 20,
        color: "#fff",
        marginBottom: 20,
    },
    btnCapture: {
        padding: 20,
        margin: 20,
        borderRadius: 10,
        backgroundColor: "#121212",
        justifyContent: "center",
        alignItems: "center"
    },
    btnFlash: {
        padding: 25,
        margin: 20,
        borderRadius: 10,
        backgroundColor: "#121212",
        justifyContent: "center",
        alignItems: "center"
    },
    btnClear: {
        padding: 20,
        backgroundColor: "transparent",

        justifyContent: "center",
        alignItems: "center",
    },
    btnUpload: {
        padding: 20,
        backgroundColor: "transparent",

        justifyContent: "center",
        alignItems: "center",
    },

});
