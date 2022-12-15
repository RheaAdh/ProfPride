import { Dimensions } from 'react-native';
import { BaseToast } from 'react-native-toast-message';

export const toastConfig = {
    primary: ({ text1, props }) => (
        <BaseToast
            {...props}
            style={{ borderLeftColor: '#810CDD' }}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            text1Style={{
                fontSize: 15,
                fontWeight: '400',
            }}
        />
    ),
};

export const widthInPercent = (percent) =>
    Dimensions.get('window').width * (percent / 100);

export const heightInPercent = (percent) =>
    Dimensions.get('window').height * (percent / 100);

export const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
