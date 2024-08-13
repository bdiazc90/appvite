import beast from "../consts/hornedBeast.json"

const HornedBeast = (props) => {
    return (
        <>
            <article >
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <img key={props.id} alt={props.title} src={props.image_url} />
                <p>{props.description}</p>
            </article>
        </>
    );
}

const Gallery = () => {
    return (
        <>
            <HornedBeast title="Alex" description="tengo 28" image_url="https://placehold.co/200x200" />
            <HornedBeast title="Bruno" description="tengo 33" image_url="https://placehold.co/200x200" />
        
            {beast.map(data => (
                <div key={data._id}>
                    <HornedBeast title={data.title} image_url={data.image_url} description={data.description} />
                </div>
            ))
            }
        </>
    );
}

export default Gallery;