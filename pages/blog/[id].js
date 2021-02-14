import Link from 'next/link';
import Header from '../../components/header.js'

export default function BlogId({ blog }) {
  return (
    <div>
      <Header />
      <main>
        <h3>{blog.title}</h3>
        <p className='blog_publishedAt'>{blog.publishedAt.substr(0, 10)}</p>
        <div className='blog_body'
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        />
        <Link href="/">
          <a className='home_link'>{'<< 戻る'}</a>
        </Link>
      </main>
    </div>
  );
}

// 静的生成のためのパスを指定
export const getStaticPaths = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  const data = await fetch('https://e2blog.microcms.io/api/v1/blog', key)
    .then(res => res.json())
    .catch(() => null);
  const paths = data.contents.map(content => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述
export const getStaticProps = async context => {
  const id = context.params.id;
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  const data = await fetch(
    'https://e2blog.microcms.io/api/v1/blog/' + id,
    key,
  )
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data,
    },
  };
};