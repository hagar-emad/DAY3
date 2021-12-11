import React, { useContext, useEffect } from "react";
import {
  Button,
  FlatList,
  Text,
  Container,
  HStack,
  ArrowForwardIcon,
  Spacer,
  View,
  Center
} from "native-base";
import { context } from "../context/context";
import { getUsers } from "../actions";
const Home = ({ navigation }) => {
    console.log('home')
  const { state, dispatch } = useContext(context);
  useEffect(() => {
    const handleActionPromise = async () => {
      dispatch(await getUsers());
    };
    handleActionPromise();
  }, []);
  return (
    <FlatList
      data={state.users ? state.users.list : []}
      renderItem={({ item }) => {
        return (
          <HStack justifyContent="space-between" space={3} margin={2}>
            <Text fontSize="18">{item.name}</Text>

            <ArrowForwardIcon size="4" onPress={()=>{
                navigation.navigate('details',{id:item.id})
            }}/>
          </HStack>
        );
      }}
      ItemSeparatorComponent={() => (
        <View
          style={{
            margin: 4,
            borderBottomColor: "black",
            borderBottomWidth: 2,
          }}
        ></View>
      )}

      ListEmptyComponent={()=>(<Center>
          <Text fontSize="24">No items</Text>
      </Center>)}

      ListHeaderComponent={()=>(<Center>
        <Text fontSize="24" borderBottomColor="grey" borderBottomWidth={3}>UsersList</Text>
    </Center>)}
    />
  );
};
export default Home;
