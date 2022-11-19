import { withAuth } from "@HOC/withAuth";
import { GetServerSideProps } from "next";
import AppLayout from "src/layout/AppLayout";



export function HomePage() {

  return (
    <AppLayout className="">
     <h1>hello world</h1>
    </AppLayout>
  );
}
export const getServerSideProps: GetServerSideProps = withAuth(async () => {
  return {
    props: {},
  };
});
export default HomePage

