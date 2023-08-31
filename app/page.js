import Feed from '@components/Feed'


export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover
        <br className="max-lg:hidden" />
        <span className="orange_gradient text-center">Ai Powered Prompt</span>
      </h1>
      <p className="desc text-center">
        Ai Powered Prompt is a prompt generator powered by AI. It is a
        collaborative project to build a prompt generator that can be used by
        anyone.
      </p>
      <Feed/>

    </section>
  );
}
