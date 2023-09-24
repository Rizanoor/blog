import { useState, useEffect } from "react";


export default function Blog() {
    const [externalPosts, setExternalPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((json) => setExternalPosts(json))
    }, []);

    return (
        <>
            <h2>My Blog Posts</h2>
            {externalPosts.map((item, index) => (
                <div key={index}>- {item.title}</div>
            ))}
        </>
    )
}
