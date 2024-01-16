import { defineStore } from 'pinia';

export const useStore = defineStore( 'store' , {
  state: () => ( {
    isSideBarCollapse: false ,
    firstname: 'Your' ,
    surname: 'Name' ,
    memberPointsBalance: '0' ,
    pointsName: 'Bucks' ,
    departmentName: 'Test Department' ,
    managerPointsBalance: '0' ,
    logoImage: 'header_263.jpg' ,
    
    bannerBgColor: '' ,
    bannerBgImage: 'test7.jpg' ,
    bannerImage: '' ,
    bannerTextColor: '#000000' ,
    bannerText: 'Life moves pretty fast. If you don’t stop and look around once in a while, you could miss it.' ,
    picId: 'nopic.jpg' ,
    
    newsfeedSelTab: 'shoutOut' ,
    shoutOutSearch: '' ,
    getToKnowSearch: '' ,
    celebrationSearch: '' ,
    celebrationFilter: '' ,
    departmentId: '' ,
    departmentList: [
      { departmentId: 1 , departmentName: 'Finance' } ,
      { departmentId: 2 , departmentName: 'Shop Floor' } ,
    ] ,
    shoutOut: [
      {
        celebrationText: 'birthday' ,
        from: 'Eben' ,
        header: 'Hi5' ,
        picId: 'nopic.jpg' ,
        to: 'You' ,
        toMemberIsProfilePic: true ,
        
      } ,
      {
        celebrationText: '' ,
        from: 'Me' ,
        header: 'Hi5' ,
        picId: 'nopic.jpg' ,
        to: 'Eben' ,
        toMemberIsProfilePic: true ,
        
      } ,
      {
        celebrationText: '1 year' ,
        from: 'Heiko' ,
        header: 'Hi5' ,
        picId: 'nopic.jpg' ,
        to: 'You' ,
        toMemberIsProfilePic: true ,
        
      } ,
      {
        celebrationText: '' ,
        from: 'Me' ,
        header: 'Hi5' ,
        picId: 'nopic.jpg' ,
        to: 'Heiko' ,
        toMemberIsProfilePic: true ,
        
      } ,
      {
        celebrationText: '' ,
        from: 'Me' ,
        header: 'Hi5' ,
        picId: 'nopic.jpg' ,
        to: 'You' ,
        toMemberIsProfilePic: true ,
        
      } ,
    ] ,
    getToKnow: [
      {
        birthday: '25 January' ,
        celebrationText: '' ,
        departmentName: 'Shop Floor' ,
        interests: 'Cats' ,
        isProfilePic: true ,
        memberName: 'Member Name' ,
        picId: 'nopic.jpg' ,
        profession: 'blah blah blah test test' ,
      } ,
      {
        birthday: '25 March' ,
        celebrationText: '2 year' ,
        departmentName: 'Finance' ,
        interests: 'Cats' ,
        isProfilePic: true ,
        memberName: 'Eben Burger' ,
        picId: 'nopic.jpg' ,
        profession: 'blah blah blah test test' ,
      } ,
      {
        birthday: '31 May' ,
        celebrationText: '' ,
        departmentName: 'Finance' ,
        interests: 'Cats' ,
        isProfilePic: true ,
        memberName: 'Joe Blog' ,
        picId: 'nopic.jpg' ,
        profession: 'blah blah blah test test' ,
      } ,
    ] ,
    celebrations: [
      {
        bdayDate: '5 Jan 2024' ,
        celebrationText: '' ,
        departmentName: 'Shop Floor' ,
        emailAddress: 'test@test.com' ,
        firstname: 'User' ,
        isProfilePic: true ,
        picId: 'nopic.jpg' ,
        surname: 'LastName' ,
        what: 'BDAY' ,
        
      } ,
      {
        bdayDate: '3 Nov 2023' ,
        celebrationText: '' ,
        departmentName: 'Shop Floor' ,
        emailAddress: 'test@test.com' ,
        firstname: 'Eben' ,
        isProfilePic: true ,
        picId: 'nopic.jpg' ,
        surname: 'Burger' ,
        what: 'BDAY' ,
        
      } ,
    ] ,
    
  } ) ,
  getters: {} ,
  actions: {
    image( image ) {
      return new URL( `../assets/image/${ image }` , import.meta.url ).href;
    } ,
  } ,
} );