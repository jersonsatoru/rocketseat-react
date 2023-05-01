export function Post(props) {
    const { title, description } = props;

    return (
        <div>
            <div>{title}</div>
            <div>{description}</div>
        </div>
    )
}