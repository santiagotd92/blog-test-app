export const getPosts = async () => {
    const url = `https://dummyapi.io/data/v1/post`;
    const resp = await fetch(url,{headers:{'app-id':'666b8b5ced7325105a3f772b'}})
    ;
    const data = await resp.json();

    const posts = data;

    /* console.log(posts.data.id) */
  
     /* const posts = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
      }))  */


         return posts;
  }