

const HornedBeast = (props) => {
    return (
        <article>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <img src={props.imageUrl} alt={props.title} />
        </article>
    )
}

const Gallery = () => {
    return (
        <>
            <HornedBeast title="Alex" description="tengo 28" imageUrl="https://placehold.co/200x200" />
            <HornedBeast title="Bruno" description="tengo 33" imageUrl="https://placehold.co/200x200" />
        </>
    )
}

export default Gallery;