let post;

const apiplaceholder = async () => {
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    if(!response.ok){
      throw new Error(`Erro HTTP! Status: ${response.status}`);
    }

    post = await response.json();
    return post;
  } catch(err : unknown) {
    console.error("Erro ao carregar os usuários:", err);
  } finally{
    console.log("Concluiddo")
  }
  
} 

apiplaceholder();

export default post;