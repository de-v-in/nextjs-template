'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const ProgressBarClient: IComponent = () => {
  return (
    <>
      <ProgressBar height="4px" color="#004949" options={{ showSpinner: false }} shallowRouting />
    </>
  );
};

export default ProgressBarClient;
