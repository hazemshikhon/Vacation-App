import React from 'react'
import DateTimePicker from 'react-native-modal-datetime-picker'

const DatePicker = ({ visible, onConfirm, onCancel, ...otherProps }) => (
    <DateTimePicker
        mode={'date'}
        datePickerModeAndroid={'spinner'}
        isVisible={visible}
        onConfirm={onConfirm}
        onCancel={onCancel}
        {...otherProps}
    // maximumDate={maximumDate}

    />

)
export default DatePicker
