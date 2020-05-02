import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform, StatusBar } from 'react-native';
import { Block, Text, theme, Button as GaButton } from 'galio-framework';

const { width, height } = Dimensions.get('screen');
const HeaderHeight = theme.SIZES.BASE * 3.5 + (StatusBar.currentHeight || 0);
const thumbMeasure = (width - 48 - 32) / 3;
const Viewed = [
    require('../assets/imgs/project5.jpg'),
    require('../assets/imgs/project7.jpg'),
    require('../assets/imgs/project6.jpg'),
    require('../assets/imgs/project4.jpg'),
    require('../assets/imgs/project21.jpg'),
    require('../assets/imgs/project24.jpg')
  ];

const Profile = () => {
  return (
    <Block style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
    }} >
      <Block flex={0.6} >
        <ImageBackground
          source={require('../assets/imgs/bg5.png')}
          style={styles.profileContainer}
          imageStyle={styles.profileBackground}
        >
          <Block flex style={styles.profileCard}>
            <Block style={{ position: 'absolute', width: width, zIndex: 5, paddingHorizontal: 20 }}>
              <Block middle style={{ top: height * 0.15 }}>
                <Image source={require('../assets/imgs/profile-img.jpg')} />
              </Block>
              <Block style={{ top: height * 0.2 }}>
                <Block middle >
                  <Text
                    style={{
                      marginBottom: theme.SIZES.BASE / 2,
                      fontWeight: '900',
                      fontSize: 26
                    }}
                    color='#ffffff'
                    >
                    Ryan Scheinder
                  </Text>

                  <Text
                    size={16}
                    color="white"
                    style={{
                      marginTop: 5,
                      lineHeight: 20,
                      fontWeight: 'bold',
                      fontSize: 18,
                      opacity: .8
                    }}
                  >
                    Photographer
                  </Text>
                </Block>
                <Block style={styles.info}>
                  <Block row space="around">

                    <Block middle>
                      <Text
                        size={18}
                        color="white"
                        style={{ marginBottom: 4}}
                      >
                        2K
                      </Text>
                      <Text size={14} color="white">
                        Friends
                      </Text>
                    </Block>

                    <Block middle>
                      <Text
                        color="white"
                        size={18}
                        style={{ marginBottom: 4}}
                      >
                        26
                      </Text>
                      <Text size={14} color="white">
                        Comments
                        </Text>
                    </Block>

                    <Block middle>
                      <Text
                        color="white"
                        size={18}
                        style={{ marginBottom: 4}}
                      >
                        48
                      </Text>
                      <Text size={14} color="white">
                        Bookmarks
                      </Text>
                    </Block>

                  </Block>
                </Block>
              </Block>

            </Block>

            <Block
              middle
              row
              style={{ position: 'absolute', width: width, top: height * 0.6 - 22, zIndex: 99 }}
            >
            </Block>
          </Block>
        </ImageBackground>


      </Block>
      <Block />
      <Block flex={0.4} style={{ padding: theme.SIZES.BASE, marginTop: 90}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block flex style={{ marginTop: 20 }}>
            <Block middle>
              <Text
                style={{
                  color: '#2c2c2c',
                  fontWeight: 'bold',
                  fontSize: 19,
                  
                  marginTop: 15,
                  marginBottom: 30,
                  zIndex: 2
                }}
              >
                About me
                  </Text>
              <Text
                size={16}
                muted
                style={{
                  textAlign: 'center',
                  zIndex: 2,
                  lineHeight: 25,
                  color: '#9A9A9A',
                  paddingHorizontal: 15
                }}
              >
                An artist of considerable range, named Ryan — the name has taken by Melbourne has raised,
                Brooklyn-based Nick Murphy — writes, performs and records all of his own music.
                  </Text>
            </Block>
            <Block row style={{ paddingVertical: 14, paddingHorizontal: 15 }} space="between">
              <Text bold size={16} color="#2c2c2c" style={{ marginTop: 3 }}>
                Album
                  </Text>
            </Block>


            <Block style={{ paddingBottom: -HeaderHeight * 2, paddingHorizontal: 15}}>
              <Block row space="between" style={{ flexWrap: 'wrap' }}>
                {Viewed.map((img, imgIndex) => (
                  <Image
                    source={img}
                    key={`viewed-${img}`}
                    resizeMode="cover"
                    style={styles.thumb}
                  />
                ))}
              </Block>
            </Block>
          </Block>
        </ScrollView>
      </Block>
    </Block>

  )
}





const styles = StyleSheet.create({

  profileContainer: {
    width,
    height,
    padding: 0,
    zIndex: 1
  },
  profileBackground: {
    width,
    height: height * 0.6
  },

  info: {
    marginTop: 30,
    paddingHorizontal: 10,
    height: height * 0.8
  },
  avatarContainer: {
    position: 'relative',
    marginTop: -80
  },
  avatar: {
    width: thumbMeasure,
    height: thumbMeasure,
    borderRadius: 50,
    borderWidth: 0
  },
  nameInfo: {
    marginTop: 35
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure
  },
  social: {
    width: 16 * 3,
    height: 16 * 3,
    borderRadius: 16 * 1.5,
    justifyContent: 'center',
    zIndex: 99,
    marginHorizontal: 5
  }
});

export default Profile;