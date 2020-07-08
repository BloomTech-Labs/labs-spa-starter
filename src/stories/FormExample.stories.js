import React from 'react';
import { FormInput, FormButton } from '../components/common';

export default { title: 'Form Example' };

export const formExample = () => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <FormInput placeholder="Email" name="email" labelId="User Email" />
      <FormButton buttonText="Submit" classType="default" disabled={false} />
    </form>
  );
};
