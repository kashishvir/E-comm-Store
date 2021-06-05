import React, { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import './AddressForm.css'
const AddressForm = () => {

  return (
    <>
      {/* <Typography variant="h6" gutterBottom>Shipping address</Typography> */}
      {/* <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => test({ ...data, shippingCountry, shippingSubdivision, shippingOption }))}> */}
          {/* <FormProvider className="AddressForm_input"> */}
              <form>
          <Grid >
            <input required placeholder="First Name" name="firstName" label="First name" />
                  <input required placeholder="Middle Name" name="middleName" label="Middle name" />
                  <input required placeholder="Last Name" name="lastName" label="Last name" />
                  <br />
                  <div className="AddressForm_input" >
                  <input required placeholder="Address" name="address" label="Address line" />
                  </div>
                  
            <input required placeholder="E-mail" name="email" label="Email" />
            <input required placeholder="City" name="city" label="City" />
            <input required placeholder="State" name="state" label="state" />
            <input required placeholder="Zip Code" name="zip" label="Zip / Postal code" />
            <input required placeholder="Country" name="Country" label="Country" />
          </Grid>
          <br />
          {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} variant="outlined" to="/cart">Back to Cart</Button>
            <Button type="submit" variant="contained" color="primary">Next</Button>
          </div> */}
        </form>
      {/* </FormProvider> */}
    </>
  );
};

export default AddressForm;