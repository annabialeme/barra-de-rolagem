import React from 'react';
import { SafeAreaView, FlatList, SectionList, Text, View, StyleSheet } from 'react-native';

import ListItem from "../components/ListItem"


const data_flatlist = [
    { id: '1', title: 'bia' },
    { id: '2', title: 'maria' },
    { id: '3', title: 'leme' },
  ];
  
  const data_sectionlist = [
    {
      title: 'Seção 1',
      data: ['anna', 'bia', 'maria'],
    },
    {
      title: 'Seção 2',
      data: ['biel', 'luana'],
    },
  ];
  
  const ListScreen = () => {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.heading}>ScrollView</Text>
          <Text>Este é um exemplo de conteúdo em uma área rolável.</Text>
        </ScrollView>
  
  
        <FlatList
          data={data_flatlist}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ListItem title={item.title} />}
          style={styles.list}
        />
  
  
        <SectionList
          sections={data_sectionlist}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <ListItem title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
          style={styles.list}
        />
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
    scrollView: {
      marginBottom: 20,
      padding: 20,
    },
    heading: {
      fontSize: 20,
      marginBottom: 10,
    },
    list: {
      flexGrow: 0,
      marginHorizontal: 20,
    },
    sectionHeader: {
      fontSize: 18,
      fontWeight: 'bold',
      backgroundColor: '#ddd',
      padding: 5,
      marginTop: 10,
    },
  });
  
  export default ListScreen;
  
  
  