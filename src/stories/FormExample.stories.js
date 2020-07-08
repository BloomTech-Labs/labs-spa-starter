import React from 'react';
import { FormInput, FormButton } from '../components/common';

export default { title: 'Form Example' };

export const formExample = () => {
  return (
    <form>
      <FormInput />
      <FormButton />
    </form>
  );
};
