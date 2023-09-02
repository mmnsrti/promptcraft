import Link from "next/link";
const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className=" blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md ">
        {type} your imagination and share incredible prompts with the world,
        exploring limitless possibilities on our AI-powered platform
      </p>
      <form
        className="mt-10  w-full max-w-2xl flex flex-col gap-7 glassmorphism"
        onSubmit={handleSubmit}
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            {type} your prompt
          </span>
          <textarea
            className="form_textarea"
            value={post.prompt}
            onChange={(e) => {
              setPost({ ...post, prompt: e.target.value });
            }}
            placeholder="Enter your prompt here"
            required
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag
          </span>
          <input
            className="form_input"
            value={post.tag}
            onChange={(e) => {
              setPost({ ...post, tag: e.target.value });
            }}
            placeholder="please separate your tags with , like product,webdevelopment,idea"
            required
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-5">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-2 text-sm bg-primary-orange rounded-full text-white border border-primary-orange cursor-pointer focus:outline-none focus:ring focus:border-primary-orange transition hover:bg-orange-500"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
