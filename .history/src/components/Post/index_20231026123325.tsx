function Post({ workstitle, overview, slidedata }) {
    let { file, description } = slidedata

    return (
        <div className="post">
            <img alt={workstitle} src={`https:${file.url}`} />
            <div className="description">{workstitle}</div>
            <div className="text">
                <h2>{workstitle}</h2>
                <h3>{overview}</h3>
            </div>
        </div>
    )
}

export default Post