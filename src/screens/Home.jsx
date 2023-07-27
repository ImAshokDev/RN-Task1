import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {LoadingIndicator} from '../components/LoadingIndicator';

export function HomeScreen() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const cardsPerPage = 5;
  const lastIndex = currentPage * cardsPerPage;
  const firstIndex = lastIndex - cardsPerPage;
  const cardList = data?.feed?.entry?.slice(firstIndex, lastIndex);

  const noOfPages = Math.ceil(data?.feed?.entry?.length / cardsPerPage);

  function fetchData() {
    setLoading(true);
    fetch(`https://itunes.apple.com/in/rss/topalbums/limit=25/json`)
      .then(res => res.json())
      .then(resData => {
        setData(resData);
        setLoading(false);
      })
      .catch(err => console.log('fet error......', err));
  }

  function moveToPrev() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function moveToNext() {
    if (currentPage !== noOfPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {loading ? (
          <LoadingIndicator />
        ) : (
          <FlatList
            data={cardList}
            renderItem={({item, index}) => {
              return (
                <View
                  key={item?.category?.attributes?.['im:id']}
                  style={styles.cardView}>
                  <Text style={styles.text1}>{item?.['im:name']?.label}</Text>

                  <View style={styles.galleryView}>
                    {item?.['im:image']?.map((imgItem, index2) => {
                      return (
                        <Image
                          key={index2}
                          source={{uri: imgItem.label}}
                          alt="image"
                          style={[styles.imgStyle]}
                        />
                      );
                    })}
                  </View>
                </View>
              );
            }}
            ListHeaderComponent={() => (
              <View style={styles.contentHeaderView}>
                <View style={styles.textRowView}>
                  <Text style={[styles.textLeft]}>Total Entries: </Text>
                  <Text style={[styles.textLeft, styles.textRight]}>
                    {data?.feed?.entry?.length}
                  </Text>
                </View>
                <View style={styles.textRowView}>
                  <Text style={[styles.textLeft]}>Entries Per Page: </Text>
                  <Text style={[styles.textLeft, styles.textRight]}>
                    {cardsPerPage}
                  </Text>
                </View>
                <View style={styles.textRowView}>
                  <Text style={[styles.textLeft]}>No of Pages: </Text>
                  <Text style={[styles.textLeft, styles.textRight]}>
                    {noOfPages}
                  </Text>
                </View>
                <View style={styles.textRowView}>
                  <Text style={[styles.textLeft]}>Current Page: </Text>
                  <Text style={[styles.textLeft, styles.textRight]}>
                    {currentPage}
                  </Text>
                </View>
              </View>
            )}
            ListFooterComponent={() => (
              <View style={styles.btnView}>
                <TouchableOpacity
                  disabled={currentPage <= 1 ? true : false}
                  activeOpacity={0.5}
                  onPress={moveToPrev}
                  style={[
                    styles.btn,
                    {
                      backgroundColor: currentPage <= 1 ? '#CDE1EC' : '#0369A1',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.btnText,
                      {
                        color: currentPage <= 1 ? '#0369A1' : '#ffffff',
                      },
                    ]}>
                    previous
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  disabled={currentPage >= noOfPages ? true : false}
                  activeOpacity={0.5}
                  onPress={moveToNext}
                  style={[
                    styles.btn,
                    styles.btn2,
                    {
                      backgroundColor:
                        currentPage >= noOfPages ? '#CDE1EC' : '#0369A1',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.btnText,
                      {
                        color: currentPage >= noOfPages ? '#0369A1' : '#ffffff',
                      },
                    ]}>
                    Next
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#F5F9FB',
  },
  content: {
    flex: 1,
  },

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
  btnView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    backgroundColor: '#0369A1',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
    paddingVertical: 10,
    width: 120,
  },

  btn2: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },

  btnText: {
    fontSize: 18,
    color: '#fff',
    textTransform: 'capitalize',
  },

  // header
  contentHeaderView: {
    backgroundColor: '#fff',
    marginTop: 20,
    padding: 16,
  },
  textRowView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  textLeft: {
    fontSize: 16,
    color: '#64748B',
    fontWeight: 'bold',
    width: 140,
  },
  textRight: {
    color: '#1E293B',
  },
});
