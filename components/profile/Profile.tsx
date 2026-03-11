import { Dimensions, Platform, Text, View, StyleSheet } from "react-native";
import * as Device from 'expo-device';

export default function Profile() {
    const InfoItem = ({ label, value }: { label: string; value: string | null }) => (
        <View style={styles.infoItem}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value || '—'}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Informations</Text>
            
            <View style={styles.card}>
                <InfoItem label="Marque" value={Device.manufacturer} />
                <InfoItem label="Modèle" value={Device.modelName} />
                <InfoItem label="Système" value={Device.osName} />
                <InfoItem label="Version" value={Device.osVersion} />
                <InfoItem label="Plateforme" value={Platform.OS === 'ios' ? 'iOS' : 'Android'} />
                <InfoItem 
                    label="Résolution" 
                    value={`${Dimensions.get('screen').width} × ${Dimensions.get('screen').height}`} 
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        padding: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: '300',
        color: '#1a1a1a',
        marginBottom: 24,
        letterSpacing: -0.5,
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    infoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    label: {
        fontSize: 15,
        color: '#6b7280',
        fontWeight: '400',
    },
    value: {
        fontSize: 15,
        color: '#1a1a1a',
        fontWeight: '500',
    },
});