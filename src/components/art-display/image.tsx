import classes from './image.module.css'

// We describe the properties of our component here
interface ImageProps {
    src: string;
    caption: string;
}

// The actual component
export default function Image (props: ImageProps) {
    return (
        <div className={classes.image}>
            <img src={props.src} alt={props.caption} />
            <p>{props.caption}</p>
        </div>
    );
}
