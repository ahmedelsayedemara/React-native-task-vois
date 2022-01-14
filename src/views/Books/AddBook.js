
import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as yup from 'yup'
import { Formik } from 'formik'
import * as ImagePicker from 'expo-image-picker';


const AddBook = () => {

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };



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
      {({ values, handleChange, errors, setFieldTouched, touched, handleSubmit }) => (
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text>Thumbnail</Text>
            <TouchableOpacity onPress={pickImage} >
              {image ? (<Image
                source={{ uri: image }} style={styles.thumbnail} />) :
                (
                  <Image
                    source={require('../../../assets/default-image.png')}
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
    borderRadius: 8,
    color: '#495057',
    padding: 12,
    marginBottom: 4,
  },
  inputStyleError: {
    borderColor: "#f44336"
  },
  helperText: {
    fontSize: 12,
    color: "#f44336"
  },
  button: {
    height: 45,
    borderRadius: 8,
    marginVertical: 10,
    backgroundColor: '#4188f7',
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15
  },
  thumbnail: {
    height: 300,
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8
  }
})

export default AddBook