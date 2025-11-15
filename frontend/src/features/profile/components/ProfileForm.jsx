import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../../app/hooks.js';
import { updateProfile } from '../model/profileSlice.js';
import {
  formContainer,
  avatarStyle,
  inputStyle,
  buttonStyle,
  errorStyle,
} from '../styles/profileFormStyles.js';

const validationSchema = Yup.object({
  nickname: Yup.string().required('Нікнейм обовʼязковий'),
  phone: Yup.string()
    .matches(/^\+?\d{10,15}$/, 'Невірний формат телефону')
    .required('Телефон обовʼязковий'),
  email: Yup.string().email('Невірний формат емейлу').required('Емейл обовʼязковий'),
});

export default function ProfileForm() {
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.profile);
  const [avatarPreview, setAvatarPreview] = useState(profile.avatar || null);
  const [success, setSuccess] = useState(false);

  const initialValues = {
    nickname: profile.nickname || '',
    phone: profile.phone || '',
    email: profile.email || '',
    avatar: profile.avatar || null,
  };

  const handleAvatarChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    if (file) {
      setFieldValue('avatar', file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(updateProfile(values));
    setSuccess(true);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, isSubmitting }) => (
        <Form style={formContainer}>
          <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
            <label htmlFor="avatar">
              <img
                src={avatarPreview || '/assets/images/avatars/avatar.png'}
                alt="avatar"
                style={avatarStyle}
              />
            </label>
            <input
              type="file"
              id="avatar"
              accept="image/*"
              onChange={(e) => handleAvatarChange(e, setFieldValue)}
              style={{ display: 'none' }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label>Нікнейм</label>
            <Field name="nickname" type="text" style={inputStyle} />
            <ErrorMessage name="nickname" component="div" style={errorStyle} />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label>Телефон</label>
            <Field name="phone" type="text" style={inputStyle} />
            <ErrorMessage name="phone" component="div" style={errorStyle} />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label>Емейл</label>
            <Field name="email" type="email" style={inputStyle} />
            <ErrorMessage name="email" component="div" style={errorStyle} />
          </div>

          <button type="submit" disabled={isSubmitting} style={buttonStyle}>
            {isSubmitting ? 'Збереження...' : 'Зберегти'}
          </button>

          {success && <p style={{ color: 'green', marginTop: '1rem' }}>✅ Дані успішно збережено!</p>}
        </Form>
      )}
    </Formik>
  );
}