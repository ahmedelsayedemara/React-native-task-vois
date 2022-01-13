// App.js


import React from 'react';
import { TextInput, Text, Button, Alert, View, StyleSheet } from 'react-native';
import * as yup from 'yup'
import { Formik } from 'formik'


const AddBook = () => {

  const initialValues = {
    title: '',
    description: '',
    publishDate: new Date(),
    thumbnail: '',
  }
  const validationSchema = yup.object().shape({
    title: yup
      .string()
      .required(),
    description: yup
      .string()
      .required(),
  })

  const handleAddBook = (values) => {
    console.log('values :>> ', values);
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => handleAddBook(values)}
    >
      {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              value={values.title}
              style={styles.inputStyle}
              onChangeText={handleChange('title')}
              onBlur={() => setFieldTouched('title')}
              placeholder="Title"
            />
            {touched.title && errors.title &&
              <Text style={styles.helperText}>{errors.title}</Text>
            }
          </View>
          <View style={styles.inputContainer}>

            <TextInput
              value={values.description}
              style={styles.inputStyle}
              onChangeText={handleChange('description')}
              onBlur={() => setFieldTouched('description')}
              placeholder="Description"
              multiline
              numberOfLines={4}
            />
            {touched.description && errors.description &&
              <Text style={styles.helperText}>{errors.description}</Text>
            }
          </View>
          <View style={styles.inputContainer}>

          </View>

          <Button
            color="#3740FE"
            title='Add'
            onPress={handleSubmit}
          />
        </View>
      )}
    </Formik >
  );
}

const styles = StyleSheet.create({
  formContainer: {
    padding: 20
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 12,
    color: '#495057',
    padding: 12,
    marginBottom: 4,
  },
  helperText: {
    fontSize: 12,
    color: "#f44336"
  }
})

export default AddBook