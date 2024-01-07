import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { Button, FormField, Label } from 'semantic-ui-react';
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput';

export default function ProductAdd() {
  const initialValues = { productName: '', unitPrice: 10 };

  const schema = Yup.object({
    productName: Yup.string().required('Ürün adı zorunlu'),
    unitPrice: Yup.number().required('Ürün fiyatı zorunlu'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className='ui form'>
        {/* <FormField>
          <Field name='productName' placeholder='Ürün Adı'></Field>
          <ErrorMessage
            name='productName'
            render={(error) => (
              <Label pointing basic color='red' content={error}></Label>
            )}
          ></ErrorMessage>
        </FormField> */}

        <KodlamaIoTextInput name='productName' placeholder='Ürün Adı' />
        <KodlamaIoTextInput name='unitPrice' placeholder='Ürün Fiyatı' />

        <Button color='green' type='submit'>
          Ekle
        </Button>
      </Form>
    </Formik>
  );
}
