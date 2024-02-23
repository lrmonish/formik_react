import './App.css'
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const validate = values =>
{
  let errors ={}

  if(!values.name)
  {
   errors.name = 'Required'
  }
  if(!values.email)
  {
   errors.email = 'Required'
  }
  else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(values.email))
  {
   errors.email = "invalid email"
  }
  if(!values.channel)
  {
   errors.channel = 'Required'
  }


  return errors

   }

const validateSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  channel: Yup.string().required('Channel is required'),
});

   const onSubmit = values=>{ 
    console.log(values)
  };


  const initialValues =  {
    name: '',
    email: '',
    channel: '',
  };

function App() {
  // const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   validate,
  //   validateOnChange: true,
  // });

// console.log("touch", formik.touched);
// console.log("errors", formik.errors);

  return (
    <Formik className="youtube-form-container" 
    initialValues={initialValues}
    validate={validate}
    onSubmit={onSubmit}>
      
    <Form className="youtube-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <Field
          type="text"
          id="name"
          name="name"
          className="form-control"
          // {...formik.getFieldProps('name')}
        />
       <ErrorMessage name='name' />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <Field
          type="email"
          id="email"
          name="email"
          className="form-control"
          // onChange={formik.handleChange}
          // value={formik.values.email}
          // onBlur={formik.handleBlur}
        />
       <ErrorMessage name='email' />
      </div>

      <div className="form-group">
        <label htmlFor="channel">Channel:</label>
        <Field
          type="text"
          id="channel"
          name="channel"
          className="form-control"
        />
        <ErrorMessage name='channel' />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </Form>
  </Formik>
  )
}

export default App
