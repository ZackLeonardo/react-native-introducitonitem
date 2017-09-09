/**
 * react-native-introducitonitem Component
 * the Component which show simple introduction information
 * @zack
 */

 import React, { Component } from 'react';
 import {
   View,
   ViewPropTypes,
   StyleSheet,
   Text,
   Image,
 } from 'react-native';
 import PropTypes from 'prop-types';

 import Avatar from 'react-native-avatar';

 class IntroductionItem extends Component{
   render(){
     return (
       <View style={styles.mainviewContainerStyle}>
        <View style={[styles.containerStyle, this.props.containerStyle]}>
          {this.renderAvatar()}
          {this.renderIntroInfo()}
        </View>
        {this.renderDivide()}
        {this.renderBottomInfo()}
       </View>
     );
   }

   renderAvatar() {
     if (this.props.avatarCarrier.avatar) {
       const avatarProps = this.getInnerComponentProps();
       if (this.props.renderAvatar) {
         return this.props.renderAvatar(avatarProps);
       }
       return <Avatar {...avatarProps}/>;
     }
     return null;
   }

   renderIntroInfo() {
     if (this.props.introInfo) {
       const introInfoProps = this.getInnerComponentProps();
       if (this.props.renderIntroInfo) {
         return this.props.renderBubble(introInfoProps);
       }
       return (
         <View style={[styles.introInfoStyle, this.props.introInfoStyle]}>
          <Text style={[styles.mainTitleStyle, this.props.mainTitleStyle]}>{this.props.introInfo.mainTitle}</Text>
          <Text style={[styles.infoStyle, this.props.infoStyle]}>{this.props.introInfo.info}</Text>
          <View style={[styles.imageslistStyle, this.props.imageslistStyle]}>
            {this.props.introInfo.detailImages.map((image, i) => {
               if (i < this.props.detailImagesNum - 1) {
                 return <Image
                   key={image + i}
                   style={[styles.introImageStyle,  this.props.introImageStyle]}
                   source={{uri: image}} />
               }
               if (i === this.props.detailImagesNum - 1) {
                 if (this.props.introInfo.detailImages.length > this.props.detailImagesNum) {
                   return (
                     this.props.ellipsesImageUrl ?
                     <Image
                       key={image + i}
                       style={[styles.introImageStyle,  this.props.introImageStyle]}
                       source={{uri: this.props.ellipsesImageUrl}}/>
                     :
                     <Image
                       key={image + i}
                       style={[styles.introImageStyle,  this.props.introImageStyle]}
                       source={require('../images/ellipses.png')}/>
                   );
                 } else {
                   return <Image
                    key={image + i}
                    style={[styles.introImageStyle,  this.props.introImageStyle]}
                    source={{uri: image}}/>
                 }
               }
             })}
          </View>
         </View>
       );
     }
     return null;
   }

// source={this.props.introInfo.detailImages.length > this.props.detailImagesNum ? this.props.ellipsesImage : {uri: image}}

  //  {this.props.introInfo.detailImages ?
  //    {this.props.introInfo.detailImages.map((image, i) => {
  //      <Text>i</Text>
  //    })}
  //    : null}
   renderDivide() {
     if (this.props.bottomInfo) {
       return <View style={styles.divideStyle}/>;
     }
     return null;
   }

   renderBottomInfo(){
     if (this.props.bottomInfo){
       const bottomInfoProps = this.getInnerComponentProps();
       if (this.props.renderBottomInfo) {
         return this.props.renderBottomInfo(bottomInfoProps);
       }
       return (
         <Text style={[styles.bottomInfoStyle, this.props.bottomInfoStyle]}>
           {this.props.bottomInfo}
         </Text>
       );
     }
   }

   renderIntroImages(detailImages) {
     var length = detailImages.length;
     if (length > this.props.detailImagesNum) {
       for (let i = 0; i < this.props.detailImagesNum-2; i++) {

       }
     }
   }

   getInnerComponentProps() {
     const {containerStyle, bottomInfoStyle, ...props} = this.props;
     return {
       ...props,
     }
   }
 }

 const styles = StyleSheet.create({
   mainviewContainerStyle: {
     flexDirection: 'column',
     justifyContent: 'flex-start',
     alignItems: 'flex-start',
   },
   containerStyle: {
     flexDirection: 'row',
     justifyContent: 'flex-start',
     alignItems: 'center',
     marginLeft: 0,
     marginRight: 0,
   },
   introInfoStyle: {
     flexDirection: 'column',
     justifyContent: 'flex-start',
     alignItems: 'flex-start',
     marginLeft: 8,
     marginRight: 0,
   },
   mainTitleStyle: {
     fontSize: 16,
     fontWeight: 'bold',
     textAlign: 'left',
     backgroundColor: 'transparent',
     color: 'black',
   },
   infoStyle: {
     fontSize: 12,
     fontWeight: '600',
     textAlign: 'left',
     backgroundColor: 'transparent',
     color: 'black',
     maxWidth: 300,
   },
   imageslistStyle: {
     flexDirection: 'row',
     justifyContent: 'flex-start',
     alignItems: 'center',
     marginTop: 4,
     marginLeft: 0,
     marginRight: 0,
   },
   introImageStyle: {
     justifyContent: 'center',
     alignItems: 'center',
     width: 25,
     height: 25,
     borderRadius: 5,
     marginLeft: 0,
     marginRight: 6,
   },
   divideStyle: {
     marginTop: 5,
     marginLeft: 2,
     marginRight: 2,
     minWidth: 100,
     height: StyleSheet.hairlineWidth,
     backgroundColor: '#EFEFF4',
   },
   bottomInfoStyle: {
     fontSize: 12,
     fontWeight: '500',
     textAlign: 'left',
     backgroundColor: 'transparent',
     color: '#b2b2b2',

   },
 });

 IntroductionItem.defaultProps = {
   renderAvatar: null,
   renderIntroInfo: null,
   renderBottomInfo: null,
   bottomInfo: null,
   containerStyle: {},
   introInfoStyle: {},
   bottomInfoStyle: {},
   mainTitleStyle: {},
   infoStyle: {},
   imageslistStyle: {},
   introImageStyle: {},
   imageStyle: {},
   avatarCarrier: {
     avatar: null,
     name: null,
     // avatar: 'https://facebook.github.io/react/img/logo_og.png',
     // name: 'reactreara',
   },
   introInfo: {
     mainTitle: null,
     info: null,
     detailImages: [],
   },
   detailImagesNum: 4,
   ellipsesImageUrl: null,
 };

 IntroductionItem.propTypes = {
   renderAvatar: PropTypes.func,
   renderIntroInfo: PropTypes.func,
   renderBottomInfo: PropTypes.func,
   bottomInfo: PropTypes.string,
   renderBottomInfo: PropTypes.func,
   containerStyle: ViewPropTypes.style,
   introInfoStyle: ViewPropTypes.style,
   bottomInfoStyle: ViewPropTypes.style,
   mainTitleStyle: ViewPropTypes.style,
   introImageStyle: ViewPropTypes.style,
   infoStyle: ViewPropTypes.style,
   imageslistStyle: ViewPropTypes.style,
   imageStyle: ViewPropTypes.style,
   avatarCarrier: PropTypes.object,
   introInfo: PropTypes.object,
   detailImagesNum: PropTypes.number,
   ellipsesImageUrl: PropTypes.string,
 };

 module.exports = IntroductionItem;