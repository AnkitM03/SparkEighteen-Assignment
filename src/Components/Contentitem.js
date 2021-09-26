// import React from "react";

// export default function Contentitem(props) {
//   let { thumbnail_image, event_name, event_date, views, likes, shares } = props;
//   return (
//     <div className="my-5">
//       <div className="card">
//         <img
//           src={
//             !thumbnail_image
//               ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
//               : thumbnail_image
//           }
//           className="card-img-top"
//           alt="..."
//         />
//         <div className="card-body">
//           <h5 className="card-title">{event_name} </h5>
//           <p className="card-text">{event_date}</p>
//         </div>
//         <div
//           className="card-body"
//           style={{ display: "flex", justifyContent: "space-evenly" }}
//         >
//           <p className="card-text">Views: {views}</p>
//           <p className="card-text">Likes: {likes}</p>
//           <p className="card-text">Shares: {shares}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
