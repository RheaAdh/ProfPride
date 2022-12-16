
import React from 'react'
import { useState, useEffect } from 'react';
import { ListItem,TextInput} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Loading from '../components/Loading';
import Header from '../components/Header';
import DialogButton from '../components/Dialog';
import api from '../utils/api.service';

const name="Rhea Adhikari"


export default function User  ({navigation}) {
  let [search,setSearch]=useState("")
  let [users,setUsers]=useState([]);
  const [loading, setLoading] = useState(true);
  
  async function fetchData () {
    try {
      // setLoading(true);
      const res = await api.get('/user', { crossOrigin: true });
      console.log("resulttttttttt",res);
      setUsers(res);
      // setLoading(false);
    }
    catch(err){
      console.log(err);
      // setLoading(false);
      Toast.show({
        type: 'error',
        // text1: err.response.data.error,
      });
    }
  }
  
    useEffect(async () => {
    fetchData();
    console.log("users",users);
    }, [])

  return (
   <>
 <Header/>
      <TextInput label="Search User" style={{ margin: 16 }} onChange={(e)=>setSearch(e.target.value)}/>
      <DialogButton/>
      {users.map((user)=>(
        <ListItem
        
        title={user.name}
        onPress={(title)=> navigation.navigate('Profile',{title:user.name})}
        trailing={props => <Icon name="chevron-right" {...props} />}
        />
      ))}
    
    
  </>
  )
}
