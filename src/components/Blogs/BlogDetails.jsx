import { useLoaderData, useParams } from "react-router-dom";

const BlogDetails = () => {
  const blogs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const blog = blogs.find((blog) => blog.id === idInt);
  console.log(blog, " Blogs");

  const { title, image, author, date, description } = blog;
  return (
    <div className="w-11/12 mx-auto py-12 block lg:grid lg:grid-cols-12 gap-5">
      <div className="col-span-8 space-y-5">
        <h1 className="text-3xl font-bold">{title}</h1>
        <img
          src={image}
          alt={title}
          className="w-full h-80 object-cover object-top mt-4 rounded-lg"
        />
        <div className="sm:w-4/12 flex items-center">
         
          <div className="text-xs">
           <p>{author}</p>
            <p className="text-gray-600 text-xs">{date}</p>
          </div>
        </div>
        <p className="mt-4 text-gray-600 text-justify">{description}</p>
      </div>

      <div className="col-span-4"></div>
    </div>
  );
};

export default BlogDetails;
