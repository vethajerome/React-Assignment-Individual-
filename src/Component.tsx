import { useState } from "react";

export default function Component()
{
    let [count,setcount]=useState(0);
    function Button()
    {
        setcount(count+1);
         
    }
    return(
        <>
        {count%2==0?<div><img src="https://www.cobrandrewtate.com/wp-content/uploads/2023/08/Social-media-personality-Tristan-Tate.jpg" width="300px" height="300px"></img></div>:<div><img src="https://cdn-wp.thesportsrush.com/2023/04/9b29629e-untitled-design-2023-04-19t112058.305.jpg" width="300px" height="300px"></img></div>}
        <button onClick={Button}>Real World</button>
        </>
    )
}