import React, { useState } from "react";
import {
  Provider,
  Button,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
  Text,
} from "@react-native-material/core";
import { Stack, FAB } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
const DialogButton = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Provider>
        <FAB
        variant="extended"
        icon={props => <Icon name="plus"  {...props} />}
        label="Add User"
        color="primary"
        onPress={() => setVisible(true)}
        />
      
      <Dialog style={styles.dialog} visible={visible} onDismiss={() => setVisible(false)}>
        <DialogHeader title="New User Detail Form" />
        <DialogContent>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            eligendi inventore, laboriosam laudantium minima minus nesciunt
            pariatur sequi.
          </Text>
        </DialogContent>
        <DialogActions>
          <Button
            title="Cancel"
            compact
            variant="text"
            onPress={() => setVisible(false)}
          />
          <Button
            title="Ok"
            compact
            variant="text"
            onPress={() => setVisible(false)}
          />
        </DialogActions>
      </Dialog>
    </Provider>
  );
};

const styles={
    dialog:{
        marginTop:20
    }
}

export default  DialogButton;