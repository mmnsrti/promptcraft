import Feed from "@components/Feed";

export default function Home() {
  const TITLE = "Welcome to";
  const DESCRIPTION =
    "Welcome to PromptCraft – your creative AI prompt platform! PromptCraft allows you to effortlessly create, share, like, and use prompts for AI projects. Whether you're an artist, writer, or AI enthusiast, our platform is your gateway to unleashing the power of creative AI.";

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        {TITLE}
        <br className="max-lg:hidden" />
        <span className="orange_gradient text-center">Prompt Craft</span>
      </h1>
      <p className="desc text-center">{DESCRIPTION}</p>
      <Feed />
    </section>
  );
}
