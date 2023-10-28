import React, {useCallback} from 'react';
import * as Yup from 'yup';
import uuid from 'react-native-uuid';
import {Formik} from 'formik';
import {Pressable, View} from 'react-native';
import {TextInput} from '../../components/TextInput';
import {styles} from './styles/styles';
import {Title} from '../../components/Title';
import {Movie} from '../../types/Movies';
import {useAppDispatch} from '../../hooks/redux';
import {addMovie, updateMovie} from '../../reducers/movies';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MovieScreenParamList} from '../../navigation/types';

const MovieSchema = Yup.object().shape({
  title: Yup.string().required('Please enter title'),
  synopsis: Yup.string().required('Please enter description'),
  rate: Yup.number()
    .min(0)
    .max(10)
    .required('Please rate between 0 and 10')
    .required('Please rate the movie'),
});

interface Props {
  movieItem?: Movie;
}
const MovieReviewForm: React.FC<Props> = ({movieItem}) => {
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<MovieScreenParamList>>();
  const onSubmit = useCallback(
    (movie: Movie) => {
      if (movieItem?.id) {
        dispatch(updateMovie({...movie, id: movieItem.id}));
      } else {
        const newMovieID = `${uuid.v4()}`;

        dispatch(addMovie({...movie, id: newMovieID}));
      }
      navigation.goBack();
    },
    [addMovie, dispatch],
  );
  return (
    <>
      <Formik
        initialValues={{
          title: movieItem ? movieItem.title : '',
          synopsis: movieItem ? movieItem.synopsis : '',
          rate: movieItem ? movieItem.rate : 0,
        }}
        onSubmit={onSubmit}
        validationSchema={MovieSchema}>
        {({
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
          isValid,
          handleSubmit,
        }) => {
          return (
            <>
              <View style={styles.inputText}>
                <TextInput
                  placeholder={'title'}
                  onChangeText={handleChange('title')}
                  onBlur={handleBlur('title')}
                  value={values.title}
                  autoCapitalize="none"
                  error={touched.title ? errors.title : undefined}
                />
              </View>
              <View style={styles.inputText}>
                <TextInput
                  placeholder={'synopsis'}
                  onChangeText={handleChange('synopsis')}
                  onBlur={handleBlur('synopsis')}
                  value={values.synopsis}
                  error={touched.synopsis ? errors.synopsis : undefined}
                />
              </View>
              <View style={styles.inputText}>
                <TextInput
                  placeholder={'rate'}
                  onChangeText={handleChange('rate')}
                  onBlur={handleBlur('rate')}
                  value={values.rate}
                  error={touched.rate ? errors.rate : undefined}
                />
              </View>
              <View style={{paddingHorizontal: 40}}>
                <Pressable
                  onPress={handleSubmit}
                  style={[
                    styles.button,
                    {
                      opacity:
                        isValid || values.title === '' || values.synopsis === ''
                          ? 1
                          : 0.5,
                    },
                  ]}
                  disabled={!isValid}>
                  <Title textExtraStyle={{color: 'white', fontSize: 20}}>
                    OK
                  </Title>
                </Pressable>
              </View>
            </>
          );
        }}
      </Formik>
    </>
  );
};
export {MovieReviewForm};
