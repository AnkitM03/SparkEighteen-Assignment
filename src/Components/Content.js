import React, { useState } from "react";
import { Pagination } from "./Pagination";
import { Post } from "./Post";
import Data from "./sampleoutput.json";

const Content = (props) => {
  const [posts, setPosts] = useState(Data);
  const [currentpage, setCurrentpage] = useState(1);
  const [postPerPage] = useState(2);

  const indexofLastPost = currentpage * postPerPage;
  const indexofFirstPost = indexofLastPost - postPerPage;
  const currentPosts = posts.slice(indexofFirstPost, indexofLastPost);

  if (props.mode === "light") {
    document.body.style.backgroundColor = "#D57E7E";
  }
  const paginate = (pageNumber) => {
    setCurrentpage(pageNumber);
  };

  const sortbyFunc = (type) => {
    if (type === "Likes") {
      posts.sort((a, b) => a.likes < b.likes);
    }
    if (type === "Views") {
      posts.sort((a, b) => a.views < b.views);
    }
    if (type === "Shares") {
      posts.sort((a, b) => a.shares < b.shares);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          {/* {Data.map((element) => {
            return (
              <div className="col-md-8 container" key={element.id}>
                <Contentitem
                  event_name={element.event_name ? element.event_name : ""}
                  event_date={element.event_date ? element.event_date : ""}
                  thumbnail_image={element.thumbnail_image}
                  views={element.views}
                  likes={element.likes}
                  shares={element.shares}
                />
              </div>
            );
          })} */}
          <div className="container posts">
            <div>
              <h1>POSTS</h1>
            </div>
            <div>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => {
                  const sortby = e.target.value;
                  sortbyFunc(sortby);
                  console.log(sortby);
                }}
              >
                <option selected disabled value="Sort_by">
                  Sort by
                </option>
                <option value="Likes">Likes</option>
                <option value="Views">Views</option>

                <option value="Shares">Shares</option>
              </select>
            </div>
          </div>

          <Post posts={currentPosts} />
        </div>
      </div>
      <Pagination
        postPerPage={postPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </>
  );
};

export default Content;
