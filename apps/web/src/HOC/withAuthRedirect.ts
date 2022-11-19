/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetServerSidePropsContext } from 'next';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const withAuthRedirect =
  (gssp: any) => async (context: GetServerSidePropsContext) => {
    const { req } = context;

    const token = req.cookies['twitter_sid'];

    if (!token) {
      return { ...(await gssp(context)) };
    } else {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
  };
