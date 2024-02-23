# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



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

const validateSchema = Yup.object({
  name:Yup.string().required('Required'),
  email: Yup.string().email('Invalid Email').required('Required'),
  channel:Yup.string().required('Required')
})

   const onSubmit = values=>{ 
    console.log(values)
  };


  const initialValues =  {
    name: '',
    email: '',
    channel: '',
  };

function App() {
  

console.log(errors);

  return (
    <Formik className="youtube-form-container" 
    initialValues={initialValues}
    validate={validateSchema}
    onSubmit={onSubmit}>
      
      {({ errors, touched, isSubmitting }) => (
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
       {errors.name && touched.name && <ErrorMessage>{errors.name}</ErrorMessage>}
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
        {errors.email && touched.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      </div>

      <div className="form-group">
        <label htmlFor="channel">Channel:</label>
        <Field
          type="text"
          id="channel"
          name="channel"
          className="form-control"
        />
       {errors.channel && touched.channel && <ErrorMessage>{errors.channel}</ErrorMessage>}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </Form>
      )}
  </Formik>
  )
}

export default App


