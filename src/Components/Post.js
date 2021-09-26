import React from "react";
import "boxicons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export const Post = ({ posts }) => {
  return (
    <div className="list-group mb-4">
      {posts.map((post) => (
        <>
          <div className="container my-6">
            <div className="card my-2">
              <img
                src={
                  !post.thumbnail_image
                    ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
                    : post.thumbnail_image
                }
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  {post.event_name ? post.event_name : "Unknown"}{" "}
                </h5>
                <p className="card-text">
                  {post.event_date ? post.event_date : "Unknown"}
                </p>
              </div>
              <div
                className="card-body information"
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <div style={{ paddingBottom: "20px" }}>
                  <Tippy content="Views">
                    <p className="card-text">
                      <i className="bx bxs-user"></i>:{" "}
                      {post.views ? post.views : "Unknown"}
                    </p>
                  </Tippy>
                </div>
                <div style={{ paddingBottom: "20px" }}>
                  <Tippy content="Likes">
                    <p className="card-text">
                      <i className="bx bxs-like"></i>:{" "}
                      {post.likes ? post.likes : "Unknown"}
                    </p>
                  </Tippy>
                </div>
                <div style={{ paddingBottom: "20px" }}>
                  <Tippy content="Shares">
                    <p className="card-text">
                      <i className="bx bxs-share"></i>:{" "}
                      {post.shares ? post.shares : "Unknown"}
                    </p>
                  </Tippy>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};
