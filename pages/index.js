import Link from 'next/link';
import Header from '../components/header.js'

export default function Home({ blog }) {
  return (
    <div>
      <Header />
      <main>
        <ul className='blog'>
          {blog.map(blog => (
            <li key={blog.id}>
              <div className='card'>
                <h3 className='card_title'>{blog.title}</h3>
                <p className='card_publishedAt'>{blog.publishedAt.substr(0, 10)}</p>
                <Link href={`blog/${blog.id}`}>
                  <a className='card_text_link'>{'読む >>'}</a>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}


// データをテンプレートに受け渡す部分の処理
export const getStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  const data = await fetch('https://e2blog.microcms.io/api/v1/blog', key)
    .then(res => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data.contents,
    },
  };
};