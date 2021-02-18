import React,{Component} from 'react';
import CoachCard from '../CoachCard';
import styles from './CoachesList.module.css';
import _ from 'lodash';

const data =[
    {
        id:'hbdewh38932',
        firstName: 'Test',
        lastName:'Testovich',
        level:2,
        profilePicture:'https://blogadmin.planning.center/content/images/2018/09/emily-1.jpg'
    },
    {
        id:'hbdewh38962',
        firstName: 'Test2',
        lastName:'Testovich2',
        level:2,
        profilePicture:'https://www.german.pitt.edu/sites/default/files/styles/person_small/public/person-images/20180927_AO_504_German_Portrait_0123_01.jpg?itok=_nZ0KXlh'
    },
    {
        id:'hbdewh38932jjdfkl',
        firstName: 'Masha',
        lastName:'Ivanova',
        level:3,
        profilePicture:'https://blogadmin.planning.center/content/images/2018/09/emy-1.jpg'
    },
    {
        id:'hbdewh336728932',
        firstName: 'Alex',
        lastName:'Vasilievich',
        level:2,
        profilePicture:'https://static.photocdn.pt/images/articles/2019/08/07/images/articles/2019/07/31/linkedin_profile_picture_tips-1.jpg'
    },
    {
        id:'hbdewh389327389',
        firstName: 'Irina',
        lastName:'Petrovna',
        level:4,
        profilePicture:'https://qph.fs.quoracdn.net/main-qimg-7fb93146f5e4e470f5a590d2fc38be3b'
    },
    {
        id:'hbdewh6278938932',
        firstName: 'Michal',
        lastName:'Alekseevich',
        level:2,
        profilePicture:'https://blogadmin.planning.789cenhjodter/content/images/2018/09/emily-1.jpg'
    },
    {
        id:'hbcjdkdewh38932',
        firstName: 'Sergey',
        lastName:'Dmitrievich',
        level:5,
        profilePicture:'https://www.leisureopportunities.co.uk/images/imagesX/HIGH799405_746782.jpg'
    },
    {
        id:'hbdewh3heuiwo8932',
        firstName: 'Maria',
        lastName:'Aleksandrovna',
        level:1,
        profilePicture:'https://expertphotography.com/wp-content/uploads/2020/08/profile-photos-2.jpg'
    },
];


class CoachesList extends Component{
constructor(props) {
    super(props);
    this.state = {
        isFetching: false,
        coaches: [],
        error: null
    }
}
loadData = () => {
  this.setState({
      isFetching: true,
  });

  setTimeout(()=>{
      this.setState({
      isFetching:false,
      coaches:data.map(item =>{
          return({
              ...item, isSelected:false,
          });
      })
      })
  },2000);
};


selectCoachByIndex = (index) => {
    const newItem = _.cloneDeep(this.state.coaches);

    newItem[index].isSelected = !newItem[index].isSelected;
    this.setState({
        coaches:newItem,
    });
};

componentDidMount() {
    this.loadData();
}

    render () {
     const {coaches} = this.state;
     return (
         <ul className={styles.container}>
             {
                 <li className={styles.listItem}>
                     To:{
                     coaches.filter(item => item.isSelected).map(
                         selectedCoach => `${selectedCoach.firstName} ${selectedCoach.lastName}`).join(', ')
                 }
                 </li>
             }
             {
                 coaches.map( (coach, index) => (
                     <li className={styles.listItem} key={coach.id}>
                         <CoachCard setSelected={this.selectCoachByIndex} index={index} coach={coach}/>
                     </li>
                 ))
             }
         </ul>
     );

 }
}

export default CoachesList;