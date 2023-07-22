import PromptCard from "./PromptCard";

const Profile = ({ name, data, handleEdit, handleDelete }) => {
  return (
  <section className="w-full">
    <h1 className="head_text text-left">
    <span className="blue_gradient">

      {name}Profile
    </span>
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((post) => (
        <PromptCard key={post._id} post={post} handleEdit={()=>handleEdit&&handleEdit(post)}  handleDelete={()=>handleDelete&&handleDelete(post)} />
      ))}
    </div>
  </section>);
};

export default Profile;
