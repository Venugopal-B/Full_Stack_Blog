import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Menu = ({cat}) => {

    const [posts, setPosts] = useState([]);

  
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`http://localhost:8800/api/posts/?cat=${cat}`,
          { withCredentials: true,})
          setPosts(res.data);
  
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    },[cat]);

    // const posts = [
    //     {
    //         id: 1,
    //         title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet felis non nisl tempor.",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt id felis iaculis cursus. Donec efficitur magna a nulla placerat pharetra. Nullam libero quam, cursus quis commodo vitae, congue vitae felis. Mauris et felis purus. Suspendisse cursus ultricies sem ac faucibus. Praesent pharetra, ex ut hendrerit malesuada, urna velit auctor lacus, et sollicitudin ex tellus sed risus. In ac varius mauris. Donec sed nunc eget dolor semper sollicitudin hendrerit eu justo. Maecenas auctor lorem turpis. Nam sapien enim, dapibus ac odio non, faucibus porttitor felis. Phasellus id interdum ipsum. Vestibulum suscipit varius quam, vel cursus lectus interdum in. Etiam nisi.",
    //         img: "https://images.pexels.com/photos/6156993/pexels-photo-6156993.jpeg?auto=compress&cs=tinysrgb&w=600"
    //     },
    //     {
    //         id: 2,
    //         title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet felis non nisl tempor.",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt id felis iaculis cursus. Donec efficitur magna a nulla placerat pharetra. Nullam libero quam, cursus quis commodo vitae, congue vitae felis. Mauris et felis purus. Suspendisse cursus ultricies sem ac faucibus. Praesent pharetra, ex ut hendrerit malesuada, urna velit auctor lacus, et sollicitudin ex tellus sed risus. In ac varius mauris. Donec sed nunc eget dolor semper sollicitudin hendrerit eu justo. Maecenas auctor lorem turpis. Nam sapien enim, dapibus ac odio non, faucibus porttitor felis. Phasellus id interdum ipsum. Vestibulum suscipit varius quam, vel cursus lectus interdum in. Etiam nisi.",
    //         img: "https://images.pexels.com/photos/6156993/pexels-photo-6156993.jpeg?auto=compress&cs=tinysrgb&w=600"
    //     },
    //     {
    //         id: 3,
    //         title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet felis non nisl tempor.",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt id felis iaculis cursus. Donec efficitur magna a nulla placerat pharetra. Nullam libero quam, cursus quis commodo vitae, congue vitae felis. Mauris et felis purus. Suspendisse cursus ultricies sem ac faucibus. Praesent pharetra, ex ut hendrerit malesuada, urna velit auctor lacus, et sollicitudin ex tellus sed risus. In ac varius mauris. Donec sed nunc eget dolor semper sollicitudin hendrerit eu justo. Maecenas auctor lorem turpis. Nam sapien enim, dapibus ac odio non, faucibus porttitor felis. Phasellus id interdum ipsum. Vestibulum suscipit varius quam, vel cursus lectus interdum in. Etiam nisi.",
    //         img: "https://images.pexels.com/photos/6156993/pexels-photo-6156993.jpeg?auto=compress&cs=tinysrgb&w=600"
    //     },
    //     {
    //         id: 4,
    //         title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet felis non nisl tempor.",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt id felis iaculis cursus. Donec efficitur magna a nulla placerat pharetra. Nullam libero quam, cursus quis commodo vitae, congue vitae felis. Mauris et felis purus. Suspendisse cursus ultricies sem ac faucibus. Praesent pharetra, ex ut hendrerit malesuada, urna velit auctor lacus, et sollicitudin ex tellus sed risus. In ac varius mauris. Donec sed nunc eget dolor semper sollicitudin hendrerit eu justo. Maecenas auctor lorem turpis. Nam sapien enim, dapibus ac odio non, faucibus porttitor felis. Phasellus id interdum ipsum. Vestibulum suscipit varius quam, vel cursus lectus interdum in. Etiam nisi.",
    //         img: "https://images.pexels.com/photos/6156993/pexels-photo-6156993.jpeg?auto=compress&cs=tinysrgb&w=600"
    //     },
    // ];
    return (
        <div className='menu'>
            <h1>Other posts you may like</h1>
            {posts.map((post) => (
                <div className="post" key={post.id}>
                    <img src={`../upload/${post?.img}`} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read more</button>
                </div>
            ))}
        </div>
    )
}

export default Menu;