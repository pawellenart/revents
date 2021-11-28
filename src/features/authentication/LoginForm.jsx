import React from 'react';
import ModalWrapper from '../../app/common/modals/ModalWrapper';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import ReTextInput from '../../app/common/form/ReTextInput';
import { Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/authentication/authenticationSlice';
import { modalClose } from '../../app/common/modals/modalSlice';

const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <ModalWrapper size="mini" header="Sign in to Re-vents">
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().required().email(),
          password: Yup.string().required(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(login(values));
          setSubmitting(false);
          dispatch(modalClose());
        }}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form className="ui form">
            <ReTextInput name="email" placeholder="E-mail address" />
            <ReTextInput
              name="password"
              placeholder="Password"
              type="password"
            />
            <Button
              loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
              type="submit"
              fluid
              size="large"
              color="teal"
              content="Login"
            />
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  );
};

export default LoginForm;
