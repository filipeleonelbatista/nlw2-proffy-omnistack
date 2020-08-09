import React, {useState, useEffect} from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import {useNavigation, useFocusEffect} from '@react-navigation/native';

import styles from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import api from '../../services/api';

function Landing() {
    const [totalConnections, setTotalconnections] = useState(0);

    useFocusEffect(() => {
        api.get('/connections').then(response => {
            const total = response.data.total;
            setTotalconnections(total);
        })
    });

    const {navigate} = useNavigation();

    function handleNavigateToStudyPages(){
        navigate('Study');
    }
    function handleNavigateToGiveClassesPage(){
        navigate('GiveClasses');
    }
    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />
            <Text style={styles.title}>
                Seja bem vindo, {'\n'}
                <Text style={styles.titleBold}> O que deseja fazer?</Text>
            </Text>
            <View style={styles.buttonContainer} >
                <RectButton 
                    onPress={handleNavigateToStudyPages} 
                    style={[styles.button, styles.buttonPrimary]}
                >
                    <Image source={studyIcon} />
                    <Text style={styles.titleBold}>Estudar</Text>
                </RectButton>
                <RectButton 
                    onPress={handleNavigateToGiveClassesPage} 
                    style={[styles.button, styles.buttonSecondary]}
                >
                    <Image source={giveClassesIcon} />
                    <Text style={styles.titleBold}>Dar aulas</Text>
                </RectButton>
            </View>

        <Text style={styles.totalConnections}>
            Total de {totalConnections} conexões já realizadas. {' '}
            <Image source={heartIcon} />
        </Text>
        </View>
    );
}

export default Landing;