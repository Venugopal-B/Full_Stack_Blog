
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const Home = () => {

  const [posts, setPosts] = useState([]);

  const cat =useLocation().search

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/posts${cat}`)
        setPosts(res.data);

      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  },[cat]);
  // const posts=[
  //   {
  //     id:1,
  //     title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet felis non nisl tempor.",
  //     desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt id felis iaculis cursus. Donec efficitur magna a nulla placerat pharetra. Nullam libero quam, cursus quis commodo vitae, congue vitae felis. Mauris et felis purus. Suspendisse cursus ultricies sem ac faucibus. Praesent pharetra, ex ut hendrerit malesuada, urna velit auctor lacus, et sollicitudin ex tellus sed risus. In ac varius mauris. Donec sed nunc eget dolor semper sollicitudin hendrerit eu justo. Maecenas auctor lorem turpis. Nam sapien enim, dapibus ac odio non, faucibus porttitor felis. Phasellus id interdum ipsum. Vestibulum suscipit varius quam, vel cursus lectus interdum in. Etiam nisi.",
  //     img:"https://images.pexels.com/photos/6156993/pexels-photo-6156993.jpeg?auto=compress&cs=tinysrgb&w=600"
  //   },
  //   {
  //     id:2,
  //     title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet felis non nisl tempor.",
  //     desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt id felis iaculis cursus. Donec efficitur magna a nulla placerat pharetra. Nullam libero quam, cursus quis commodo vitae, congue vitae felis. Mauris et felis purus. Suspendisse cursus ultricies sem ac faucibus. Praesent pharetra, ex ut hendrerit malesuada, urna velit auctor lacus, et sollicitudin ex tellus sed risus. In ac varius mauris. Donec sed nunc eget dolor semper sollicitudin hendrerit eu justo. Maecenas auctor lorem turpis. Nam sapien enim, dapibus ac odio non, faucibus porttitor felis. Phasellus id interdum ipsum. Vestibulum suscipit varius quam, vel cursus lectus interdum in. Etiam nisi.",
  //     img:"https://images.pexels.com/photos/6156993/pexels-photo-6156993.jpeg?auto=compress&cs=tinysrgb&w=600"
  //   },
  //   {
  //     id:3,
  //     title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet felis non nisl tempor.",
  //     desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt id felis iaculis cursus. Donec efficitur magna a nulla placerat pharetra. Nullam libero quam, cursus quis commodo vitae, congue vitae felis. Mauris et felis purus. Suspendisse cursus ultricies sem ac faucibus. Praesent pharetra, ex ut hendrerit malesuada, urna velit auctor lacus, et sollicitudin ex tellus sed risus. In ac varius mauris. Donec sed nunc eget dolor semper sollicitudin hendrerit eu justo. Maecenas auctor lorem turpis. Nam sapien enim, dapibus ac odio non, faucibus porttitor felis. Phasellus id interdum ipsum. Vestibulum suscipit varius quam, vel cursus lectus interdum in. Etiam nisi.",
  //     img:"https://images.pexels.com/photos/6156993/pexels-photo-6156993.jpeg?auto=compress&cs=tinysrgb&w=600"
  //   },
  //   {
  //     id:4,
  //     title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet felis non nisl tempor.",
  //     desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt id felis iaculis cursus. Donec efficitur magna a nulla placerat pharetra. Nullam libero quam, cursus quis commodo vitae, congue vitae felis. Mauris et felis purus. Suspendisse cursus ultricies sem ac faucibus. Praesent pharetra, ex ut hendrerit malesuada, urna velit auctor lacus, et sollicitudin ex tellus sed risus. In ac varius mauris. Donec sed nunc eget dolor semper sollicitudin hendrerit eu justo. Maecenas auctor lorem turpis. Nam sapien enim, dapibus ac odio non, faucibus porttitor felis. Phasellus id interdum ipsum. Vestibulum suscipit varius quam, vel cursus lectus interdum in. Etiam nisi.",
  //     img:"https://images.pexels.com/photos/6156993/pexels-photo-6156993.jpeg?auto=compress&cs=tinysrgb&w=600"
  //   },
  // ]

  const getText=(html)=>{
    const doc =new DOMParser().parseFromString(html,"text/html")
    return doc.body.textContent
  }
  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post => (
          <div className='post' key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
            <p>{getText(post.descp)}</p>
              <button>Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home