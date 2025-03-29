import { useState } from "react";
import formatNumber from "../../helpers/formatingHelper";
import IBlogPost from "../../interfaces/IBlogPost";
import ToggleButton from "../ToggleButton/ToggleButton";



interface IBlogPostProps{
    blog: IBlogPost;
    index: number;
}

const BlogPost = ({blog,index}:IBlogPostProps) => {
    const [open,setOpen] = useState(false);

    return (
      <div>
          <div key={blog.id} className="bg-[#F1F1F1] mb-4 rounded-md p-4">
            <div className="text-[#242424] flex flex-row items-center justify-between w-full">
                <span className="flex items-center">
                     <span className="text-[24px] mr-2" data-testid="id">
                        { formatNumber(index+1) }
                    </span>
                    <span className="text-[18px] font-semibold" data-testid="title">
                        {blog.title}
                    </span>
                </span>
               
                <span>
                     <ToggleButton open={open} setOpen={setOpen}></ToggleButton>
                </span>
            </div>
            {open && <p className="text-[16px] text-[#656565]"  data-testid="body">{blog.body}</p>}
          </div>
    </div>
    );
  };
  export default BlogPost;