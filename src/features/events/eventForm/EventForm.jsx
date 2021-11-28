import React, { useEffect } from 'react';
import cuid from 'cuid';
import { Link } from 'react-router-dom';
import { Button, Header, Segment } from 'semantic-ui-react';
import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { createEvent, updateEvent } from '../eventSlice';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import ReTextInput from '../../../app/common/form/ReTextInput';
import ReTextArea from '../../../app/common/form/ReTextArea';
import ReSelect from '../../../app/common/form/ReSelect';
import ReDateInput from '../../../app/common/form/ReDateInput';
import { categoryOptions } from '../../../app/api/categoryOptions';

const EventForm = () => {
  const { eventId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authenticated = useSelector(
    (state) => state.authentication.authenticated
  );

  // redirect to '/events' if user is not authenticated
  useEffect(() => {
    !authenticated && navigate('/events');
  });

  const selectedEvent = useSelector((state) =>
    state.event.events.find((evt) => evt.id === eventId)
  );

  const initialValues = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('You must provide a title'),
    category: Yup.string().required('You must provide a category'),
    description: Yup.string().required(),
    city: Yup.string().required(),
    venue: Yup.string().required(),
    date: Yup.string().required(),
  });

  return (
    <Segment clearing>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          selectedEvent
            ? dispatch(updateEvent({ ...selectedEvent, ...values }))
            : dispatch(
                createEvent({
                  ...values,
                  id: cuid(),
                  hostedBy: 'Bob',
                  attendees: [],
                  hostPhotoURL: '/assets/user.png',
                })
              );
          navigate('/events');
        }}
      >
        {({ dirty, isSubmitting, isValid }) => (
          <Form className="ui form">
            <Header sub color="teal" content="Event details" />
            <ReTextInput name="title" placeholder="Event title" />
            <ReSelect
              name="category"
              placeholder="Category"
              options={categoryOptions}
            />
            <ReTextArea name="description" placeholder="Description" rows={3} />

            <Header sub color="teal" content="Event location details" />
            <ReTextInput name="city" placeholder="City" />
            <ReTextInput name="venue" placeholder="Venue" />
            <ReDateInput
              name="date"
              placeholderText="Date"
              timeFormat="HH:mm"
              showTimeSelect
              timeCaption="time"
              dateFormat="MMMM d, yyyy HH:mm"
            />

            <Button
              loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
              type="submit"
              floated="right"
              positive
              content={selectedEvent ? 'Update' : 'Submit'}
            />
            <Button
              disabled={isSubmitting}
              as={Link}
              to="/events"
              type="submit"
              floated="right"
              content="Cancel"
            />
          </Form>
        )}
      </Formik>
    </Segment>
  );
};

export default EventForm;
