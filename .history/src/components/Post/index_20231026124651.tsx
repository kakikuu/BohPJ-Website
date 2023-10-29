function Post({ workstitle, overview, slidedata }) {

    return (
        <div className="postData">
            <img alt={workstitle} src={`https:${file.url}`} />
            <div className="description">{workstitle}</div>
            <div className="text">
                <h2>{workstitle}</h2>
                <h3>{overview}</h3>
                <p>{slidedata}</p>
            </div>
        </div>
    )
}

export default Post