import '../App.css';

const Article = (props) => {
  return (
  <div className="articleBox">
    <Category category={props.category}/>
    <Img img={props.img}/>
    <Title title={props.title}/>
    <Story story={props.story}/>
  </div>);
};

export const Category = (props) => {
    return <h3>{props.category} </h3>;
  };

export const Img = (props) => {
    return  <div>
    <a><img src={props.img}></img></a>
    </div>
};

export const Title = (props) => {
    return <h1 className="title" >{props.title}</h1>;
  };

export const Story = (props) => {
    return <p>{props.story}</p>;
  };
  
export default Article;