import hornedBeasts from "../consts/hornedBeast.json";

const HornedBeast = (props) => {
    return (
        <>
            <article>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <img alt={props.title} src={props.image_url} />
                <p>{props.description}</p>
            </article>
        </>
    );
};

const Gallery = () => {
    return (
        <>
            <HornedBeast
                title="Alex"
                description="tengo 28"
                image_url="https://placehold.co/200x200"
            />
            <HornedBeast
                title="Bruno"
                description="tengo 33"
                image_url="https://placehold.co/200x200"
            />

            {hornedBeasts.map((hornedBeast) => (
                <HornedBeast
                    key={hornedBeast._id}
                    title={hornedBeast.title}
                    image_url={hornedBeast.image_url}
                    description={hornedBeast.description}
                />
            ))}
        </>
    );
};

export default Gallery;
