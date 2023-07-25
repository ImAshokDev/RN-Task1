import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export function HomeScreen() {
  const [data, setData] = useState('');

  function fetchData() {
    fetch('https://itunes.apple.com/in/rss/topalbums/limit=25/json')
      .then(res => res.json())
      .then(resData => setData(resData))
      .catch(err => console.log('fet error......', err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FlatList
          data={data?.feed?.entry}
          renderItem={({item, index}) => {
            // console.log(
            //   'item........................',
            //   //   item?.category?.attributes?.['im:id'],
            //   //   item?.['im:name']?.label,
            // //   item?.['im:image'][0]?.label,
            // );
            return (
              <View key={index} style={styles.cardView}>
                <Text style={styles.text1}>{item?.['im:name']?.label}</Text>

                <View style={styles.galleryView}>
                  {item?.['im:image']?.map((imgItem, index2) => {
                    return (
                      <Image
                        key={index2}
                        source={{uri: imgItem.label}}
                        alt="image"
                        style={[styles.imgStyle, ,]}
                      />
                    );
                  })}
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#F5F9FB',
    // display: 'flex',
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  content: {},

  cardView: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 10,
    borderRadius: 8,
    elevation: 3,
  },

  text1: {
    fontSize: 16,
    color: '#1E293B',
    fontWeight: 'bold',
    marginBottom: 10,
  },

  galleryView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },

  imgStyle: {
    width: 110,
    height: 110,
  },

  // buttons
  btn: {
    backgroundColor: '#525FE1',
    padding: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
