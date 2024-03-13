// Step1.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Step1 = ({ onNextStep }) => {
  return (
    <div>
      <h1>Step 1: General Details</h1>
      <Formik
        initialValues={{
          clientType: '',
          minorMajor: '',
          branch: '',
          email: '',
          phoneNumber: ''
        }}
        validationSchema={Yup.object().shape({
          clientType: Yup.string().required('Client Type is required'),
          minorMajor: Yup.string().required('Minor/Major is required'),
          branch: Yup.string().required('Branch of Bank Account is required'),
          email: Yup.string().email('Invalid email').required('Email is required'),
          phoneNumber: Yup.string().matches(/^[0-9]+$/, 'Must be only digits').required('Phone Number is required')
        })}
        onSubmit={(values) => {
          console.log(values);
          onNextStep();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="clientType">Client Type*</label>
              <Field as="select" name="clientType" className={`form-control ${errors.clientType && touched.clientType ? 'is-invalid' : ''}`}>
                <option value="">Select Client Type</option>
                <option value="individual">Individual</option>
                <option value="corporate">Corporate</option>
              </Field>
              <ErrorMessage name="clientType" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <label htmlFor="minorMajor">Minor/Major*</label>
              <Field as="select" name="minorMajor" className={`form-control ${errors.minorMajor && touched.minorMajor ? 'is-invalid' : ''}`}>
                <option value="">Select Minor/Major</option>
                <option value="minor">Minor</option>
                <option value="major">Major</option>
              </Field>
              <ErrorMessage name="minorMajor" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <label htmlFor="branch">Branch of Bank Account*</label>
              <Field type="text" name="branch" className={`form-control ${errors.branch && touched.branch ? 'is-invalid' : ''}`} />
              <ErrorMessage name="branch" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <Field type="email" name="email" className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`} />
              <ErrorMessage name="email" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number*</label>
              <Field type="text" name="phoneNumber" className={`form-control ${errors.phoneNumber && touched.phoneNumber ? 'is-invalid' : ''}`} />
              <ErrorMessage name="phoneNumber" component="div" className="invalid-feedback" />
            </div>
            <button type="submit" className="btn btn-primary mr-2">Next</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Step1;
