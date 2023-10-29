function Post({ workstitle, overview, slidedata }) {

    return (
        <div className="postData">
            <img alt={workstitle} src={`https:${slidedata.file}`} />
            <div className="description">{workstitle}</div>
            <div className="text">
                <h2>{workstitle}</h2>
                <h3>{overview}</h3>
                <h4>{slidedata}</h4>
            </div>
        </div>
    )
}

export default Post