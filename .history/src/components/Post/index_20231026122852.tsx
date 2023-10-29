function Post({ workstitle, overview, slidedata }) {
    let { file, description } = slidedata

    return (
        <div className="post">
            <img alt={description} src={`https:${file.url}`} />
            <div className="description">{description}</div>
            <div className="text">
                <h2>{title}</h2>
                <h3>{date.substring(0, 10)}</h3>
            </div>
        </div>
    )
}

export default Post