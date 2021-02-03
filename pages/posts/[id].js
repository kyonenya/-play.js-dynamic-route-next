import Link from 'next/link'

export default function Post({ text }) {
  return (
    <>
      <h2>{text}</h2>
      <Link href="/"><a>Back to Home</a></Link>
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
    ],
    fallback: false,
  }
}

export function getStaticProps({ params }) {
  return {
    props: {
      text: `this is the post id: ${params.id}`
    }
  }
}
