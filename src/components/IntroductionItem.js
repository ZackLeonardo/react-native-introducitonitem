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
   TouchableOpacity,
 } from 'react-native';
 import PropTypes from 'prop-types';
 import Icon from 'react-native-vector-icons/FontAwesome';

 import Avatar from '@zdy/react-native-avatar';

 class IntroductionItem extends Component{
   constructor(props){
     super(props);

     this._onPress = this._onPress.bind(this);
     this._onDetailImagesPress = this._onDetailImagesPress.bind(this);
     this._onAvatarPress = this._onAvatarPress.bind(this);
   }
   render(){
     return (
       <TouchableOpacity
         disabled={this.props.onItemPress ? false : true}
         onPress={this._onPress}>
         <View style={styles.mainviewContainerStyle}>
          <View style={[styles.containerStyle, this.props.containerStyle]}>
            {this.renderAvatar()}
            {this.renderIntroInfo()}
          </View>
          {this.renderDivide()}
          {this.renderBottomInfo()}
         </View>
       </TouchableOpacity>
     );
   }

   _onPress(){
     if (this.props.onItemPress){
       this.props.onItemPress(this.props);
     }
   }

   _onDetailImagesPress(){
     if (this.props.onDetailImagesPress) {
       this.props.onDetailImagesPress(this.props);
     }
   }

   _onAvatarPress(){
     if (this.props.onAvatarPress) {
       this.props.onAvatarPress(this.props);
     }
   }

   renderAvatar() {
     if (this.props.avatar) {
       const avatarProps = this.getInnerComponentProps();
       if (this.props.renderAvatar) {
         return this.props.renderAvatar(avatarProps);
       }
       return (
         <Avatar
          {...avatarProps}
          onPress={this._onAvatarPress}
          />
        );
     }
     return null;
   }

   renderIntroInfo() {
     if (this.props.mainTitle || this.props.info || this.props.detailImages) {
       const introInfoProps = this.getInnerComponentProps();
       if (this.props.renderIntroInfo) {
         return this.props.renderIntroInfo(introInfoProps);
       }
       return (
         <View style={[styles.introInfoStyle, this.props.introInfoStyle]}>
          {this.props.mainTitle ? <Text style={[styles.mainTitleStyle, this.props.mainTitleStyle]}>{this.props.mainTitle}</Text> : null}
          {this.props.info ? <Text style={[styles.infoStyle, this.props.infoStyle]}>{this.props.info}</Text> : null}
          {this.props.detailImages ?
            <TouchableOpacity
              disabled={this.props.onDetailImagesPress ? false : true}
              onPress={this._onDetailImagesPress}
              >
              <View style={[styles.imageslistStyle, this.props.imageslistStyle]}>
                {this.props.detailImages.map((image, i) => {
                   if (i < this.props.detailImagesNum - 1) {
                     return <Image
                       key={image + i}
                       style={[styles.introImageStyle,  this.props.introImageStyle]}
                       source={{uri: image}} />
                   }
                   if (i === this.props.detailImagesNum - 1) {
                     if (this.props.detailImages.length > this.props.detailImagesNum) {
                       return (
                         this.props.ellipsesImageUrl ?
                         <Image
                           key={image + i}
                           style={[styles.introImageStyle,  this.props.introImageStyle]}
                           source={{uri: this.props.ellipsesImageUrl}}/>
                         :
                          <Icon
                          key={i} name="ellipsis-h" size={22} color="#666"/>
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
            </TouchableOpacity>
            :
            null
          }

         </View>
       );
     }
     return null;
   }

   renderDivide() {
     if (this.props.bottomInfo) {
       return <View style={[styles.divideStyle, this.props.divideStyle]}/>;
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
    //  const {containerStyle, bottomInfoStyle, ...props} = this.props;
    //  return {
    //    ...props,
    //  }
      return {
        bottomInfo: this.props.bottomInfo,
        avatar: this.props.avatar,
        name: this.props.name,
        mainTitle: this.props.mainTitle,
        info: this.props.info,
        onAvatarPress: this.props.onAvatarPress,
      };
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
     fontWeight: 'normal',
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
     height: 2*StyleSheet.hairlineWidth,
     backgroundColor: '#EFEFF4',
   },
   bottomInfoStyle: {
     fontSize: 12,
     fontWeight: '500',
     textAlign: 'left',
     backgroundColor: 'transparent',
     color: '#b2b2b2',
     marginLeft: 8,
   },
 });

 IntroductionItem.defaultProps = {
   detailImagesNum: 4,
 };

 IntroductionItem.propTypes = {
   renderAvatar: PropTypes.func,
   renderIntroInfo: PropTypes.func,
   renderBottomInfo: PropTypes.func,
   bottomInfo: PropTypes.string,
   containerStyle: ViewPropTypes.style,
   introInfoStyle: ViewPropTypes.style,
   bottomInfoStyle: Text.propTypes.style,
   mainTitleStyle: Text.propTypes.style,
   introImageStyle: ViewPropTypes.style,
   infoStyle: Text.propTypes.style,
   imageslistStyle: ViewPropTypes.style,
   divideStyle: ViewPropTypes.style,
   imageStyle: ViewPropTypes.style,
   avatar: PropTypes.string,
   name: PropTypes.string,
   mainTitle: PropTypes.string,
   info: PropTypes.string,
   detailImages: PropTypes.array,
   detailImagesNum: PropTypes.number,
   ellipsesImageUrl: PropTypes.string,
   onItemPress: PropTypes.func,
   onDetailImagesPress: PropTypes.func,
   onAvatarPress: PropTypes.func,
 };

 module.exports = IntroductionItem;
