import { GetServerSideProps } from 'next';

interface PageProps {
  data: string; // Replace `string` with the actual type of `data` from your API
}

const Page: React.FC<PageProps> = ({ data }) => (
  <div>
    <h1>Data from SSR: {data}</h1>
  </div>
);

// Server-side rendering
export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return { props: { data } };
};

export default Page;


//  import { GetStaticProps } from 'next';
//  const Page = ({ data }) => (
//  <div>
//  <h1>Data from SSG: {data}</h1>
//  </div>
//  );
//  // Static site generation at build time
//  export const getStaticProps: GetStaticProps = async () => {
//  const res = await fetch('https://api.example.com/data');
//  const data = await res.json();
//  return { props: { data } };
//  };
//  export default Page;
