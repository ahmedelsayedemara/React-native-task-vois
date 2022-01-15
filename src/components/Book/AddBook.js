
import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet, TouchableOpacity, Image , ScrollView} from 'react-native';
import * as yup from 'yup'
import { Formik } from 'formik'
import * as ImagePicker from 'expo-image-picker';
import { COLORS } from '../../constants'; 

const AddBook = (props) => {

  const [thumbnail, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };



  const initialValues = {
    title: '',
    description: '',
    publishDate: new Date(),
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
    const body = {
      ...values,
      thumbnail
    }
    props.AddBook(body)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => handleAddBook(values)}
    >
      {({ values, handleChange, errors, setFieldTouched, touched, handleSubmit }) => (
        <ScrollView>

          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text>Thumbnail</Text>
              <TouchableOpacity onPress={pickImage} >
                {thumbnail ? (<Image
                  resizeMode='contain'
                  source={{ uri: thumbnail }} style={styles.thumbnail} />
                ) :
                  (
                    <Image
                      resizeMode='contain'
                      source={require('../../../assets/upload-icon.png')}
                      style={styles.thumbnail} />
                  )
                }

              </TouchableOpacity>

            </View>
            <View style={styles.inputContainer}>
              <Text>Title</Text>
              <TextInput
                value={values.title}
                style={[styles.inputStyle, errors.title && styles.inputStyleError]}
                onChangeText={handleChange('title')}
                onBlur={() => setFieldTouched('title')}
                placeholder="Title"
              />
              {touched.title && errors.title &&
                <Text style={styles.helperText}>{errors.title}</Text>
              }
            </View>

            <View style={styles.inputContainer}>
              <Text>Description</Text>

              <TextInput
                value={values.description}
                style={[styles.inputStyle, errors.description && styles.inputStyleError]}
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

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>
                Add
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

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
    borderColor: COLORS.grayColor,
    borderRadius: 8,
    color: "#000000" ,
    padding: 12,
    marginBottom: 4,
  },
  inputStyleError: {
    borderColor: COLORS.errorColor
  },
  helperText: {
    fontSize: 12,
    color: COLORS.errorColor
  },
  button: {
    height: 45,
    borderRadius: 8,
    marginVertical: 10,
    backgroundColor: COLORS.primaryColor,
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15
  },
  thumbnail: {
    height: 250,
    width: "100%",
    borderWidth: 1,
    borderColor: COLORS.lightGrayColor,
    borderRadius: 12,

  }
})

export default AddBook