import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Movements from '../../Movements';
import Actions from '../../Actions';


const list = [
    {
        id: 1,
        label: 'Boleto conta gás',
        value: '100,90',
        date: '17/09/2022',
        type: 0
    },
    {
        id: 2,
        label: 'Pix Gabriel',
        value: '40,90',
        date: '12/09/2022',
        type: 1
    },
    {
        id: 3,
        label: 'Salário',
        value: '3440,30',
        date: '10/09/2022',
        type: 1
    },

]

export default function Home() {
    return (
        <View style={styles.container}>
            <Header name="Kelly Karina" />

            <Balance saldo="9.230.90" gastos="-572,00" />

            <Actions></Actions>

            <Text style={styles.title}>Últimas movimentações</Text>

            <FlatList style={styles.list}
                data={list}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Movements data={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 14,
    },
    list: {
        marginStart: 14,
        marginEnd: 14,
    }
});